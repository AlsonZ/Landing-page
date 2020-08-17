let menuBtn = document.getElementById('menuButton');
menuBtn.addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('sidebar-active')
});

let navbar = document.getElementById('navbar')

window.addEventListener('scroll', (e) => {

  if(window.scrollY > 10) {
    navbar.classList.add('nav-collapse');
  } else {
    navbar.classList.remove('nav-collapse');
  }
});

let faqs = document.getElementsByClassName('question');

for(let i = 0; i < faqs.length;i++) {
  faqs[i].addEventListener('click', () => {
    faqs[i].classList.toggle('active');
  })
}