import { Router } from 'express';
const router = Router()



//------------------------------------ Create Section ----------------------------------------//
import CreateResturant from '../Controllers/InformationResturant/CreateRestaurant';
import AllResturant from '../Controllers/InformationResturant/GetAllResturant';
import DeleteResturant from '../Controllers/InformationResturant/DeleteRestaurant';



router.post("/createrestaurant",CreateResturant)
router.get("/AllResturant",AllResturant)
router.post("/DeleteResturant",DeleteResturant);


const  ResturantRoutes=router



export default ResturantRoutes
