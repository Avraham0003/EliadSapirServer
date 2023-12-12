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
                product_image
            } = req.body;


            if (product_name == null || product_description == null || product_image == null) {
                throw new Error('Please complete all the fields!');
            }
            if (!product_name || !product_description || !product_image) {
                throw new Error('Please complete all the fields!');
            }

            const new_product = new Product({
                product_name,
                product_description,
                product_image
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
},
delete_product: async (req,res) => {
        try {
            const product_id  = req.params.id;
            await Product.findByIdAndDelete(product_id);
            return res.status(200).json({
                success: true,
                message: 'Product deleted successfully'
            })
        } catch (error) {
            return res.status(500).json({
                message: "error in delete product",
                error: error.message
        })
    }
},
update_product: async(req,res) =>{
    try {
        await Product.findByIdAndUpdate(req.params.id,req.body);

        return res.status(200).json({
            success: true,
            message: 'product updated successfully',

        });
    } catch (error) {
        return res.status(500).json({
            message: "error to update product",
            error: error.message
        })
    }
},
get_by_id:async (req,res)=>{
    try {
        const id = req.params.id
        const product = await Product.findById(id);
        return res.json({
            product
        });
    } catch (error) {
        return res.status(500).json({
            message: "error in getting just one product",
            error: error.message
        });
    }
}

}