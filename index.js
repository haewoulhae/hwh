window.onload = function () {

};
function test() {
  alert("입력 감지");
  const data = document.getElementById("search");
  console.log(data.value);
  data.value=""
}
function ad(){
  alert("손 잘 씻기!!")
}
function create(){
  const name = document.getElementsByName("name")
  const id = document.getElementsByName("id").value
  const pw = document.getElementsByName("password").value
  const nickname = document.getElementsByName("nickname").value
  const email = document.getElementsByName("mail").value
  const answer = document.getElementsByName("question").value
  location.href("index.html")
}