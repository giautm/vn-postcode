"use strict";

let Promise = require('bluebird');
let Sequelize = require('sequelize');

let sequelize = new Sequelize('vnpostcode', 'username', 'password', {
    dialect: 'sqlite',
    storage: 'vnpost.sqlite'
});

let RegionDistrictWard = sequelize.import('./models/region_district_ward.js');
RegionDistrictWard.sync();

/*
 let Ward = sequelize.import('./models/ward.js');
 let District = sequelize.import('./models/district.js');
 let Region = sequelize.import('./models/region.js');

 District.hasMany(Ward);
 Region.hasMany(District);

 Ward.sync();
 District.sync();
 Region.sync();

 RegionDistrictWard.findAll().then(
 function (regionDistrictWards) {
 regionDistrictWards.forEach(function (r) {
 let a = r;
 Region.findOrCreate({
 where: {
 code: a.region_code,
 name: a.region_name
 }
 }).then(function (region) {
 return District.findOrCreate({
 where: {
 code: a.district_code,
 name: a.district_name,
 region_id: region.id
 }
 });
 }).then(function (district) {
 return Ward.findOrCreate({
 where: {
 code: a.ward_code,
 name: a.ward_name,
 district_id: district.id
 }
 });
 });
 });
 });

 function getPostCodeInformationAsync(postCode) {
 }

 exports.Region = Region;
 exports.District = District;
 exports.Ward = Ward;
 */

function findRegionAndDistrit(wardCode) {
    return new Promise(function (resolve, reject) {
        RegionDistrictWard.find({
            where: {ward_code: wardCode}
        }).then(function (ward) {
            if (ward == null) {
                reject('Not found');
            } else {
                resolve(
                    {
                        region: {
                            code: ward.region_code,
                            name: ward.region_name,
                        },
                        district: {
                            code: ward.district_code,
                            name: ward.district_name,
                        },
                        ward: {
                            code: ward.ward_code,
                            name: ward.ward_name,
                        }
                    }
                )
            }
        }).catch(reject);
    });
}

exports.findRegionAndDistrit = findRegionAndDistrit;