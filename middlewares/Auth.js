const Admin = require('../controllers/admin_controller');

module.exports = async (req,res) => {
    if (req.headers && req.headers.adminlogin) {
        const token = req.headers.adminlogin.split(' ')[1];
    
        try {
          const adminconnect = jwt.verify(token, process.env.PASS);
          console.log(adminconnect);
          const admin = await Admin.findById(adminconnect.admin);
    
          if (!admin) {
            return res.json({ success: false, message: 'unauthorized access!' });
          }
          req.admin = admin;
          next();
        } catch (error) {
          if (error.name === 'JsonWebTokenError') {
            return res.json({ success: false, message: 'unauthorized access!' });
          }
          if (error.name === 'TokenExpiredError') {
            return res.json({
              success: false,
              message: 'sesson expired try sign in!',
            });
          }
    
          res.res.json({ success: false, message: 'Internal server error!' });
        }
      } else {
        res.json({ success: false, message: 'unauthorized access!' });
      }
    
}