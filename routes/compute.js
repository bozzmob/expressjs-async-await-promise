let getContentByCategory = (() => {
    var _ref3 = _asyncToGenerator(function* (category) {
        console.log("I am a " + category + " Data");
        var len = getRandomInt();
        var posts = [];
        for (var i = 0; i < len; i++) {
            var post = {};
            post.key = i;
            post.val = category + " data " + i;
            posts.push(post);
        }
        return posts;
    });

    return function getContentByCategory(_x5) {
        return _ref3.apply(this, arguments);
    };
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

require("babel-core/register");
require("babel-polyfill");
require('babel-register');

var express = require('express');
var app = express();

exports.randomJSON = (() => {
    var _ref = _asyncToGenerator(function* (req, res) {
        console.log("Generating a Random Number between 10 and 100");
        try {
            getContentByCategory('Car').then(function (val) {
                console.log("Return Value " + JSON.stringify(val));
                var responseObj = {};
                responseObj.randomData = val;
                res.send(responseObj);
            }).catch(function (err) {
                reject(err);
            });
        } catch (err) {
            console.log("Exception: Promise " + err);
        }
    });

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
})();

function getRandomInt() {
    return Math.floor(Math.random() * (100 - 10 + 1)) + 10;
}

exports.randomNumber = (() => {
    var _ref2 = _asyncToGenerator(function* (req, res) {
        console.log("Generating a Random Number between 10 and 100");
        var randomNum = yield getRandomInt();
        res.send("Random Number " + randomNum);
    });

    return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
    };
})();

