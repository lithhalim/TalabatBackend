import { verify } from 'jsonwebtoken';
require('dotenv').config();
import {Request,Response} from "express";
import createAccessToken from '../../Token/AccessToken';



let refreshTokens:any = [];

let RefreshSecrete:any=process.env.REFRESH_TOKEN_SECRET

const RefreshToken= (req:Request,res:Response)=>{
    //Check If The User Havent RefreshToken Return Error
    if (req.body == null) return res.sendStatus(401)

    //If The Refresh Token Not Save In Server Return Error
    if (!refreshTokens.includes(req.body)) return res.sendStatus(403)

    //verify Eamil If The Token Correct Commplete 
    verify(req.body,RefreshSecrete , 
      (err:any, user:any) => {
      if (err){ 
            return res.sendStatus(403)
      }else{
            const accessToken = createAccessToken({    
                fullName:user.fullName,
                image:user.image,
                regusterid:user.regusterid,
                role:user.role
             })
            res.json({ accessToken: accessToken })  
      }
    })  
}

export default RefreshToken


