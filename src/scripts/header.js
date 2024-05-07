const pageTop = document.querySelector('[data-page-top]')
const header = document.querySelector('[data-header]')

const stuckClass = 'bg-black'
const defaultClass = 'bg-transparent'

// Add background classes to the header once we start scrolling
function handler(entries) {
  if (header) {
    if (!entries[0].isIntersecting) {
      header.classList.add(stuckClass)
      header.classList.remove(defaultClass)
    } else {
      header.classList.add(defaultClass)
      header.classList.remove(stuckClass)
    }
  }
}

const observer = new window.IntersectionObserver(handler)
observer.observe(pageTop)
