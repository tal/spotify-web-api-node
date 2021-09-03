'use strict';

function WebapiError(message, statusCode, response) {
  this.name = 'WebapiError';
  this.message = message || '';
  this.statusCode = statusCode;
  this.response = response;
}

WebapiError.prototype = Error.prototype;

module.exports = WebapiError;
