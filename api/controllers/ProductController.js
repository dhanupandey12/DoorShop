/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  addpost:function(req,res){

    utilService.mkdirp('/assets/images/Product-Images',function(err){
        return console.log(err);
    });
    utilService.mkdirp('/assets/images/Product-Images/'+req.body.title,function(err){
        return console.log(err);
    });
    var productImage = req.files.image;
    var imageUrl='/assets/images/Product-Images/'+req.body.title+'/'+req.files.image.name;
    productImage.mv(imageUrl,function(err){
      return console.log(err);
    });
    let productobj={
    //   ShopId:req.body.shopid,
      ShopId:123,
      ProductName:req.body.name,
      Description:req.body.description,
      ProductImagesPaths:imageUrl,
      Quantity:req.body.quantity,
      Weight:req.body.weight,
      Price:req.body.price
    }
    Product.create(productobj).fetch().exec(function(err,product){
        if(err) return err
        res.json(product)
    })
  },
  getproducts:function(req,res){
      res.send("Accessed getproducts")
  }

};

