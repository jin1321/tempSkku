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

function getBookFile(req, res) {
    const bookId = req.body.id;
    console.log(req.body.id);
    fileBoard.getBookFile( bookId , (err, result) => {
        if(err) {
            console.log(err)
            res.json({ errMsg: "Error: Failed on downloading book" });
        }
        console.log(result[0]);
        res.json(result);
        //res.download(result[0].file);
    });
}

// app.get('/book_id',(req, res) => {
//     console.log(req.query);
// db.query('SELECT file FROM book WHERE id = ?', req.query.id, (err, data, field) => {
//         if (err) {
//             res.send(err);
//             return;
//         }
//         console.log(data[0].file);
//         res.download(
//             data[0].file
//         );
//         return;

//     });
// });



router.get("/book",getBook);
router.post("/book_with_pagenum",getBookPage);
router.post("/createbook", createBook);
router.post("/updatebook", updateBook);
router.post("/deletebook", deleteBook);
router.post("/book_id", getBookFile);

module.exports = router;