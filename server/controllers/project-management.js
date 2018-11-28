var connection = require('./../config');

module.exports.projectList = function (req, res) {
  connection.query('select * from project_data', (err, result) => {
    if (err) throw err;
    console.log(result)
    res.end(JSON.stringify(result));

  })
}
