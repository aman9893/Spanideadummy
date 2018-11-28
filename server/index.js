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

var list = require('./controllers/empList');
// var updateEmp=require('./controllers/empList');
var empolyeeSystem = require('./controllers/empolyeeMagement')

var bloglist = require('./controllers/blog')
var booklist = require('./controllers/library');
var Emplist = require('./controllers/get_empolyee');
var Tasklist = require('./controllers/task_list');


var projectManagement = require('./controllers/project-management');




var authenticateController = require('./controllers/authenticate-controller');
var registerController = require('./controllers/register-controller');
var EmpAttendance = require('./controllers/emp_attendance');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
/* route to handle login and registration */
app.post('/api/register', registerController.register);
app.post('/api/login', authenticateController.authenticate);
app.put('/api/update_emp', Emplist.UpdateEmpData);
app.get('/api/list', list.listData);
app.get('/api/task_list', Tasklist.TasklistData);
app.post('/api/post_task', Tasklist.addTask);
app.get('/api/emp_data', Emplist.empData);
app.post('/api/add_empolyee', Emplist.addEmpolyee);
app.delete('/api/delete_empolyee/:id', Emplist.deleteEmpolyee);
app.put('/api/update_empolyeeData', Emplist.UpdateEmpAllData);
app.get('/api/search_empolyee/:keyword', Emplist.searchEmpolyeeData);
///----------------------------------library--------------------------------
app.get('/api/book_list', booklist.LibraryData);
app.post('/api/add_book', booklist.addBook);
app.delete('/api/delete_book/:book_id', booklist.deleteBook);
app.put('/api/update_booklist', booklist.updateBook);
app.get('/api/blog_list', bloglist.blogData);
app.post('/api/add_blog', bloglist.addBlog);
app.delete('/api/delete_blog/:blog_id', bloglist.deleteBlog);
app.put('/api/update_bloglist', bloglist.updateBlog);
app.put('/api/update_blog', bloglist.UpdateBlogData);
app.put('/api/add_like_comment', bloglist.UpdatecommentLikeData);
app.post('/api/add_comment', bloglist.addcomment);
app.get('/api/getComment', bloglist.getComment);

// emp management system
app.get('/api/empolyee_infolist', empolyeeSystem.empolyeeInfoList);
// app.get('/api/empolyee_infolist/:id', empolyeeSystem.empolyeeInfoList);
app.post('/api/add_empolyee_info', empolyeeSystem.addEmpolyee);
app.post('/api/update_empolyee_info', empolyeeSystem.UpdateEmpInfoData);
app.delete('/api/delete_empolyeeList/:id', empolyeeSystem.deleteEmpolyeeList);

app.get('/api/add_attendance', EmpAttendance.getEmpAttendance);
app.put('/api/updtae_attendance', EmpAttendance.udateEmployee);



////project

app.get('/api/project_list_info', projectManagement.projectList)

//emp _attendance

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


