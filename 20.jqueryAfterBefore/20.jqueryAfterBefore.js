$(function () {
  $("#btn_after").on("click", function () {
    $("#first").after("<img src='images/second.jpg'>");
  });
  $("#btn_before").on("click", function () {
    $("#first").before("<img src='images/third.jpg'>");
  });
  $("#btn_together").on("click", function () {
    // "<img>" 이 부분이
    // 바닐라 자바스크립트에서는 document.createElement("img");
    // attr = img.setAttribute("src", "img/second.jpg");
    const img = $("<img>").attr("src", "images/second.jpg");
    $("#first").after(img).before("<img src='images/third.jpg'>");
  });
});
