MediumWidget.Init({
  renderTo: '#medium-feed',
  params: {
    "resource": "https://medium.com/risetnya-mfc",
    "limit": 5,
    "fields": [
      "description",
      "publishAt"
    ]
  }
})

window.onscroll = function () {
  scrollIndicator()
};

function scrollIndicator() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("bar").style.width = scrolled + "%";
}

var channelID = "UCoxdB0_IJoOlYcLfiFkSbLg";
var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
$.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL) + channelID, function (data) {
  for (let n = 0; n <= 4; n += 1) {
    var x = n + 1;
    var link = data.items[n].link;
    var title = data.items[n].title;
    var id = link.substr(link.indexOf("=") + 1);
    $(".youtube-link" + x).attr("title", title);
    $(".youtube-link" + x).attr("href", "https://www.youtube.com/watch?v=" + id);
    $(".youtube-thumbnail" + x).attr("src", "http://img.youtube.com/vi/" + id + "/maxresdefault.jpg");
    $(".youtube-title" + x).text(title);
  }
});