export const AboutView = () => `
    <div class="page-view about-view">
        <section class="page-section container" style="padding-top: 15rem;">
            <div class="about-flex-container" style="display: flex; align-items: center; gap: 6rem; flex-wrap: wrap;">
                
                <!-- Portrait Side -->
                <div class="about-visual-side" style="flex: 1; min-width: 400px; max-width: 550px;">
                    <div class="reveal" style="border-radius: 48px; overflow: hidden; border: 1px solid var(--border-glass); aspect-ratio: 0.85; background: var(--bg-card);">
                        <img src="/images/portrait.png" alt="Alvina Portrait" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                </div>

                <!-- Content Side -->
                <div class="about-content-side" style="flex: 1.2; min-width: 400px;">
                    <div class="reveal">
                        <h2 class="section-title" style="margin-bottom: 2rem; line-height: 1;">Design with <br><span>Purpose</span></h2>
                        <p style="color: var(--text-secondary); font-size: 1.4rem; line-height: 1.5; margin-bottom: 3rem;">I'm Alvina, a creative developer dedicated to building products that resonate with users. I specialize in the intersection of design and engineering using the MERN stack.</p>
                        
                        <div class="stats-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 2rem;">
                            <div class="card-premium" style="padding: 2.5rem;">
                                <h4 style="color: var(--text-secondary); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.5rem;">Total Projects</h4>
                                <p style="font-size: 3rem; font-weight: 900; line-height: 1;">50+</p>
                            </div>
                            <div class="card-premium" style="padding: 2.5rem;">
                                <h4 style="color: var(--text-secondary); font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.5rem;">Happy Clients</h4>
                                <p style="font-size: 3rem; font-weight: 900; line-height: 1;">20+</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
`;
