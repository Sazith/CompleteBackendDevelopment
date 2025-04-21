const http = require('http');
const fs = require('fs')

const server = http.createServer((req,res) => {
  console.log(req.url, req.headers, req.method);
  if(req.url === '/'){
    res.setHeader('Content-type','text/html')
    res.write('<html>')
    res.write('<head><title>Complete Backend Development</title></head>')
    res.write('<body><h1>User Detail Information</h1>')
    res.write('<form action="/submit-detail" method="POST">')
    res.write('<input type="text" name="username" placeholder="Enter your name" /> <br>')
    res.write('<label for="male">Male</label>')
    res.write('<input type="radio" id="male" name="gender" value="male"/>')
    res.write('<label for="female">Female</label>')
    res.write('<input type="radio" id="female" name="gender" value="female"/><br>')
    res.write('<input type="submit" value="Submit"/>')
    res.write('</form>')
    res.write('</body>')
    res.write('</html>')
    return res.end();
  } else if(req.url.toLowerCase() === '/submit-detail' && req.method == 'POST'){
    fs.writeFileSync('user.txt','Sazith Shyonton')
    res.statusCode = 302;
    res.setHeader('Location','/')
    return res.end();
  }
 
  
})

const PORT = 8000;
server.listen(PORT, ()=>{
  console.log(`listening to the server at port ${PORT}`);
  
})