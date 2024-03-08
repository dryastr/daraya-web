ScrollReveal.debug = true;
ScrollReveal().reveal('.headline');
ScrollReveal().reveal('.animate-hero', { delay: 300 });
ScrollReveal().reveal('.client-icon-1', { delay: 700 });
ScrollReveal().reveal('.client-icon-2', { delay: 800 });
ScrollReveal().reveal('.client-icon-3', { delay: 900 });
ScrollReveal().reveal('.client-icon-4', { delay: 1000 });
ScrollReveal().reveal('.client-icon-5', { delay: 1100 });
ScrollReveal().reveal('.client-icon-6', { delay: 1200 });
ScrollReveal().reveal('.animate-hero-about-us', { delay: 500 });

var app = document.getElementById('desc-hero');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 60,
});

typewriter
  .pauseFor(1000)
  .typeString('Solusi Cepat dan Efisien untuk <strong>Tugas, Pengembangan Web, Desain UI</strong><br>')
  .typeString('dan Berbagai <span style="color: #FD841F;"><strong>Mata Pelajaran</strong></span>')
  .pauseFor(1000)
  .deleteChars(9)
  .typeString('<span style="color: #FD841F;"><strong>Kuliah </strong></span>')
  .typeString('sejak 2020.')
//   .pauseFor(1000)
  .start();