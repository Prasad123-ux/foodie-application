// import { Food } from "../Modules/users"
const {Food} = require('../Modules/users')
const updateLocationController= (req, res)=>{
    console.log(req.body.data.firstName)
    Food.findOneAndUpdate({email:req.email}, {
        name:req.body.data.firstName,
        lastName:req.body.data.lastName,
        pinCode:req.body.data.pinCode,
        city:req.body.data.city,
        location:req.body.data.location,
        mobile_no:req.body.data.mobile_no,
        state:req.body.data.state,
        landmark:req.body.data.address
    }, {new:true}).exec()
    .then((user)=>{
        console.log(user)
          // const token=jwt.sign({email:req.body.email, role:req.body.role}, process.env.JWT_TOKEN, {expiresIn:"30d"})
          if(user!==null){
            res.status(200).json({ message: "User location updated successfully"});
        }else{
            res.status(404).json({ message: "User not found in database" });
        }
    }).catch((err)=>{
        res.status(400).json({message:"user detail not updated"})

    })
}

module.exports={updateLocationController}