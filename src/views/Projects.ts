export const ProjectsView = () => `
    <div class="page-view projects-view container" style="padding-top: 8rem; padding-bottom: 6rem;">
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
`;
