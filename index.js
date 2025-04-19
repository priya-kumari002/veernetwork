window.addEventListener('scroll', function () {
    const section = document.getElementById('infoSection');
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 150;
  
    if (sectionTop < triggerPoint) {
      section.querySelector('.content-wrapper').classList.add('visible');
    }
  });
  
  // Fade-in animation when elements enter viewport
  const sections = document.querySelectorAll('section, .card');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, {
    threshold: 0.1
  });
  
  sections.forEach(section => {
    observer.observe(section);
  });
    

  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  const video = document.querySelector('.video-background');
video.addEventListener('ended', () => {
  document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});
