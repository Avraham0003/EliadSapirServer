const Product = require('../models/Product');
module.exports = {
    get_all_products: async (req, res) => {
        try {
            const products = await Product.find();
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
    create_product: async (req, res) => {
        try {

            const {
                product_name,
                product_description,
                product_price
            } = req.body;


            if (product_name == null || product_description == null || product_price == null) {
                throw new Error('Please complete all the fields!');
            }
            if (!product_name || !product_description || !product_price) {
                throw new Error('Please complete all the fields!');
            }

            const new_product = new Product({
                product_name,
                product_description,
                product_price
            });

            await new_product.save();

            return res.json({
                message: "product created!"
            })
        } catch (error) {
            return res.status(500).json({
                message: "error in create product",
                error: error.message
            });
        }
    }


}