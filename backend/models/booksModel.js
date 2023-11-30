const mongoose=require("mongoose");
const bookSchema=new mongoose.Schema({
    bookname:{
        type:String,requires:true
    },
    description:{
        type:String,requires:true
    },
    author:{
        type:String,requires:true
    },
    
    image:{
        type:String,requires:true
    },
    price:{
        type:Number,requires:true
    },
});
module.exports=new mongoose.model("books",bookSchema);
