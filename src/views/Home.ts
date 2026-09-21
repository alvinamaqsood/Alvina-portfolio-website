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
                        <a href="#contact" class="btn btn-dark">
                            <i data-lucide="mail"></i> Contact Me
                        </a>
                    </div>

                    <div class="social-connect reveal">
                        <span class="social-label">Connect with me:</span>
                        <div class="social-icons">
                            <a href="https://github.com/alvinamaqsood" target="_blank" class="social-btn" aria-label="GitHub"><i data-lucide="github"></i></a>
                            <a href="https://www.linkedin.com/in/alvina-maqsood-35618b370" target="_blank" class="social-btn" aria-label="LinkedIn"><i data-lucide="linkedin"></i></a>
                            <a href="mailto:alvinamaqsood.dev@gmail.com" class="social-btn" aria-label="Email"><i data-lucide="mail"></i></a>
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
                                <div><strong>Email:</strong> alvinamaqsood.dev@gmail.com</div>
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
                                    <div class="stat-number">15+</div>
                                    <div class="stat-label">Projects Completed</div>
                                </div>
                                <div class="stat-icon purple">📁</div>
                            </div>
                            <div class="stat-card">
                                <div>
                                    <div class="stat-number">3+</div>
                                    <div class="stat-label">Years of Learning</div>
                                </div>
                                <div class="stat-icon blue">🎓</div>
                            </div>
                            <div class="stat-card">
                                <div>
                                    <div class="stat-number">5+</div>
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
                    <a href="https://github.com/alvinamaqsood" target="_blank" class="btn btn-primary">
                        View All Projects <i data-lucide="external-link"></i>
                    </a>
                </div>

                <div class="projects-grid reveal">
                    <!-- Project 1 -->
                    <div class="project-card">
                        <div class="project-img-wrapper" style="background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%);">
                            <div class="project-preview-mockup">
                                <div class="mockup-header">
                                    <div class="mockup-dot" style="background:#ef4444;"></div>
                                    <div class="mockup-dot" style="background:#f59e0b;"></div>
                                    <div class="mockup-dot" style="background:#10b981;"></div>
                                </div>
                                <div class="mockup-body">
                                    Smart Techlodge Suite
                                </div>
                            </div>
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">Smart Techlodge ERP & Desktop App</h3>
                            <p class="project-desc">Enterprise web application & Electron desktop suite for employee task tracking, attendance management, and real-time backend API integration.</p>
                            <div class="project-tags">
                                <span class="project-tag">React.js</span>
                                <span class="project-tag">Electron.js</span>
                                <span class="project-tag">Node.js</span>
                                <span class="project-tag">MongoDB</span>
                            </div>
                            <div class="project-footer">
                                <span style="font-size:0.85rem; font-weight:600; color:var(--text-muted);">MERN & Desktop</span>
                                <a href="https://github.com/alvinamaqsood" target="_blank" class="project-link-btn" aria-label="Project details"><i data-lucide="external-link"></i></a>
                            </div>
                        </div>
                    </div>

                    <!-- Project 2 -->
                    <div class="project-card">
                        <div class="project-img-wrapper" style="background: linear-gradient(135deg, #10b981 0%, #06b6d4 100%);">
                            <div class="project-preview-mockup">
                                <div class="mockup-header">
                                    <div class="mockup-dot" style="background:#ef4444;"></div>
                                    <div class="mockup-dot" style="background:#f59e0b;"></div>
                                    <div class="mockup-dot" style="background:#10b981;"></div>
                                </div>
                                <div class="mockup-body" style="color:#059669;">
                                    EcoTrack Platform
                                </div>
                            </div>
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">EcoTrack Sustainability Platform</h3>
                            <p class="project-desc">Track your daily carbon footprint and receive personalized recommendations to live a greener, more sustainable lifestyle.</p>
                            <div class="project-tags">
                                <span class="project-tag">React.js</span>
                                <span class="project-tag">Express.js</span>
                                <span class="project-tag">Tailwind CSS</span>
                                <span class="project-tag">REST API</span>
                            </div>
                            <div class="project-footer">
                                <span style="font-size:0.85rem; font-weight:600; color:var(--text-muted);">Web Application</span>
                                <a href="https://github.com/alvinamaqsood" target="_blank" class="project-link-btn" aria-label="Project details"><i data-lucide="external-link"></i></a>
                            </div>
                        </div>
                    </div>

                    <!-- Project 3 -->
                    <div class="project-card">
                        <div class="project-img-wrapper" style="background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%);">
                            <div class="project-preview-mockup">
                                <div class="mockup-header">
                                    <div class="mockup-dot" style="background:#ef4444;"></div>
                                    <div class="mockup-dot" style="background:#f59e0b;"></div>
                                    <div class="mockup-dot" style="background:#10b981;"></div>
                                </div>
                                <div class="mockup-body" style="color:#d946ef;">
                                    DevConnect Portal
                                </div>
                            </div>
                        </div>
                        <div class="project-content">
                            <h3 class="project-title">DevConnect Community Portal</h3>
                            <p class="project-desc">Fullstack Next.js developer community portal featuring project showcases, real-time collaboration tools, and tech job board.</p>
                            <div class="project-tags">
                                <span class="project-tag">Next.js</span>
                                <span class="project-tag">TypeScript</span>
                                <span class="project-tag">MongoDB</span>
                                <span class="project-tag">Node.js</span>
                            </div>
                            <div class="project-footer">
                                <span style="font-size:0.85rem; font-weight:600; color:var(--text-muted);">Fullstack Next.js</span>
                                <a href="https://github.com/alvinamaqsood" target="_blank" class="project-link-btn" aria-label="Project details"><i data-lucide="external-link"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Achievements & Education Timeline Section -->
        <section id="timeline" class="timeline-section" style="background: rgba(255, 255, 255, 0.5);">
            <div class="container">
                <div class="timeline-grid">
                    <!-- Achievements Column -->
                    <div class="reveal">
                        <span class="section-tag">ACHIEVEMENTS</span>
                        <h3 class="timeline-column-title">
                            🏆 Honors & Milestones
                        </h3>

                        <div class="timeline-item">
                            <span class="timeline-date">2024 - PRESENT</span>
                            <h4 class="timeline-role">Software Engineer / Developer</h4>
                            <div class="timeline-org">Smart Techlodge (Rahim Yar Khan)</div>
                            <p class="timeline-desc">Engineered key frontend components and REST API integrations for client projects using React, Node.js, and Electron.js.</p>
                        </div>

                        <div class="timeline-item">
                            <span class="timeline-date">2023 - 2024</span>
                            <h4 class="timeline-role">Full Stack & MERN Certification</h4>
                            <div class="timeline-org">Web & Mobile App Development</div>
                            <p class="timeline-desc">Mastered MERN stack development including React.js, Express.js, MongoDB, Node.js, and modern state management.</p>
                        </div>

                        <div class="timeline-item">
                            <span class="timeline-date">2023</span>
                            <h4 class="timeline-role">LeetCode & Problem Solving Specialist</h4>
                            <div class="timeline-org">Data Structures & Algorithms</div>
                            <p class="timeline-desc">Solved 300+ programming challenges optimizing execution time and algorithmic space complexity.</p>
                        </div>
                    </div>

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

        <!-- Blog Section -->
        <section id="blog" class="blog-section" style="background: rgba(255, 255, 255, 0.5);">
            <div class="container">
                <div class="projects-header reveal">
                    <div>
                        <span class="section-tag">FROM MY BLOG</span>
                        <h2 class="section-title" style="margin-bottom: 0;">Latest Articles</h2>
                    </div>
                    <a href="#contact" class="btn btn-outline">
                        Read All Articles <i data-lucide="arrow-right"></i>
                    </a>
                </div>

                <div class="blog-grid reveal">
                    <div class="blog-card">
                        <div class="blog-banner" style="background: linear-gradient(135deg, #7c3aed 0%, #6366f1 100%);">
                            ⚡
                        </div>
                        <div class="blog-content">
                            <span class="blog-date">May 10, 2026</span>
                            <h3 class="blog-title">My Journey into Full Stack & MERN Development</h3>
                            <p class="blog-excerpt">Sharing key insights, challenges, and lessons learned while transitioning from frontend basics to building enterprise MERN applications.</p>
                            <a href="#contact" class="blog-link">Read Article <i data-lucide="arrow-right"></i></a>
                        </div>
                    </div>

                    <div class="blog-card">
                        <div class="blog-banner" style="background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);">
                            🚀
                        </div>
                        <div class="blog-content">
                            <span class="blog-date">Apr 25, 2026</span>
                            <h3 class="blog-title">Top 5 JavaScript Concepts Every React Developer Must Master</h3>
                            <p class="blog-excerpt">Closures, Promises, Async/Await, Array destructuring, and Event Loop explained cleanly with practical code snippets.</p>
                            <a href="#contact" class="blog-link">Read Article <i data-lucide="arrow-right"></i></a>
                        </div>
                    </div>

                    <div class="blog-card">
                        <div class="blog-banner" style="background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%);">
                            💻
                        </div>
                        <div class="blog-content">
                            <span class="blog-date">Apr 15, 2026</span>
                            <h3 class="blog-title">Building Cross-Platform Desktop Apps with Electron.js & React</h3>
                            <p class="blog-excerpt">How to bundle your web skills into native desktop applications for Windows, macOS, and Linux with ease.</p>
                            <a href="#contact" class="blog-link">Read Article <i data-lucide="arrow-right"></i></a>
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
        </section>
    </div>
`;
