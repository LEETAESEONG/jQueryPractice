$(function () {
  $("div#1").mouseover(function () {
    console.log("outer");
  });
  $("div#2").mouseenter(function () {
    console.log("inner");
  });
  $("div#3").mouseenter(function () {
    console.log("outer");
  });
  $("div#4").mouseenter(function () {
    console.log("inner");
  });
  $("div#5").mouseover(function () {
    console.log("outer");
  });
  $("div#6").mouseover(function () {
    console.log("inner");
  });
  $("div#7").mouseenter(function () {
    console.log("outer");
  });
  $("div#8").mouseover(function () {
    console.log("inner");
  });
});
