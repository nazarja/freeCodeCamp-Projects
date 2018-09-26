var express = require('express');
var multer = require('multer');
var app = express();
var upload = multer();
var bytes = require('bytes');
var port = process.env.PORT || 3000;
var staticFiles =  __dirname + '/public/'
var indexHTML = __dirname + '/views/index.html';


app.use(express.static(staticFiles));

app.get('/', function(req, res) {
    res.sendFile(indexHTML);
});

app.post('/upload', upload.single('uploadedFile'), function(req, res) {
 
  var mb = bytes(req.file.size, 'mb');
  
    var meta = {
        "File Name": req.file.fieldname,
        "File Size (bytes)": req.file.size,
        "File Size (Human Readable)": mb,
        "Encoding": req.file.encoding,
        "File Type": req.file.mimetype
    }
    res.json(meta);
});


app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});