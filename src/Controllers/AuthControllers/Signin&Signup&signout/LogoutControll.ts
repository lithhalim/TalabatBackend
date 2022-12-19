import { Models,TableEnum } from "../../../Quires/QuiresClass";


import {Response,Request,NextFunction} from "express"

const SignoutControll= async(req:Request,res:Response)=>{
    await Models.update(TableEnum.regusters,"regusterid",
          req.params.data,{refreshtoken:""})
    
    res.json({result:"deletes Refresh Token"})
}

export default SignoutControll