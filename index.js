var moment = require('moment');
exports.handler = (event, context, callback) => {
    callback(null, {
        statusCode: '200',
        body: 'The time is: ' + moment().format('LLLL'),
    });
};