const Router = require('express')
const router = new Router()
const pagesController = require('../controllers/pagesController')
const adminController = require('../controllers/adminController')
const {check} = require("express-validator")

router.get('/', (req, res) => {
    return res.render('index.ejs')
})
router.get('/favicon.ico', (req, res, next) => {
    return next()
})
router.post('/', adminController.auth)
router.get('/admin', adminController.check)
router.post('/admin', [check('title').not().isEmpty(),
    check('description').not().isEmpty(),
    check('slug').not().isEmpty(),
    check('content').not().isEmpty()], pagesController.create)
router.get('/:slug', pagesController.getOne)
router.post('/:slug', pagesController.delete)

module.exports = router