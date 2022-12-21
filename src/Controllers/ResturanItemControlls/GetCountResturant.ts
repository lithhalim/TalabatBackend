import {Response,Request} from "express";
import { Models, TableEnum } from "../../Quires/QuiresClass";

const CountResturant=async(req:Request,res:Response)=>{
   let Datause= await Models.count(TableEnum.resturants,
        req.body.WHEREDATA,req.body.FilterData)

    res.json(Datause)
}

export default CountResturant;

