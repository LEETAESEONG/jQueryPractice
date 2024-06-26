$(function () {
  //   $("h1").click(function () {
  //     $(this).css("background-color", "chartreuse");
  //   });
  //   $("h1").mouseleave(function () {
  //     $(this).css("background-color", "chocolate");
  //   });
  //   $("h1").mouseenter(function () {
  //     $(this).css("background-color", "cornflowerblue");
  //   });

  // 위를 아래와 같이 변경 가능
  $("h1").on({
    click: function () {
      $(this).css("background-color", "chartreuse");
    },
    mouseleave: function () {
      $(this).css("background-color", "chocolate");
    },
    mouseenter: function () {
      $(this).css("background-color", "cornflowerblue");
    },
  });
});
