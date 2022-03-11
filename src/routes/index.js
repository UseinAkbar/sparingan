const express = require("express");
const router = express.Router()
const User = require("../controller/User")
const Match = require("../controller/Match")

router.get('/', (req, res) => {
  res.send('Hello World!')
})

router.get('/user', User.read)
router.post('/user', User.create)
router.get('/user/:id', User.find)
router.put('/user/:id', User.update)
router.delete('/user/:id', User.delete)

router.get('/match', Match.read)

module.exports = router;