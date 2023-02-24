const bcrypt = require("bcrypt")
const Page = require("../models/models")

class AdminController {
    async auth(req, res, next) {
        try {
            const pass = req.body.password
            res.cookie('auth', await bcrypt.hash(pass, 6), {
            maxAge: 60 * 60 * 1000,
            httpOnly: true,
            secure: true,
            })
            return res.redirect('/admin')
        } catch (e) {
            console.log(e)
        }
    }

    async check(req, res, next) {
        try {
            const {auth} = req.cookies
            if (await bcrypt.compare(process.env.PASSWORD, auth)) {
                const pages = await Page.findAll()
                return res.render('admin.ejs', {pages})
            } else {
                return res.redirect('/')
            }
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new AdminController()