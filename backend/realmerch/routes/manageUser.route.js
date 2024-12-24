const express = require('express')
const { registerUser, checkAdmin, makeAdmin, getAllUser } = require('../controllers/manageUser.controller')
const router = express.Router()


router.post('/register', registerUser)
router.post('/check-admin', checkAdmin)
router.put('/make-admin', makeAdmin)
router.get('/all-users', getAllUser)


module.exports = router