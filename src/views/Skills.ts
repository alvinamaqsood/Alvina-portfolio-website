export const SkillsView = () => `
    <div class="page-view skills-view">
        <section class="page-section container" style="padding-top: 15rem;">
            <h2 class="section-title reveal">Full-Stack <span>Arsenal</span></h2>
            <div class="bento-grid">
                <div class="card-premium reveal">
                    <i data-lucide="monitor" style="width: 40px; height: 40px; color: var(--accent-primary); margin-bottom: 1.5rem;"></i>
                    <h3 style="margin-bottom: 1rem;">Frontend</h3>
                    <p style="color: var(--text-secondary);">React, Next.js, TypeScript, Tailwind, GSAP, WebGL.</p>
                </div>
                <div class="card-premium reveal">
                    <i data-lucide="server" style="width: 40px; height: 40px; color: var(--accent-secondary); margin-bottom: 1.5rem;"></i>
                    <h3 style="margin-bottom: 1rem;">Backend</h3>
                    <p style="color: var(--text-secondary);">Node.js, Express, NestJS, Python (FastAPI), Go.</p>
                </div>
                <div class="card-premium reveal">
                    <i data-lucide="database" style="width: 40px; height: 40px; color: #10b981; margin-bottom: 1.5rem;"></i>
                    <h3 style="margin-bottom: 1rem;">Data & Infrastructure</h3>
                    <p style="color: var(--text-secondary);">PostgreSQL, MongoDB, Redis, AWS, Docker, CI/CD.</p>
                </div>
            </div>
        </section>
    </div>
`;
