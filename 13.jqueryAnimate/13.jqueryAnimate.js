$(function () {
  $(".btn").on("click", function () {
    $(".ani_box").animate(
      {
        left: "100px",
        top: "100px",
        // 여기서 색을 바꾸는 것은 의미가 없다.
        // width: "200px",
        // height: "200px",
        // 'font-size' 이거나
        fontSize: "40px",
        opacity: "0.5",
        // 더하기 빼기도 가능하다.
        width: "+=100px",
        height: "+=100px",
      },
      "slow",
      function () {
        $(this).css("background-color", "crimson");
      }
    );
  });
  $(".toggle").on("click", function () {
    $(".ani_box").animate({ height: "toggle" }, "fast");
  });
  // 같은 클래스는 queue로 처리가 된다.
  $(".queue").on("click", function () {
    $(".ani_box").animate({ height: "200px" }, "slow", function () {
      console.log("anibox1-1");
    });
    $(".ani_box").animate({ width: "200px" }, "slow", function () {
      console.log("anibox1-2");
    });
    $(".ani_box").animate({ height: "100px" }, "slow", function () {
      console.log("anibox1-3");
    });
    $(".ani_box").animate({ width: "100px" }, "slow", function () {
      console.log("anibox1-4");
    });
  });
  // 다른 클래스는 병행 처리가 된다.
  $(".sameTime").on("click", function () {
    $(".ani_box").animate({ height: "200px" }, "slow", function () {
      console.log("anibox1-1");
    });
    $(".ani_box").animate({ width: "200px" }, "slow", function () {
      console.log("anibox1-2");
    });
    $(".ani_box2").animate({ height: "50px" }, "slow", function () {
      console.log("anibox2-1");
    });
    $(".ani_box2").animate({ width: "50px" }, "slow", function () {
      console.log("anibox2-2");
    });
  });
  $(".return").on("click", function () {
    $(".ani_box").animate({ height: "100px" }, "slow");
    $(".ani_box").animate({ width: "100px" }, "slow");
    $(".ani_box2").animate({ height: "100px" }, "slow");
    $(".ani_box2").animate({ width: "100px" }, "slow");
  });
});
