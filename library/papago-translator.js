var client = {},
  convertBody = require('./convertBody');
  rp = require('request-promise'),
  regex = /<string [a-zA-Z0-9=":/.]+>(.*)<\/string>/;

var papagoURI = 'https://naveropenapi.apigw.ntruss.com/nmt/v1/translation';
console.log("11111");
exports.init = function (obj) {
  client.adiKeyId = obj.apiKeyId;
  client.apiKey = obj.apiKey;
  return client;
};

client.parseXHTMLString = function (text) {
  return text.replace(/\\u000a/gi, '\n')
    .replace(/\\/g, '')
    .replace(/"/g, '');
};

client.translate = function (obj, callback) {
  var text = obj.text;
  var source = obj.source;
  var target = obj.target;

  const options = {
    method: 'POST',
    uri: papagoURI,
    form: {
      source: source,
      target: target,
      text: text
    },
    headers: {
      'X-NCP-APIGW-API-KEY-ID': client.adiKeyId,
      'X-NCP-APIGW-API-KEY': client.apiKey,
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    json: true,
  };
  rp(options)
    .then((body, err) => {
      var result = convertBody(body);
      callback(obj, err, {
        translatedText: client.parseXHTMLString(result.translatedText)
      });
    })
    .catch((err) => {
      callback(err.error, null);
    })
};

