const axios = require('axios');

exports.handler = async event => {
  const url = `https://mondeanimalinteressant.com${event.queryStringParameters.url}`

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
          // body: response.data,
          body: `<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>test etearaetaetea taet ae e</title>
</head>
<body>
queryStringParameters.url - ${event.queryStringParameters.url} <br><br>
url -${url}
</body>
</html>`
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