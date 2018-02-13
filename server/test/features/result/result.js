const assert = require('assert');
const {defineSupportCode} = require('cucumber');

const request = require('request-promise');

const AWS = require('aws-sdk');
AWS.config.update({region: 'eu-central-1'});

defineSupportCode(({Given, Then, When}) => {
    let body;
    let result;
    Given('I inputted {string} and period {string} - {string} and period {string} - {string}',  (string, string2, string3, string4, string5) => {
        body = {
            location: {
                lat: string.split(',')[0],
                lng: string.split(',')[1],
            },
            periods: [[string2, string3], [string4, string5]]
        };
    });

    When('I make an HTTP POST request', () => {
        return request({
            method: 'POST',
            uri: 'https://ypwzyhs2ai.execute-api.eu-central-1.amazonaws.com/dev/weather',
            body,
            json: true
        })
            .then(response => {
                result = response;
            });
    });

    Then('I get a response summary', () => {
        assert(Array.isArray(result) && result.some(period => Array.isArray(period) && period.some(day => Array.isArray(day) && day.some(hour => Array.isArray(hour)))),
            "ERROR: result is not formatted in the proper way");
    });
});