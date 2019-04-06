'use strict'
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    'Todo',
    {
      title: DataTypes.STRING
    },
    {}
  )
  Todo.associate = function(models) {
    Todo.belongsTo(models.User)
    Todo.sync({ alter: true })
  }
  return Todo
}
