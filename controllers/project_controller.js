const Project = require('../models/Project');

module.exports = {
    get_all_project: async (req, res) => { 
        try {
            const projects = await Project.find();
            return res.json({
                projects
            });
        } catch (error) {
            return res.status(500).json({
                message: "error in getting all projects",
                error: error.message
            });
        }

    },
    create_project: async(req,res) => {
        try{
            const {
                project_name,
                project_description,
                project_photo,
                youtube_url
            } = req.body

            const new_project = new Project({
                project_name,
                project_description,
                project_photo,
                youtube_url,
                favorite: false
            });
            await new_project.save();
            
            return res.json({
                message: "project created!"
            })

        }catch(error){
            return res.status(500).json({
                message: "error to create project",
                error: error.message
            });
        }
    },

    delete_project: async(req,res) =>{
        try {
            const project_id  = req.params.id;
            await Project.findByIdAndDelete(project_id);
            return res.status(200).json({
                success: true,
                message: 'project deleted successfully'
            })
        } catch (error) {
            return res.status(500).json({
                message: "error in delete project",
                error: error.message
        })
    }
    },
    update_project :async(req,res)=>{
        try {
            await Project.findByIdAndUpdate(req.params.id,req.body);
    
            return res.status(200).json({
                success: true,
                message: 'project updated successfully',
    
            });
        } catch (error) {
            return res.status(500).json({
                message: "error to update project",
                error: error.message
            })
        }
    },
    get_by_id:async (req,res)=>{
        try {
            const id = req.params.id
            const project = await Project.findById(id);
            return res.json({
                project
            });
        } catch (error) {
            return res.status(500).json({
                message: "error in getting just one project",
                error: error.message
            });
        }
    },

    make_favorite: async (req,res)=>{
        try {
            const id = req.params.id;
            await Project.updateMany({},{ favorite: false });
            await Project.findOneAndUpdate({_id: id}, {favorite : true});

            res.status(200).json({
            "success": true,
            });
            
        } catch (error) {
            res.status(500).json({
            "success": false,
            });
            
        }
    },

        get_favorite: async (req,res)=>{
        try {
            const project = await Project.findOne({favorite: true});

            res.status(200).json({
                project: project
            })
        } catch (error) {
            res.status(500).json({
                message: "error!"
            })
        }
        }

  
}