import Database from "../../Database/Database";
import { TableEnum } from "../QuiresClass";

const DeleteFunction= async (NameTable:TableEnum,columnName:string,columnValue:string)=>{
    try{
        let sql=`DELETE FROM ${TableEnum[NameTable]} 
            WHERE ${columnName} = '${columnValue}';`

        const DataUse=await Database.query(sql);
        return "The Item Is Deleted"

        }catch(error:any){
        return(error.detail)
        }    
   }

export {
    DeleteFunction
}
