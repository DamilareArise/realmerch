const express = require('express')
const { registerUser, checkAdmin, makeAdmin } = require('../controllers/manageUser.controller')
const router = express.Router()


router.post('/register', registerUser)
router.post('/check-admin', checkAdmin)
router.post('/make-admin', makeAdmin)

module.exports = router