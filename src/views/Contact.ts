export const ContactView = () => `
    <div class="page-view contact-view">
        <section class="page-section container" style="padding-top: 15rem;">
            <div class="hero-grid">
                <div class="contact-info reveal">
                    <h2 class="section-title">Let's build <br><span>Together</span></h2>
                    <p class="hero-subtitle">I'm currently open for freelance opportunities and full-time collaborations. Let's discuss how the MERN stack can power your next big idea.</p>
                    <div style="margin-top: 5rem;">
                        <div style="margin-bottom: 3rem;">
                            <p style="color: var(--text-secondary); margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.9rem; font-weight: 700; letter-spacing: 1px;">Email Me</p>
                            <a href="mailto:hello@alvina.dev" style="font-size: 1.8rem; font-weight: 700; color: var(--text-primary); text-decoration: none; font-family: var(--font-header);">hello@alvina.dev</a>
                        </div>
                        <div>
                            <p style="color: var(--text-secondary); margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.9rem; font-weight: 700; letter-spacing: 1px;">Location</p>
                            <p style="font-size: 1.8rem; font-weight: 700; color: var(--text-primary); font-family: var(--font-header);">London, UK / Remote</p>
                        </div>
                    </div>
                </div>
                <div class="contact-form reveal">
                    <form class="contact-form-premium card-premium">
                        <div class="form-group" style="margin-bottom: 1.5rem;">
                            <input type="text" placeholder="Full Name" required>
                        </div>
                        <div class="form-group" style="margin-bottom: 1.5rem;">
                            <input type="email" placeholder="Email Address" required>
                        </div>
                        <div class="form-group" style="margin-bottom: 2rem;">
                            <textarea placeholder="Tell me about your project" rows="6" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary" style="width: 100%;">Send Proposal</button>
                    </form>
                </div>
            </div>
        </section>
    </div>
`;
