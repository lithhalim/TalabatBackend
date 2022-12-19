
import { Models,TableEnum } from "../../Quires/QuiresClass";
import {Request,Response} from "express"
const DeleteResturant= async(req:Request,res:Response)=>{

   let Data=await   Models.delete(TableEnum.resturants,
      "restaurantId",req.params.data);

   res.json("Delete Restaurant");
}

export default DeleteResturant