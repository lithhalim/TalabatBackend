import { GraphQLList, GraphQLID } from "graphql";
import {RestaurentType} from "../../TypeItem/ResturantType";
import { Models,TableEnum } from "../../../Quires/QuiresClass";

import { CutomModels } from "./CustomSql/CustomQuiers";
const ResturantQuery ={
    type:new GraphQLList(RestaurentType),
    args:{WHEREDATA:{type:GraphQLID},
    limit:{type:GraphQLID},
    offset:{type:GraphQLID},
    TypeSelect:{type:GraphQLID},
    restaurantid:{type:GraphQLID},
    filterdata:{type:GraphQLID}},

    resolve(parent:any,args:any){

      switch (args.TypeSelect) {
        case "DependCatagories":
          return CutomModels.getCatagories(TableEnum.resturants,
               args.WHEREDATA,args.limit,args.offset,args.filterdata);
                 
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