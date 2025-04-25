const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use((req, res, next) => {
  console.log("First Dummy Middleware", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("Second Dummy Middleware", req.url, req.method);
  next();
});

// app.use((req, res, next) => {
//   console.log("Third Dummy Middleware", req.url, req.method);
//   res.send("<p>Welcome to Complete Coding NodeJS series</p>");
// });

app.get("/",(req, res, next) => {
  console.log("handling / for GET", req.url, req.method);
  res.send(`<p>Handling GET Method</p>`);
})

app.get("/contact-us",(req, res, next) => {
  console.log("handling / for GET", req.url, req.method);
  res.send(`
    <h1>Please give your details here</h1>
    <form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder="Enter your name"/>
    <input type="email" name="email" placeholder="Enter your email"/>
    <input type="submit" value="Submit"/>
    </form>
    `);
})

app.use(bodyParser.urlencoded());
app.post("/contact-us",(req, res, next) =>{
  console.log("handling /contact-us fot POST", req.url, req.method, req.body);
  res.send(`<h1>Thanks for the detail</h1>`);
  
})


const PORT = 8000;
app.listen(PORT, ()=>{
  console.log(`listening to the server at port ${PORT}`);
  
})