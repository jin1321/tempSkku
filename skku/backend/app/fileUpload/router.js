/*
const router = require("express").Router();
const fs = require('fs');


const uploadFile = (req, res) => {
    try{
        var file = req.files.file;
        console.log(req.files.file.data);
        console.log(req.header);
        var filename = file.name;
        if(!req.files) {
            res.send({
            status: false,
            message: 'No file uploaded'
        });}
        else{
                const params = {
                    Bucket : "skkutest",
                    Key : filename,
                    Body : file.data
                }
            
            
                s3.upload(params, function(s3Err, data) {
                    if (s3Err) {
                        throw s3Err;
                    }
                    console.log(`File uploaded successfully. ${data.Location}`);
                    res.send({
                        status: true,
                        message: 'File is uploaded',
                        data: {
                            name: data.name,
                            mimetype: data.mimetype,
                            size: data.size
                        }
                    });
                
                })
        
        }
    } catch(e) {
      console.error(e)
      res.status(500).end()
    }
  }



const uploadFile = (fileName) => {
    // Read content from the file
    const fileContent = fs.readFileSync(fileName);

    // Setting up S3 upload parameters
    const params = {
        Bucket: "skku-test-bucket",
        Key: 'cat.jpg', // File name you want to save as in S3
        Body: fileContent
    };

    // Uploading files to the bucket
    s3.upload(params, function(err, data) {
        if (err) {
            throw err;
        }
        console.log(`File uploaded successfully. ${data.Location}`);
    });
};
*/

/*
var router = require("express").Router();
var uploadModel = require("./fileUpload_model");
const express = require('express');
const app = express();
const multer = require('multer');
const cors = require('cors');

app.use(cors()); 



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'tmp/uploads') // 파일 업로드 경로
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()) //파일 이름 설정
    }
  })
const maxSize = 2 * 1024 * 1024;
const upload = multer({ storage: storage , limits: { fileSize: maxSize }}).array('file')

function fileUpload(req, res) {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        
        console.log(req.files);
      
        //배열 형태이기 때문에 반복문을 통해 파일 정보를 알아낸다.
        req.files.map(data => {
          console.log("폼에 정의된 필드명 : ", data.fieldname);
          console.log("사용자가 업로드한 파일 명 : ", data.originalname);
          console.log("파일의 엔코딩 타입 : ", data.encoding);
          console.log("파일의 Mime 타입 : ", data.mimetype);
          console.log("파일이 저장된 폴더 : ", data.destination);
          console.log("destination에 저장된 파일 명 : ", data.filename);
          console.log("업로드된 파일의 전체 경로 ", data.path);
          console.log("파일의 바이트(byte 사이즈)", data.size);
          
          //filename(사용자가 업로드한 파일명), filecontents(destination에 저장된 파일명), file(파일 전체 경로)
          /*
          uploadModel.uploadJournalFile([data.originalname, data.filename, data.path, journal_id], (err, result)=> {
            if (err) {
                console.log(err);
                res.json({ errMsg: "Error: Failed to upload the file on the database."});
            }
            })
        
        })
        res.json({ok: true, data: "Fields Upload Ok"})
    })

}


router.post("/upload", uploadFile);
module.exports = router; 
*/

