
var connection = require('./../config');
module.exports.getEmpAttendance= function (req, res) {
  
    var sql = 'SELECT * FROM empolyee_info LEFT JOIN employee_attendance ON empolyee_info.emp_id = employee_attendance.emp_new_id';
    connection.query(sql, function (error, results, fields) {
      if (error) {
        res.json({
          status: false,
          message: 'there are some error with query'
        })
      }
       else {
        res.json({
          status: true,
          data: results,
          message: 'empolyee attendance list'
        })
      }
    });
  }
  
module.exports.udateEmployee= function (req, res) {
  console.log(req.body)

  let attendance_id = req.body.attendance_id
  console.log(attendance_id)

  var data = {
    "emp_new_id": req.body.emp_new_id,
    "emp_live_status": req.body.emp_live_status,
    "out_time":req.body.out_time,
    "in_time":req.body.in_time,
    "total_time": req.body.total_time
  }

  console.log(data)
  connection.query('UPDATE employee_attendance SET ? WHERE attendance_id = ?', [data, attendance_id], function (error, results, fields) {
  
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    }
     else {
       console.log(results)
      var id = attendance_id;
      console.log(id+'id')
      connection.query('SELECT * FROM employee_attendance WHERE attendance_id = ?', [id], function (error, results, fields) {
         console.log(results + 'aman')
        // console.log(error)
        res.json({
          status: true,
          data: results,
          // fields: fields,
          message: 'attendance   Update  Sucessfully'
        })
      })
    }
  })
}