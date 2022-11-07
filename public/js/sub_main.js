// import { includeHTML } from "./include.js";
// includeHTML();



// let filterItem = document.querySelectorAll(".filter_item");
//       let filterList = [];
//       [].forEach.call(filterItem, function (filter) {
//         filter.addEventListener("change", (e) => {
//             console.log('e---',filter);
//           let text = filter.nextSibling.innerText;
//           if(filter.type === 'checkbox') {
//             if (filter.checked === true) {
//                 filterList.push(filter.nextSibling.innerText);
//             } else {
//                 filterList = filterList.filter((e) => e !== text);
//             }
//          } else if(filter.type === 'radio') {

//           }
//           console.log(filterList);
//           let productSearch = document.querySelector(".product_search");

//           removeAllchild(productSearch);
//           let productSearchArea = document.querySelector(".product_search_area");
//           if (filterList.length === 0) {
//             productSearch.style.display = "none";
//           } else {
//             productSearch.style.display = "block";
//  console.log('productSearch,productSearchArea',productSearch,productSearchArea);
//             let filterItem = [];
//             filterList.forEach((val, idx) => {
//               console.log("val, idx--", val, idx);
//               let newDiv = document.createElement("div");
//               newDiv.classList.add("item_area");
//               let newSubDiv = document.createElement("div");
//               let newContent = document.createTextNode(val);
//               newSubDiv.appendChild(newContent);
//               newSubDiv.classList.add("filter_text_item");
//               newDiv.appendChild(newSubDiv);
//               console.log("newDiv--", newDiv);
//               let newDel = document.createElement("a");
//               newDel.classList.add("filter_text_del");
//               let newDelContent = document.createTextNode("✕");
//               newDel.appendChild(newDelContent);
//               //newDiv.appendChild(newContent);
//               newDiv.appendChild(newDel);
//               console.log(newDiv);

//               productSearch.appendChild(newDiv);
//               newDel.addEventListener("click", (el) => {
//                 // if(eindexOf
//                 console.log("ee-", el);
//                 let item =
//                   el.target.parentNode.querySelector(".filter_text_item");
//                 console.log(item);
//                 filterList = filterList.filter((e) => e !== item.innerText);
//                 // let filterItems = document.querySelectorAll(".filter_item");
//                 let checkbox = document.querySelector('input[value="'+item.innerText+'"]')
//                 checkbox.checked = false;
//                 console.log(checkbox);
//                 // filterItems.addEventListener((e) => {
//                 //     console.log(e, item.innerText, this )
//                 //     console.log(filterItems.checked, this.checked)
//                 //    if( e.target.value == item.innerText) {
//                 //     filterItems[i].checked == false;
//                 //     console.log(v);
//                 //    }
//                 // }) 
//                 // item.parentNode.style.display = "none";
//                 item.parentNode.remove();
//                 // if (filterList.length === 0) {
//                 //   productSearch.style.display = "none";
//                 // }
//                 //if (filterList) console.log(filterList);
//               });
//             });
//             // let newDiv = document.createElement("div");
//             // let newContent = document.createTextNode("환영합니다!");
//             // newDiv.appendChild()
//             // let productSearchText =
//             //   "<div>" +
//             //   filterList.join(
//             //     '<a href="#" class="filter_text_del">✕</a></div><div>'
//             //   ) +
//             //   '<a class="filter_text_del">✕</a></div>';
//             // productSearchArea.innerHTML = productSearchText;
//           }
//         });
//       });

//       function removeAllchild(el) {
//         while (el.hasChildNodes()) {
//           el.removeChild(el.firstChild);
//         }
//       }

//       let filterTextDel = document.querySelectorAll(".filter_text_del");
//       console.log(filterTextDel);
//       // filterTextDel.addEventListener('click', (e)=>{
//       //     console.log('filterTextDel==',e)
//       // })

//       function filter() {
//         let search = document.querySelectorAll("."); //  .getElementById("search").value.toLowerCase();
//         let listInner = document.getElementsByClassName("listInner");

//         for (let i = 0; i < listInner.length; i++) {
//           city = listInner[i].getElementsByClassName("city");
//           country = listInner[i].getElementsByClassName("country");
//           if (
//             city[0].innerHTML.toLowerCase().indexOf(search) != -1 ||
//             country[0].innerHTML.toLowerCase().indexOf(search) != -1
//           ) {
//             listInner[i].style.display = "flex";
//           } else {
//             listInner[i].style.display = "none";
//           }
//         }
//       }
// var quick_menu = $('#quick');
// var quick_top = 470;

// quick_menu.css('top', $(window).height() );
// $(document).ready(function(){
//     quick_menu.animate( { "top": $(document).scrollTop() + quick_top +"px" }, 200 ); 
//     $(window).scroll(function(){
//         quick_menu.stop();
//         quick_menu.animate( { "top": $(document).scrollTop() + quick_top + "px" }, 500 );
//     });
// });
// console.log(111);
// var jsfiles = ['',''];