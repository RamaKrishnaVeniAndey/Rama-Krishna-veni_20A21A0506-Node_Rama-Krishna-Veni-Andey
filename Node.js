var fs = require('fs')
var path = require('path');
module.exports =function(dir,ext,callback){
    fs.readdir(dir,(err,list)=>{
        if(err){
            return callback(err)
        }
       const filteredList = list.filter((file)=>{
           return path.extname(file) ==='.' + ext;
        });
        callback(null,filteredList);
    });
}