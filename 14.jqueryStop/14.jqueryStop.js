$(function () {
  $(".btn_start").on("click", function () {
    $(".ani_box1").animate({ width: "200px" }, 1000);
    $(".ani_box1").animate({ height: "200px" }, 1000);
    $(".ani_box1").animate({ width: "300px" }, 1000);
    $(".ani_box1").animate({ height: "300px" }, 1000);
  });
  $(".btn_stop").on("click", function () {
    $(".ani_box1").stop();
  });
  // stopAll을 true로 바꾸면 이후 animate도 실행 안됨
  $(".btn_stop_all").on("click", function () {
    $(".ani_box1").stop(true);
  });
  $(".btn_goToEnd").on("click", function () {
    $(".ani_box1").stop(true, true);
  });
  $(".btn_no_use_stop").on("click", function () {
    $(".ani_box3").toggle(1000);
  });
  $(".btn_use_stop").on("click", function () {
    $(".ani_box4").stop();
    $(".ani_box4").toggle(1000);
  });
});
