/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(function() {
  function createTweetElement(data) {
    const $article = $("<article>").addClass("posted-tweet");

    const $header = $("<header>").addClass("tweet-header");
    const $headerUserName = $("<span>").addClass("user-name");
    const $headerUserHandle = $("<span>").addClass("user-handle");
    const $headerUserImage = $("<img>").addClass("user-image");

    const $tweetBody = $("<div>").addClass("posted-tweet-body");

    const $footer = $("<footer>").addClass("tweet-footer");
    const $footerTimestamp = $("<span>").addClass("tweet-timestamp");
    const $footerActions = $("<span>").addClass("tweet-actions");
    const $footerActionLike = $("<i>").addClass("fa fa-heart");
    const $footerActionFlag = $("<i>").addClass("fa fa-flag");
    const $footerActionRetweet = $("<i>").addClass("fa fa-retweet");


    $headerUserImage.attr("src", data.user.avatars.small)
    $headerUserName.text(data.user.name);
    $headerUserHandle.text(data.user.handle);
    $header.append($headerUserHandle);
    $header.append($headerUserImage);
    $header.append($headerUserName);

    const textContent = $tweetBody.text(data.content.text);
    $tweetBody.append(textContent);

    $footerTimestamp.text(`${data.created_at} days ago.`);
    $footerActions.append($footerActionLike, $footerActionFlag, $footerActionRetweet);
    $footer.append($footerTimestamp);
    $footer.append($footerActions);

    $article.append($header, $tweetBody, $footer);

   return $article;
  }



  // <img src="https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png" class="user-image">
  // <span class="user-name">Descartes</span>
  // <span class="user-handle">@rd</span>

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
