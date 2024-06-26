> # jQuery Practice

## 현 레포지토리는 유투버:`왕초보 홈페이지만들기` 선생님의 내용을 정리하고 저의 방식대로 해석해서 연습해본 것들 입니다.

- vscode를 사용하면 좋습니다.

  - 추천 확장자
    - Live Server
    - Prettier - Code formatter
    - Highlight Matching Tag
    - jQuery Code snippets

- 29번 진행 시 주의 사항
  - 외부 폴더에서 29.jqueryAJAX.html을 더블클릭해서 들어갈 수도 있다.
  - 하지만 버튼을 클릭하면 console에 error가 뜬다.
  - cors 에러이기 때문에 Live Server로 켜서 하면 잘 진행된다.
  - html파일을 마우스 오른쪽 클릭한 다음 Open with Live Server를 클릭하면 된다.
- 31번 진행 시 주의 사항
  - get은 test 해볼 수 있다.
  - post는 test 해볼 수 없고 405에러가 나온다.
- 32번 요약
  ```js
  const dollar = $.noConflict();
  dollar(function () {
    dollar("#btn_noConflict").on({
      click: function () {
        dollar("#div_noConflict").text("버튼 클릭이용");
      },
    });
  });
  ```

### ※ 출처 : [왕초보 홈페이지만들기](https://youtu.be/0m6DWr1CxeE?si=8V62OCuNd0czERlP)
