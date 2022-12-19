import { Router } from 'express';
const router = Router()



//------------------------------------ Create Section ----------------------------------------//
import CreateItemsResturant from '../Controllers/ResturanItemControlls/CreateItem';
router.post("/createItems",CreateItemsResturant)


const ItemsResturantRoutes=router

export default ItemsResturantRoutes
