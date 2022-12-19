import {Models,TableEnum} from "../../Quires/QuiresClass";
import {Request,Response} from "express"

const GetUsers= async(req:Request,res:Response)=>{
    if(req.params.data){
        const data=await Models.findAll(TableEnum.regusters,'regusterid',req.params.data)
        res.json(data)    
    }else{
        const data=await Models.findAll(TableEnum.regusters,null,null)
        res.json(data)    
    }
}

export default GetUsers