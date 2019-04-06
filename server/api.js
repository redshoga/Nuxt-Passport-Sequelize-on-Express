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

router.get('/todos', isAuthenticated, (req, res) => {
  const userId = req.session.passport.user.id
  models.User.findOne({ where: { googleId: userId } })
    .then(user => user.getTodos())
    .then(todoList => res.json(todoList).end())
})

router.post('/todo', isAuthenticated, (req, res) => {
  const userId = req.session.passport.user.id
  const title = req.body.title

  models.User.findOne({ where: { googleId: userId } })
    .then(user =>
      user.createTodo({
        title: title
      })
    )
    .then(todo => res.json(todo).end())
})

router.delete('/todo', isAuthenticated, (req, res) => {
  const userId = req.session.passport.user.id
  const deleteId = req.body.id

  models.User.findOne({ where: { googleId: userId } })
    .then(user =>
      models.Todo.findOne({ where: { id: deleteId, UserId: user.id } })
    )
    .then(todo => {
      todo.destroy()
    })
    .then(todo => res.json(todo).end())
})

router.get('/', (req, res) => {
  models.User.findAll().then(projects => {
    res.json(projects).end()
  })
})

module.exports = router
