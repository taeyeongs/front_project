# front_project

---
폴더 구조  
- public
    - css
    - html
    - js
    - img
---
* `변경불가 파일(변경하면 안됨)`  
    - index.html  
    - js/include.js  
    - css/reset.css  
---
`유의사항`  
1. 웹페이지 시작은 항상 index.html 파일로 실행한다
2. 페이지 이동은 ?m=페이지명 으로 한다(.html 제외)  
예) http://127.0.0.1:5500/public/index.html?m=sub_main
3. 게시판 페이징은 뒤어 다른 param을 사용  
예) http://127.0.0.1:5500/public/index.html?m=sub_main&p=1
4. 각 페이지 작업시
- header와 footer는 html/include 에 작성
- html은 html 폴더에 파일명  
    예) main 작성시 /html/main.html
- css은 css 폴더에 html 파일명과 동일하게 작성  
    예) main 작성시 /css/main.css  
        추가 css 파일이있을 경우 import를 사용
- javascript 는 js 폴더에 html 파일명과 동일하게 작성  
    예) main 작성시 /js/main.js
            