// Carrusel de testimonios
const testimonialsCarousel = document.querySelector('#testimonials-carousel')
const testimonialsPrevBtn = document.querySelector('[data-slider-prev]')
const testimonialsNextBtn = document.querySelector('[data-slider-next]')

let testimonialsIndex = 0
let testimonialsTransitioning = false

// Contar los slides dinámicamente
const totalTestimonials = testimonialsCarousel ? testimonialsCarousel.children.length : 0

function updateTestimonialsCarousel() {
  if (testimonialsCarousel && !testimonialsTransitioning) {
    testimonialsTransitioning = true
    const translateX = -testimonialsIndex * 100
    testimonialsCarousel.style.transform = `translateX(${translateX}%)`
    
    // Resetear la bandera después de la transición
    setTimeout(() => {
      testimonialsTransitioning = false
    }, 500) // Duración de la transición CSS
  }
}

function nextTestimonial() {
  if (testimonialsTransitioning) return
  testimonialsIndex = (testimonialsIndex + 1) % totalTestimonials
  updateTestimonialsCarousel()
}

function prevTestimonial() {
  if (testimonialsTransitioning) return
  testimonialsIndex = (testimonialsIndex - 1 + totalTestimonials) % totalTestimonials
  updateTestimonialsCarousel()
}

// Inicializar el carrusel de testimonios
if (testimonialsCarousel && testimonialsPrevBtn && testimonialsNextBtn && totalTestimonials > 0) {
  // Asegurar que el carrusel esté en la posición inicial
  testimonialsCarousel.style.transform = 'translateX(0%)'
  
  testimonialsNextBtn.addEventListener('click', (e) => {
    e.preventDefault()
    nextTestimonial()
  })
  
  testimonialsPrevBtn.addEventListener('click', (e) => {
    e.preventDefault()
    prevTestimonial()
  })
  
  // Auto-play opcional (descomentar si se desea)
  // setInterval(nextTestimonial, 8000)
}

// Menú mobile
const menuToggleBtn = document.querySelector('[data-menu-toggle]')
const mobileMenu = document.querySelector('[data-mobile-menu]')
const mobileSubmenuToggle = document.querySelector('[data-mobile-submenu-toggle]')
const mobileSubmenu = document.querySelector('[data-mobile-submenu]')

// Toggle del menú principal
if (menuToggleBtn && mobileMenu) {
  const menuIcon = menuToggleBtn.querySelector('i')
  
  menuToggleBtn.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden')
    const isExpanded = !isHidden
    menuToggleBtn.setAttribute('aria-expanded', String(isExpanded))
    menuToggleBtn.setAttribute('aria-label', isExpanded ? 'Cerrar menú' : 'Abrir menú')
    
    // Cambiar ícono de hamburguesa a multiplicar
    if (menuIcon) {
      if (isExpanded) {
        menuIcon.classList.remove('fa-bars')
        menuIcon.classList.add('fa-times', 'text-xs')
      } else {
        menuIcon.classList.remove('fa-times', 'text-xs')
        menuIcon.classList.add('fa-bars')
      }
    }
  })

  // Cerrar menú al hacer click en los enlaces
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden')
      menuToggleBtn.setAttribute('aria-expanded', 'false')
      menuToggleBtn.setAttribute('aria-label', 'Abrir menú')
      
      // Volver a ícono de hamburguesa
      if (menuIcon) {
        menuIcon.classList.remove('fa-times', 'text-xs')
        menuIcon.classList.add('fa-bars')
      }
    })
  })
}

// Toggle del submenú "Soluciones"
if (mobileSubmenuToggle && mobileSubmenu) {
  mobileSubmenuToggle.addEventListener('click', (e) => {
    e.preventDefault()
    e.stopPropagation()
    const isExpanded = mobileSubmenuToggle.getAttribute('aria-expanded') === 'true'
    const newExpanded = !isExpanded
    mobileSubmenu.classList.toggle('hidden')
    mobileSubmenuToggle.setAttribute('aria-expanded', String(newExpanded))
    
    // Rotar el ícono
    const icon = mobileSubmenuToggle.querySelector('i')
    if (icon) {
      if (newExpanded) {
        // Submenú abierto: rotar hacia arriba
        icon.style.transform = 'rotate(180deg)'
      } else {
        // Submenú cerrado: volver a posición original
        icon.style.transform = 'rotate(0deg)'
      }
    }
  })
}


// Carrusel de eventos
const eventosCarousel = document.querySelector('#eventos-carousel')
const eventosPrevBtn = document.querySelector('#eventos-prev')
const eventosNextBtn = document.querySelector('#eventos-next')

let eventosIndex = 0
let isTransitioning = false

// Contar los slides dinámicamente
const totalSlides = eventosCarousel ? eventosCarousel.children.length : 0

