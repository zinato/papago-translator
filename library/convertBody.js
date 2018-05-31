var successCode = 0;

module.exports = function response(body) {
  let result;
  if (Object.prototype.hasOwnProperty.call(body, 'message')) {
    result = {
      code: successCode,
      translatedText: body.message.result.translatedText,
      source: body.message.result.srcLangType,
    };
  } else {
    result = {
      code: body.errorCode,
      translatedText: body.errorMessage,
      source: '',
    };
  }
  return result;
};
