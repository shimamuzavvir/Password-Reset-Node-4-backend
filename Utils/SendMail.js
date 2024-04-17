import dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()

export const SendMail = async(mailreceiver, message)=>{
    try {
        let transport = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user:process.env.EmailId,
                pass:process.env.EmailAppCode,
            },
        })

        const mailOption = {
            from:process.env.EmailId,
            to:mailreceiver,
            subject:"Password Reset",
            html:message
        }

        const info = await transport.sendMail(mailOption)
        console.log("mail sent", info.response);

    } catch (error) {
        console.log("error", error);
    }
}