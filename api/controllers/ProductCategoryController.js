/**
 * ProductCategoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getCategories:function(req,res){
        ProductCategory.find({},(err,categories)=>{
            if(err) return err
            res.json(categories);
        })
    },
    getCategory:function(req,res){
        res.send("Accessed getcategory")
    },
    addCategory:function(req,res){
        // let category=req.body.category
        // categoryobj={CategoryName:category}
        // ProductCategory.create(categoryobj).fetch().exec(function(err,result){
        //     if(err) return err

        // })
        res.send("Accessed addcategory")
    }
};

