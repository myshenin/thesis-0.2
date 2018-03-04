const AWS = require('aws-sdk');
AWS.config.update({region: 'eu-central-1'});

const lambda = new AWS.Lambda();
module.exports.main = ({body}, context, callback) => {
    body = JSON.parse(body);


    Promise.all(
        body.periods
            .map(period => new Promise((resolve, reject) => {
                const params = {
                    FunctionName: 'weather-prod-main',
                    InvocationType: 'RequestResponse',
                    Payload: JSON.stringify({
                        lat: body.location.lat,
                        lng: body.location.lng,
                        start: period.start,
                        end: period.end
                    })
                };

                lambda.invoke(params, (error, data) => {
                    if (error) {
                        reject(error);
                    } else {
                        const {Payload} = data;
                        resolve(JSON.parse(Payload));
                    }
                });
            })))
        .then(weather => {
            return Promise.all(
              weather.map(period => new Promise((resolve, reject) => {
                  const params = {
                      FunctionName: 'tsne-prod-main',
                      InvocationType: 'RequestResponse',
                      Payload: JSON.stringify({
                          data: period,
                          dim: 2,
                          perplexity: 30.0,
                          earlyExaggeration: 4.0,
                          learningRate: 100.0,
                          nIter: 1000,
                          metric: 'euclidean'
                      })
                  };

                  lambda.invoke(params, (error, data) => {
                      if (error) {
                          reject(error);
                      } else {
                          const {Payload} = data;
                          resolve(JSON.parse(Payload));
                      }
                  });
              }))
            );
        })
        .then(result => {
            const response = {
                statusCode: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(result),
            };

            callback(null, response);
        });
};