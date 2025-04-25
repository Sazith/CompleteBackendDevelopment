// Core Module
const path = require('path')

// External Module
const express = require('express')
const bodyParser = require('body-parser')

// Local Module
const userRouter = require('./routes/userRouter');
const {hostRouter} = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtil');
// const {registerHome} = require('./routes/hostRouter')

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use((req, res, next) =>{
  console.log(req.url, req.method);
  next()
})

app.use(express.urlencoded());

app.use(userRouter);

// app.get("/",(req, res, next) => {
//   res.send(`
//     <h1>Welcome to Airbnb</h1>
//     <a href="/host/add-home">Add Home</a>
//     `);
// })

app.use("/host",hostRouter);
// app.get("/host/add-home",(req, res, next) => {
//   res.send(`
//     <h1>Register your home here</h1>
//     <form action="/host/add-home" method="POST">
//     <input type="text" name="houseName" placeholder="Enter your house name"/>
//     <input type="submit" value="Submit"/>
//     </form>
//     `);
// })

// app.post("/host/add-home",(req, res, next) => {
//   console.log(req.body);
//   res.send(`
//     <h1>Home Registered Successfully</h1>
//      <a href="/">Go to Home</a>
//     `);
// })

// app.use((req, res, next) =>{
//   res.status(400).send(`<h1>404 Your page is not found in Airbnb</h1>`)
// })
app.use((req, res, next) =>{
//  res.sendFile(path.join(__dirname,'views','404.html'))
 res.sendFile(path.join(rootDir,'views','404.html'))
})

const PORT = 8000;
app.listen(PORT, ()=>{
  console.log(`listening to the server at port ${PORT}`);
  
})