exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'miraezzang',
      age: 40,
      email: 'dnl.mgowij@gmail.com'
    })
  }
}