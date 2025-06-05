const express = require ("express");

const app = express();

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable

let requestCount = 0;

app.use(function (req, res , next){
      requestCount = requestCount + 1;
      next();
});

app.get("/user", function (req,res){
      res.status(200).json({ name : "Shaany"})
})

app.post("/user", function (req,res){
      res.status(200).json({ msg : "Created A Dummmy User!"})
})

app.get("/requestCount", function (req,res){
      res.status(200).json({ count : requestCount})
})


app.listen(3000);