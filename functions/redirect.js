exports.handler = async event => {
  var afterLoad = require('after-load');
  // var meta = document.createElement('meta');
  // meta.property = "og:title";
  // meta.content = "The guy reached for the headphones and saw a small animal in them (photos)";
  // document.getElementsByTagName('head')[0].appendChild(meta);

  if (event.queryStringParameters.fbclid) {
    return {
      statusCode: 301,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
        location: decodeURIComponent(event.queryStringParameters.url)
      }
    }
  } else {
    afterLoad(event.queryStringParameters.url, (html) => {
      return {
        statusCode: 200,
        headers: {
          'cache-control': 'no-cache',
          'content-type': 'text/html; charset=utf-8'
          // location: 'http://netlify.asargsyan.ru/' + decodeURIComponent(event.queryStringParameters.url).split('/')[3] + '/'
          // location: 'http://netlify.asargsyan.ru?event=' + JSON.stringify(getServerAttr)
        },
        body: html
      }
    })
  }
}