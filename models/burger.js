var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insert: function (burgerObj, cb) {
        orm.insertOne("burgers", burgerObj, function (res) {
            cb(res);
        });
    },
    update: function (burgerObj, condition, cb) {
        orm.updateOne("burgers", burgerObj, condition, function (data) {
            cb(data);
        });
    }
}

module.exports = burger;