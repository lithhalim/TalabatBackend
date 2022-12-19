//The Connect Database
import Database from "../Database/Database";


enum TableEnum{
    regusters,
    resturants,
    itemes
}

class Crud_Collection{

    //------------------------------------------Create Section ------------------------------------------//
    async create(NameTable:TableEnum,Data:any){
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

    //-------------------------------------------Find Section ------------------------------------------//
        async findAll(NameTable:TableEnum,columnName:string|null,columnValue:string|null){

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

    //------------------------------------------Update Section ------------------------------------------//
    async update(NameTable:TableEnum,columnName:string|null,
          columnValue:string|null,data:any){

        let KeyData=Object.keys(data);
        let ValueData=Object.values(data);
        let DataSet=KeyData.map((data,i)=>{
            return `${data}='${ValueData[i]}'`
        })


        try{
                let sql=`UPDATE ${TableEnum[NameTable]} SET ${DataSet.join(",")} 
                    WHERE ${columnName} = '${columnValue}';`

                

                let DataUse=await Database.query(sql);
                return "The Item Is Updated"
            }catch(err){
                return(err)
        }

    }


    //---------------------------------------------Delete Section ---------------------------------------//
   async delete(NameTable:TableEnum,columnName:string,columnValue:string){
        try{
            let sql=`DELETE FROM ${TableEnum[NameTable]} 
                WHERE ${columnName} = '${columnValue}';`
    
            const DataUse=await Database.query(sql);
            return "The Item Is Deleted"

            }catch(error:any){
            return(error.detail)
            }    

       }
    
}

const Models= new Crud_Collection;


export{
    Models,
    TableEnum
}
