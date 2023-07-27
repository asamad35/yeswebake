import nodemailer from 'nodemailer'


export const sendEmail = async ({ email, hashedToken }: any) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "samad.abdus3535@gmail.com",
                pass: "xzxdhziwtzguthkm",
            },
        });

        const mailOptions = {
            from: 'samad.abdus3535@gmail.com',
            to: email,
            subject: "Reset your password",
            html: `<p>
                        Click <a href="forgotpassword?token=${hashedToken}">here</a> to reset your password
                        or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/resetpassword?token=${hashedToken}
                    </p>`
        }
        const mailresponse = await transporter.sendMail(mailOptions);
        return mailresponse;

    } catch (error: any) {
        console.log(error)
        throw new Error(error.message)
    }
}
