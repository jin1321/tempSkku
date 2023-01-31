const config = require("../config");
var upload = module.exports;

const insertJournalFileQry = "UPDATE mydb.journal SET filename = ?, filecontents = ?, file = ? WHERE id = ?";

upload.uploadJournalFile = function uploadJournalFile(id) {
    config.db.query(insertJournalFileQry, [filename, filecontents, file, id], (err, result) => {
        if (err) callback(err, null);
        callback(null, result);
    })
}

