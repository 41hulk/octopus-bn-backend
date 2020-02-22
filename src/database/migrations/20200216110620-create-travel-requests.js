/* eslint-disable no-unused-vars */
export default {
  up: (queryInterface, Sequelize) => queryInterface.createTable('travelRequests', {
    id: {
      allowNull: false,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    },
    requestId: {
      allowNull: false,
      type: Sequelize.DataTypes.UUID,
    },
    userID: {
      type: Sequelize.STRING,
      allowNull: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      references: {
        model: 'Users',
        key: 'userID',
        as: 'userID',
      },
    },
    type: {
      allowNull: false,
      type: Sequelize.ENUM('one way', 'return', 'multi city'),
      defaultValue: 'one way',
    },
    passportNumber: {
      allowNull: false,
      type: Sequelize.STRING
    },
    gender: {
      allowNull: false,
      type: Sequelize.ENUM('male', 'female', 'other'),
    },
    accommodation: {
      allowNull: false,
      type: Sequelize.STRING
    },
    from: {
      allowNull: false,
      type: Sequelize.STRING
    },
    to: {
      allowNull: false,
      type: Sequelize.STRING
    },
    departureDate: {
      allowNull: false,
      type: Sequelize.STRING
    },
    returnDate: {
      type: Sequelize.STRING
    },
    reason: {
      allowNull: false,
      type: Sequelize.STRING
    },
    status: {
      allowNull: false,
      type: Sequelize.ENUM('pending', 'approved', 'rejected'),
      defaultValue: 'pending',
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('travelRequests')
};