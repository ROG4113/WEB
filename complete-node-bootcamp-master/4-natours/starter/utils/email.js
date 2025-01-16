const nodemailer=require('nodemailer');

const sendEmail=options=>{
    // 1: crete  transporter
    const transporter=nodemailer.createTransport({
        // service:'Gmail',
        host:process.env.EMAIL_HOST,
        port:process.env.EMAIL_PORT,
        auth:{
            user:process.env.EMAIL_USERNAME,
            pass:process.env.EMAIL_PASSWORD
        }
        //activate in gmail "less secure app" option
    });

    // 2: define the email options
    const mailOptions={
        from: 'Aniket Singh <as0009916@gmail.com>',
        to:options.email,
        subject:options.subject,
        text:options.message,
    }

    // 3: actually send the email
    transporter.sendMail(mailOptions);
};

module.exports=sendEmail;