$(function () {
  $("button").on("click", function () {
    $("p").hide("slow", function () {
      alert("hide");
    });
    $("p").show("slow", function () {
      alert("show");
    });
    // 끝나고 난 다음 하려면 함수 밖에 만들것.
    alert("show");
  });
});
