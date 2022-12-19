import { Router } from 'express';
const router = Router()

//BASIQ AUTH REQUIRE
import BasicAuth   from "../Middleware/Authntication/BasicAuth"
import BarearAuth from '../Middleware/Authntication/BarearAuth';




//ALL MEDILWARE FUNCTION ARE USE
import SignupControll from '../Controllers/AuthControllers/Signin&Signup&signout/SignupControll';
import SigninControll from '../Controllers/AuthControllers/Signin&Signup&signout/SigninControll';
import SignoutControll from '../Controllers/AuthControllers/Signin&Signup&signout/LogoutControll';
import RefreshToken from '../Controllers/AuthControllers/RefreshToken';

router.post("/signin",BasicAuth,SigninControll)
router.post("/signup",SignupControll)
router.post("/logout/:data",SignoutControll);
router.post("/token",RefreshToken)





import GetUsers from '../Controllers/AuthControllers/GetUser';
router.get('/getUser/:data',GetUsers);




//-------------------------------------Forget Password Section ------------------------------------------//

import ForgetPassword from '../Controllers/AuthControllers/ForgetPassword/ForgetPassword';
import UpdatePassword from '../Controllers/AuthControllers/ForgetPassword/UpdatePass';
import SindGrid from '../Controllers/AuthControllers/ForgetPassword/SindGrid';
 

router.post("/forgetPassword",ForgetPassword)
router.post("/sindgrid",SindGrid )
router.post("/updatePass",UpdatePassword)








const AuthRoutes=router

export default AuthRoutes
