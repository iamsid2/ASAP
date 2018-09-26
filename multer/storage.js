var multer = require('multer');
var path = require('path');

//for multer storage and uploads
var storage	=	multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, __dirname+'/uploads');
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname + '-' + Date.now()  + path.extname(file.originalname));
    }
  });
var upload = multer({ storage : storage }).single('filetoupload');

module.exports = upload;