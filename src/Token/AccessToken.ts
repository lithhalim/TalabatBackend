import { sign } from 'jsonwebtoken';
require('dotenv').config();

let secrete:any=process.env.ACCESS_TOKEN_SECRET

//Create The Access Key
const createAccessToken =(user:any)=> sign({

    //the information will save in payload section information of user
    fullName:user.fullName,
    image:user.image,
    regusterid:user.regusterid,
    role:user.role
},
//the segniture you use in the access token
secrete,

//the token will expire after these time
{expiresIn:"1d"}
);

export default createAccessToken
