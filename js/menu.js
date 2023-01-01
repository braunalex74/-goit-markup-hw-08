(() => {
  const refs = {
    openmenuBtn: document.querySelector(".menu-btn"),
    closemenuBtn: document.querySelector(".menu-close"),
    menu: document.querySelector('.mobile-menu'),
  };  

    refs.openmenuBtn.addEventListener('click', toggleMenu);
    refs.closemenuBtn.addEventListener('click', toggleMenu);

    function toggleMenu() {
      refs.menu.classList.toggle('is-hidden');
    }
  })();