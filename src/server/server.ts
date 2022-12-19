
'use strict'
import express, { urlencoded, json, } from 'express';
const app = express();
import { createServer } from 'http';
import cors from "cors";
import cookieParser from 'cookie-parser';
app.use(cookieParser())
require("dotenv").config();



app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cors({
  origin: '*',
  methods:["GET","POST","PUT","DELETE"],
  credentials:true,//access-control-allow-credentials:true
}))




//--------------------------------------------socket io section ----------------------------------------//

import { Server } from "socket.io";

const server = createServer(app);
const io=new Server(server,{
  cors:{
      origin: '*',
      methods:["GET","POST","PUT","DELETE"],
      credentials:true,//access-control-allow-credentials:true

  }
})



import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema } from "graphql";
import { RootQuery } from '../Graphql/Schema/schema';

const Schema=new GraphQLSchema({query:RootQuery})
app.use('/graphql', graphqlHTTP({
  schema: Schema,
  graphiql: true,
}));




//-----------------------------------------------routes section--------------------------------------------//
import AuthRoutes from '../Routes/AuthRoutes';
app.use(AuthRoutes)

import ItemsResturantRoutes from '../Routes/ItemsResturantRoutes';
app.use(ItemsResturantRoutes);

import ResturantRoutes from '../Routes/ResturantRoutes';
app.use(ResturantRoutes);



//----------------------------------------Error Handeler-----------------------------------------------------//
import NotFound404 from "../Middleware/400&500/404";
import ErrorHandeler from "../Middleware/400&500/500";

app.use(ErrorHandeler);
app.use(NotFound404);


//----------------------------------------DataBase Connection----------------------------------------------//

async function start(PORT:any){
  server.listen(PORT, async() => {
        try {
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }    
      console.log(`Example app listening on port ${PORT}`)
    })
};
      
export {
  server,start
}
