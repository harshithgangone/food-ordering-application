import jwt from "jsonwebtoken"


const authMiddleware = async (req,res,next) => {
    const {token}=req.headers;
    console.log(token);
    
    if(!token){
        res.json({success:false,message:"not authorized login again"})
    }
    try {
        const token_decode = jwt.verify(token,process.env.JWT_SECRET)
        req.body.userId=token_decode.id;
        console.log(req.body.userId);
        
        next();
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"errorrrrr"})
        
    }
    
}

export default authMiddleware;