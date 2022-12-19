import {Request,Response} from "express";
import { Models,TableEnum } from "../../Quires/QuiresClass";

const CreateItemsResturant= async(req:Request,res:Response)=>{
    req.body.forEach(async(datause:any)=>{
        let data=await Models.create(TableEnum.itemes,datause)
    })
    res.json("Create New Item Restaurant")
}

export default CreateItemsResturant