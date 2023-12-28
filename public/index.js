window.onload = function () {
  const name = document.getElementsByName("name")
  const id = document.getElementsByName("id")
  const pw = document.getElementsByName("password")
  const nickname = document.getElementsByName("nickname")
  const email = document.getElementsByName("mail")
  const answer = document.getElementsByName("question")

};
function test() {
  alert("입력 감지");
  const data = document.getElementById("search");
  console.log(data.value);
  data.value=""
}
function ad(){
  alert("매너 합시다 ^ㅡ^")
}
function create(){
  alert("hi")
  const data = document.getElementsByName("name")
  console.log(data.value)
}


function addComment(user_ID){
  // // alert("댓글 작성 완료!")
  // let comment = document.getElementById("comment");
  // if(comment.value != ""){
  //   // console.log('comment='+comment);
  //   let body = document.getElementById("addcomment").innerHTML;
  //   // console.log('body='+body);
  //   let cmt = 
  //   '<li class="comment_user">' + user_ID + '</li>' + 
  //   '<li class="comment_">' + comment.value + '</li>' +
  //   '<li class="comment_time">' + time() + '</li>' + '<hr>';
  //   body += cmt;
  //   // console.log('cmt='+cmt);

  //   comment.value=""
  //   document.getElementById("addcomment").innerHTML = body
  // }
  // else{
  //   alert("댓글을 작성하려면 내용을 입력해주세요!")
  // }
  // comment_id, user_id, cf_id, content, comment_datetime, comment_like, comment_class, comment_group, comment_level
  var param = {};
  param.comment_id = 1;
  param.user_id = 1;
  param.cf_id = 1;
  param.content = $("#comment").val();
  param.comment_datetime = time();
  param.comment_like = 0;
  param.comment_class = 0;
  param.comment_group = 0;
  param.comment_level = 0;

  var ajax = $.ajax({
    type : "POST",
    url : "/postCmt",
    data : param,
    dataType : "json",
  }).done((res)=>{
    console.log('content',res.content);
    console.log('comment_datetime',res.comment_datetime);
}).fail((err)=>{
    console.log(err);
});

}

function time(){
  var today = new Date();

  var year = today.getFullYear();
  var month = ('0' + (today.getMonth() + 1)).slice(-2);
  var day = ('0' + today.getDate()).slice(-2);

  var hours = ('0' + today.getHours()).slice(-2); 
  var minutes = ('0' + today.getMinutes()).slice(-2);
  var seconds = ('0' + today.getSeconds()).slice(-2); 

  var TimeString = 
  year + '.' + month  + '.' + day + ' ' + 
  hours + ':' + minutes  + ':' + seconds;
  return TimeString;
}