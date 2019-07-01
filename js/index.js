// your code here
function getRepositories(){
  console.log("cool");
  const req = new XMLHttpRequest();
  const username = document.getElementById("username").innerHTML;
  req.addEventListener('load', showRepositories);
  req.open('get', `https://api.github.com/${username}/repos`);
  req.send();
}

function showRepositories() {
  console.log("cool");
}
