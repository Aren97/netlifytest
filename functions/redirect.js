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
          body: `<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>${decodeURIComponent(event.queryStringParameters.url.split('?')[0])}</title>
</head>
<body>

</body>
</html>`
        };
      });
  }
}