/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(function() {
  $("form").on("submit", function( event ) {
    if($('textarea').val() === "") {
      alert('Please write something');
    }
    if ($('textarea').val() > 140) {
      alert('Too many characters');
    } else {
        $.ajax({
        url: "/tweets", //localhost:8080?
        method: "POST",
        data: ($("form").serialize),
        success: function(data) {
          createTweetElement();
            // Event.preventDefault();
            // console.log( $( this ).serialize() );
        },
        failure: function(err) {
        }
      });
      }
  });

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
    // const $footerActionLike = $("<i>").addClass("fa fa-heart").attr("aria-hidden", true);
    // const $footerActionFlag = $("<i>").addClass("fa fa-flag").attr("aria-hidden", true);
    // const $footerActionRetweet = $("<i>").addClass("fa fa-retweet").attr("aria-hidden", true);

    //footerActionLike, Flag, Retweet would not space out properly and found no
    //other workaround but to append them as below to get proper spacing.

    $headerUserImage.attr("src", data.user.avatars.small)
    $headerUserName.text(data.user.name);
    $headerUserHandle.text(data.user.handle);
    $header.append($headerUserHandle);
    $header.append($headerUserImage);
    $header.append($headerUserName);

    const textContent = $tweetBody.text(data.content.text);
    $tweetBody.append(textContent);


    $footerTimestamp.text(`${data.created_at} days ago.`);
    $footer.append($footerTimestamp);
    $footer.append($footerActions);
    $footerActions.append($(`
      <i class="fa fa-heart" aria-hidden="true"></i>
      <i class="fa fa-flag" aria-hidden="true"></i>
      <i class="fa fa-retweet" aria-hidden="true"></i>`))

    $article.append($header, $tweetBody, $footer);
    // $footerActions.append($footerActionLike);
    // $footerActions.append($footerActionFlag);
    // $footerActions.append($footerActionRetweet);

   return $article;
 };


  function renderTweets (tweets) {
      var tweetContainer = $(".all-tweets");
      tweetContainer.empty();
      tweets.forEach(function(tweet) {
        tweetContainer.prepend(createTweetElement(tweet));
    });

  };


    var data = [
  {
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];
renderTweets(data);
});
