const jwt = require('jsonwebtoken');


module.exports = {

    
  authToken: async (req, res) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new Error("no token provided");
      }

      const bearer = token.split(" ")[1];

      const decode = jwt.verify(bearer, process.env.JWT_SECRET);

      const user = decode.user;
      if (user === process.env.PASS ){

        return res.status(201).json({
            success: true,
            message: "user authoraized",
            token,
            user: process.env.PASS
          });
      }
      else{
        return res.status(401).json({
            message: "unauthoraized",
          });
      }

    } catch (error) {
      return res.status(401).json({
        message: "unauthoraized",
        error: error.message,
      });
    }
  },

     login: async(req,res)=>{
        try {            
           let {password} = req.body;
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