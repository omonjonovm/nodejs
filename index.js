const http = require('http')
const server = http.createServer((request,response) => {
  // request - serverga so'rov 
  // response - server javobi
  console.log(request.url);
  response.write('<h1>Hello World</h1>')
  response.end()
})
server.listen(3000,() => {
  console.log('started on port:3000');
})