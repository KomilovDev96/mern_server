const express = require('express');
const path = require('path')
const dotenv = require('dotenv').config();
const db = require('./helpers/db')();
const fileUpload = require('express-fileupload');
const cors = require('cors')


// Router imports
const authRouter = require("./routes/auth.routes")
const mainRouter = require("./routes/main")
const fileRouter = require("./routes/file.routes")
const filePathMiddleware = require('./middleware/filepath.middleware')


const app = express()



app.use(express.json())
app.use(fileUpload({}))
app.use(filePathMiddleware(path.resolve(__dirname, 'files')))
app.use(cors())
app.use(express.static('static'))

//Router
app.use(mainRouter)
app.use("/api/auth", authRouter)
app.use("/api/files", fileRouter)

const PORT = process.env.PORT || "3000"
const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Portimiz localhost:${PORT} ko'tarildi`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()
