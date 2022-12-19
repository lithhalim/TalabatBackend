
import {Request,Response} from "express";
import { Models,TableEnum } from "../../Quires/QuiresClass";

const AllResturant= async(req:Request,res:Response)=>{
    let data=await Models.findAll(TableEnum.resturants,null,null)
    res.json(data)
}

export default AllResturant