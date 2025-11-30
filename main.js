import './style.css'
import gsap from 'gsap'

// Hero Animation Sequence
const tl = gsap.timeline();

tl.to('.hero-subtitle', {
  opacity: 1,
  y: 0,
  duration: 1,
  delay: 0.5,
  ease: "power2.out"
})
.to('.hero-title', {
  opacity: 1,
  scale: 1,
  duration: 1.2,
  ease: "elastic.out(1, 0.3)"
}, "-=0.5")
.to('.hero-btn', {
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: "back.out(1.7)"
}, "-=0.8");

// Stats Animation on Scroll (Simple Intersection Observer since we want to keep it light without ScrollTrigger plugin if not strictly needed, but let's use basic GSAP for the bars)
const statsSection = document.querySelector('.stats-container');
const bars = document.querySelectorAll('.hud-stats-fill');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      gsap.fromTo(bars, 
        { width: "0%" },
        { 
          width: (i, target) => target.style.width, 
          duration: 1.5, 
          stagger: 0.2, 
          ease: "power2.out" 
        }
      );
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

if (statsSection) {
  observer.observe(statsSection);
}

// Mission Passed Effect
const btn = document.querySelector('button');
const overlay = document.getElementById('mission-overlay');
const missionText = document.querySelector('.mission-passed');

btn.addEventListener('click', () => {
  // Play sound effect logic could go here
  
  gsap.to(overlay, {
    opacity: 1,
    pointerEvents: 'all',
    duration: 0.1
  });
  
  gsap.fromTo(missionText, 
    { scale: 0.5, opacity: 0 },
    { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" }
  );

  setTimeout(() => {
    gsap.to(overlay, {
      opacity: 0,
      pointerEvents: 'none',
      duration: 0.5
    });
  }, 3000);
});

// Hover effect for images
const images = document.querySelectorAll('img');
images.forEach(img => {
  img.addEventListener('mouseenter', () => {
    gsap.to(img, { scale: 1.05, duration: 0.3 });
  });
  img.addEventListener('mouseleave', () => {
    gsap.to(img, { scale: 1, duration: 0.3 });
  });
});