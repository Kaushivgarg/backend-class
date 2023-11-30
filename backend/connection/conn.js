const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://kaushiv0749:kaushiv0749@cluster0.pxq01pd.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("Connected"));