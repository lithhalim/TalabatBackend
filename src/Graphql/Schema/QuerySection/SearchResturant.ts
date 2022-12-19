import { GraphQLList, GraphQLID } from "graphql";
import Database from "../../../Database/Database";
import {TableEnum} from "../../../Quires/QuiresClass"

import {RestaurentType} from "../../TypeItem/ResturantType";
import { CutomModels } from "./CustomSql/CustomQuiers";


const SearchQuery ={
    type:new GraphQLList(RestaurentType),
    args:{restaurantname:{type:GraphQLID}},

    resolve(parent:any,args:any){
      return CutomModels.SearchResturant(TableEnum.resturants,
        "restaurantname",args.restaurantname)
    }
}

export {
  SearchQuery
}