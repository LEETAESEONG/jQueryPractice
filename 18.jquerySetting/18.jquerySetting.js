$(function () {
  // 텍스트 값 변경
  $("#btn_set").on("click", function () {
    $("#set1").text("change");
  });
  // html 값 변경
  $("#btn_bold").on("click", function () {
    $("#set1").html("<b>change</b>");
  });
  // input val값 변경
  $("#btn_val").on("click", function () {
    $("#email").val("test@test.com");
  });
  // input val값 가져오기
  $("#btn_get").on("click", function () {
    alert($("#email").val());
  });
  // id는 하나만 바뀐다.
  // 꼭 class로 할 것
  // changer를 안녕하세요. game changer입니다.
  $("#btn_class").on("click", function () {
    $(".set2").text(function (i, origText) {
      return `안녕하세요. game ${origText}입니다. (${i})`;
    });
  });
  $("#btn_id").on("click", function () {
    $("#set3").text(function (i, origText) {
      return `안녕하세요. game ${origText}입니다. (${i})`;
    });
  });
  $("#naver").on("click", function () {
    $("#google").attr("href", "https://naver.com");
  });
  // 이렇게도 가능하다.
  //   $("#naver").on("click", function () {
  //     $("#google").attr("href", function (i, origHref) {
  //       return origHref + "/12345678";
  //     });
  //   });
});
