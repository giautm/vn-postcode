"use strict";

module.exports = function (sequelize, DataTypes) {
    let District = sequelize.define('District', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            validate: {
                isInt: {
                    msg: 'please input integer value'
                }
            }
        },
        code: {
            type: DataTypes.STRING(6),
            allowNull: true
        },
        name: {
            type: DataTypes.STRING(60),
            allowNull: true
        }
    }, {
        timestamps: false,
        tableName: 'district',
        underscored: true
    });

    return District;
};