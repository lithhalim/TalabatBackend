import { sign } from 'jsonwebtoken';
require('dotenv').config();

let secrete:any=process.env.REFRESH_TOKEN_SECRET
//create the refresh token 
const createRefreshToken =(user:any)=> sign({

    //the information will save in payload section information of user
    fullName:user.fullName,
    image:user.image,
    regusterid:user.regusterid,
    role:user.role

    },
    //the signeture you use in the access token
    secrete ,

    //the token will expire after these time
    {expiresIn:"365d"}
);

export default createRefreshToken