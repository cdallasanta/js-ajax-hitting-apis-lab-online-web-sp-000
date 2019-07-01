// your code here
function getRepositories(){
  const req = new XMLHttpRequest();
  const username = $("username").val();
  req.open('get', `https://api.github.com/${username}/repos`)
}
