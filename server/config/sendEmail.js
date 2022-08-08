const nodemailer = require("nodemailer");



const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'amelia.reynolds@ethereal.email',
        pass: 'SstrDxEHJzuwgvXRFX'
    }
});

module.exports = {
    sendverificationEmail: async (senderAddress, link) =>{
        try {
            await transporter.sendMail({
                from:'"fully test account"<0000ankit0000@gamil.com>',
                to:senderAddress,
                subject:"verify email",
                html:`please verify email ${link} `
            })
        } catch (err) {
            console.log(err)
        }
        return err;
    }
}

