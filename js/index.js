// your code here
function getRepositories(){
  const req = new XMLHttpRequest();
  const username = document.getElementById("username").value;
  req.addEventListener('load', showRepositories);
  req.open('get', `https://api.github.com/users/${username}/repos`);
  req.send();
}

function showRepositories() {
  const repos = JSON.parse(this.responseText);
  const reposList = `<ul>${
    repos.map(r =>
      '<li><a href=`${r.html_url}`>' +
      r.name +
      '</a> - <a href="#" data-fullname=`${r.fullname}` onClick="getCommits(this)">Get Commits</a></li>'
    ).join()
  }`;

  document.getElementById("repositories").innerHTML = reposList;
}

function getCommits(anchor){
  const req = new XMLHttpRequest();
  const repo = anchor.dataset.fullname;
  req.addEventListener('load', showCommits);
  req.open('get', `/repos/${repo}/commits`);
  req.send();
}

function showCommits(){
  console.log("cool")
}
