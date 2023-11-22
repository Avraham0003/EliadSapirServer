const jwt = require('jsonwebtoken');


module.exports = {

     login: async(req,res)=>{
        try {            
           let {password} = req.body;3
           password = password.password;
    
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
                console.log(password);
                return res.status(401).json({
                    success: false,
                    message: "unauthorized!"
                }); 
            }
        } catch (error) {
            return res.status(500).json({
                success: false,
                error: error.message
            });
            
        }

}
}