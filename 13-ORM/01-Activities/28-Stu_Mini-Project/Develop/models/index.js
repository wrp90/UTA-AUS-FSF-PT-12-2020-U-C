const Traveller = require('./traveller.js');
// const License = require('./License');
// const Car = require('./Car');

// Traveller.hasOne(, {
//   foreignKey: 'traveller_id',
//   onDelete: 'CASCADE',
// });

License.belongsTo(Traveller, {
  foreignKey: 'traveller_id',
});

Traveller.hasMany(Location, {
  foreignKey: 'traveller_id',
  onDelete: 'CASCADE',
});

Car.belongsTo(Traveller, {
  foreignKey: 'traveller_id',
});

module.exports = { Traveller, License, Car };