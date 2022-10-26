var fileBoard = module.exports;
const config = require("../config");

const getPageQry = "SELECT count(*) AS pageNum FROM book";

//처음 bookboard 열었을때 
const getBookQry = "SELECT * FROM mydb.book LIMIT 10 OFFSET 0";

//pageNum 받았을 때 table에서 받아오기
const getBookPageQry = "SELECT * FROM mydb.book LIMIT 10 OFFSET ?";

fileBoard.getPageNum = function getPageNum(callback){
    config.db.query(getPageQry, (err,result) => {
        if(err) callback(err,null);

        callback(null, result);
    });
}

fileBoard.getBook = function getBook(callback) {
    config.db.query(getBookQry, (err, result) => {
        if (err) callback(err, null);

        callback(null, result);
    });
}   

fileBoard.getBookPage = function getBookPage(pageNum, callback){
    config.db.query(getBookPageQry, pageNum, (err, result) => {
        console.log(pageNum);
        console.log(result);
        if (err) callback(err,null);
        callback(null, result);
    });
}
