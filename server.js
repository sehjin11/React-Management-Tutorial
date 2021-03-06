const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});
connection.connect;

const multer = require("multer");
const upload = multer({ dest: "./upload" });

app.get("/api/customers", (req, res) => {
  connection.query(
    "select * from customer where isDeleted=0",
    (err, rows, fields) => {
      res.send(rows);
      //console.log(err);
    }
  );
});

app.use("/image", express.static("./upload"));

app.post("/api/customers", upload.single("image"), (req, res) => {
  let sql = "insert into customer values (null, ?,?,?,?,?,now(), null, 0)";
  let image = "http://localhost:5000/image/" + req.file.filename;
  console.log("fileName : " + req.body.filename);
  let name = req.body.user;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  console.log(image);
  console.log(name);
  console.log(birthday);
  console.log(gender);
  console.log(job);
  let params = [image, name, birthday, gender, job];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
    //console.log("err" + err);
  });
});

app.delete("/api/customers/:id", (req, res) => {
  let sql = "update customer set isDeleted = 1, deletedDate=now() where id= ?";
  let params = [req.params.id];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
    console.log("delete err : " + err);
  });
});

app.post("/api/update", (req, res) => {
  let sql = "update customer set name=?, birthday=?, job=? where id = ?";
  let name = req.body.userName;
  let birthday = req.body.birthday;
  let job = req.body.job;
  let id = req.body.id;
  console.log(name);
  console.log(birthday);
  console.log(job);
  console.log(id);
  let params = [name, birthday, job, id];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
    console.log("err: " + err);
  });
});

app.listen(5000, () => console.log("Listening on port 5000"));
