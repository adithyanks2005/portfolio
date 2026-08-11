import React, { useState } from 'react';
import { Code2, Server, Database, Cloud, ShieldAlert, Award } from 'lucide-react';
import './Skills.css';

interface Skill {
  name: string;
  level: string;
  description: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('languages');

  const skillCategories: SkillCategory[] = [
    {
      id: 'languages',
      title: 'Languages',
      icon: <Code2 size={20} />,
      skills: [
        { name: 'Python', level: 'Primary', description: 'Advanced script development, API development with FastAPI, AI vulnerability scanners, recon kits.' },
        { name: 'JavaScript', level: 'Strong', description: 'Interactive frontend design, full-stack Node.js environments.' },
        { name: 'TypeScript', level: 'Strong', description: 'Type-safe React and Next.js applications.' },
        { name: 'C/C++', level: 'Basic Concepts', description: 'Foundational systems-level understanding, algorithms, data structures.' },
      ]
    },
    {
      id: 'backend',
      title: 'Web & Backend',
      icon: <Server size={20} />,
      skills: [
        { name: 'FastAPI', level: 'Strong', description: 'Asynchronous Python endpoints, OpenAPI generation, security authentications.' },
        { name: 'Next.js', level: 'Strong', description: 'Server-side rendering, API routing, sleek responsive frontends.' },
        { name: 'React', level: 'Strong', description: 'State management, custom hook libraries, modern reactive layouts.' },
        { name: 'Node.js', level: 'Strong', description: 'Server architectures, microservices, runtime integrations.' },
        { name: 'REST APIs', level: 'Advanced', description: 'Design and scaling of standard REST endpoints.' },
        { name: 'Google OAuth', level: 'Applied', description: 'Secure identity federation and authorization setups.' },
      ]
    },
    {
      id: 'databases',
      title: 'Databases',
      icon: <Database size={20} />,
      skills: [
        { name: 'PostgreSQL', level: 'Intermediate', description: 'Relational schema design, complex query structures, indices.' },
        { name: 'MongoDB', level: 'Intermediate', description: 'NoSQL document storage, flexible schemas, aggregation.' },
        { name: 'SQLite', level: 'Strong', description: 'Local serverless databases for lightweight and local application testing.' },
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps',
      icon: <Cloud size={20} />,
      skills: [
        { name: 'AWS Cloud', level: 'Certified Practitioner', description: 'EC2 instance deployment, VPC structures, IAM roles, S3 bucket setups.' },
        { name: 'Docker', level: 'Applied', description: 'Containerization of FastAPI and full-stack apps for reliable scaling.' },
        { name: 'Git & GitHub', level: 'Strong', description: 'Version control, feature branches, pull requests, automated actions.' },
        { name: 'Linux', level: 'Strong', description: 'CLI administration, server configuration, bash scripting, permissions.' },
      ]
    },
    {
      id: 'security',
      title: 'Security & Tooling',
      icon: <ShieldAlert size={20} />,
      skills: [
        { name: 'Nmap', level: 'Applied', description: 'Network mapping, open port discovery, OS fingerprinting.' },
        { name: 'Wireshark', level: 'Applied', description: 'Network packet analysis, traffic inspection, packet decodes.' },
        { name: 'Burp Suite', level: 'Applied', description: 'Web application penetration testing, vulnerability interception.' },
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <h2 className="section-title">Technical Expertise</h2>
        <p className="section-subtitle">Categorized skills and core technologies acquired through academic study and hands-on builds.</p>
      </div>

      <div className="skills-container">
        {/* Navigation Tabs */}
        <div className="skills-tabs">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              className={`tab-button ${activeTab === category.id ? 'active' : ''}`}
              onClick={() => setActiveTab(category.id)}
            >
              {category.icon}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {skillCategories
            .find((category) => category.id === activeTab)
            ?.skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-card-header">
                  <h3 className="skill-name">{skill.name}</h3>
                  <span className="skill-level">{skill.level}</span>
                </div>
                <p className="skill-description">{skill.description}</p>
                <div className="skill-progress-bar">
                  <div className="skill-progress-fill"></div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Certifications Highlight */}
      <div className="certifications-box">
        <div className="cert-header">
          <Award size={24} className="cert-icon" />
          <h3>Official Certifications & Languages</h3>
        </div>
        <div className="cert-grid">
          <div className="cert-card">
            <h4>AWS Certified Cloud Practitioner</h4>
            <p>Amazon Web Services validation of foundational cloud architectural principles, security, and compliance.</p>
          </div>
          <div className="cert-card">
            <h4>Dakshina Bharat Hindi Prachar Sabha</h4>
            <p>Language certification indicating proficiency and cultural alignment.</p>
          </div>
          <div className="cert-card languages-info">
            <h4>Linguistic Coverage</h4>
            <div className="lang-tags">
              <span>English (Professional)</span>
              <span>Tamil (Native)</span>
              <span>Malayalam (Conversational)</span>
              <span>Hindi (Conversational)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
