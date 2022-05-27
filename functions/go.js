const axios = require('axios');

exports.handler = async event => {
  const url = `https://mondeanimalinteressant.com${event.queryStringParameters.url}`

  const isFromFb = event.multiValueHeaders.Referer && event.multiValueHeaders.Referer.some(item => item.includes('facebook'))

  if (event.queryStringParameters.fbclid || isFromFb) {
    return {
      statusCode: 301,
      headers: {
        'cache-control': 'no-cache',
        location: decodeURIComponent(url.split('?')[0])
      }
    }
  } else {
    return axios({
      method: "get",
      url,
    })
      .then((response) => {
        return {
          statusCode: 200,
          body: JSON.stringify(event)
        };
      })
      .catch((error) => {
        console.log(error);
        return {
          statusCode: 500,
          body: JSON.stringify(error.message),
        };
      });
  }
}