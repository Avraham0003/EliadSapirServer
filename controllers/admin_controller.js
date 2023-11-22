const jwt = require('jsonwebtoken');


module.exports = {

     login: async(req,res)=>{
        try {            
           const {password} = req.body;
    
           if(password===process.env.PASS){
                 const payload ={
                    user: password 
                } 
                const token = jwt.sign(payload, process.env.JWT); 
                  return res.status(201).json({
                    success: true,
                    message: "admin login seccessfully",
                    token
                    }); 
            }
            else{
                return res.status(401).json({
                    message: "unauthorized!"
                }); 
            }
        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
            
        }

}
}