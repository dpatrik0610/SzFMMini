const morgan = require('morgan');

const customLogger = morgan((tokens, req, res) => {
  const timestamp = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
  const method = tokens.method(req, res);
  const url = tokens.url(req, res);
  const httpVersion = tokens['http-version'](req, res);
  const status = tokens.status(req, res);
  const userAgent = tokens['user-agent'](req, res);

  return `Status: ${status} | ${timestamp} | ${method} [${url}] | ver: ${httpVersion} | ${userAgent}`;
});

module.exports = customLogger;
