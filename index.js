require('dotenv').config()
const express = require('express')
const router = require('./routes/index')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const sequelize = require('./db')

const port = process.env.PORT
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())
app.use('/', router)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(port, () => console.log(`App is running on port ${port}`))
    } catch (e) {
        console.log(e)
    }
}

start()