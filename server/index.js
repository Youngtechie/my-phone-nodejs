const express = require("express");
const path = require("path");
const mysql = require("mysql2");
const app = express();
const url = require("url");
// app.use(express.static(path.resolve(__dirname, '../client/build')));

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "githubyoungtechie@09020674910",
  database: `myphone`,
  insecureAuth: true,
  multipleStatements: true,
});
setInterval(() => {}, 1000);
con.connect((err) => {
  if (err) throw err;
    con.query("SELECT * FROM PROJECTS", (err, result) => {
      if (err) throw err;
      app.get("/projects", (req, res) => {
        res.json(result);
    });
  })
  
  app.get("/add", (req, res) => {
    let adr = req.url;
    let parse = url.parse(adr, true);
    let query = parse.query;
    let id = query.id;
    con.query(
      `UPDATE projects SET projectLikes = projectLikes + 1 WHERE projectId = ${id};`,
      (err) => {
        if (err) throw err;
      }
    );
  });

  app.get("/get", (req, res)=>{
    let adr = req.url;
    let parse = url.parse(adr, true);
    let query = parse.query;
    let id = query.id;
    con.query(`SELECT projectLikes FROM projects where projectId = ${parseInt(id)}`, (err, result)=>{
      if (err) throw err;
      res.send(result)
      console.log(result)
    })
  })
});

app.listen(4001, () => {
  console.log(`Server listening on ${4001}`);
});
