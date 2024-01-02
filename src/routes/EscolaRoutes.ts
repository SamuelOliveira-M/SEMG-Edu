


import express  from "express";


const escolaRoutes = express.Router();

escolaRoutes.use("/escola",(request,response)	=>{
	response.send("Hello, I'm running in a cotainer !")
})

export default escolaRoutes;
