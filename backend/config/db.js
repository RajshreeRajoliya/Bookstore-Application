const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const ConnectDB = () => {
  mongoose
    .connect("mongodb://rajshreerajoliya14:SCRMA@ac-fm25sa8-shard-00-00.qddfppg.mongodb.net:27017,ac-fm25sa8-shard-00-01.qddfppg.mongodb.net:27017,ac-fm25sa8-shard-00-02.qddfppg.mongodb.net:27017/?ssl=true&replicaSet=atlas-327yt0-shard-0&authSource=admin&retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Database connected ${data.connection.host}`);
    });
};

module.exports = ConnectDB;
