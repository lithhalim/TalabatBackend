import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLID } from "graphql";
import { Models,TableEnum } from "../../Quires/QuiresClass";


import {ItemsType} from "../TypeItem/ItemType";

const RestaurentType=new GraphQLObjectType({
    name:"getRestaurant",
    fields:()=>({
      restaurantid:{
        type:GraphQLString
      },
      restaurantname:{
        type:GraphQLString
      },
      images:{
        type:GraphQLString,
      },
      categories:{
        type:GraphQLString,
      },
      rate:{
        type:GraphQLString,
      },
      freedelivery:{
        type:GraphQLString,
      },
      allitems:{
        type:new GraphQLList(ItemsType),
        resolve(parent,args){
          return Models.findAll(TableEnum.itemes,
            "resturantselect",parent.restaurantid)   
        }
      }
    })
  })
  

  export {RestaurentType}