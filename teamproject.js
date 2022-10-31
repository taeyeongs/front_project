const one = document.querySelector('#one');
const two = document.querySelector("#two");
const three = document.querySelector('#three');
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const ten = document.querySelector("#ten");
const tenone = document.querySelector("#tenone");
const tentwo = document.querySelector("#tentwo");
const tenthree = document.querySelector("#tenthree");
const tenfour = document.querySelector("#tenfour");
const tenfive = document.querySelector("#tenfive");


function dropdown() {
    document.getElementById("one").classList.toggle("show");
}
if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("list_1");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }