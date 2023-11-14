

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Socks}) {
      this.belongsTo(User, {
        foreignKey: 'userId',
      })
      this.belongsTo(Socks, {
        foreignKey: 'socksId',
      })
    }
  }
  Favorite.init({
    userId: DataTypes.INTEGER,
    socksId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};