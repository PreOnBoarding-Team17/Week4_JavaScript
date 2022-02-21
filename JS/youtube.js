var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  new YT.Player("youtube__player", {
    videoId: "N0dc-idpwoE",
    playerVars: {
      autoplay: true,
      loop: true,
      playlist: "N0dc-idpwoE",
    },
    events: {
      onReady: function (event) {
        event.target.mute();
      },
    },
  });
}
