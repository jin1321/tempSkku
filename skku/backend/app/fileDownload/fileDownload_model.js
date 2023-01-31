const config = require("../config");
var download = module.exports;

const getJournalFilePathQry = "SELECT file FROM mydb.journal WHERE filename = ?";

download.fileDownload = function fileDownload(filename, callback) {
    config.db.query(getJournalFilePathQry, filename, (err, result) => {
        if (err) callback(err, null);
        callback(null, result);
    })
}