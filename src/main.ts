import { HomeView } from './views/Home';
import { AboutView } from './views/About';
import { SkillsView } from './views/Skills';
import { ProjectsView } from './views/Projects';
import { ContactView } from './views/Contact';

declare const gsap: any;
declare const ScrollTrigger: any;
declare const lucide: any;

class App {
    private appContainer: HTMLElement;
    private navbar: HTMLElement | null;

    constructor() {
        this.appContainer = document.getElementById('app')!;
        this.navbar = document.getElementById('navbar');

        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);
        }

        this.init();
    }

    private init() {
        this.handleRoute();

        window.addEventListener('hashchange', () => this.handleRoute());

        // Navbar Scroll Shadow
        window.addEventListener('scroll', () => {
            if (this.navbar) {
                if (window.scrollY > 40) {
                    this.navbar.classList.add('scrolled');
                } else {
                    this.navbar.classList.remove('scrolled');
                }
            }
        });

        // Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinksList = document.querySelector('.nav-links');
        if (mobileMenuBtn && navLinksList) {
            mobileMenuBtn.addEventListener('click', () => {
                navLinksList.classList.toggle('active');
            });
        }

        // Project Image Tab Switcher
        document.addEventListener('click', (e: Event) => {
            const target = e.target as HTMLElement;
            if (target && (target.classList.contains('sf-tab-btn') || target.classList.contains('dd-tab-btn') || target.classList.contains('pos-tab-btn') || target.classList.contains('project-tab-btn'))) {
                const card = target.closest('.project-card');
                if (card) {
                    const img = (card.querySelector('.project-preview-img') || card.querySelector('#sf-preview-img') || card.querySelector('#dd-preview-img') || card.querySelector('#pos-preview-img')) as HTMLImageElement;
                    const newSrc = target.getAttribute('data-img');
                    if (img && newSrc) {
                        img.style.opacity = '0.3';
                        setTimeout(() => {
                            img.src = newSrc;
                            img.style.opacity = '1';
                        }, 150);
                    }
                    card.querySelectorAll('.sf-tab-btn, .dd-tab-btn, .pos-tab-btn, .project-tab-btn').forEach(btn => btn.classList.remove('active'));
                    target.classList.add('active');
                }
            }
        });
    }

    private handleRoute() {
        const hash = window.location.hash || '#hero';
        const cleanHash = hash.replace(/^#\/?/, '');

        // Standard sections in the landing page
        const landingSections = ['hero', 'about', 'skills', 'projects', 'timeline', 'testimonials', 'contact'];

        if (landingSections.includes(cleanHash) || cleanHash === '') {
            // Render full home landing page if not already rendered
            if (!this.appContainer.querySelector('.home-view')) {
                this.appContainer.innerHTML = HomeView();
                this.initGSAPAnimations();
                this.initContactForm();
            }

            // Scroll to section
            if (cleanHash && cleanHash !== 'hero') {
                setTimeout(() => {
                    const targetEl = document.getElementById(cleanHash);
                    if (targetEl) {
                        targetEl.scrollIntoView({ behavior: 'smooth' });
                    }
                }, 100);
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        } else {
            // Fallback router views
            switch (cleanHash) {
                case 'about':
                    this.appContainer.innerHTML = AboutView();
                    break;
                case 'skills':
                    this.appContainer.innerHTML = SkillsView();
                    break;
                case 'projects':
                    this.appContainer.innerHTML = ProjectsView();
                    break;
                case 'contact':
                    this.appContainer.innerHTML = ContactView();
                    this.initContactForm();
                    break;
                default:
                    this.appContainer.innerHTML = HomeView();
                    this.initContactForm();
            }
            this.initGSAPAnimations();
            window.scrollTo(0, 0);
        }

        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }

        this.updateActiveLink(hash);
    }

    private updateActiveLink(hash: string) {
        const links = document.querySelectorAll('.nav-links a');
        links.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === hash || (hash === '' && href === '#hero')) {
                link.classList.add('active');
            }
        });
    }

    private initGSAPAnimations() {
        if (typeof gsap === 'undefined') return;

        gsap.fromTo(".reveal",
            { opacity: 0, y: 35 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: "power3.out"
            }
        );
    }

    private initContactForm() {
        const contactForm = document.querySelector('.contact-form-premium') as HTMLFormElement;
        if (contactForm) {
            contactForm.addEventListener('submit', (e: Event) => {
                e.preventDefault();
                const submitBtn = contactForm.querySelector('button') as HTMLButtonElement;
                if (!submitBtn) return;

                const inputs = contactForm.querySelectorAll('input');
                const textInputs = contactForm.querySelectorAll('input[type="text"]');
                const nameInput = textInputs.length > 0 ? (textInputs[0] as HTMLInputElement).value : '';
                const emailInput = (contactForm.querySelector('input[type="email"]') as HTMLInputElement)?.value || '';
                const subjectInput = textInputs.length > 1 ? (textInputs[1] as HTMLInputElement).value : 'Project Discussion';
                const messageInput = (contactForm.querySelector('textarea') as HTMLTextAreaElement)?.value || '';

                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=alvinamaqsood95@gmail.com&su=${encodeURIComponent(subjectInput)}&body=${encodeURIComponent(`From: ${nameInput} (${emailInput})\n\n${messageInput}`)}`;

                submitBtn.innerText = 'Opening Gmail... ✈';
                submitBtn.disabled = true;

                setTimeout(() => {
                    window.open(gmailUrl, '_blank');
                    submitBtn.innerText = 'Opened in Gmail! 🎉';
                    submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                    contactForm.reset();

                    setTimeout(() => {
                        submitBtn.innerText = 'Send Message ✈';
                        submitBtn.style.background = '';
                        submitBtn.disabled = false;
                    }, 4000);
                }, 800);
            });
        }
    }
}

new App();
