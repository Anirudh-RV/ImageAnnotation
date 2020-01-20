var express = require('express');
var app = express();
var multer = require('multer')
var cors = require('cors');
app.use(cors())

// 'public/Uploaded is destination'
// for scaling it to multiple users, send user_id to the backend and save under a new folder with the user_id name.

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      console.log("second");
      console.log(Object.getOwnPropertyNames(req.files))
      console.log(Object.getOwnPropertyNames(file))
      cb(null, 'public/Uploaded')
    },
    filename: function (req, file, cb) {
      console.log("third");
      cb(null,file.originalname)
      console.log(file.originalname)
    }
  })

console.log("something1")
  var upload = multer({ storage: storage }).array('file')
console.log("something2")
app.get('/',function(req,res){
    return res.send('Hello Server')
})
app.post('/upload',function(req, res) {
console.log("first");
console.log(Object.getOwnPropertyNames(req))
console.log(Object.getOwnPropertyNames(res))
console.log(req.params)

    upload(req, res, function (err) {
      console.log("here : ")
      console.log(req.body['username'])
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
          // A Multer error occurred when uploading.
        } else if (err) {
            return res.status(500).json(err)
          // An unknown error occurred when uploading.
        }

        return res.status(200).send(req.file)
        // Everything went fine.
      })
});

app.listen(4000, function() {
    console.log('App running on port 4000');
});
