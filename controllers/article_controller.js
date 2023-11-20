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
    create_articles: async(req,res) => {
        try{
            const {
                article_name,
                article_description,
                article_owner
            } = req.body

            const new_article = new Article({
                article_name,
                article_description,
                article_owner
            });
            await new_article.save();
            
            return res.json({
                message: "article created!"
            })

        }catch(error){
            return res.status(500).json({
                message: "error to create article",
                error: error.message
            });
        }
    },

    delete_articles: async(req,res) =>{
        try {
            const article_id  = req.params.id;
            await Article.findByIdAndDelete(_id);
            return res.status(200).json({
                success: true,
                message: 'Article deleted successfully'
            })
        } catch (error) {
            return res.status(500).json({
                message: "error in delete article",
                error: error.message
        })
    }
    },
    update_articles :async(req,res)=>{
        try {
            await Article.findByIdAndUpdate(req.params.id,req.body);
    
            return res.status(200).json({
                success: true,
                message: 'article updated successfully',
    
            });
        } catch (error) {
            return res.status(500).json({
                message: "error to update article",
                error: error.message
            })
        }
    }


  
}