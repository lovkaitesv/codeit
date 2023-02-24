const Router = require('express')
const router = new Router()
const pagesController = require('../controllers/pagesController')
const adminController = require('../controllers/adminController')

router.get('/', (req, res, next) => {
    return res.render('index.ejs')
})

router.post('/', adminController.auth)
router.get('/admin', adminController.check)
router.post('/admin', pagesController.create)
router.get('/:slug', pagesController.getOne)
router.delete('/:slug', pagesController.delete)

module.exports = router