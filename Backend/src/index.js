import app from "./app.js";
import connectDb from "./db/index.js";
const port = 4000;
connectDb()
.then(()=>{
    app.listen(port,()=>{
        console.log("listening on port 4000");
    })
})
.catch((error)=>{
    throw error;
})