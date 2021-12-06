var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');



// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();

// 增加用户接口
router.post('/addUser', (req, res) => {
  let sql = $sql.user.add;
  let params = req.body;
  var arr=[]
for(let i in params){
    arr.push(params[i])
}
console.log(arr)
  conn.query(sql, arr, function(err, result) {
    if (err) {
      console.log("添加失败"+err);
    }
    if (result) {
      res.json(result);
    }
  })
});

// 查用户
router.get('/list', (req, res) => {
  let sql = $sql.user.search;
  conn.query(sql, function(err, result) {
    if (err) {
      console.log("查询失败"+err);
    }
    if (result) {
      res.json(result);
    }
  })
});

// 删除用户接口
router.post('/deleteUser', (req, res) => {
  let params = req.body;
  console.log(params)
  let sql = $sql.user.delete+' '+'phone='+params.phone
  conn.query(sql,function(err, result) {
    if (err) {
      console.log("删除失败"+err);
    }
    if (result) {
      res.json(result);
    }
  })
});

module.exports = router;
