import { GraphQLList, GraphQLID } from "graphql";
import {Models, TableEnum} from "../../../Quires/QuiresClass"
import {RestaurentType} from "../../TypeItem/ResturantType";


const SearchQuery ={
    type:new GraphQLList(RestaurentType),
    args:{restaurantname:{type:GraphQLID}},

    resolve(parent:any,args:any){
      return Models.search(TableEnum.resturants,
        "restaurantname",args.restaurantname)      
    }
}

export {
  SearchQuery
}