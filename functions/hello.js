exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'heropy',
      age: 85,
      email: 'thecosne@gmail.com'
    })
  }
}