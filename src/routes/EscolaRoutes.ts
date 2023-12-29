


import express  from "express";


const escolaRoutes = express.Router();

escolaRoutes.use("/user",(request,response)	=>{
	response.send("Hello, I'm running in a cotainer !")
})

export default escolaRoutes;
