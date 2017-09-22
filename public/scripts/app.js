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

    $headerUserImage.attr("src", data.user.avatars.small);
    $headerUserName.text(data.user.name);
    $headerUserHandle.text(data.user.handle);
    $header.append($headerUserHandle);
    $header.append($headerUserImage);
    $header.append($headerUserName);

    const tweetContent = $tweetBody.text(data.content.text);
    $tweetBody.append(tweetContent);

    const timeOfPost = new Date(data.created_at);
    $footerTimestamp.text(moment(timeOfPost).fromNow());
    $footer.append($footerTimestamp);
    $footer.append($footerActions);
    $footerActions.append($(`
      <i class="fa fa-heart" aria-hidden="true"></i>
      <i class="fa fa-flag" aria-hidden="true"></i>
      <i class="fa fa-retweet" aria-hidden="true"></i>`));

    $article.append($header, $tweetBody, $footer);

    return $article;
  }

  function renderTweets (tweets) {
    var tweetContainer = $(".all-tweets");
    tweetContainer.empty();
    tweets.forEach(function(tweet) {
      tweetContainer.prepend(createTweetElement(tweet));
    });
  }

  $(".new-tweet").hide();
  $(".nav-actions").on("click", function() {
    $(".new-tweet").slideToggle();
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
    });
  }

  loadtweets();

  $("form").on("submit", function() {
    event.preventDefault();
    const $textlength = $("textarea").val();
    if ($textlength === "") {
      alert('Please write something');
    } else if ($textlength.length > 140) {
      alert('Too many characters');
    } else {
      $.ajax({
        url: "/tweets",
        method: "POST",
        data: ($(this).serialize()),
        success: function() {
          loadtweets();
          $("textarea").val('');
        },
        failure: function(err) {
          console.log(err);
        }
      });
    }
  });

});
