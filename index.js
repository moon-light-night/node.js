import express from "express"
import mongoose from "mongoose"
import fileUpload from 'express-fileupload'
import router from './router.js'

const PORT = 5000
const DB_URL = 'mongodb+srv://user:user@cluster0.mly3y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))
app.use('/api', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(PORT, () => {
            console.log(`SERVER STARTED ON PORT ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

startApp()