require("babel-core/register");
require("babel-polyfill");
require('babel-register');

var express = require('express');
var app = express();

exports.randomJSON = async function(req, res) {
    console.log("Generating a Random Number between 10 and 100");
    try {
        getContentByCategory('Car').then(function(val) {
            console.log("Return Value " + JSON.stringify(val));
            var responseObj = {};
            responseObj.randomData = val;
            res.send(responseObj);
        }).catch(function(err) {
            reject(err);
        });
    } catch (err) {
        console.log("Exception: Promise " + err);
    }
}

function getRandomInt() {
    return Math.floor(Math.random() * (100 - 10 + 1)) + 10;
}

exports.randomNumber = async function(req, res) {
    console.log("Generating a Random Number between 10 and 100");
    var randomNum = await getRandomInt();
    res.send("Random Number " + randomNum)
}
catch (err) {
    console.log("Exception: Promise " + err);
}
}

async function getContentByCategory(category) {
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
}