function updateEventosCarousel() {
  if (eventosCarousel && !isTransitioning) {
    isTransitioning = true
    const translateX = -eventosIndex * 100
    eventosCarousel.style.transform = `translateX(${translateX}%)`
    
    // Resetear la bandera después de la transición
    setTimeout(() => {
      isTransitioning = false
    }, 500) // Duración de la transición CSS
  }
}

function nextEvento() {
  if (isTransitioning) return
  eventosIndex = (eventosIndex + 1) % totalSlides
  updateEventosCarousel()
}

function prevEvento() {
  if (isTransitioning) return
  eventosIndex = (eventosIndex - 1 + totalSlides) % totalSlides
  updateEventosCarousel()
}

// Inicializar el carrusel
if (eventosCarousel && eventosPrevBtn && eventosNextBtn && totalSlides > 0) {
  // Asegurar que el carrusel esté en la posición inicial
  eventosCarousel.style.transform = 'translateX(0%)'
  
  eventosNextBtn.addEventListener('click', (e) => {
    e.preventDefault()
    nextEvento()
  })
  
  eventosPrevBtn.addEventListener('click', (e) => {
    e.preventDefault()
    prevEvento()
  })
}


// Preloader
const preloader = document.querySelector('#preloader')
if (preloader) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.style.opacity = '0'
      setTimeout(() => {
        preloader.style.display = 'none'
      }, 500)
    }, 300)
  })
}

// Inicializar AOS (Animate On Scroll)
if (typeof AOS !== 'undefined') {
  AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: true,
    offset: 120,
    delay: 0,
    mirror: false,
  })
}

// Botón Volver arriba flotante
const scrollToTopBtn = document.querySelector('#scroll-to-top')

if (scrollToTopBtn) {
  let isVisible = false
  let isAnimating = false
  let scrollTimeout = null
  let isScrollingToTop = false
  let lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop
  let animationFrameId = null

  // Mostrar/ocultar botón según el scroll
  function toggleScrollToTopButton() {
    // Cancelar cualquier timeout pendiente
    if (scrollTimeout) {
      clearTimeout(scrollTimeout)
    }

    // Throttle: esperar un poco antes de ejecutar
    scrollTimeout = setTimeout(() => {
      const shouldShow = window.scrollY > 300

      // Si ya está en el estado correcto, no hacer nada
      if (shouldShow === isVisible || isAnimating) {
        return
      }

      isAnimating = true

      if (shouldShow && !isVisible) {
        // Mostrar el botón
        scrollToTopBtn.classList.remove('hidden')
        scrollToTopBtn.classList.add('flex')
        
        // Usar requestAnimationFrame para asegurar que el navegador renderice primero
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            scrollToTopBtn.classList.remove('opacity-0', 'translate-y-4')
            isVisible = true
            isAnimating = false
          })
        })
      } else if (!shouldShow && isVisible) {
        // Ocultar el botón
        scrollToTopBtn.classList.add('opacity-0', 'translate-y-4')
        setTimeout(() => {
          scrollToTopBtn.classList.remove('flex')
          scrollToTopBtn.classList.add('hidden')
          isVisible = false
          isAnimating = false
        }, 300)
      }
    }, 50) // Throttle de 50ms
  }

  // Event listener para el scroll con throttling
  let ticking = false
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop
    
    // Detectar si el usuario está haciendo scroll manualmente
    if (isScrollingToTop) {
      // Si la posición actual es mayor que la última, el usuario está scrolleando hacia abajo
      if (currentScroll > lastScrollPosition) {
        // Cancelar la animación
        isScrollingToTop = false
        if (animationFrameId !== null) {
          cancelAnimationFrame(animationFrameId)
          animationFrameId = null
        }
      }
    }
    
    // Actualizar la última posición de scroll
    lastScrollPosition = currentScroll
    
    if (!ticking) {
      window.requestAnimationFrame(() => {
        toggleScrollToTopButton()
        ticking = false
      })
      ticking = true
    }
  })

  // Event listener para el click con scroll animado
  scrollToTopBtn.addEventListener('click', (e) => {
    e.preventDefault()
    
    // Cancelar cualquier animación previa
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId)
    }
    
    isScrollingToTop = true
    lastScrollPosition = window.pageYOffset || document.documentElement.scrollTop
    
    // Función de scroll animado suave
    const scrollToTop = () => {
      if (!isScrollingToTop) {
        // La animación fue cancelada
        return
      }
      
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop
      
      if (currentScroll > 0) {
        // Calcular la nueva posición con easing suave (ease-out)
        const scrollStep = currentScroll * 0.1
        window.scrollTo(0, currentScroll - scrollStep)
        
        // Continuar animando hasta llegar arriba
        animationFrameId = requestAnimationFrame(scrollToTop)
      } else {
        // Asegurar que llegamos exactamente a 0
        window.scrollTo(0, 0)
        isScrollingToTop = false
        animationFrameId = null
      }
    }
    
    // Iniciar la animación
    animationFrameId = requestAnimationFrame(scrollToTop)
  })

  // Verificar el estado inicial
  toggleScrollToTopButton()
}



