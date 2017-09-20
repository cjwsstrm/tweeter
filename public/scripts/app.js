/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(function() {
  function createTweetElement(data) {
    const $article = $("<article>").addClass(".posted-tweet");
    const $header = $("<header>").addClass(".tweet-header");
    const $textContent = $("<div>").addClass(".posted-tweet-body");
    const $footer = $("<footer>").addClass

    $header.text(data.user.name);



    $article.append($header)

    return $article;
  }



//add new elements in section class="all-tweets"
  //var $tweet = $("<article>").addClass("tweet");

//add content to those elements
//append(), text(), attr[], ??




// Test / driver code (temporary). Eventually will get this from the server.
var tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
 $('.all-tweets').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.


});
