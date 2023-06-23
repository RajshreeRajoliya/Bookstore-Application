import mongoose from 'mongoose';


const Connection = async()=>{
 try{
await mongoose.connect("mongodb://rajshreerajoliya14:SCRAM@ac-fm25sa8-shard-00-00.qddfppg.mongodb.net:27017,ac-fm25sa8-shard-00-01.qddfppg.mongodb.net:27017,ac-fm25sa8-shard-00-02.qddfppg.mongodb.net:27017/?ssl=true&replicaSet=atlas-327yt0-shard-0&authSource=admin&retryWrites=true&w=majority");
console.log("Database Connected")
 } catch (e){
console.log(e)
 }
}

export default Connection;