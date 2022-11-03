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

const selectBoxElements = document.querySelectorAll(".select_box");

function toggleSelectBox(selectBox) {
  selectBox.classList.toggle("active");
}

function selectOption(optionElement) {
  const selectBox = optionElement.closest(".select_box");
  const selectedElement = selectBox.querySelector(".selected-value");
  selectedElement.textContent = optionElement.textContent;
}

selectBoxElements.forEach((selectBoxElement) => {
  selectBoxElement.addEventListener("click", function (e) {
    const targetElement = e.target;
    const isOptionElement = targetElement.classList.contains("option");

    if (isOptionElement) {
      selectOption(targetElement);
    }

    toggleSelectBox(selectBoxElement);
  });
});

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

// const sv = document.getElementsByClassName("selected-value").value;
// const list = document.querySelectorAll(".dropdown");
// console.log(list);

// function filter() {
//   for (let i = 0; i > list.length; i++) {
//     if (sv === list.value) {
//       list[i].style.display = "flex";
//     } else {
//       list[i].style.display = "none";
//     }
//   }
// }
