$(function () {
  $("#main input").focus(function () {
    $(this).css("background-color", "pink");
  });
  $("#main input").blur(function () {
    // white 또는 ""도 상관 없음
    $(this).css("background-color", "white");
  });
  // type으로 설정
  $("#test [type='text']").focus(function () {
    $(this).css("background-color", "silver");
  });
  $("#test [type='text']").blur(function () {
    $(this).css("background-color", "white");
  });
  $("#test [type='password']").focus(function () {
    $(this).css("background-color", "beige");
  });
  $("#test [type='password']").blur(function () {
    $(this).css("background-color", "white");
  });
});
