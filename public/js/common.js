
// 하위메뉴
function dispToggle(objId) {
    var obj = document.getElementById(objId);
  
    if (obj.style.display == "none") {
      obj.style.display = "block";
    } else {
      obj.style.display = "none";
    }
  }
  
  // fix 상단바 보이고 사라지기
  function navigo() {
    const header = document.querySelector(".header_wrap"); //헤더부분획득
    const headerheight = header.clientHeight; //헤더높이
    document.addEventListener("scroll", onScroll, { passive: true }); //스크롤 이벤트
    function onScroll() {
      const scrollposition = pageYOffset; //스크롤 위치
      const nav = document.querySelector(".fix_menu"); //네비게이션
      if (headerheight <= scrollposition) {
        //만약 헤더높이<=스크롤위치라면
        nav.style.display = "block"; //fix 메뉴 보이기
      } else {
        //그 외의 경우
        nav.style.display = "none"; //fix 메뉴 가리기
      }
    }
  }
  navigo();
  
  // 고정 header 하위메뉴 보이고 사라지기
  function dispShow(objId) {
    var obj = document.getElementById(objId);
  
    obj.style.display = "block";
  }
  function dispHidden(objId) {
    var obj = document.getElementById(objId);
  
    obj.style.display = "none";
  }
  
  // 검색어
  function searchID() {
    var objId = "search_id";
    var obj = document.querySelector("#" + objId);
    // var obj = document.getElementById(objId);
    var val = obj.value;
  
    if (val.length > 0) {
      //표시
      document.querySelector("#search_x").style.display = "";
    } else {
      //비표시
      document.querySelector("#search_x").style.display = "none";
    }
  }
  
  function searchID2() {
    var objId = "fix_menu_id";
    var obj = document.querySelector("#" + objId);
    // var obj = document.getElementById(objId);
    var val = obj.value;
  
    if (val.length > 0) {
      //표시
      document.querySelector("#fix_menu_x").style.display = "";
    } else {
      //비표시
      document.querySelector("#fix_menu_x").style.display = "none";
    }
  }
  
  function searchClear() {
    //x 표시 눌렀을 때 지워
    var objId = "search_id";
    var obj = document.querySelector("#" + objId);
    //var obj = document.getElementById(objId);
    obj.value = "";
    obj.onkeyup();
  }
  
  function searchClear2() {
    //x 표시 눌렀을 때 지워
    var objId = "fix_menu_id";
    var obj = document.querySelector("#" + objId);
    //var obj = document.getElementById(objId);
    obj.value = "";
    obj.onkeyup();
  }
  