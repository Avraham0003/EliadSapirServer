const Products = require('../models/Product');
module.exports = {
    get_all_products: async (req, res) => { 
        try {
            const products = await Products.find();
            return res.json({
                products
            });
        } catch (error) {
            return res.status(500).json({
                message: "error in getting all products",
                error: error.message
            });
        }

    },

  
}