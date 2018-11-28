var connection = require('./../config');

module.exports.blogData = function (req, res) {
  connection.query('select * from blog', (err, result) => {
    if (err) throw err;
    console.log(result)
    res.end(JSON.stringify(result));

  })
}

module.exports.addBlog= function (req, res) {
 
  console.log(req.body)
  var users = {
    "blog_name": req.body.blog_name,
    "blog_description": req.body.blog_description,
    "blog_image": req.body.blog_image,
    "blog_date": req.body.blog_date,
    "total_like": req.body.total_like,
    "blog_comment":req.body.blog_comment,
  }
  
  connection.query('INSERT INTO  blog SET ?', users, function (error, results, fields) {
    console.log(results.insertId);

    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    } else {
      var id = results.insertId;
      console.log(id+'id')
      connection.query('SELECT * FROM blog WHERE blog_id = ?', [id], function (error, results, fields) {
        // console.log(fields)
        // console.log(error)
        res.json({
          status: true,
          data: results,
          // fields: fields,
          message: 'blog information  insert sucessfully'
        })
      })
    }
  })
}
module.exports.deleteBlog = function (req, res) {
console.log(req.params.blog_id)
  connection.query('DELETE FROM blog WHERE blog_id=?', [req.params.blog_id], (err, rows, fields) => {
    if (!err) {
      console.log('deleted')
      res.json({
        status: true,
        message: 'blog deleted sucessfully'

      })
    } 
    else {
      console.log(err)
    }
  });
}

module.exports.updateBlog = function (req, res) {
  console.log(req.body)
  let blog_id = req.body.blog_id
  console.log(blog_id)

  var data = {
    "empolyee_name": req.body.empolyee_name,
    "blog_status": req.body.blog_status,
  }

  console.log(data)
  connection.query('UPDATE blog SET ? WHERE blog_id = ?', [data, blog_id], function (error, results, fields) {
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    }
     else {
       console.log(results)
      var id = blog_id;
      console.log(id+'id')
      connection.query('SELECT * FROM blog WHERE blog_id = ?', [id], function (error, results, fields) {
        //  console.log(results + 'aman')
        // console.log(error)
        res.json({
          status: true,
          data: results,
          // fields: fields,
          message: 'blog Information  Update  Sucessfully'
        })
      })
    }
  })
}


module.exports.UpdateBlogData = function (req, res) {
  console.log("update")
  console.log(req.body)

  let blog_id = req.body.blog_id
  console.log(blog_id)

  var data = {
    "blog_name": req.body.blog_name,
    "blog_description": req.body.blog_description,
    "blog_image": req.body.blog_image,
    "blog_date": req.body.blog_date,
    "total_like": req.body.total_like,
    "blog_comment":req.body.blog_comment,
  }

  console.log(data)
  connection.query('UPDATE blog SET ? WHERE blog_id = ?', [data, blog_id], function (error, results, fields) {
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    }
     else {
       console.log(results)
      var id = blog_id;
      console.log(id+'id')
      connection.query('SELECT * FROM blog WHERE blog_id = ?', [id], function (error, results, fields) {
        //  console.log(results + 'aman')
        // console.log(error)
        res.json({
          status: true,
          data: results,
          // fields: fields,
          message: 'blog Information  Update  Sucessfully'
        })
      })
    }
  })
}


module.exports.UpdatecommentLikeData = function (req, res) {
    console.log(req.body)

  let blog_id = req.body.blog_id
  console.log(blog_id)

  var data = {
    "total_like": req.body.total_like,
    "blog_comment":req.body.blog_comment,
  }

  console.log(data)
  connection.query('UPDATE blog SET ? WHERE blog_id = ?', [data, blog_id], function (error, results, fields) {
  
    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    }
     else {
       console.log(results)
      var id = blog_id;
      console.log(id+'id')
      connection.query('SELECT * FROM blog WHERE blog_id = ?', [id], function (error, results, fields) {
         console.log(results + 'aman')
        // console.log(error)
        res.json({
          status: true,
          data: results,
          // fields: fields,
          message: 'blog Information  Update  Sucessfully'
        })
      })
    }
  })
}
module.exports.blogData = function (req, res) {
  connection.query('select * from blog', (err, result) => {
    if (err) throw err;
    console.log(result)
    res.end(JSON.stringify(result));

  })
}


module.exports.addcomment= function (req, res) {
 
  console.log(req.body)
  var users = {
    "blog_id": req.body.blog_id,
    "comment_id" :req.body.comment_id,
    "comments":req.body.comments,
  }
  
  connection.query('INSERT INTO  blog_comment SET ?', users, function (error, results, fields) {

    if (error) {
      res.json({
        status: false,
        message: 'there are some error with query'
      })
    } else {
      var id = results.insertId;
      console.log(id+'id')
      connection.query('SELECT * FROM blog_comment WHERE id = ?', [id], function (error, results, fields) {
        // console.log(fields)
        // console.log(error)
        res.json({
          status: true,
          data: results,
          // fields: fields,
          message: 'blog comment information  insert sucessfully'
        })
      })
    }
  })
}

module.exports.getComment= function (req, res) {
 
  console.log(req.body)
  // var users = {
  //   "blog_id": 1,
  //   "comment_id" :1,
  //   "comments":req.body.comments,
  // }

  var sql = 'SELECT * FROM blog_comment LEFT JOIN blog ON blog_comment.blog_id = blog.blog_id';
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
        fields: fields,
        message: 'blog'
      })
    }
  });
}
