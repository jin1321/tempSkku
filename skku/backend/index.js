
const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "mydb",
});



app.get("/journal", (req,res)  => {
    /*const sqlQuery1 =
      "SELECT COUNT(*) FROM mydb.journal;";*/
    
    const sqlQuery2 = 
      "SELECT * FROM mydb.journal LIMIT 10 OFFSET 0;"
    db.query(sqlQuery2, (err, result) => {
      // select문 결과를 클라이언트에게 반환
      res.send(result);
    });
    
    
})
app.get("/book", (req, res)=>{
    const sqlQuery = "SELECT * FROM mydb.book;";
    db.query(sqlQuery, (err, result)=>{
        res.send(result);
    });
})

app.get("/journal_with_pagenum", (req, res) => {
    // req.body 안에 num 담겨있음
      console.log("/journal_with_pagenum", req.body);
      var pageNum = parseInt(req.body.pageNum);
    
      const sqlQuery =
        "SELECT * FROM mydb.journal LIMIT ? OFFSET ? - 10;";
      //  [num]이 ?에 들어감
      db.query(sqlQuery, [pageNum * 10], (err, result) => {
        // 그 결과가 result에 담기고 app에 res에게 전달
        res.send(result);
      });
});


app.post("/book_with_pagenum", (req, res) => {
    // req.body 안에 num 담겨있음
      console.log("/book_with_pagenum", req.body);
      var num = parseInt(req.body.pageNum);
    
      const sqlQuery =
        "SELECT * FROM mydb.book where page = ?;";
      //  [num]이 ?에 들어감
      db.query(sqlQuery, [num], (err, result) => {
        // 그 결과가 result에 담기고 app에 res에게 전달
        res.send(result);
      });
});

app.post("/research/journal_id", (req, res) => {
    // req.body 안에 num 담겨있음
      console.log("/journal_id", req.body);
      var num = parseInt(req.body.id);
    
      const sqlQuery =
        "SELECT file FROM mydb.journal where id = ?;";
      //  [num]이 ?에 들어감
      db.query(sqlQuery, [num], (err, result) => {
        // 그 결과가 result에 담기고 app에 res에게 전달
        res.send(result);
      });
});
app.post("/research/book_id", (req, res) => {
    // req.body 안에 num 담겨있음
      console.log("/book_id", req.body);
      var num = parseInt(req.body.id);
    
      const sqlQuery =
        "SELECT * FROM mydb.book where id = ?;";
      //  [num]이 ?에 들어감
      db.query(sqlQuery, [num], (err, result) => {
        // 그 결과가 result에 담기고 app에 res에게 전달
        res.send(result);
      });
});
app.listen(3001, ()=>{
    console.log(`running on port 3001`);
});


