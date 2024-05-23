const { foodCategory } = require("../../Modules/foodCategory");
const { foodItem } = require("../../Modules/foodItem");

const addFoodController = (req, res) => {
    // console.log(req.body.productData.name)
    // console.log(req.body)
    const foodObject = new foodItem({
        name: req.body.productData.name,
        CategoryName: req.body.productData.category,
        description: req.body.productData.description,
        price: req.body.productData.price,
        address:req.body.productData.address,
        discount: req.body.productData.discount,
        type: req.body.productData.type,
        foodImages:req.body.productData.images,

    });

    foodObject.save()
        .then(() => {
              foodCategory.findOne({CategoryName:req.body.productData.categoryName}).exec()
              .then((user)=>{
                // console.log(user)
                // console.log(req.body.productData.category)
                // console.log(user)
                if(user===null){
                     const foodCategoryObject=new foodCategory({
                        CategoryName:req.body.productData.category
                     })
                     foodCategoryObject.save().then(()=>{
                        res.status(200).json({success:true , message:"data saved successfully"})

                     }).catch((err)=>{
                      res.status(400).json({success:false, message:"data not saved", err:err})
                     })
                }else{
                    res.status(200).json({success:true, message:"data saved successffuly but category already have registered"})
                }
              })
        
        })
        .catch((err) => {
            res.status(500).json({ success: false, message: 'Failed to save data', err:err });
        });
};

 module.exports = { addFoodController };
