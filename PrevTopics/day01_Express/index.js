const express = require ("express");
const app = express(); 

var users = [{
     ownerName : "shaany",
      kidney : [{
            healthy : false
      },{
            healthy : true
      }]
},{
      ownerName : "Mradul",
      kidney : [{
            healthy : true
      },{
            healthy : true
      }]
}]

app.use(express.json());

app.get("/" , function (req, res){
      const userName = users[0].ownerName;
      const  userKidney = users[0].kidney;

      const totalKidney = userKidney.length;

      let healthyKidney =  userKidney.filter(k => k.healthy).length;
      

      const unhealthyKidney = totalKidney - healthyKidney;
      res.json({
            userName,
            totalKidney,
            healthyKidney,
            unhealthyKidney,
      })
})


//middlewares
app.post("/" , function (req, res){
      const ishealthy = req.body.ishealthy;
      users[0].kidney.push({
            healthy : ishealthy
      })
      res.json ({
            msg:"done!"
      })
})

app.put("/" , function (req, res){
      
})

app.delete("/" , function (req, res){
      
})

app.listen(3000);