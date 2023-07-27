var filterFn = require('./Node.js');
var dir = process.argv[2];
var ext = process.argv[3]

filterFn(dir, ext, (err, list) => {
  if (err){
    return console.error('There was an error:', err);
  }

  list.forEach( (file) =>{
    console.log(file)
  })
});