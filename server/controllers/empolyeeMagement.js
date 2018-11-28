var connection = require('./../config');

module.exports.empolyeeInfoList = function (req, res) {
  connection.query('select * from empolyee_info', (err, result) => {
    if (err) throw err;
    console.log(result)
    res.end(JSON.stringify(result));

  })
}
module.exports.addEmpolyee = function (req, res) {

  console.log(req.body)
  var users = {
    "prefix": req.body.prefix,
    "first_name": req.body.first_name,
    "middle_name": req.body.middle_name,
    "last_name": req.body.last_name,
    "date_of_birth": req.body.date_of_birth,
    "email": req.body.email,
    "phone": req.body.phone,
    "address": req.body.address,
    "imp_notes": req.body.imp_notes,
    "addar_number": req.body.addar_number,
    "pan_number": req.body.pan_number,
    "joing_date": req.body.joing_date,
    "gendar": req.body.gendar,
    "profile": req.body.profile,
    "emp_unique_id": req.body.emp_unique_id,
    "emp_department": req.body.emp_department,
    "emp_title": req.body.emp_title,
    "emp_description": req.body.emp_description
  }

  connection.query('INSERT INTO  empolyee_info SET ?', users, function (error, results, fields) {
    // console.log(results.insertId);
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    } else {
      var id = results.insertId;
      console.log(id + 'id')

      var today = new Date();
      var users2 = {
        "emp_new_id": id,
        "emp_live_status": 0,
        "out_time": today,
        "in_time": today,
        "total_time": 0
      }
      connection.query('INSERT INTO  employee_attendance SET ?', users2, function (error, results, fields) {
        console.log("ohk")
      })

      connection.query('SELECT * FROM empolyee_info WHERE emp_id = ?', [id], function (error, results, fields) {
        // console.log(fields)
        // console.log(error)
        res.json({
          status: true,
          data: results,
          // fields: fields,
          message: 'Empolyee information  insert sucessfully'
        })
      })
    }
  })
}



module.exports.UpdateEmpInfoData = function (req, res) {
  console.log("update")
  let emp_id = req.body.emp_id
  console.log(emp_id)

  var data = {
    "prefix": req.body.prefix,
    "first_name": req.body.first_name,
    "middle_name": req.body.middle_name,
    "last_name": req.body.last_name,
    "date_of_birth": req.body.date_of_birth,
    "email": req.body.email,
    "phone": req.body.phone,
    "address": req.body.address,
    "imp_notes": req.body.imp_notes,
    "addar_number": req.body.addar_number,
    "pan_number": req.body.pan_number,
    "joing_date": req.body.joing_date,
    "gendar": req.body.gendar,
    "profile": req.body.profile,
    "emp_unique_id": req.body.emp_unique_id,
    "emp_department": req.body.emp_department,
    "emp_title": req.body.emp_title,
    "emp_description": req.body.emp_description
  }

  connection.query('UPDATE empolyee_info SET ? WHERE emp_id = ?', [data, emp_id], function (error, results, fields) {
  
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    }
     else {
       console.log(results)
      var id = emp_id;
      console.log(id+'id')
      connection.query('SELECT * FROM empolyee_info WHERE emp_id = ?', [emp_id], function (error, results, fields) {
     
        res.json({
          status: true,
          data: results,
          message: 'Empolyee Information  Update  Sucessfully'
        })
      })
    }
  })
}



module.exports.deleteEmpolyeeList = function (req, res) {
  connection.query('DELETE FROM empolyee_info WHERE emp_id=?', [req.params.id], (err, rows, fields) => {
    if (!err) {
      console.log('deleted')
      res.json({
        status: true,
        message: 'user empolyee deleted sucessfully'

      })
    } else {
      console.log(err)
    }
  });
}

