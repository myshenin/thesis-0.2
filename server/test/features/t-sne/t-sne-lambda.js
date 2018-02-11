const assert = require('assert');
const {defineSupportCode} = require('cucumber');

const AWS = require('aws-sdk');
AWS.config.update({region: 'eu-central-1'});

let multidimensionalData;
let responseFromTSNE;
defineSupportCode(({Given, Then, When}) => {
    Given('I have a multidimensional data', () => {
        multidimensionalData = [
            [0, 0, 0], [3, 4, 0], [3, 0, 4], [0, 4, 3],
            [50, 50, 50], [58, 44, 0]
        ];
    });

    When('I invoke the t-SNE implementing lambda', () => {
        const lambda = new AWS.Lambda();
        const params = {
            FunctionName: 'thesis-tsne-dev-t-sne',
            InvocationType: 'RequestResponse',
            Payload: JSON.stringify({
                data: multidimensionalData,
                dim: 2,
                perplexity: 30.0,
                earlyExaggeration: 4.0,
                learningRate: 100.0,
                nIter: 1000,
                metric: 'euclidean'
            })
        };
        return new Promise((resolve, reject) => {
            lambda.invoke(params, (error, data) => {
                if (error) {
                    reject(error);
                } else {
                    const {Payload} = data;
                    responseFromTSNE = JSON.parse(Payload);
                    resolve(JSON.parse(Payload));
                }
            });
        });
    });

    Then('I get a response', () => {
        assert(responseFromTSNE, "ERROR: Response is not received");
        assert(Array.isArray(responseFromTSNE), "ERROR: Response is not an array of data " + JSON.stringify(responseFromTSNE));
    });

    Then('Response has 2-dimensional data', () => {
        assert(!responseFromTSNE.some(item => item.length !== 2), "ERROR: There are non 2-dimensional data")
    });
});
