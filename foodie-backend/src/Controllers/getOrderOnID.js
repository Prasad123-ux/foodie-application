
const { ProductData } = require('../Modules/Products')
const {foodItem} = require('../Modules/foodItem')

const getOrderOnID=(req, res)=>{

    const {id}= req.body
    //  console.log(req.body)

     ProductData.findOne({_id:id}).exec()
    //  console.log(id)
     .then((user)=>{
         console.log(user)
        if(user!==null){
            // console.log(user)s
            res.status(200).json({data:user})
        }else{
            res.status(500).json({message:"data not found"})
        }


     }).catch((err)=>{
        res.status(500).json({error:err})
     })

}


module.exports={getOrderOnID}