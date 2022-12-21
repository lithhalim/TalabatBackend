import Database from "../../Database/Database"
import { TableEnum } from "../QuiresClass"

const SearchFunction=async (NameTable:TableEnum,columnName:string,
    columnValue:string)=>{

    try{

        let sql=`SELECT * FROM ${TableEnum[NameTable]} 
        WHERE ${columnName} LIKE '%${columnValue}%';`  

        const DataUse= await Database.query(sql)
        return DataUse.rows

    }catch(error:any){
            return error.detail
    }
}


export{
    SearchFunction
}