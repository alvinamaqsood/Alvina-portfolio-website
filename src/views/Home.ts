export const HomeView = () => `
    <div class="page-view home-view">
        <!-- Hero Section -->
        <section id="hero" class="hero-section">
            <div class="container hero-grid">
                <div class="hero-text">
                    <div class="role-badge reveal">
                        <span>🎓</span> BS CS Student | MERN Stack Developer
                    </div>
                    <h1 class="hero-title reveal">
                        Hi, I'm <span class="highlight">Alvina Maqsood</span>
                    </h1>
                    <p class="hero-subtitle reveal">
                        I build creative & responsive web applications and love turning complex backend ideas into seamless real-world solutions.
                    </p>
                    <div class="btn-group reveal">
                        <a href="#projects" class="btn btn-primary">
                            Explore My Work <i data-lucide="arrow-right"></i>
                        </a>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=alvinamaqsood95@gmail.com" target="_blank" class="btn btn-dark">
                            <i data-lucide="mail"></i> Contact Me
                        </a>
                    </div>

                    <div class="social-connect reveal">
                        <span class="social-label">Connect with me:</span>
                        <div class="social-icons">
                            <a href="https://github.com/alvinamaqsood" target="_blank" class="social-btn" aria-label="GitHub">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                            </a>
                            <a href="https://www.linkedin.com/in/alvina-maqsood-35618b370" target="_blank" class="social-btn" aria-label="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                            </a>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=alvinamaqsood95@gmail.com" target="_blank" class="social-btn" aria-label="Email">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div class="hero-visual reveal">
                    <img src="/images/hero_3d_avatar.png" alt="Alvina Maqsood 3D Coding Avatar" class="hero-avatar-img">
                </div>
            </div>
        </section>

        <!-- About Me Section -->
        <section id="about" class="about-section">
            <div class="container">
                <div class="about-grid">
                    <div class="about-avatar-card reveal">
                        <img src="/images/about_3d_avatar.png" alt="Alvina Maqsood" class="about-avatar-img">
                    </div>

                    <div class="about-content">
                        <span class="section-tag reveal">ABOUT ME</span>
                        <h2 class="section-title reveal" style="margin-bottom: 1.2rem;">Get to know me!</h2>
                        <p class="about-text reveal">
                            I'm a passionate Frontend & MERN Stack Developer specializing in React.js, Next.js, Tailwind CSS, Node.js, Express.js, MongoDB, and Electron.js. Experienced in developing full-stack features, building and integrating RESTful APIs, implementing CRUD operations, and managing authentication workflows.
                        </p>

                        <div class="info-grid reveal">
                            <div class="info-item">
                                <div class="info-icon"><i data-lucide="user"></i></div>
                                <div><strong>Name:</strong> Alvina Maqsood</div>
                            </div>
                            <div class="info-item">
                                <div class="info-icon"><i data-lucide="graduation-cap"></i></div>
                                <div><strong>Education:</strong> BS CS (IUB)</div>
                            </div>
                            <div class="info-item">
                                <div class="info-icon"><i data-lucide="map-pin"></i></div>
                                <div><strong>Location:</strong> Rahimyar Khan, Pakistan</div>
                            </div>
                            <div class="info-item">
                                <div class="info-icon"><i data-lucide="mail"></i></div>
                                <div><strong>Email:</strong> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=alvinamaqsood95@gmail.com" target="_blank" style="color:var(--accent-purple); text-decoration:none; font-weight:600;">alvinamaqsood95@gmail.com</a></div>
                            </div>
                            <div class="info-item">
                                <div class="info-icon"><i data-lucide="globe"></i></div>
                                <div><strong>Languages:</strong> English, Urdu, Punjabi</div>
                            </div>
                            <div class="info-item">
                                <div class="info-icon"><i data-lucide="briefcase"></i></div>
                                <div><strong>Role:</strong> Software Engineer</div>
                            </div>
                        </div>

                        <!-- Stats Cards -->
                        <div class="stats-grid reveal">
                            <div class="stat-card">
                                <div>
                                    <div class="stat-number">3+</div>
                                    <div class="stat-label">Projects Completed</div>
                                </div>
                                <div class="stat-icon purple">📁</div>
                            </div>
                            <div class="stat-card">
                                <div>
                                    <div class="stat-number">1+</div>
                                    <div class="stat-label">Years of Experience</div>
                                </div>
                                <div class="stat-icon blue">🎓</div>
                            </div>
                            <div class="stat-card">
                                <div>
                                    <div class="stat-number">3+</div>
                                    <div class="stat-label">Certifications</div>
                                </div>
                                <div class="stat-icon gold">🎖️</div>
                            </div>
                            <div class="stat-card">
                                <div>
                                    <div class="stat-number">10+</div>
                                    <div class="stat-label">Technologies</div>
                                </div>
                                <div class="stat-icon indigo">💻</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Skills Section -->
        <section id="skills" class="skills-section" style="background: rgba(255, 255, 255, 0.5);">
            <div class="container text-center">
                <div style="text-align: center; margin-bottom: 2rem;">
                    <span class="section-tag reveal">MY SKILLS</span>
                    <h2 class="section-title reveal">Technologies I Work With</h2>
                </div>

                <div class="skills-grid reveal">
                    <div class="skill-card">
                        <div class="skill-icon" style="color: #e34f26;"><i data-lucide="code-2"></i></div>
                        <div class="skill-name">HTML5</div>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon" style="color: #1572b6;"><i data-lucide="file-code"></i></div>
                        <div class="skill-name">CSS3</div>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon" style="color: #f7df1e;"><i data-lucide="file-json"></i></div>
                        <div class="skill-name">JavaScript</div>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon" style="color: #3178c6;"><i data-lucide="binary"></i></div>
                        <div class="skill-name">TypeScript</div>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon" style="color: #61dafb;"><i data-lucide="atom"></i></div>
                        <div class="skill-name">React.js</div>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon" style="color: #000000;"><i data-lucide="layers"></i></div>
                        <div class="skill-name">Next.js</div>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon" style="color: #339933;"><i data-lucide="server"></i></div>
                        <div class="skill-name">Node.js</div>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon" style="color: #000000;"><i data-lucide="cpu"></i></div>
                        <div class="skill-name">Express.js</div>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon" style="color: #47a248;"><i data-lucide="database"></i></div>
                        <div class="skill-name">MongoDB</div>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon" style="color: #47b5ef;"><i data-lucide="monitor"></i></div>
                        <div class="skill-name">Electron.js</div>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon" style="color: #06b6d4;"><i data-lucide="palette"></i></div>
                        <div class="skill-name">Tailwind CSS</div>
                    </div>
                    <div class="skill-card">
                        <div class="skill-icon" style="color: #f05032;"><i data-lucide="git-branch"></i></div>
                        <div class="skill-name">Git & GitHub</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="projects-section">
            <div class="container">
                <div class="projects-header reveal">
                    <div>
                        <span class="section-tag">FEATURED PROJECTS</span>
                        <h2 class="section-title" style="margin-bottom: 0;">Some of My Recent Work</h2>
                    </div>
                    <a href="#projects" class="btn btn-primary">
                        View All Projects <i data-lucide="arrow-right"></i>
                    </a>
                </div>

                <div class="projects-grid reveal">
                    <!-- Project 1: SmartForge Task Management App -->
                    <div class="project-card">
                        <div class="project-img-wrapper" style="height: 240px; position: relative; overflow: hidden; background: #ffffff; border-bottom: 1px solid var(--border-light);">
                            <div class="smartforge-tabs" style="position: absolute; top: 12px; right: 12px; z-index: 10; display: flex; gap: 4px; background: rgba(241, 245, 249, 0.9); backdrop-filter: blur(6px); padding: 4px 6px; border-radius: 20px; border: 1px solid #e2e8f0; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
                                <button type="button" class="sf-tab-btn active" data-img="/images/smartforge-dashboard.png">Dashboard</button>
                                <button type="button" class="sf-tab-btn" data-img="/images/smartforge-tasks.png">Tasks</button>
                                <button type="button" class="sf-tab-btn" data-img="/images/smartforge-performance.png">Insights</button>
                            </div>
                            <img id="sf-preview-img" class="project-preview-img" src="/images/smartforge-dashboard.png" alt="SmartForge Dashboard" style="width: 100%; height: 100%; object-fit: contain; object-position: center; background: #ffffff; transition: opacity 0.2s ease; cursor: pointer; display: block;" onclick="window.open(this.src, '_blank')">
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">SmartForge Task Management App</h3>
                            <p class="project-desc">Security-focused task management platform featuring real-time task tracking, workflow automation, and collaborative team productivity tools.</p>
                            <div class="project-tags">
                                <span class="project-tag">React.js</span>
                                <span class="project-tag">Node.js</span>
                                <span class="project-tag">TypeScript</span>
                                <span class="project-tag">Task Management</span>
                            </div>
                            <div class="project-footer">
                                <span style="font-size:0.85rem; font-weight:600; color:var(--text-muted);">Live Web App</span>
                                <a href="https://smartforge.securitypro.group/" target="_blank" class="project-link-btn" aria-label="SmartForge Live Site"><i data-lucide="external-link"></i></a>
                            </div>
                        </div>
                    </div>

                    <!-- Project 2: Diamond Discs -->
                    <div class="project-card">
                        <div class="project-img-wrapper" style="height: 240px; position: relative; overflow: hidden; background: #ffffff; border-bottom: 1px solid var(--border-light);">
                            <div class="diamonddiscs-tabs" style="position: absolute; top: 12px; right: 12px; z-index: 10; display: flex; gap: 4px; background: rgba(241, 245, 249, 0.9); backdrop-filter: blur(6px); padding: 4px 6px; border-radius: 20px; border: 1px solid #e2e8f0; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
                                <button type="button" class="dd-tab-btn active" data-img="/images/diamond-discs-home.png">Hero</button>
                                <button type="button" class="dd-tab-btn" data-img="/images/diamond-discs-applications.png">Applications</button>
                                <button type="button" class="dd-tab-btn" data-img="/images/diamond-discs-specs.png">Specs</button>
                            </div>
                            <img id="dd-preview-img" class="project-preview-img" src="/images/diamond-discs-home.png" alt="Diamond Discs Platform" style="width: 100%; height: 100%; object-fit: contain; object-position: center; background: #ffffff; transition: opacity 0.2s ease; cursor: pointer; display: block;" onclick="window.open(this.src, '_blank')">
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">Diamond Discs Platform</h3>
                            <p class="project-desc">Modern web application built for Diamond Discs featuring dynamic product presentation, responsive user interface, and seamless browsing experience.</p>
                            <div class="project-tags">
                                <span class="project-tag">React.js</span>
                                <span class="project-tag">Next.js</span>
                                <span class="project-tag">Tailwind CSS</span>
                                <span class="project-tag">Vercel</span>
                            </div>
                            <div class="project-footer">
                                <span style="font-size:0.85rem; font-weight:600; color:var(--text-muted);">Live Web App</span>
                                <a href="https://diamond-discs.vercel.app/" target="_blank" class="project-link-btn" aria-label="Diamond Discs Live Site"><i data-lucide="external-link"></i></a>
                            </div>
                        </div>
                    </div>

                    <!-- Project 3: Smart POS Invoicing with ERPNext Sync -->
                    <div class="project-card">
                        <div class="project-img-wrapper" style="height: 240px; position: relative; overflow: hidden; background: #ffffff; border-bottom: 1px solid var(--border-light);">
                            <div class="smartpos-tabs" style="position: absolute; top: 12px; right: 12px; z-index: 10; display: flex; gap: 4px; background: rgba(241, 245, 249, 0.9); backdrop-filter: blur(6px); padding: 4px 6px; border-radius: 20px; border: 1px solid #e2e8f0; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
                                <button type="button" class="pos-tab-btn active" data-img="/images/smartpos-dashboard.png">Dashboard</button>
                                <button type="button" class="pos-tab-btn" data-img="/images/smartpos-terminal.png">Terminal</button>
                                <button type="button" class="pos-tab-btn" data-img="/images/smartpos-settings.png">Settings</button>
                            </div>
                            <img id="pos-preview-img" class="project-preview-img" src="/images/smartpos-dashboard.png" alt="Smart POS Invoicing Dashboard" style="width: 100%; height: 100%; object-fit: contain; object-position: center; background: #ffffff; transition: opacity 0.2s ease; cursor: pointer; display: block;" onclick="window.open(this.src, '_blank')">
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">Smart POS Invoicing with ERPNext Sync</h3>
                            <p class="project-desc">Desktop POS invoicing application engineered with offline transactions and real-time backend synchronization with ERPNext ERP system.</p>
                            <div class="project-tags">
                                <span class="project-tag">Electron.js</span>
                                <span class="project-tag">React.js</span>
                                <span class="project-tag">Node.js</span>
                                <span class="project-tag">ERPNext Sync</span>
                            </div>
                            <div class="project-footer">
                                <span style="font-size:0.85rem; font-weight:600; color:var(--text-muted);">Electron Desktop App</span>
                                <span class="project-link-btn" title="Desktop App (Not Live Web Link)" style="cursor: default; opacity: 0.8;"><i data-lucide="monitor"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Education Timeline Section -->
        <section id="timeline" class="timeline-section" style="background: rgba(255, 255, 255, 0.5);">
            <div class="container">
                <div class="timeline-grid">
                    <!-- Education Column -->
                    <div class="reveal">
                        <span class="section-tag">EDUCATION</span>
                        <h3 class="timeline-column-title">
                            🎓 Academic Qualification
                        </h3>

                        <div class="timeline-item">
                            <span class="timeline-date">2022 - 2026 (EXPECTED)</span>
                            <h4 class="timeline-role">BS Computer Science (BS CS)</h4>
                            <div class="timeline-org">The Islamia University of Bahawalpur</div>
                            <p class="timeline-desc">Specializing in Software Engineering, Web Technologies, Database Systems, Computer Networks, and Object-Oriented Programming.</p>
                        </div>

                        <div class="timeline-item">
                            <span class="timeline-date">2020 - 2022</span>
                            <h4 class="timeline-role">HSC / Intermediate Computer Science</h4>
                            <div class="timeline-org">Board of Intermediate Education</div>
                            <p class="timeline-desc">Graduated with distinction focusing on Mathematics, Computer Science, and Physics foundation.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Testimonials Section -->
        <section id="testimonials" class="testimonials-section">
            <div class="container">
                <div style="text-align: center; margin-bottom: 3rem;">
                    <span class="section-tag reveal">TESTIMONIALS</span>
                    <h2 class="section-title reveal">What People Say</h2>
                </div>

                <div class="testimonials-grid reveal">
                    <div class="testimonial-card">
                        <div class="quote-icon">“</div>
                        <p class="testimonial-quote">Alvina is a dedicated learner and a great team player. She actively participates and delivers high-quality code across all front-end and full-stack modules.</p>
                        <div class="testimonial-author">
                            <div class="author-avatar">ST</div>
                            <div>
                                <div class="author-name">Team Lead</div>
                                <div class="author-role">Software Engineer, Smart Techlodge</div>
                            </div>
                        </div>
                    </div>

                    <div class="testimonial-card">
                        <div class="quote-icon">“</div>
                        <p class="testimonial-quote">Great problem solver with a strong understanding of modern web concepts and clean code architecture. Her passion for React & Next.js is truly inspiring.</p>
                        <div class="testimonial-author">
                            <div class="author-avatar">IU</div>
                            <div>
                                <div class="author-name">Department Coordinator</div>
                                <div class="author-role">Islamia University of Bahawalpur</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="contact-section">
            <div class="container">
                <div class="contact-wrapper reveal">
                    <div class="contact-grid">
                        <div>
                            <span class="section-tag" style="background: rgba(255,255,255,0.2); color:#ffffff;">LET'S CONNECT</span>
                            <h2 class="contact-info-title">Have a project in mind?</h2>
                            <p class="contact-info-subtitle">Let's build something amazing together!</p>

                            <div class="contact-detail-list">
                                <div class="contact-detail-item">
                                    <div class="contact-detail-icon"><i data-lucide="mail"></i></div>
                                    <div><a href="https://mail.google.com/mail/?view=cm&fs=1&to=alvinamaqsood95@gmail.com" target="_blank" style="color:#ffffff; text-decoration:none; font-weight:600;">alvinamaqsood95@gmail.com</a></div>
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
        </section>
    </div>
`;
