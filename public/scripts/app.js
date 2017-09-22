/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(function() {
  $(".new-tweet").hide();
  $( ".compose-button" ).on("click", function() {
    $( ".new-tweet" ).slideToggle();
    $("textarea").focus();
  });

  function loadtweets () {
    $.ajax({
      url: "/tweets",
      method: "GET",
      success: function (data) {
        renderTweets(data);
      },
      failure: function (err) {
        console.log(err);
      }
    })
  };

  loadtweets();

  $("form").on("submit", function() {
    event.preventDefault();
    if ($("textarea").val() === "") {           //Refactor textarea and other repetetive;
      alert('Please write something');
    }
    else if ($("textarea").val().length > 140) {
      alert('Too many characters');
    } else {
        $.ajax({
        url: "/tweets", //localhost:8080?
        method: "POST",
        data: ($(this).serialize()),
        success: function() {
          loadtweets();
        },
        failure: function(err) {
          console.log(err);
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

    const dayOfPost = new Date(data.created_at)
    $footerTimestamp.text(moment(dayOfPost).fromNow());
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
});
