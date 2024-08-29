import mongoose from 'mongoose';

const connectDb = async ()=>{
    try {
        await mongoose.connect(`mongodb+srv://aryanKaushal:Aru2311aa@cluster0.7oqqk.mongodb.net/TodoApp`);
        console.log("connected to mongodb");
        
    } catch (error) {
        console.log("error connecting",error);
    }
}
export default connectDb;