// 버튼을 클릭했을 때 모든 요소 색 바꾸기
$(document).ready(function () {
  $("button").click(function () {
    // 전체 색 바꾸기
    // $("*").css("background-color", "blue");

    // 클릭한 버튼 색만 바꾸기
    $(this).css("background-color", "blue");

    // 버튼 전체 색 바꾸기
    // $("button").css("background-color", "blue");
  });

  // first class 버튼을 클릭하면 first class p 태그의 배경색을 red로 바꾼다.
  $("button.first").click(function () {
    $("p.first").css("background-color", "red");
  });

  // 자식 요소 색 바꾸기
  $("button.second").click(function () {
    // 띄어쓰기는 자식 요소의 first라는 class 전부의 색 변경
    // 이 안에서도 span 태그 중 first class만 바꾸려면 span.first로 하면 됨
    $("p .first").css("background-color", "green");
  });

  // colon 연습하기
  // ul 태그 중 첫 번째만 바꾸기
  $("button.cf").click(function () {
    $("ul li:first").css("background-color", "black");
  });
  // ul 태그 중 자식 요소의 첫 번째 바꾸기
  $("button.cfc").click(function () {
    $("ul li:first-child").css("background-color", "purple");
  });
  // ul 태그 중 마지막 바꾸기
  $("button.cl").click(function () {
    $("ul li:last").css("background-color", "purple");
  });
  // ul 태그 중 자식 요소의 마지막 바꾸기
  $("button.clc").click(function () {
    $("ul li:last-child").css("background-color", "purple");
  });

  // 속성 선택해서 바꾸기
  $("button.href").click(function () {
    $("[href]").css("background-color", "orange");
  });

  // 주소별로 선택해서 바꾸기
  // 주소 꼭 따옴표 할것
  $("button.naver").click(function () {
    $("[href='http://naver.com']").css("background-color", "green");
  });
  //네이버가 아닌 a태그만
  $("button.not_naver").click(function () {
    $("a[href != 'http://naver.com']").css("background-color", "green");
    // 전체 = a만 지우면 된다.
    // $("[href != 'http://naver.com']").css("background-color", "green");
  });
  $("button.daum").click(function () {
    $("[href='http://daum.net']").css("background-color", "blue");
  });
  // a태그의 속성만 하고 싶으면
  //   $("button.daum").click(function () {
  //     $("a[href='http://daum.net']").css("background-color", "blue");
  //   });
  // p태그의 속성만 하고 싶으면
  //   $("button.daum").click(function () {
  //     $("p[href='http://daum.net']").css("background-color", "blue");
  //   });

  // 일반적으로 띄는 것은 자손을 의미한다.
  //   a [href]와 a[href]의 차이점
  // a [href]:
  // 공백 포함: a 요소 내에 자손 요소로 href 속성이 있는 경우를 선택.
  // 예시: <a><span href='http://daum.net'></span></a>

  // a[href]:
  // 공백 없음: a 요소 자체에 href 속성이 있는 경우를 선택.
  // 예시: <a href='http://daum.net'></a>

  $("button.table").click(function () {
    $("tr:even").css("background-color", "gray");
    $("tr:odd").css("background-color", "lightgray");
  });
});
