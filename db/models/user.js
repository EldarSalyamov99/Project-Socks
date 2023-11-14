

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Basket, Favorite}) {
      this.hasMany(Basket, {
        foreignKey: 'basketId',
      })
      this.hasMany(Favorite, {
        foreignKey: 'favoriteId',
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    hashpass: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};