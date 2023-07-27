var nodemailer = require('nodemailer')
var transport = nodemailer.createTransport({
    service : 'gmail',
    auth:{
        user :'ramakrishnaveniandey@gmail.com',
        pass : 'iemceqptgmjdadtx'
    }
});
var mailOptions={
    from:'ramakrishnaveniandey@gmail.com',
    to:'pravin.consensus@gmail.com',
    subject : 'sending mail from 20A21A0506 ',
    text : 'Hello sir this is 20A21A0506'
};
transport.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log('Email sent' +info.response);
    }
});