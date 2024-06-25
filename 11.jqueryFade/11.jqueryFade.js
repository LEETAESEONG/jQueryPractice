$(function () {
  $("#btn_fade").on("click", function () {
    $("div#a").fadeIn();
    $("div#b").fadeIn("slow");
    $("div#c").fadeIn("fast");
  });
  $("#btn_fade_out").on("click", function () {
    $("div#a").fadeOut();
    $("div#b").fadeOut("slow");
    $("div#c").fadeOut("fast");
  });
  $("#btn_fade_toggle").on("click", function () {
    $("div#a").fadeToggle(100, function () {
      console.log("end");
    });
  });
  $("#btn_fade_to").on("click", function () {
    // 인자(파라미터)가 꼭 필요하다.
    $("div#a").fadeTo("fast", 0.2);
    // 0이 되어도 위치는 남는다.
    $("div#b").fadeTo("fast", 0);
  });
});
