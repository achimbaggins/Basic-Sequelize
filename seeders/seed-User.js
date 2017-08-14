'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      username: 'kepalasekolah',
      password: 'achim',
      role: 'administrator'
    },{
      username: 'akademik',
      password: 'achim',
      role: 'akademik'
    },{
      username: 'guru1',
      password: 'achim',
      role: 'guru'
    },{
      username: 'guru2',
      password: 'achim',
      role: 'guru'
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
