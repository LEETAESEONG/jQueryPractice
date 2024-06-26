$(function () {
  $("#btn1").click(function () {
    $("p").hide();
    // this로 하게 되면 #btn 아이디가 사라진다.
    // $(this).hide();
  });
  // 더블클릭
  $("#btn2").dblclick(function () {
    $("p").hide();
  });
  // 마우스가 진입했을 때
  $("h1").mouseenter(function () {
    $(this).css("background-color", "yellow");
  });
  // 마우스가 떠났을 때
  $("h1").mouseleave(function () {
    $(this).css("background-color", "white");
  });
  // 마우스를 클릭하고 땠을 때
  $("h2").mouseup(function () {
    $(this).css("background-color", "red");
  });
  // 마우스를 클릭하자 마자
  $("h2").mousedown(function () {
    $(this).css("background-color", "brown");
  });
  $("h3").hover(
    function () {
      // in
      $(this).css("background-color", "skyblue");
    },
    function () {
      // out
      $(this).css("background-color", "aquamarine");
    }
  );
});
