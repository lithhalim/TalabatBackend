import Database from "../../Database/Database";
import { TableEnum } from "../QuiresClass";

const CreateMethod=async(NameTable:TableEnum,Data:any)=>{
    //To Get The Data For The Value AND Attribute
    let KeyData=Object.keys(Data).join()
    let ValueData=Object.values(Data);


    //NumberColumn Added --->$1,$2,$3 
    let NumberValue=ValueData.map((a,i)=>(a=`$${i+1}`)).join(",")

    let sql=`INSERT INTO ${TableEnum[NameTable]} (${KeyData}) VALUES (${NumberValue})`;

    try{
        const DataUse=await Database.query(sql,ValueData)

    }catch (err:any){
        return err.detail
    }
}
export{
    CreateMethod
}

