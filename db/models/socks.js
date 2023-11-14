

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Socks extends Model {
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
  Socks.init({
    color: DataTypes.STRING,
    img: DataTypes.STRING,
    design: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Socks',
  });
  return Socks;
};