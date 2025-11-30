import './style.css'
import gsap from 'gsap'

// Sound effect simulation (visual only)
const playHover = () => {
  // Placeholder for sound logic
  console.log('bip');
};

document.addEventListener('DOMContentLoaded', () => {
  const tl = gsap.timeline();

  // Logo Animation (Zoom in + Fade)
  tl.to('#logo', {
    scale: 1,
    duration: 1.5,
    ease: 'elastic.out(1, 0.5)'
  })
  
  // HUD Slide in
  .to('#hud', {
    opacity: 1,
    x: 0,
    duration: 0.8,
    ease: 'power2.out'
  }, '-=1')

  // Menu Items Stagger
  .from('.menu-item', {
    x: -50,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
    ease: 'back.out(1.7)'
  }, '-=0.5')

  // Quote Fade in
  .to('#quote', {
    opacity: 1,
    y: -10,
    duration: 1,
    delay: 0.5
  });

  // Interactive Hover Effects
  const menuItems = document.querySelectorAll('.menu-item');
  menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      playHover();
      gsap.to(item, { x: 10, duration: 0.2 });
    });
    item.addEventListener('mouseleave', () => {
      gsap.to(item, { x: 0, duration: 0.2 });
    });
  });
});