'use strict';

module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        ID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },{
        timestamps: false,
        freezeTableName: true,
        tableName: 'Users',
        classMethods: {
            associate: function(models){

            }
        }
    });
    return Users;
};