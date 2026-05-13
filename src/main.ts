import { HomeView } from './views/Home';
import { AboutView } from './views/About';
import { SkillsView } from './views/Skills';
import { ProjectsView } from './views/Projects';
import { ContactView } from './views/Contact';

// Define GSAP types
declare const gsap: any;
declare const ScrollTrigger: any;
declare const lucide: any;

class App {
    private appContainer: HTMLElement;
    private navbar: HTMLElement | null;
    private cursor: HTMLElement | null;

    constructor() {
        this.appContainer = document.getElementById('app')!;
        this.navbar = document.getElementById('navbar');
        this.cursor = document.querySelector('.cursor-glow');
        
        // Register GSAP Plugins
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }
        
        this.init();
    }

    private init() {
        // 1. Initial Route
        this.handleRoute();

        // 2. Event Listeners
        window.addEventListener('hashchange', () => this.handleRoute());
        
        // Premium Custom Cursor
        if (this.cursor) {
            document.addEventListener('mousemove', (e: MouseEvent) => {
                gsap.to(this.cursor, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.8,
                    ease: "power2.out"
                });
            });
        }

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            if (this.navbar) {
                if (window.scrollY > 50) {
                    this.navbar.classList.add('scrolled');
                } else {
                    this.navbar.classList.remove('scrolled');
                }
            }
        });

        // Mobile Menu
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinksList = document.querySelector('.nav-links');
        if (mobileMenuBtn && navLinksList) {
            mobileMenuBtn.addEventListener('click', () => {
                navLinksList.classList.toggle('active');
            });
        }
    }

    private handleRoute() {
        const hash = window.location.hash || '#/';
        const path = hash.slice(1);
        
        this.renderView(path);
        this.updateActiveLink(hash);
    }

    private async renderView(path: string) {
        // Page Exit Transition
        await gsap.to(this.appContainer, {
            opacity: 0,
            y: 20,
            duration: 0.4,
            ease: "power2.in"
        });

        switch (path) {
            case '/':
                this.appContainer.innerHTML = HomeView();
                break;
            case '/about':
                this.appContainer.innerHTML = AboutView();
                break;
            case '/skills':
                this.appContainer.innerHTML = SkillsView();
                break;
            case '/projects':
                this.appContainer.innerHTML = ProjectsView();
                break;
            case '/contact':
                this.appContainer.innerHTML = ContactView();
                this.initContactForm();
                break;
            default:
                this.appContainer.innerHTML = HomeView();
        }

        // Initialize dynamic elements
        this.initGSAPAnimations();
        
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
        
        window.scrollTo(0, 0);

        // Page Enter Transition
        gsap.to(this.appContainer, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out"
        });
    }

    private updateActiveLink(hash: string) {
        const links = document.querySelectorAll('.nav-links a');
        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === hash) {
                link.classList.add('active');
            }
        });
    }

    private initGSAPAnimations() {
        if (typeof gsap === 'undefined') return;

        // Hero Staggered Animation
        gsap.fromTo(".reveal", 
            { opacity: 0, y: 50 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 1, 
                stagger: 0.15, 
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".reveal",
                    start: "top 85%",
                }
            }
        );

        // Visual Card Floating
        if (document.querySelector('.visual-card')) {
            gsap.to(".visual-card", {
                y: -20,
                rotation: 5,
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }
        
        // Bento Items Pop
        gsap.from(".bento-item", {
            scale: 0.9,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: ".bento-grid",
                start: "top 80%"
            }
        });
    }

    private initContactForm() {
        const contactForm = document.querySelector('.contact-form-premium') as HTMLFormElement;
        if (contactForm) {
            contactForm.addEventListener('submit', (e: Event) => {
                e.preventDefault();
                const submitBtn = contactForm.querySelector('button') as HTMLButtonElement;
                
                gsap.to(submitBtn, {
                    scale: 0.95,
                    duration: 0.1,
                    onComplete: () => {
                        submitBtn.innerText = 'Sending...';
                        submitBtn.disabled = true;
                        
                        setTimeout(() => {
                            submitBtn.innerText = 'Message Sent!';
                            gsap.to(submitBtn, {
                                background: 'linear-gradient(135deg, #10b981, #059669)',
                                duration: 0.4
                            });
                            contactForm.reset();
                            
                            setTimeout(() => {
                                submitBtn.innerText = 'Send Proposal';
                                submitBtn.style.background = '';
                                submitBtn.disabled = false;
                            }, 3000);
                        }, 1500);
                    }
                });
            });
        }
    }
}

new App();
