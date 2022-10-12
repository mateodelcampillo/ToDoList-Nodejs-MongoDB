import morgan from "morgan";
import express from "express";
import { create } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path"
const app = express();

app.set("views", path.join(__dirname, "views"))
let hbs = create({

    layoutsDir: path.join(app.get("views"), "layouts"),

    defaultLayout: "main",

    extname: ".hbs",

})

app.engine(".hbs", hbs.engine)

app.set("view engine", ".hbs")


// Middlewares
app.use(morgan("dev"))
app.use(express.urlencoded({extended: false}))
// Routes
app.use(indexRoutes)

//Static Files
app.use(express.static(path.join(__dirname,"public")))
export default app