const axios = require('axios');
exports.handler = async event => {
  if (event.queryStringParameters.fbclid) {
    return {
      statusCode: 301,
      headers: {
        'cache-control': 'no-cache',
        location: decodeURIComponent(event.queryStringParameters.url)
      }
    }
  } else {
    return axios({
      method: "get",
      url: event.queryStringParameters.url,
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