const assert = require('assert');
const {defineSupportCode} = require('cucumber');

const AWS = require('aws-sdk');
AWS.config.update({region: 'eu-central-1'});

defineSupportCode(({Given, Then, When}) => {
    let lat;
    let lng;
    let start;
    let end;
    let stats;
    Given('I have location {string} and period from {string} to {string}', (string, string2, string3) => {
        lat = string.split(',')[0];
        lng = string.split(',')[1];
        start = string2;
        end = string3;
    });

    When('I invoke weather lambda', () => {
        const lambda = new AWS.Lambda();
        const params = {
            FunctionName: 'weather-dev-main',
            InvocationType: 'RequestResponse',
            Payload: JSON.stringify({
                lat,
                lng,
                start,
                end
            })
        };
        return new Promise((resolve, reject) => {
            lambda.invoke(params, (error, data) => {
                if (error) {
                    reject(error);
                } else {
                    const {Payload} = data;
                    stats = JSON.parse(Payload);
                    resolve(JSON.parse(Payload));
                }
            });
        });
    });

    Then('I get t-SNE ready weather data', () => {
        assert(stats.some(stat => Array.isArray(stat)), "ERROR: weather data is not properly formatted");
    });
});