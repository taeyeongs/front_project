// const one = document.querySelector('#one');
// const two = document.querySelector("#two");
// const three = document.querySelector('#three');
// const four = document.querySelector("#four");
// const five = document.querySelector("#five");
// const six = document.querySelector("#six");
// const seven = document.querySelector("#seven");
// const eight = document.querySelector("#eight");
// const nine = document.querySelector("#nine");
// const ten = document.querySelector("#ten");
// const tenone = document.querySelector("#tenone");
// const tentwo = document.querySelector("#tentwo");
// const tenthree = document.querySelector("#tenthree");
// const tenfour = document.querySelector("#tenfour");
// const tenfive = document.querySelector("#tenfive");


document.addEventListener('click', function (event) {
  
  if (!event.target.classList.contains('toggle')) return;
  
  var content = document.querySelector(event.target.hash);
  if (!content) return;
  
  event.preventDefault();
  
  if (content.classList.contains('.active')) {
    content.classList.remove('active');
    return;
  }
  
  var accordions = document.querySelectorAll('.tit2');
  for (var i = 0; i < accordions.length; i++) {
    accordions[i].classList.remove('active');
  }
  
  content.classList.toggle('active');
})

