// import { Food } from "../Modules/users"

const {Food}= require('../Modules/users')

const updateUserDetailcontroller=(req,res)=>{
    
    // const {email}= req.body.userDetail.email
    const updateData=req.body
    // console.log(req.body)
    //  console.log(req.email)
    // console.log(req.body.userDetail.first_name)
    Food.findOneAndUpdate({email:req.email},{
    
        name:req.body.userDetail.first_name,
        lastName:req.body.userDetail.last_name,
        mobile_no:req.body.userDetail.mobile_number,
        location:req.body.userDetail.location
        
    },{new:true}).exec()
    
    .then((user)=>{
        // console.log(user)
        // const token=jwt.sign({email:req.body.email, role:req.body.role}, process.env.JWT_TOKEN, {expiresIn:"30d"})
        if(user!==null){
            res.status(200).json({ message: "User details updated successfully"});
        }else{
            res.status(404).json({ message: "User not found in database" });
        }

    }).catch((err)=>{
        res.status(500).json({message:"Internal Server Error", err:err})  

    })
    
}


module.exports={updateUserDetailcontroller}   
