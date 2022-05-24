exports.handler = async event => {
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
    return {
      statusCode: 301,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
        // location: 'http://netlify.asargsyan.ru/' + decodeURIComponent(event.queryStringParameters.url).split('/')[3] + '/'
        // location: 'http://netlify.asargsyan.ru?event=' + JSON.stringify(getServerAttr)
      },
      body: '<html lang="en">\n' +
        '<head>\n' +
        '  <meta charset="UTF-8">\n' +
        '  <meta name="viewport"\n' +
        '        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">\n' +
        '  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n' +
        '  <title>test etearaetaetea taet ae e</title>\n' +
        '</head>\n' +
        '<body>\n' +
        '\n' +
        '</body>\n' +
        '</html>'
    }
  }
}