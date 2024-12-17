
// Seleção dos elementos
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-header');
const links = document.querySelectorAll(' ul li a')

// Adiciona o evento de clique
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active'); // Mostra/Esconde o menu
  hamburger.classList.toggle('open'); // Altera o ícone do menu
});

links.forEach (item =>{
 item.addEventListener('click', () => {
  navMenu.classList.toggle('active')
 })
})


let swiper =  createSwiper (".mySwiper", ".swiper-pagination", ".swiper-button-next", ".swiper-button-prev" )

function createSwiper(container, pagination, nextbutton, prevbutton) {
  return new Swiper (container, {
    slidesPerView: handleWidth(),
    spaceBetween: 30,
    pagination: {
      el: pagination,
      clickable: true,
    },
    navigation: {
      nextEl: nextbutton,
      prevEl: prevbutton,
    },
  });
}

function handleWidth() {

  let getWidth = window.innerWidth || document.documentElement.clientWidth

  let slideShow = 3;

  if (getWidth < 1100) {
    slideShow = 2
  }

  if (getWidth < 798) {
    slideShow = 1
  }


  return slideShow
}

window.addEventListener("resize", () =>{
  swiper.params.slidesPerView = handleWidth();
  swiper.update();
})







particlesJS('particles-js', {
  particles: {
    number: {
      value: 70, // Quantidade de partículas
      density: { enable: true, value_area: 1500 }
    },
    color: { value: "#ffffff" },
    shape: {
      type: "circle", // Formato da partícula
      stroke: { width: 0, color: "#0000" },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" }, // Efeito ao passar o mouse
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 100, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 5 },
      remove: { particles_nb: 5 }
    }
  },
  retina_detect: true
});

