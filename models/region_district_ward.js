"use strict";

module.exports = function (sequelize, DataTypes) {
    let RegionDistrictWard = sequelize.define('RegionDistrictWard', {
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
        region_code: {
            type: DataTypes.STRING(6),
            allowNull: false,
            validate: {
                len: {
                    args: [1, 6],
                    msg: 'please input not too long'
                }
            }
        },
        region_name: {
            type: DataTypes.STRING(60),
            allowNull: false,
            validate: {
                len: {
                    args: [1, 60],
                    msg: 'please input not too long'
                }
            }
        },
        district_code: {
            type: DataTypes.STRING(6),
            allowNull: false,
            validate: {
                len: {
                    args: [1, 6],
                    msg: 'please input not too long'
                }
            }
        },
        district_name: {
            type: DataTypes.STRING(60),
            allowNull: false,
            validate: {
                len: {
                    args: [1, 60],
                    msg: 'please input not too long'
                }
            }
        },
        ward_code: {
            type: DataTypes.STRING(6),
            allowNull: false,
            validate: {
                len: {
                    args: [1, 6],
                    msg: 'please input not too long'
                }
            }
        },
        ward_name: {
            type: DataTypes.STRING(60),
            allowNull: false,
            validate: {
                len: {
                    args: [1, 60],
                    msg: 'please input not too long'
                }
            }
        }
    }, {
        timestamps: false,
        tableName: 'region_district_ward',
        underscored: true
    });

    return RegionDistrictWard;
};