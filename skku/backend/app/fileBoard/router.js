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
            })
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
    })
        // res.json("HI");

}



router.get("/book",getBook);
router.post("/book_with_pagenum",getBookPage);

module.exports = router;