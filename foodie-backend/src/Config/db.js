const mongoose= require('mongoose')


mongoose.connect(`mongodb://0.0.0.0/foods`)
.then(()=>{
    console.log("connected",)

}).catch((e)=>{
    console.log("not connected", )
}
)

module.exports={mongoose}