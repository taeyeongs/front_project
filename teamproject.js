const tit2 = document.querySelector('.tit2');
const toggle = document.querySelector(".toggle");

toggle.addEventListener('click', () => {
  const dropdown = document.querySelector(".dropdown");
  dropdown.style.display = 'block';
});

toggle.addEventListener('blur', () => {
  const dropdown = document.querySelector(".dropdown");
  dropdown.style.display = '';
})