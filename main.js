document.addEventListener('DOMContentLoaded', () => {
  // Scroll Reveal Animation
  const reveals = document.querySelectorAll('.reveal');

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    reveals.forEach((reveal) => {
      const elementTop = reveal.getBoundingClientRect().top;
      if (elementTop < windowHeight - elementVisible) {
        reveal.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Trigger once on load

  // Audio Effect Mockup (Visual feedback on button click)
  const ctaBtn = document.getElementById('cta-btn');
  if(ctaBtn) {
    ctaBtn.addEventListener('click', () => {
      ctaBtn.innerText = 'RESPECT +';
      ctaBtn.classList.add('mission-passed');
      setTimeout(() => {
        ctaBtn.innerText = 'JOIN THE FAMILY';
        ctaBtn.classList.remove('mission-passed');
      }, 2000);
    });
  }
});