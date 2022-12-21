//The Connect Database
import Database from "../../../../Database/Database"


enum TableEnum{
    regusters,
    resturants,
    itemes
}

class Crud_Collection{

        async getCatagories(NameTable:TableEnum,WHEREDATA:string,
            LIMIT:string,OFFSET:string,FilterData:any){
            try{
                let sql=`SELECT * FROM  ${TableEnum[NameTable]} 
                WHERE ${WHEREDATA} ${FilterData} 
                LIMIT ${LIMIT} OFFSET ${OFFSET} ;`;
                
                const DataUse= Database.query(sql);
                return (await DataUse).rows
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
