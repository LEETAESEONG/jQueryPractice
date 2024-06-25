$(function () {
  $("button#btn_text").on("click", function () {
    alert($("#this").text());
  });
  $("button#btn_html").on("click", function () {
    alert($("#this").html());
  });

  // document.querySelector("#name").value
  $("button#btn_val").on("click", function () {
    alert($("#user_name").val());
  });

  $("button#btn_attr").on("click", function () {
    // val과는 다르게 어떤 속성을 가져올지 명시해야 한다.
    // "alt" 등등
    alert($("#naver").attr("href"));
  });
});
