const axios = require('axios');

exports.handler = async event => {
  // var meta = document.createElement('meta');
  // meta.property = "og:title";
  // meta.content = "The guy reached for the headphones and saw a small animal in them (photos)";
  // document.getElementsByTagName('head')[0].appendChild(meta);
  const url = `https://mondeanimalinteressant.com/${event.queryStringParameters.url}`

  if (event.queryStringParameters.fbclid) {
    return {
      statusCode: 301,
      headers: {
        'cache-control': 'no-cache',
        location: decodeURIComponent(url)
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
          // body: response.data,
          body: decodeURIComponent(url)
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