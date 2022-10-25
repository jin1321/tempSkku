var fileBoard = require("./file_model");
var router = require("express").Router();


function getBook(req, res) {
    //console.log("Test")
    fileBoard.getBook((err,result) => {
        if (err){
            console.log(err);
        }
        else {
            fileBoard.getPageNum((err,result2) => {
                if (err) {
                    console.log (err);
                }
                res.json({
                    pageNum : Math.ceil(result2[0]["pageNum"]/10),
                    boardData: result}
                );
            });
        }
    });
}

function getBookPage(req, res) { 
    pageNum = req.body.pageNum;
    console.log(pageNum);
    fileBoard.getBookPage( pageNum, (err,result) => {
        if (err){
            console.log(err);
        }
        console.log(result);
        res.json(result);
    });
        // res.json("HI");

}

function createBook(req, res) { 
    const title = req.body.title;
    const filename = req.body.filename;
    const file = req.body.file;
    fileBoard.insertBook( title, filename, file, (err,result) => {
        if(err){
            console.log(err);
            res.json({ errMsg: "Error: Failed on creating book" });
        }
    });
}

function updateBook(req, res) {
    const bookId = req.body.id;
    const title = req.body.title;
    const filename = req.body.filename;
    const file = req.body.file;
    fileBoard.updateBook( bookId, title, filename, file, (err, result) => {
        if(err){
            console.log(err);
            res.json({ errMsg: "Error: Failed on updating book" });
        }
    });
}

function deleteBook(req, res) {
    const bookId = req.body.id;
    fileBoard.deleteBook(bookId, (err, result) => {
        if(err){
            console.log(err);
            res.json({ errMsg: "Error: Failed on deleting book" });
        }
    });

}



router.get("/book",getBook);
router.post("/book_with_pagenum",getBookPage);
router.post("/createBook", createBook);
router.post("/updateBook", updateBook);
router.post("/deleteBook", deleteBook);

module.exports = router;