exports.handler = async event => {
  if (event.queryStringParameters.fbclid) {
    return {
      statusCode: 301,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
        location: decodeURIComponent(event.queryStringParameters.url)
      }
    }
  } else {
    console.log('event', event)
    return {
      statusCode: 301,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
        // location: 'http://netlify.asargsyan.ru/' + decodeURIComponent(event.queryStringParameters.url).split('/')[3] + '/'
        location: 'http://netlify.asargsyan.ru?event=' + event
      }
    }
  }
}