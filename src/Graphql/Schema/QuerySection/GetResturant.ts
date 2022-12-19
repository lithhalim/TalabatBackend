import { GraphQLList, GraphQLID } from "graphql";
import {RestaurentType} from "../../TypeItem/ResturantType";
import { Models,TableEnum } from "../../../Quires/QuiresClass";
import Database from "../../../Database/Database";

import { CutomModels } from "./CustomSql/CustomQuiers";
const ResturantQuery ={
    type:new GraphQLList(RestaurentType),
    args:{categories:{type:GraphQLID},limit:{type:GraphQLID},
    offset:{type:GraphQLID},TypeSelect:{type:GraphQLID},
    restaurantid:{type:GraphQLID},orders:{type:GraphQLID}},

    resolve(parent:any,args:any){

      switch (args.TypeSelect) {
        case "DependCatagories":
          return CutomModels.getCatagories(TableEnum.resturants,"categories",
               args.categories,args.limit,args.offset);
        case "DependResturantId":
          if(args.restaurantid!==undefined){
            return Models.findAll(TableEnum.resturants,"restaurantid"
              ,args.restaurantid)    
      
          }else{
            return  Models.findAll(TableEnum.resturants,
              null,null)   

          }

          
      }
      
    }
  }


  export {
    ResturantQuery
  }