import { Request, Response } from "express";
import createAccessToken from "../../../Token/AccessToken";
import createRefreshToken from "../../../Token/RefreshToken";

import { Models,TableEnum } from "../../../Quires/QuiresClass";


//After Checj Basic Authntication Now The Next Step Section
const SigninControll= async (req:Request|any,res:Response)=>{


    try {

        //Invoket The AccessToken And Refresh Token
        let accessToken= createAccessToken(req.basicAuth);
        let refreshToken=createRefreshToken(req.basicAuth);


        await Models.update(TableEnum.regusters,"email",req.basicAuth[0].email,
            {accesstoken:accessToken,refreshtoken:refreshToken})


        res.status(200).json(
          {accessToken:accessToken,refreshToken:refreshToken});
        }
     catch (error) {
       res.status(403).send('There Is Problem In SignIn');
       }
      
}

export default SigninControll
