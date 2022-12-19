//The Connect Database
import Database from "../../../../Database/Database"


enum TableEnum{
    regusters,
    resturants,
    itemes
}

class Crud_Collection{

        async getCatagories(NameTable:TableEnum,columnName:string,
            columnValue:string,LIMIT:string,OFFSET:string){

            try{
                let sql=`SELECT * FROM  ${TableEnum[NameTable]} 
                WHERE ${columnName}='${columnValue}' LIMIT ${LIMIT} OFFSET ${OFFSET};`

                const DataUse=await Database.query(sql);

                return DataUse.rows

            }catch(error:any){
                    return error.detail
            }
        }

        async SearchResturant(NameTable:TableEnum,columnName:string,
            columnValue:string){

            try{

                let sql=`SELECT * FROM ${TableEnum[NameTable]} 
                WHERE ${columnName} LIKE '%${columnValue}%';`  

                const DataUse= await Database.query(sql)
                return DataUse.rows

            }catch(error:any){
                    return error.detail
            }
        }



        async CountNumber(NameTable:TableEnum,columnName:string,
            columnValue:string){

            try{

                let sql=`SELECT COUNT(*) FROM ${TableEnum[NameTable]} 
                WHERE ${columnName} = '${columnValue}';`  

                const DataUse= await Database.query(sql)
                return DataUse.rows

            }catch(error:any){
                    return error.detail
            }
        }



    
}

const CutomModels= new Crud_Collection;


export{
    CutomModels,
    TableEnum
}
