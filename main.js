import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Hero Animation
const tl = gsap.timeline();

tl.to('.hero-bg', {
  scale: 1,
  duration: 2,
  ease: 'power2.out'
})
.from('.hero-subtitle', {
  y: 20,
  opacity: 0,
  duration: 0.8,
  ease: 'power3.out'
}, '-=1.5')
.from('.hero-title', {
  scale: 0.8,
  opacity: 0,
  duration: 1,
  ease: 'elastic.out(1, 0.5)'
}, '-=1')
.to('.hero-cta', {
  opacity: 1,
  y: 0,
  duration: 0.5
}, '-=0.5');

// Scroll Animations
gsap.from('.content-left', {
  scrollTrigger: {
    trigger: '.content-left',
    start: 'top 80%',
  },
  x: -100,
  opacity: 0,
  duration: 1,
  ease: 'power3.out'
});

gsap.from('.content-right', {
  scrollTrigger: {
    trigger: '.content-right',
    start: 'top 80%',
  },
  x: 100,
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
  delay: 0.2
});

// Gallery Stagger
gsap.from('.gallery-item', {
  scrollTrigger: {
    trigger: '.gallery-item',
    start: 'top 85%',
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: 'power2.out'
});