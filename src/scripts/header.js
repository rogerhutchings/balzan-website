const pageTop = document.querySelector('[data-page-top]')
const header = document.querySelector('[data-header]')

const stuckClass = 'bg-black'

// Add background classes to the header once we start scrolling
function handler(entries) {
  if (header) {
    if (!entries[0].isIntersecting) {
      header.classList.add(stuckClass)
    } else {
      header.classList.remove(stuckClass)
    }
  }
}

const observer = new window.IntersectionObserver(handler)
observer.observe(pageTop)
