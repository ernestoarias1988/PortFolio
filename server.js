require("dotenv").config
const express = require("express")
const cors = require("cors")
const path = require("path")
const publicPath = path.join(__dirname, '..','client', 'public');

const contactRoute = require("./route/contactRoute")

const app = express();

app.use(express.json())
app.use(cors())

app.use("/", contactRoute);

if(process.env.NODE_ENV === "production")
{
    app.use(express.static(publicPath));
    app.get('*',(req,res)=> {
        res.sendFile(path.join(publicPath,'index.html'))
    })
}

const port = process.env.PORT || 5000
app.listen(port, console.log(`Server started on port ${port}`));