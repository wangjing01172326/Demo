const http = require('http')
const userApi = require('./api/userApi');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
let server=http.createServer(app)

//采用设置所有均可访问的方法解决跨域问题
app.all("*", function (req, res, next) {
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin", "*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers", "content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200); //让options尝试请求快速结束
    else
        next();
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// 后端api路由
app.use('/user', userApi);

// 监听端口
server.listen(3000,()=>{
    console.log('success')
    console.log('127.0.0.1:3000')
})
// app.listen(8080);

