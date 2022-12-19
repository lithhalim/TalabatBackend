import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } from "graphql";

const ItemsType=new GraphQLObjectType({
    name:"getAllItems",
    fields:()=>({
      itemid:{
        type:GraphQLString
      },
      price:{
        type:GraphQLInt
      },
      description:{
        type:GraphQLString,
      },
      productname:{
        type:GraphQLString,
      },
      quantity:{
        type:GraphQLInt
      },
      images:{
        type:GraphQLString
      },
      selectitemquentuty:{
        type:GraphQLInt,
      },
      resturantselect:{
        type:GraphQLString,
      },
    })
  })
  
export {
  ItemsType 
}