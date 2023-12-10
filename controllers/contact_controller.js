const Contact = require('../models/Contact');
module.exports = {
    get_all_contact: async (req, res) => { 
        try {
            const contact = await Contact.find();
            return res.json({
                contact
            });
        } catch (error) {
            return res.status(500).json({
                message: "error in getting all contact",
                error: error.message
            });
        }

    },
    create_contact: async(req,res) => {
        try{
            const {
                name,
                phone,
                category
            } = req.body

            const new_contact = new Contact({
                name,
                phone,
                category
            });
            await new_contact.save();
            
            return res.status(200).json({
                message: "Contact created!"
            })

        }catch(error){
            return res.status(500).json({
                message: "error to create contact",
                error: error.message
            });
        }
    },

    delete_contact: async(req,res) =>{
        try {
            const contact_id  = req.params.id;
            await Contact.findByIdAndDelete(contact_id);
            return res.status(200).json({
                success: true,
                message: 'contact deleted successfully'
            })
        } catch (error) {
            return res.status(500).json({
                message: "error in delete contact",
                error: error.message
        })
    }
    },
    get_by_id:async (req,res)=>{
        try {
            const id = req.params.id
            const contact = await Contact.findById(id);
            return res.json({
                contact
            });
        } catch (error) {
            return res.status(500).json({
                message: "error in getting your contact",
                error: error.message
            });
        }
    },
    toggle_checked: async (req,res)=>{
        try {
            const { contact_id, change_to } = req.body;
        
            // Using await to make sure findByIdAndUpdate completes before moving on
            const updatedContact = await Contact.findByIdAndUpdate(contact_id, { checked: change_to });
        
            // Checking if the contact was not found
            if (!updatedContact) {
                return res.status(404).json({
                    message: "Contact not found",
                });
            }
        
            res.status(200).json({
                message: "checked has been changed to " + change_to,
            });
        
        } catch (error) {
            return res.status(500).json({
                message: "Error in toggle checked",
                error: error.message,
            });
        }
        
    }


  
}