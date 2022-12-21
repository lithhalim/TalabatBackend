
//requre element section 
import { decode } from 'base-64';
import { compare } from 'bcrypt';
import {Response,Request,NextFunction} from 'express';
import {Models,TableEnum} from "../../Quires/QuiresClass"


const BasicAuth= async (req:Request|any,res:Response,next:NextFunction)=>{

    
        let basicHeaderParts = req.body.headers.authorization.split(' ');  // ['Basic', 'KDHKJAHKJDSHJKASHJK']
        let encodedString = basicHeaderParts.pop();  // KDHKJAHKJDSHJKASHJK
        let decodedString = decode(encodedString); // "USERNAME:PASSWORD"
        let [email,password]=decodedString.split(":");


        try{
            //CHECK THE EMAIL IS CORRECT RO NOT
            const user = await Models.findAll(TableEnum.regusters,"email",email);


            //CHECK IF PASSWORD FROM HEADER MATCH WITH  PASSWORD FROM DATABASE
            const valid = await compare(password, user[0].password);

            //Check If The userName And Password Correct put The User Information In Request  and Comblite To Next Middelware
            if(valid){
                //Passing The Information In Request Object
                req.basicAuth=user
                next()
            }else{
                res.status(404).send("Error Paassword Or Email")
            }
        }
        catch (error) { 
            res.status(404);
            res.send(error);
        }
}

export default BasicAuth
