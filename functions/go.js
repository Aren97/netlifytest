const axios = require('axios');
exports.handler = async event => {
  const url = event.queryStringParameters.url

  if (event.queryStringParameters.fbclid) {
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
          body: response.data
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