import mongoose from "mongoose"

(async () => {
  try{
    const db = await mongoose.connect("mongodb://127.0.0.1:27017/crud-mongo");
  console.log("DB connected to", db.connection.name);

}
  catch(e){
    console.log(e)
  }
})();

