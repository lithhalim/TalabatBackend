import Database from "../../Database/Database";
import { TableEnum } from "../QuiresClass";

const FindAllFunction= async (NameTable:TableEnum,columnName:string|null,
    columnValue:string|null)=>{

    try{
        //IF SEND ID SEARCH ONE CUTOMER
        if(columnName!==null){ 
            let sql=`SELECT * FROM  ${TableEnum[NameTable]} WHERE ${columnName}='${columnValue}';`

            const DataUse=await Database.query(sql);
            return DataUse.rows
        }else{
            let sql=`SELECT * FROM ${TableEnum[NameTable]};`;
            const DataUse=await Database.query(sql)
            return DataUse.rows
        }

    }catch(error:any){
            return error.detail
    }
    }

    export {
        FindAllFunction
    }