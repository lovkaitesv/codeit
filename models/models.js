const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Page = sequelize.define('page', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    content: {type: DataTypes.TEXT, allowNull: false},
    slug: {type: DataTypes.STRING, allowNull: false}
})

module.exports = Page