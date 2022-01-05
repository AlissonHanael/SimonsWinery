let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active')
  cartItem.classList.remove('active')
  searchForm.classList.remove('active')
}

let cartItem = document.querySelector('.cart-items-container')

document.querySelector('#cart-btn').onclick = () => {
  cartItem.classList.toggle('active')
  navbar.classList.remove('active')
  searchForm.classList.remove('active')
}
let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active')
  navbar.classList.remove('active')
  cartItem.classList.remove('active')
}

let header = document.querySelector('.header')
let headerHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= headerHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

window.onscroll = () => {
  navbar.classList.remove('active')
  cartItem.classList.remove('active')
  searchForm.classList.remove('active')
}
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
})
