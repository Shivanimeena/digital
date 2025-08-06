import { CommonModule, isPlatformBrowser, NgIf } from '@angular/common';
import { Component, AfterViewInit, ElementRef, inject, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-front',
  standalone: true,
  imports: [CommonModule , FormsModule , ],
  templateUrl: './front.html',
  styleUrls: ['./front.css']
})
export class Front implements AfterViewInit {
  // menuActive = false;
  // showServices = false;

  platformId = inject(PLATFORM_ID);
  elRef = inject(ElementRef);

  // toggleMenu() {
  //   this.menuActive = !this.menuActive;
  // }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollAnimations();
     
      this.startTestimonialAutoScroll();
      
       setTimeout(() => {
         this.initCounterAnimations();
         this.initClientCommentScrollAnimations();
        this.initFoundersCanvasAnimation();
      }, 150);
    }
  }



initFoundersCanvasAnimation() {
  if (!isPlatformBrowser(this.platformId)) return;

  const canvas = document.getElementById('founders-canvas') as HTMLCanvasElement | null;
  if (!canvas) return;

  const context = canvas.getContext('2d');
  if (!context) return;

  const ctx = context as CanvasRenderingContext2D; // ✅ safe non-null variable
  let w = canvas.width = canvas.offsetWidth;
  let h = canvas.height = canvas.offsetHeight;
  const particleCount = 100;
  const maxDistance = 100;

  class Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;

    constructor() {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.radius = Math.random() * 2 + 1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#e63946';
      ctx.fill();
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > w) this.vx *= -1;
      if (this.y < 0 || this.y > h) this.vy *= -1;
    }
  }

  const particles: Particle[] = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);

    for (let i = 0; i < particleCount; i++) {
      const p = particles[i];
      p.update();
      p.draw();

      for (let j = i + 1; j < particleCount; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDistance) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(230,57,70,${1 - dist / maxDistance})`;
          ctx.lineWidth = 1;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener('resize', () => {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  });
}


  initCounterAnimations() {
    const counters: NodeListOf<HTMLElement> = this.elRef.nativeElement.querySelectorAll('.counter-number');

    const animateCounter = (counter: HTMLElement, target: number, duration: number = 2000) => {
      let start: number | null = null;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(easeOut * target);
        counter.innerText = currentValue.toString();

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          counter.innerText = target.toString();
          counter.classList.add('active');
        }
      };

      requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          counters.forEach(counter => {
            const target = Number(counter.getAttribute('data-target') || '0');
            animateCounter(counter, target, 2000);
          });
          observer.disconnect();
        }
      });
    }, { threshold: 0.2 });

    const counterSection = this.elRef.nativeElement.querySelector('#client-counter');
    if (counterSection) {
      observer.observe(counterSection);
    }
  }

  initScrollAnimations() {
    const elements = this.elRef.nativeElement.querySelectorAll('.fade-in-up, .fade-in');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    elements.forEach((el: Element) => observer.observe(el));
  }

  testimonials = [
    {
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      name: 'Ganesh Housing',
      // position: 'C.E.O. - Boodmo.com',
      comment: "with GS Media, we didn’t just get marketing — we got a creative partner who understood our brand inside out.."
    },
    {
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      name: ' Glory Kids',
      // position: 'Founder - TechSpark',
      comment: "The video ad they created helped us reach thousands of parents across Gujarat. Super professional team!"
    },
    {
      image: 'https://randomuser.me/api/portraits/men/53.jpg',
      name: 'Little Vogue House',
      // position: 'CEO - MarketHub',
      comment: "They grew our Instagram from 0 to 10K in just a few months with engaging content and strong brand appeal."
    },
    // {
    //   image: 'https://randomuser.me/api/portraits/women/68.jpg',
    //   name: 'Neha Shah',
    //   position: 'Co-Founder - DigitalWave',
    //   comment: "The level of detail and care taken in delivering our digital marketing strategy was exceptional. Highly recommended!"
    // }
  ];

  activeTestimonial = 0;
  testimonialInterval: any;

  

  

  ngOnDestroy() {
    this.stopTestimonialAutoScroll();
  }

  setActiveTestimonial(index: number) {
    this.activeTestimonial = index;
  }

  startTestimonialAutoScroll() {
    this.testimonialInterval = setInterval(() => {
      this.activeTestimonial = (this.activeTestimonial + 1) % this.testimonials.length;
    }, 4000);
  }

  stopTestimonialAutoScroll() {
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }
  }

  initClientCommentScrollAnimations() {
    if (typeof IntersectionObserver !== 'undefined') {
      const elements = this.elRef.nativeElement.querySelectorAll('.scroll-fade-up');
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      elements.forEach((el: Element) => observer.observe(el));
    }
  }

//   featuredBrands = [
//   { name: 'ViomCare', logo: '/vio.png' },
//   { name: 'Rich Basket', logo: '/rich.png' },
//   { name: 'The Shake Maker', logo: '/shake.png' },
//   { name: 'Glory Kids Preschool', logo: '/glory.png' },
//   { name: 'Little Vogue House', logo: '/vogue.png' },
//   { name: 'Ganesh Housing', logo: '/ganesh.png' },
//   { name: 'Safalam Agro', logo: '/agro.png' },
//   // Add more brands as needed
// ];

// Component Class
featuredBrands = [
  { 
    name: 'ViomCare', 
    displayName: 'ViomCare',
    logo: '/vio.png' 
  },
  { 
    name: 'little-vogue', 
    displayName: 'Little Vogue House',
    logo: '/vogue.png' 
  },
  { 
    name: 'rich-basket', 
    displayName: 'Rich Basket',
    logo: '/rich.png' 
  },
  { 
    name: 'The Shake Maker', 
    displayName: 'The Shake Maker',
    logo: '/shake.png' 
  },
  { 
    name: 'ganesh-housing', 
    displayName: 'Ganesh Housing',
    logo: '/ganesh.png' 
  },
  { 
    name: 'Safalam Agro', 
    displayName: 'Safalam Agro',
    logo: '/agro.png',
  },
  { 
    name: 'Glory Kids Preschool', 
    displayName: 'Glory Kids Pre school',
    logo: '/glory.png' 
  }
];
}
