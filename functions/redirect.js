const getServerSideProps = async () => {
  // Fetch data from external API
  const res = await fetch('http://netlify.asargsyan.ru/2022/02/08/test-1/?url=2022%2F02%2F08%2Ftest-1%2F')
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

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
    try {
      console.log('event', await getServerSideProps())
    } catch (e) {
      console.log('error:', e)
    }

    return {
      statusCode: 301,
      headers: {
        'cache-control': 'public, max-age=0, must-revalidate',
        // location: 'http://netlify.asargsyan.ru/' + decodeURIComponent(event.queryStringParameters.url).split('/')[3] + '/'
        location: 'http://netlify.asargsyan.ru?event=' + JSON.stringify(event)
      }
    }
  }
}