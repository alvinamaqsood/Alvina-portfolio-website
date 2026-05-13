export const HomeView = () => `
    <div class="page-view home-view">
        <!-- Hero Section -->
        <section class="hero-premium container">
            <div class="hero-grid">
                <div class="hero-text">
                    <div class="reveal" style="color: var(--accent-primary); font-weight: 700; margin-bottom: 1.5rem; letter-spacing: 3px; text-transform: uppercase; font-family: var(--font-header);">Full-Stack Software Engineer</div>
                    <h1 class="hero-title reveal">Building the <br><span>Future</span> Web</h1>
                    <p class="hero-subtitle reveal">I engineer high-performance, full-stack applications. From complex systems architecture to pixel-perfect, interactive user experiences.</p>
                    <div class="hero-actions reveal">
                        <a href="#/projects" class="btn btn-primary">Explore My Work</a>
                        <a href="#/contact" class="btn btn-outline">Start a Project</a>
                    </div>
                </div>
                <div class="hero-visual reveal">
                    <img src="/images/hero-bg.png" alt="Engineering Concept">
                </div>
            </div>
        </section>

        <!-- About Preview Section -->
        <section class="page-section container">
            <h2 class="section-title reveal">About <span>Me</span></h2>
            <div class="about-summary-flex" style="display: flex; align-items: center; gap: 6rem; flex-wrap: wrap;">
                <div class="about-visual-summary" style="flex: 1; min-width: 350px; max-width: 500px;">
                    <div class="reveal" style="border-radius: 40px; overflow: hidden; border: 1px solid var(--border-glass); aspect-ratio: 1; background: var(--bg-card);">
                        <img src="/images/portrait.png" alt="Alvina" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                </div>
                <div class="about-text-home reveal" style="flex: 1.2; min-width: 350px;">
                    <h3 style="font-size: 2.5rem; margin-bottom: 2rem; font-family: var(--font-header); line-height: 1.2;">Crafting Excellence <br>Since 2019</h3>
                    <p style="color: var(--text-secondary); font-size: 1.3rem; margin-bottom: 2.5rem; line-height: 1.6;">I'm Alvina, a dedicated software engineer specializing in full-stack development. I bridge the gap between complex backend logic and user-centric frontend design.</p>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                        <div class="card-premium" style="padding: 2rem;">
                            <span style="font-size: 0.8rem; color: var(--accent-primary); font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Projects</span>
                            <p style="font-size: 2.5rem; font-weight: 900; line-height: 1; margin-top: 0.5rem;">50+</p>
                        </div>
                        <div class="card-premium" style="padding: 2rem;">
                            <span style="font-size: 0.8rem; color: var(--accent-secondary); font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">Clients</span>
                            <p style="font-size: 2.5rem; font-weight: 900; line-height: 1; margin-top: 0.5rem;">25+</p>
                        </div>
                    </div>
                    <a href="#/about" class="btn btn-outline" style="margin-top: 3.5rem;">Read Full Story</a>
                </div>
            </div>
        </section>

        <!-- Focus Section -->
        <section class="page-section container">
            <h2 class="section-title reveal">Full-Stack <span>Edge</span></h2>
            <div class="bento-grid">
                <div class="card-premium reveal" style="grid-column: span 2;">
                    <h3 style="font-size: 2.5rem; margin-bottom: 1.5rem; font-family: var(--font-header);">End-to-End Excellence</h3>
                    <p style="color: var(--text-secondary); font-size: 1.3rem; line-height: 1.6;">I build systems that are cohesive. My work focuses on scalable database architectures, secure APIs, and high-performance frontend state management.</p>
                </div>
                <div class="card-premium reveal">
                    <h3 style="font-size: 1.5rem; margin-bottom: 1rem; font-family: var(--font-header);">Performance</h3>
                    <p style="font-size: 4rem; font-weight: 900; color: var(--accent-primary); line-height: 1;">99%</p>
                    <p style="color: var(--text-secondary); font-size: 1.1rem; margin-top: 1rem;">Core Web Vitals</p>
                </div>
            </div>
        </section>

        <!-- Full-Stack Arsenal Section -->
        <section class="page-section container" style="background: rgba(255,255,255,0.02); border-radius: 60px; margin-bottom: 10rem;">
            <div class="container">
                <h2 class="section-title reveal">Technical <span>Arsenal</span></h2>
                <div class="bento-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
                    <div class="card-premium reveal">
                        <i data-lucide="monitor" style="width: 32px; height: 32px; color: #61DAFB; margin-bottom: 1.5rem;"></i>
                        <h3 style="margin-bottom: 1rem;">Frontend</h3>
                        <p style="color: var(--text-secondary);">React, Next.js, TypeScript, Tailwind, GSAP, WebGL.</p>
                    </div>
                    <div class="card-premium reveal">
                        <i data-lucide="server" style="width: 32px; height: 32px; color: #ffffff; margin-bottom: 1.5rem;"></i>
                        <h3 style="margin-bottom: 1rem;">Backend</h3>
                        <p style="color: var(--text-secondary);">Node.js, Express, NestJS, Python (FastAPI), Go.</p>
                    </div>
                    <div class="card-premium reveal">
                        <i data-lucide="database" style="width: 32px; height: 32px; color: #10b981; margin-bottom: 1.5rem;"></i>
                        <h3 style="margin-bottom: 1rem;">Data & API</h3>
                        <p style="color: var(--text-secondary);">PostgreSQL, Redis, MongoDB, GraphQL, REST.</p>
                    </div>
                    <div class="card-premium reveal">
                        <i data-lucide="terminal" style="width: 32px; height: 32px; color: var(--accent-primary); margin-bottom: 1.5rem;"></i>
                        <h3 style="margin-bottom: 1rem;">Infrastructure</h3>
                        <p style="color: var(--text-secondary);">Docker, Kubernetes, AWS, Vercel, CI/CD pipelines.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="page-section container" style="padding-bottom: 15rem;">
            <div class="card-premium reveal" style="text-align: center; background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2)); border: 1px solid var(--accent-primary);">
                <h2 class="section-title" style="font-size: clamp(2.5rem, 8vw, 5rem); margin-bottom: 2rem;">Need a <span>Full-Stack</span> Expert?</h2>
                <p class="hero-subtitle" style="margin: 0 auto 4rem auto;">Currently accepting new projects and engineering roles.</p>
                <div style="display: flex; gap: 2rem; justify-content: center; flex-wrap: wrap;">
                    <a href="#/contact" class="btn btn-primary">Start a Collaboration</a>
                    <a href="mailto:hello@alvina.dev" class="btn btn-outline">Send an Email</a>
                </div>
            </div>
        </section>
    </div>

    <style>
        .tag {
            background: rgba(255,255,255,0.05);
            padding: 0.5rem 1rem;
            border-radius: 50px;
            font-size: 0.8rem;
            border: 1px solid var(--border-glass);
        }
    </style>
`;
