// your code here
function getRepositories(){
  console.log("cool");
  const req = new XMLHttpRequest();
  const username = document.getElementById("username").value;
  req.addEventListener('load', showRepositories);
  req.open('get', `https://api.github.com/users/${username}/repos`);
  req.send();
}

function showRepositories() {
  console.log("cool");
}
