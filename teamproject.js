// const a_btn = document.querySelector('.a_button');
// const dropdown = document.querySelector(".dropdown");

//     const open = false;


// a_btn.addEventListener('click', () => {

//     if (open == false) {
//         const tit2 = document.querySelector(".tit2");
//         tit2.style.display = 'block';
//         open = true;
//     }
//     else {
//         const tit2 = document.querySelector(".tit2");
//         tit2.style.display = "none";
//         open = false;
//     }
//     return
// })

// const a_btn = document.querySelectorAll('.a_button');
// const dropdown = document.querySelector(".dropdown");
// const tit2 = document.querySelectorAll(".tit2");

// // Listen for click on the document
// a_btn.addEventListener('click', function (event) {
  
//   //Bail if our clicked element doesn't have the class
//   if (!event.target.classList.contains('tit2')) return;
  
//   // Get the target content
//   var content = document.querySelector(event.target.hash);
//   if (!content) return;
  
//   // Prevent default link behavior
//   event.preventDefault();
  
//   // If the content is already expanded, collapse it and quit
//   if (content.classList.contains('active')) {
//     content.classList.remove('active');
//     return;
//   }
  
//   // Get all open accordion content, loop through it, and close it
//   var accordions = document.querySelectorAll('.tit2.active');
//   for (var i = 0; i < accordions.length; i++) {
//     accordions[i].classList.remove('active');
//   }
  
//   // Toggle our content
//   content.classList.toggle('active');
// })






// Listen for click on the document
document.addEventListener('click', function (event) {
    // console.log("event : " + event);
    // console.log(event.target.classList.contains("accordion-toggle"));
  //Bail if our clicked element doesn't have the class
  if (!event.target.classList.contains('accordion-toggle')) return;
  // console.log("event 2 : " + event);
  // Get the target content
  var content = document.querySelector(event.target.hash);
// console.log("event 3: " + event);
  if (!content) return;
  
  // Prevent default link behavior
  event.preventDefault();
  // console.log("event 4: " + event);
  // If the content is already expanded, collapse it and quit
  if (content.classList.contains('active')) {
    content.classList.remove('active');
    return;
  }
  
  // Get all open accordion content, loop through it, and close it
  var accordions = document.querySelectorAll('.accordion-content.active');
  for (var i = 0; i < accordions.length; i++) {
    accordions[i].classList.remove('active');
  }
  
  // Toggle our content
  content.classList.toggle('active');
})