require("dotenv").config();

import { Models,TableEnum } from '../../../Quires/QuiresClass';
import {Request,Response} from "express"

const ForgetPassword=async(req:Request,res:Response)=>{
    try{
        let dataSearch=await Models.findAll(TableEnum.regusters,"email",req.body.email)
        res.json(dataSearch)
    }catch(err){
        res.json({result:"Wroong Email ..."})
    }   
}

export default ForgetPassword