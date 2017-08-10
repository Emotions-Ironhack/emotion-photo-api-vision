const { VISION_KEY } = process.env;
const got = require('got');


module.exports = function(urlImage) {
  const url = 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize';

  const options = {
    headers:  {
      'Ocp-Apim-Subscription-Key': VISION_KEY
    },
    body: {
      url: urlImage
    },
    json: true
  };

  return got
    .post(url, options)
    .then(res  => res.body);
};
