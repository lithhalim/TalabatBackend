import { Request, Response } from "express";
import createAccessToken from "../../../Token/AccessToken";
import createRefreshToken from "../../../Token/RefreshToken";
import { Models,TableEnum } from "../../../Quires/QuiresClass";


//After Checj Basic Authntication Now The Next Step Section
const SigninControll= async (req:Request|any,res:Response)=>{


    try {

        //Invoket The AccessToken And Refresh Token
        let accessToken= createAccessToken(req.basicAuth[0]);
        let refreshToken=createRefreshToken(req.basicAuth[0]);

        await Models.update(TableEnum.regusters,"email",req.basicAuth[0].email,
            {accesstoken:accessToken,refreshtoken:refreshToken})

        res.json(
          {status:"User Has Reguster", 
           accessToken:accessToken,
           refreshToken:refreshToken});
        }
     catch (error) {
       res.json({status:"Email Or Password Wrong"})
    }
      
}

export default SigninControll
