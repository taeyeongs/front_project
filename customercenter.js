// 게시판  toggle 기능
// Listen for click on the document
document.addEventListener("click", function (event) {
  // console.log("event : " + event);
  // console.log(event.target.classList.contains("accordion-toggle"));
  //Bail if our clicked element doesn't have the class
  if (!event.target.classList.contains("accordion-toggle")) return;
  // console.log("event 2 : " + event);
  // Get the target content
  var content = document.querySelector(event.target.hash);
  // console.log("event 3: " + event);
  if (!content) return;

  // Prevent default link behavior
  event.preventDefault();
  // console.log("event 4: " + event);
  // If the content is already expanded, collapse it and quit
  if (content.classList.contains("active")) {
    content.classList.remove("active");
    return;
  }

  // Get all open accordion content, loop through it, and close it
  var accordions = document.querySelectorAll(".accordion-content.active");
  for (var i = 0; i < accordions.length; i++) {
    accordions[i].classList.remove("active");
  }

  // Toggle our content
  content.classList.toggle("active");
});

// 카테고리 버튼 toggle 기능

function toggleSelectBox(selectBox) {
  selectBox.classList.toggle("active");
}

function selectOption(optionElement) {
  const selectBox = optionElement.closest(".select_box");
  const selectedElement = selectBox.querySelector(".selected-value");
  selectedElement.textContent = optionElement.textContent;
}

const selectBoxElement = document.querySelector(".select_box");

// selectBoxElements.forEach((selectBoxElement) => {
selectBoxElement.addEventListener("click", function (e) {
  const targetElement = e.target;
  const isOptionElement = targetElement.classList.contains("option");

  if (isOptionElement) {
    selectOption(targetElement);
  }

  toggleSelectBox(selectBoxElement);
});
// });

document.addEventListener("click", function (e) {
  const targetElement = e.target;
  const isSelect =
    targetElement.classList.contains("select_box") ||
    targetElement.closest(".select_box");

  if (isSelect) {
    return;
  }

  const allSelectBoxElements = document.querySelector(".select_box");

  allSelectBoxElements.forEach((boxElement) => {
    boxElement.classList.remove("active");
  });
});

let search = document.querySelectorAll(".option").values();
console.log(search);

function filter() {
  let listInner = document.getElementsByClassName("listInner");

  for (let i = 0; i < listInner.length; i++) {
    city = listInner[i].getElementsByClassName("city");
    country = listInner[i].getElementsByClassName("country");
    if (
      city[0].innerHTML.toLowerCase().indexOf(search) != -1 ||
      country[0].innerHTML.toLowerCase().indexOf(search) != -1
    ) {
      listInner[i].style.display = "block";
    } else {
      listInner[i].style.display = "none";
    }
  }
}
