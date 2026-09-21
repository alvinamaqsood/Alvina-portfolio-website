export const ContactView = () => `
    <div class="page-view contact-view container" style="padding-top: 8rem; padding-bottom: 6rem;">
        <div class="contact-wrapper reveal">
            <div class="contact-grid">
                <div>
                    <span class="section-tag" style="background: rgba(255,255,255,0.2); color:#ffffff;">LET'S CONNECT</span>
                    <h2 class="contact-info-title">Have a project in mind?</h2>
                    <p class="contact-info-subtitle">Let's build something amazing together!</p>

                    <div class="contact-detail-list">
                        <div class="contact-detail-item">
                            <div class="contact-detail-icon"><i data-lucide="mail"></i></div>
                            <div>alvinamaqsood.dev@gmail.com</div>
                        </div>
                        <div class="contact-detail-item">
                            <div class="contact-detail-icon"><i data-lucide="phone"></i></div>
                            <div>+92 300 0000000</div>
                        </div>
                        <div class="contact-detail-item">
                            <div class="contact-detail-icon"><i data-lucide="map-pin"></i></div>
                            <div>Rahimyar Khan, Punjab, Pakistan</div>
                        </div>
                    </div>
                </div>

                <div class="contact-form-card">
                    <form class="contact-form-premium">
                        <div class="form-group">
                            <label class="form-label">Your Name</label>
                            <input type="text" placeholder="Enter your full name" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Your Email</label>
                            <input type="email" placeholder="name@example.com" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Subject</label>
                            <input type="text" placeholder="Project Discussion / Hiring" required>
                        </div>
                        <div class="form-group">
                            <label class="form-label">Your Message</label>
                            <textarea rows="4" placeholder="Tell me about your project..." required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary" style="width: 100%;">
                            Send Message <i data-lucide="send"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
`;
