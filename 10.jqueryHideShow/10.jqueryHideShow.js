$(function () {
  $("img").on("click", function () {
    // $(this).hide();
    // 기본이 400
    // fast, 3000, 이런식으로 할 수 있다.
    // slow 뒤에 있는 함수가 콜백 함수
    $(this).hide("slow", function () {
      alert("hide img");
      //   $(this).show("10");
    });
  });
  $("#show").on("click", function () {
    $("img").show(10, function () {
      alert("show img");
    });
  });
});
