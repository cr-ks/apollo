// ----------------------------------------------------------------------------------//
// Ad Module | Apollo Graph
// Apollo V2
// David Michael Hogan | November 1, 2019 | Updated:
// ----------------------------------------------------------------------------------//

module.exports = (sequelize, DataTypes) => {
  const Ad = sequelize.define(
    "Ad",
    {
      adType: DataTypes.STRING,
      attributes: DataTypes.JSON
    },
    {}
  );
  Ad.associate = function(models) {
    Ad.belongsTo(models.Campaign);
    Ad.hasMany(models.Event);
    Ad.belongsToMany(models.Category, { through: "AdCategories" });
    Ad.belongsToMany(models.Geo, { through: "AdGeos" });
  };
  return Ad;
};
