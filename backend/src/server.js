const express = require("express");
const app = express();
const path = require('path')
const routes = require("./routes/router");
const bodyParser = require("body-parser");
const db = require("./config/db");
const cors = require("cors");
const multer = require("multer");
const morgan = require("morgan");
// app.use(cors);
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

routes(app);

//upfile
// const imageModel = require('../model/imageModel');
// app.use(bodyParser.urlencoded(
//     { extended:true }
// ))

// app.set("view engine","ejs");

// // SET STORAGE
// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads')
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// })

// var upload = multer({ storage: storage })

// app.get("/",(req,res)=>{
//   res.render("index");
// })

// app.post("/uploadphoto",upload.single('myImage'),(req,res)=>{
//     var img = fs.readFileSync(req.file.path);
//     var encode_img = img.toString('base64');
//     var final_img = {
//         contentType:req.file.mimetype,
//         image:new Buffer(encode_img,'base64')
//     };
//     imageModel.create(final_img,function(err,result){
//         if(err){
//             console.log(err);
//         }else{
//             console.log(result.img.Buffer);
//             console.log("Saved To database");
//             res.contentType(final_img.contentType);
//             res.send(final_img.image);
//         }
//     })
// })

app.get("/hello", (req, res) => {
    res.send("Hello");
})
app.use("/", (req, res) => {
    res.send("entry point");
});
db.connect();

const PORT = process.env.PORT || 8080;

app.listen(PORT, function(req, res, next) {
    console.log(`listen on port ${PORT}`);
});