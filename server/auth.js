const express = require('express')
const router = express.Router()

function wrapper(passport) {
  router.get(
    '/google',
    passport.authenticate('google', {
      scope: ['https://www.googleapis.com/auth/plus.login']
    })
  )

  router.get(
    '/google/callback',
    passport.authenticate('google', {
      failureRedirect: '/auth-failure-path',
      successRedirect: '/'
    })
  )

  router.get('/logout', function(req, res) {
    req.logout()
    res.redirect('/')
  })

  return router
}

module.exports = wrapper
