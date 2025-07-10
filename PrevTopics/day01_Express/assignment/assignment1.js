const { error } = require("console");
const express = require ("express");
const app = express();

const fs = require ("fs");

app.get("/files/:fileName", function (req, res){
      const name = `./files/${req.params.fileName}`;
      fs.readFile(name, "utf-8", function (err, data) {
            if (err) {
            return res.status(404).json({ error: "File not found." });
         }
            res.json({
                  data
            });

});

});

app.get("/listFiles" , function (req,res){
      fs.readdir('./files', (err, files) => {
       if (err) {
            return res.status(404).json({ error: "Something went wrong! Try Different URL" });
        }
      res.json({
            files
      })
});


})

app.listen(3000);