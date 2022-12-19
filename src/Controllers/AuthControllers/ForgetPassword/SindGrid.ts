import sgMail from '@sendgrid/mail';
require("dotenv").config();
import {Request,Response} from "express"

let SendgirdKey:any=process.env.SENDGRID_API_KEY

const SindGrid=(req:Request,res:Response)=>{
  
    let {email,regusterid}=req.body


    sgMail.setApiKey(SendgirdKey);
    const msg:any = {
      to: email,
      from: process.env.SENDGRID_EMAIl,
      subject: 'Update Passowrd Foodzinzo',
      text: 'and easy to do anywhere, even with Node.js',
      html: `
      <h3>The Verify Code Is Just Copy It </h3>
      <p>${regusterid}</p>`
    };
    //ES6
    sgMail
      .send(msg)
      .then((info:any) => {
        res.json(info.response);
      }, (error:any) => {
        console.error(error);

        if (error.response) {
          console.error(error.response.body)
        }
      });
  }



  export default SindGrid