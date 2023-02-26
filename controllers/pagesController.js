const Page = require("../models/models")
const { validationResult } = require('express-validator')

class PagesController {
    async create(req, res) {
        try {
            const errors = validationResult(req)
            const {title, description, content, slug} = req.body
            if (errors.isEmpty()) {
                await Page.create({
                    title,
                    description,
                    content,
                    slug
                })
                const pages = await Page.findAll()
                return res.render('admin.ejs', {pages})
            } else {
                const error = 'Fields cannot be empty'
                const pages = await Page.findAll()
                const info = {
                    title,
                    description,
                    content,
                    slug
                }
                return res.render('admin.ejs', {pages, info, error})
            }

        } catch (e) {
            console.log(e)
        }
    }

    async getOne(req, res, next) {
        try {
            const {slug} = req.params
            const page = await Page.findOne({where: {slug}, raw: true})
            return res.render('page.ejs', {page: page})
        } catch (e) {
            console.log(e)
        }
    }

    async delete(req, res) {
        try {
            const {slug} = req.params
            await Page.destroy({where: {slug}})
            const pages = await Page.findAll()
            return res.redirect('/admin')
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new PagesController()