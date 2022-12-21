import Database from "../../Database/Database";
import { TableEnum } from "../QuiresClass";

const UpdateFunction= async (NameTable:TableEnum,columnName:string|null,
    columnValue:string|null,data:any)=>{

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


export {
    UpdateFunction
}