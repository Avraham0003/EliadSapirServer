const Zorkesher = require('../models/ZorKesher');
module.exports = {
    get_all_zorkesher: async (req, res) => { 
        try {
            const zorkesher = await Zorkesher.find();
            return res.json({
                zorkesher
            });
        } catch (error) {
            return res.status(500).json({
                message: "error in getting all zorkesher",
                error: error.message
            });
        }

    },
    create_zorkesher: async(req,res) => {
        try{
            const {
                user_name,
                user_phone,
                user_reason
            } = req.body

            const new_zorkesher = new Zorkesher({
                user_name,
                user_phone,
                user_reason
            });
            await new_zorkesher.save();
            
            return res.json({
                message: "zorkesher created!"
            })

        }catch(error){
            return res.status(500).json({
                message: "error to create zorkesher",
                error: error.message
            });
        }
    },

    delete_zorkesher: async(req,res) =>{
        try {
            const zorkesher_id  = req.params.id;
            await Zorkesher.findByIdAndDelete(zorkesher_id);
            return res.status(200).json({
                success: true,
                message: 'zorkesher deleted successfully'
            })
        } catch (error) {
            return res.status(500).json({
                message: "error in delete zorkesher",
                error: error.message
        })
    }
    },
    get_by_id:async (req,res)=>{
        try {
            const id = req.params.id
            const zorkesher = await Zorkesher.findById(id);
            return res.json({
                zorkesher
            });
        } catch (error) {
            return res.status(500).json({
                message: "error in getting your zorkesher",
                error: error.message
            });
        }
    }


  
}