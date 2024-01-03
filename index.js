import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";

const __filePath = fileURLToPath(import.meta.url);
const __dirname = dirname(__filePath);

const app = express();
let port = 3000;

const getDay = () => {
    const now = new Date();
    const day = now.getDay();

    if(day===0 || day==6){
        return 'weekend';
    }
    return "weekday";
}

app.get("/", (req, res) => {
    console.log("Hello we are in");
    const day = getDay();
    res.render(__dirname+"/views/index.ejs", {Day:day})
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
    console.log(__filePath)
    console.log(__dirname)
})