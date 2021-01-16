window.onscroll = () => {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("bar").style.width = scrolled + "%";
};

const apiKey = 'EEFc6yBDOHDISwhWKGmulhPCb7ETWkav';
const user = 'moefc32';

$(() => {
  $.ajax({
    url: "https://api.behance.net/v2/users/" + user + "/projects?api_key=" + apiKey,
    dataType: 'jsonp',
    success: (results) => {
      let projectsArray = new Array();
      for (let i = 0; i < results.projects.length; i++) {
        let project = results.projects[i];

        let output;
        output = '<div class="col-xs-12 col-sm-6 col-md-4"><a href="' + project.url + '"><div class="project-container"><div class="img-backdrop"></div><div class="description-container"><h2 class="caption">' + project.name + '</h2></div><img src="' + project.covers[404] + '" class="img-responsive"></div></a></div>';
        projectsArray.push(output);
      }
      let $content = $('#behance-feed');
      $content.html(projectsArray);
    }
  });
});