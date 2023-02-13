/*

const router = require("express").Router();
const fs = require('fs');
const AWS = require('aws-sdk');
const s3 = new AWS.S3({
    accessKeyId: "AKIA52KB5DNQOOBPP36H",
    secretAccessKey: "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"
});

const listObjects = params => {
    s3.listObjectsV2(params, function (err, data) {
        if (err) {
            console.log(err);
            throw err;
        } else {
            if (data != null && data != undefined) {
                let fileList = data.Contents;
                if (fileList != null && fileList.length > 0) {
                    fileList.forEach((fileInfo, idx) => {
                        console.log(fileInfo);
                    });
                }
            } else {
                console.log(params.Prefix, "is not exists.");
            }
        }
    });
}

listObjects({ Bucket: 'skkutest', Prefix: "path/to/", MaxKeys: 1000 });

const downloadFile = params => {
    s3.getObject(params.downloadParams, function (s3Err, data) {
        if (s3Err) throw s3Err
        fs.writeFileSync(params.savePath, data.Body)
    console.log('file downloaded successfully')
    });
}





const os = require('os');
var fs = require('fs');

var router = require("express").Router();
var download = require("./fileDownload_model");



function fileDownload(req, res) {
    const filename = req.body.filename;
    download.fileDownload(filename, (err, result)=> {
        if (err) {
            console.log(err);
            res.json({ errMsg: "Error: Failed to get the filepath"});

        }
        else {
            if (os.path.exists(result)) {
                
                res.setHeader('Content-Disposition', `attachment; filename=${filename}`); //이 헤더를 브라우저가 읽고 다운로드로 인식한다.
                res.sendFile(result); //파일경로
            }
            else {
                res.json({ errMsg: "File does not exist!"});
            }
            
        }          
    }) 
} 


router.post("/download", downloadFile);
module.exports = router; 
*/