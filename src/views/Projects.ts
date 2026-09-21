export const ProjectsView = () => `
    <div class="page-view projects-view container" style="padding-top: 8rem; padding-bottom: 6rem;">
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
`;
