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
      `</a> - <a href="#" data-username=${r.full_name} onClick="getCommits(this)">Get Commits</a> - ` +
      `</a> - <a href="#" data-username=${r.full_name} onClick="getBranches(this)">Get Branches</a></li>`
    ).join('')
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
    commits.map(c => `<li><strong>${c.author ? c.author.login : "No Name"} - ${c.commit.author.name}:</strong><br>` +
      c.commit.message +
      '</li>'
    ).join()
  }</ul>`;

  document.getElementById("details").innerHTML = commitsList;
}

function getBranches(anchor){
  const req = new XMLHttpRequest();
  const repo = anchor.dataset.fullname;
  req.addEventListener('load', showBranches);
  req.open('get', `https://api.github.com/repos/${repo}/branches`);
  req.send();
}

function showBranches(){
  const branches = JSON.parse(this.responseText);
  const branchesList = `<ul>${
    branches.map(b => `<li>${b.name}</li>`).join()
  }</ul>`;

  document.getElementById("details").innerHTML = branchesList;
}
