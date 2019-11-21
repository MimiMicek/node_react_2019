'use strict';
const nodemailer = require('nodemailer');

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: '', // generated ethereal user
            pass: '' // generated ethereal password
        }
    });

    // send mail with defined transport object
    let info = transporter.sendMail({
        from: '', // sender address
        to: '', // list of receivers
        subject: 'Hello testing number 2', // Subject line
        text: 'Anybody there?', // plain text body
        });

transporter.sendMail(info, function(err){
    if(err){
        console.log(err);
    }else{
        console.log(info);
    }
});