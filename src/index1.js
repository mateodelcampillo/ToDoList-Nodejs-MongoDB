
import app from "./app"
import { PORT } from "./config";
import database from "./database.js"
app.listen(PORT);
console.log(`Server Listening on port`, PORT);