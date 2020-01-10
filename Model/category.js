const mongoose=require('mongoose');
const CategorySchema=new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
},{timestamps:true})

module.exports=mongoose.model('category',CategorySchema);