const jwt = require('jsonwebtoken');


module.exports = {

     login: async(req,res)=>{
        try {
            
            
           const {password} = req.body;
    
           if(password===process.env.PASS){
    
                const token = jwt.sign(password, "humusimm");
                  return res.status(201).json({
                    success: true,
                    message: "admin login seccessfully",
                    token,
                    }); 
            } 
        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
            
        }

}
}