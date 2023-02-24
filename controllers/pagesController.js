const Page = require("../models/models")

class PagesController {
    async create(req, res, next) {
        try {
            const {title, description, content, slug} = req.body
            const page = await Page.create({
                title,
                description,
                content,
                slug
            })
            return res.json(page)
        } catch (e) {
            console.log(e)
        }
    }

    async getOne(req, res, next) {
        try {
            const {slug} = req.params
            const page = await Page.findOne({where: {slug}, raw: true})
            console.log(page)
            return res.render('page.ejs', {page: page})
        } catch (e) {
            console.log(e)
        }
    }

    async delete(req, res, next) {
        try {

        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new PagesController()