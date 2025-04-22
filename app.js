const http = require('http');

const userRequestHandler =  require('./user')

const server = http.createServer(userRequestHandler)

const PORT = 8000;
server.listen(PORT, ()=>{
  console.log(`listening to the server at port ${PORT}`);
  
})