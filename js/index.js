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
      `<li><a href=${r.html_url}>` +
      r.name +
      `</a> - <a href="#" data-fullname=${r.full_name} onClick="getCommits(this)">Get Commits</a></li>`
    ).join()
  }</ul>`;

  document.getElementById("repositories").innerHTML = reposList;
}

function getCommits(anchor){
  const req = new XMLHttpRequest();
  const repo = anchor.dataset.fullname;
  req.addEventListener('load', showCommits);
  req.open('get', `https://api.github.com/repos/${repo}/commits`);
  req.send();
}

function showCommits(){
  const commits = JSON.parse(this.responseText);
  const commitsList = `<ul>${
    commits.map(c => {
      debugger;
      return `<li><strong>${c.author.login} - ${c.commit.author.name}:</strong><br>` +
      c.commit.message
    }).join()
  }</ul>`;

  document.getElementById("details").innerHTML = commitsList;
}
