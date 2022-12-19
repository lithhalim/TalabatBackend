import bcrypt from 'bcrypt';
import { Models,TableEnum } from "../../../Quires/QuiresClass";
import {Request,Response} from "express"
const UpdatePassword= async(req:Request,res:Response)=>{
        let hashPassword=await bcrypt.hash(req.body.password,10);
        const datause=await Models.update(TableEnum.regusters,
                "regusterid",req.body.regusterid,
                {password:hashPassword})  

        res.json(datause);
}

export default UpdatePassword