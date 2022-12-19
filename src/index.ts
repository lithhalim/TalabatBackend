
require("dotenv").config();
import { start } from './server/server';
let PORT = process.env.PORT || 3000;
start(PORT);
