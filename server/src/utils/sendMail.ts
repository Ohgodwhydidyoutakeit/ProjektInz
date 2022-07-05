
import nodemailer from 'nodemailer'

export const sendMail = async () => {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport

    console.log(process.env.TEST_EMAIL_LOGIN,process.env.TEST_EMAIL_PASS )
    let transporter = nodemailer.createTransport({
        pool: true,
        host: "smtp.hostinger.com",
        port: 465 ,
        secure: true, //

        auth: {
            user: process.env.TEST_EMAIL_LOGIN, // generated ethereal user
            pass: process.env.TEST_EMAIL_PASS, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"TEST" <pracainz@raftels.com>', // sender address
        to: "pracainz@raftels.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

}

