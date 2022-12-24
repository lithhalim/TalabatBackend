'use strict'
//required the model will create and bycrebt for hashing
import { hash } from 'bcrypt';
import { Request, Response } from 'express';
import {Models,TableEnum} from '../../../Quires/QuiresClass';


const SignupControll= async(req:Request,res:Response)=>{
    //Get the Pawword To Hshed And Email To Search If Email Already Reguster
    const{password,email}=req.body;

    try{
        //Hashing Password Befor Insert Database
        let hashPassword=await hash(password,10);

        //Add New Hashing Password To Data
        req.body.password=hashPassword;

        //Check Database If Any User Have Same Email
        let user=await Models.findAll(TableEnum.regusters,"email",email);

        //If Email Is Taken Response Erorr
        if(user.length>0){
            res.json({status:"Email Is Taken"})
        }else{
            let datause= await Models.create(TableEnum.regusters,req.body)
            res.json({status:"Email Has Been Reguster"})         
        }

    }
    catch(err){ 
        res.status(404).send('There Is Problem In Register')
    }
}



export default SignupControll