const axios = require('axios');

exports.handler = async event => {
  // var meta = document.createElement('meta');
  // meta.property = "og:title";
  // meta.content = "The guy reached for the headphones and saw a small animal in them (photos)";
  // document.getElementsByTagName('head')[0].appendChild(meta);

  if (event.queryStringParameters.fbclid) {
    return {
      statusCode: 301,
      headers: {
        'cache-control': 'no-cache',
        location: decodeURIComponent(event.queryStringParameters.url.split('?')[0])
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
          body: response.data,
        };
      })
      .catch((error) => {
        console.log(error);
        return {
          statusCode: 500,
          // body: JSON.stringify(error.message),
          body: decodeURIComponent(event.queryStringParameters.url.split('?')[0])
        };
      });
  }
}