import  jwt from  "jsonwebtoken";


export const authMiddleware = (req,res,next)=>{

const {token} = req.headers;



  if(!token){
    res.json({sucess:false,message:"Please login to continue"})
    return
  }
 
  try {
   
    let decodeToken = jwt.verify(token,process.env.JWT_SECRET);
    req.body.userId = decodeToken.id;
    console.log(req.body.userId)
    next()
    
  } catch (error) {
    console.log(error);
    res.json({sucess:false,message:error.message});
    
  }

 


}