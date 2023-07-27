var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"charmi"
   
   

});
con.connect(function(err){
    if(err) throw err
    console.log('connected');
    var sql="CREATE DATABASE charmi";
    function createDatabase( mysql){
       
        con.query(mysql,function(err,result){
            if(err) throw err;
           console.log("Database created");
    
    })}
    createDatabase(sql);
    
    var sql2="CREATE TABLE employees(name VARCHAR (255),department VARCHAR(100),salary DECIMAL(10))";
    con.query(sql2,function(err,result){
        if(err) throw err;
        console.log("Table created");
        var sql3="ALTER TABLE employees ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    })
    

    

})