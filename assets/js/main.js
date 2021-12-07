window.onload = function () { document.body.scrollTop = document.documentElement.scrollTop = 0; };

// // Show Menu Handler
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show')
    })
  }
}

showMenu('nav__toggle', 'nav__menu')

// // Active Link Handler
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  //Active link
  navLink.forEach(n => n.classList.remove('active'))
  this.classList.add('active')

  // Remove menu mobile
  const navMenu = document.getElementById('nav__menu')
  navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// // Scroll Nav Handler
function scrollNav() {
  const nav = document.getElementById('nav')
  if (this.scrollY >= 30) nav.classList.add('scroll-nav')
  else nav.classList.remove('scroll-nav')
}
window.addEventListener('scroll', scrollNav)
