const Article = require('../models/Article');
module.exports = {
    get_all_articles: async (req, res) => { 
        try {
            const articles = await Article.find();
            return res.json({
                articles
            });
        } catch (error) {
            return res.status(500).json({
                message: "error in getting all articles",
                error: error.message
            });
        }

    },

  
}