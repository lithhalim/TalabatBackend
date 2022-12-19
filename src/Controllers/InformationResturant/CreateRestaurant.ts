import { Models,TableEnum } from "../../Quires/QuiresClass";
import {Request,Response} from "express";

const CreateResturant= async(req:Request,res:Response)=>{
   req.body.forEach(async(data:any)=>{
     await Models.create(TableEnum.resturants,data)
   })
   res.json("Create Restaurant");   
}

export default CreateResturant