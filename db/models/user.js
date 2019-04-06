'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      googleId: DataTypes.STRING
    },
    {}
  )
  User.associate = function(models) {
    User.hasMany(models.Todo)
    User.sync({ alter: true })
  }
  return User
}
