import React, { useState } from 'react';
import { Code, Shield, Terminal as TermIcon, BrainCircuit, Car, ExternalLink, ArrowUpRight } from 'lucide-react';
import './Projects.css';

interface Project {
  title: string;
  tagline: string;
  category: string;
  technologies: string[];
  description: string;
  icon: React.ReactNode;
  iconBg: string;
  gitLink?: string;
  liveLink?: string;
}

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects: Project[] = [
    {
      title: 'AI-Powered Vulnerability Scanner',
      tagline: 'Next-Gen Vulnerability Checking with AI',
      category: 'security',
      technologies: ['Python', 'AI/LLM API', 'Network Security', 'JSON Reports'],
      description: 'Built a powerful tool that combines traditional signature-based vulnerability scanning with AI-driven analysis to identify, evaluate, and prioritize code and system vulnerabilities, demonstrating deep applied systems security.',
      icon: <Shield size={24} />,
      iconBg: 'rgba(239, 68, 68, 0.1)',
      gitLink: 'https://github.com',
    },
    {
      title: 'Recon-X',
      tagline: 'Modular Network & OSINT Toolkit',
      category: 'security',
      technologies: ['Python', 'Socket Programming', 'OSINT APIs', 'Bash Scripting'],
      description: 'Developed a modular reconnaissance framework for scanning network targets, resolving DNS endpoints, gathering open-source intelligence (OSINT), and generating structured system audit reports using clean reusable code.',
      icon: <TermIcon size={24} />,
      iconBg: 'rgba(59, 130, 246, 0.1)',
      gitLink: 'https://github.com',
    },
    {
      title: 'Nexora AI',
      tagline: 'Smart Healthcare AI Assistant',
      category: 'web',
      technologies: ['FastAPI', 'React', 'Google OAuth', 'Vercel', 'PostgreSQL'],
      description: 'Designed and deployed a full-stack healthcare assistant utilizing Gemini LLMs for query analysis. Built with FastAPI backend, secure federated Google OAuth sign-in, and fully optimized database schemas.',
      icon: <BrainCircuit size={24} />,
      iconBg: 'rgba(16, 185, 129, 0.1)',
      gitLink: 'https://github.com',
      liveLink: 'https://nexora.vercel.app',
    },
    {
      title: 'Parkide',
      tagline: 'Real-time Parking Reservation App',
      category: 'web',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Maps API'],
      description: 'A robust solution matching users with open parking zones. Features dynamic real-time map discovery, reservation logic with conflict resolution, and integrated billing workflows.',
      icon: <Car size={24} />,
      iconBg: 'rgba(245, 158, 11, 0.1)',
      gitLink: 'https://github.com',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="section-title">Selected Projects</h2>
        <p className="section-subtitle">A collection of secure applications, automation tools, and full-stack software systems.</p>
      </div>

      {/* Filter Tabs */}
      <div className="project-filters">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All Systems</button>
        <button className={filter === 'security' ? 'active' : ''} onClick={() => setFilter('security')}>Cybersecurity & Scripting</button>
        <button className={filter === 'web' ? 'active' : ''} onClick={() => setFilter('web')}>Full-Stack Web</button>
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-card-top">
              <div className="project-icon-box" style={{ backgroundColor: project.iconBg }}>
                {project.icon}
              </div>
              <div className="project-links">
                {project.gitLink && (
                  <a href={project.gitLink} target="_blank" rel="noopener noreferrer" title="View Source Code" aria-label="View Source Code">
                    <Code size={18} />
                  </a>
                )}
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" title="View Live Deployment" aria-label="View Live Deployment">
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
            
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-tagline">{project.tagline}</p>
              <p className="project-description">{project.description}</p>
            </div>

            <div className="project-card-footer">
              <div className="project-tech-tags">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.gitLink || '#'} target="_blank" rel="noopener noreferrer" className="project-explore-btn">
                <span>Explore Code</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
