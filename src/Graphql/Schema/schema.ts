import { GraphQLObjectType } from "graphql";

import {ResturantQuery} from "../Schema/QuerySection/GetResturant";
import {SearchQuery} from "../Schema/QuerySection/SearchResturant";

const RootQuery=new GraphQLObjectType({
  name:"RootObject",
  fields:{
    GetResturant:ResturantQuery,
    SearchResturant:SearchQuery
  }
})

export {
  RootQuery
}

