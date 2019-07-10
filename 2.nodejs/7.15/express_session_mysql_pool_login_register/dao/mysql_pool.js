
//创建连接池 createPool(Object)  Object和createConnection参数相同。
// 引入 MySQL 包
var mysql = require('mysql');

// 建立 链接注意参数
// 这里提供的是最基本的参数： host   user    password
var pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'myemployees'
});

//可以监听connection事件，
pool.on('connection', function(connection) {
    //console.log(connection);
});


//业务逻辑程序员，只想要数据
exports.query = function(sql, args, cb){
    if(!cb || typeof cb != 'function'){
        console.warn('something is wrong about callback');
    }
    pool.getConnection(function(err, connection) {
        if(err){
            throw err;
        }
        connection.query( sql, args, function(err, result) {
            connection.release();
            cb(err, result);
        });
    });
};