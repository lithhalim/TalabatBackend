import { Router } from 'express';
const router = Router()



//------------------------------------ Create Section ----------------------------------------//
import CreateResturant from '../Controllers/InformationResturant/CreateRestaurant';
import AllResturant from '../Controllers/InformationResturant/GetAllResturant';
import DeleteResturant from '../Controllers/InformationResturant/DeleteRestaurant';
import CountResturant from '../Controllers/ResturanItemControlls/GetCountResturant';



router.post("/createrestaurant",CreateResturant)
router.get("/AllResturant",AllResturant)
router.post("/DeleteResturant",DeleteResturant);
router.post("/getcount",CountResturant);



const  ResturantRoutes=router



export default ResturantRoutes
