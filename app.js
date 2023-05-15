const toggleBtn = document.querySelector('.fa-bars')
const navbar = document.querySelector('.nav-links')

toggleBtn.addEventListener('click', function () {
  navbar.classList.toggle('show')
})

// back to top btn
const topBtn = document.querySelector('.fa-arrow-up')

window.addEventListener('scroll', function () {
  if (this.window.scrollY > 2000) {
    topBtn.style.transform = 'translateX(0%)'
    topBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    })
  }
})
