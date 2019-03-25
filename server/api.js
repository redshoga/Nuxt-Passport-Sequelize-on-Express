const express = require('express')
const router = express.Router()
const models = require('../db/models')

function isAuthenticated(req, res, next) {
  if (req.session && req.session.passport && req.session.passport.user) {
    return next()
  } else {
    res.status(403).end()
  }
}

router.get('/secret', isAuthenticated, (req, res) => {
  models.User.create({
    name: 'sample' + String(Math.random())
  }).then(result => {
    res.json(result).end()
  })
})

router.get('/', (req, res) => {
  models.User.findAll().then(projects => {
    res.json(projects).end()
  })
})

module.exports = router
