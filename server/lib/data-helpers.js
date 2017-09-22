"use strict";

// Defines helper functions for saving and getting tweets
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to db
    saveTweet: function(newTweet, callback) {
        db.collection("tweets").insertOne(newTweet, callback);
    },

    // Get all tweets in db
    getTweets: function(callback) {
      db.collection("tweets").find().toArray(callback);
    }
  };
}
