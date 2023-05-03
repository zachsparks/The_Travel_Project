const header = document.querySelector('header');
const footer = document.querySelector('footer');
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', () => {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    header.classList.remove('hide');
  } else {
    header.classList.add('hide');
  }
  prevScrollPos = currentScrollPos;

  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
    footer.classList.remove('hide');
  } else {
    footer.classList.add('hide');
  }
});

header.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});





