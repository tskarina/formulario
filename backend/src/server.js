import express from "express";
import cors from "cors";
import router from "./routes/route.js";

const server = express();

server.use(cors());
server.use(express.json());
server.use(router);
server.listen(3001, () => {
  console.log("Server is running on port 3001");
});
