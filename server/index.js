var express = require("express");
var bodyParser = require('body-parser');
var app = express();
var jwt = require('jsonwebtoken');
var connection = require('./config');
var multer = require('multer');
var path = require('path');

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});
var connection = require('./config');

app.use('/images', express.static(__dirname+'/uploads/')); 
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({ storage: storage });
app.post("/upload", upload.array("uploads[]", 12), function (req, res) {
  console.log('files', req.files);
  res.send(req.files);
});

// var updateEmp=require('./controllers/empList');
var empolyeeSystem = require('./controllers/empolyeeMagement')
var authenticateController = require('./controllers/authenticate-controller');
var registerController = require('./controllers/register-controller');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
/* route to handle login and registration */
app.post('/api/register', registerController.register);
app.post('/api/login', authenticateController.authenticate);

// emp management system
app.get('/api/empolyee_infolist', empolyeeSystem.empolyeeInfoList);
app.post('/api/add_empolyee_info', empolyeeSystem.addEmpolyee);
app.post('/api/update_empolyee_info', empolyeeSystem.UpdateEmpInfoData);
app.delete('/api/delete_empolyeeList/:id', empolyeeSystem.deleteEmpolyeeList);


app.get('/api/empolyee_infolist/:id', (req, res) => {
  connection.query('SELECT * FROM empolyee_info WHERE emp_id=?', [req.params.id], (err, rows, fields) => {
    if (!err) {
      console.log(rows)
      res.send(rows);
    } else {
      console.log(err)
    }
  });
});

app.listen(8000);


