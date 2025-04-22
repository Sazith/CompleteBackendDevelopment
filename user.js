
const fs = require('fs')

const requestHandler = (req,res) => {
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

    const body = []
    req.on('data',(chunk) => {
      console.log(chunk);
      body.push(chunk);
      
    });
    req.on('end',()=>{
      const fullBody = Buffer.concat(body).toString()
      console.log(fullBody);

      const params = new URLSearchParams(fullBody)
      // const bodyObject = {}
      // for(const [key, val] of params.entries()){
      //   bodyObject[key] = val;
      // }
      const bodyObject = Object.fromEntries(params)
      fs.writeFileSync('user.txt',JSON.stringify(bodyObject))
      console.log(bodyObject);
      
      
    })
    

    // fs.writeFileSync('user.txt','Sazith Shyonton')
    res.statusCode = 302;
    res.setHeader('Location','/')
    return res.end();
  }
 
}

module.exports = requestHandler


