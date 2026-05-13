export const ProjectsView = () => `
    <div class="page-view projects-view">
        <section class="page-section container" style="padding-top: 15rem;">
            <div class="projects-header reveal" style="margin-bottom: 8rem;">
                <h2 class="section-title">Selected <span>Work</span></h2>
                <p style="color: var(--text-secondary); font-size: 1.5rem; max-width: 600px;">A collection of full-stack systems built with precision, focus, and a passion for engineering excellence.</p>
            </div>

            <div class="projects-list">
                <div class="project-showcase-card reveal" style="display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 4rem; margin-bottom: 12rem; align-items: center;">
                    <div class="showcase-visual" style="border-radius: 40px; overflow: hidden; border: 1px solid var(--border-glass); aspect-ratio: 16/9;">
                        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200" alt="Luxe Cart" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div class="showcase-content">
                        <div style="color: var(--accent-primary); font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 1rem;">E-Commerce Architecture</div>
                        <h3 style="font-size: 3.5rem; font-family: var(--font-header); margin-bottom: 1.5rem; line-height: 1.1;">Luxe Cart Ecosystem</h3>
                        <p style="color: var(--text-secondary); font-size: 1.2rem; margin-bottom: 2rem;">A massive full-stack commerce solution with 3D product previews, real-time inventory management, and automated payment pipelines.</p>
                        <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 3rem;">
                            <span class="tag">MERN Stack</span>
                            <span class="tag">Socket.io</span>
                            <span class="tag">Stripe API</span>
                        </div>
                        <a href="#" class="btn btn-outline">View Case Study</a>
                    </div>
                </div>

                <div class="project-showcase-card reveal" style="display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 4rem; margin-bottom: 12rem; align-items: center;">
                    <div class="showcase-content">
                        <div style="color: var(--accent-secondary); font-weight: 700; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 1rem;">FinTech Solution</div>
                        <h3 style="font-size: 3.5rem; font-family: var(--font-header); margin-bottom: 1.5rem; line-height: 1.1;">Nexus Wealth App</h3>
                        <p style="color: var(--text-secondary); font-size: 1.2rem; margin-bottom: 2rem;">Advanced financial tracking and asset visualization platform for high-net-worth individuals.</p>
                        <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 3rem;">
                            <span class="tag">React</span>
                            <span class="tag">D3.js</span>
                            <span class="tag">PostgreSQL</span>
                        </div>
                        <a href="#" class="btn btn-outline">View Case Study</a>
                    </div>
                    <div class="showcase-visual" style="border-radius: 40px; overflow: hidden; border: 1px solid var(--border-glass); aspect-ratio: 16/9;">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200" alt="Nexus Wealth" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                </div>
            </div>
        </section>
    </div>

    <style>
        .tag {
            background: rgba(255,255,255,0.05);
            padding: 0.5rem 1.2rem;
            border-radius: 50px;
            font-size: 0.9rem;
            color: var(--text-primary);
            border: 1px solid var(--border-glass);
        }
    </style>
`;
