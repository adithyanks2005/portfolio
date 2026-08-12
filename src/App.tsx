import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from './components/Navbar';
import Terminal from './components/Terminal';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { 
  ShieldAlert, 
  BookOpen, 
  Mail, 
  Phone, 
  MapPin, 
  ChevronRight, 
  CheckCircle,
  Lock,
  Cpu,
  Loader
} from 'lucide-react';
import './App.css';

// EmailJS config — replace these with your actual values from emailjs.com
const EMAILJS_SERVICE_ID = 'service_3po3snn';
const EMAILJS_TEMPLATE_ID = 'template_1zliych';
const EMAILJS_PUBLIC_KEY = 'BtljEYEC7_8Fbkft_';

export default function App() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setSending(true);
    setError('');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        e.target as HTMLFormElement,
        EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
      setFormState({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError('Transmission failed. Please try emailing directly at ksadithyan2021@gmail.com');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="app-container">
      <Navbar />

      {/* Hero Section */}
      <header className="hero-section" id="hero">
        <div className="hero-content">
          <div className="hero-left">
            <div className="profile-pic-wrapper">
              <img
                src="/portfolio/profile.jpg"
                alt="Adithyan K S"
                className="profile-pic"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
            <div className="badge">
              <span className="badge-pulse"></span>
              <span>Available for Internships (Graduating 2027)</span>
            </div>
            <h1 className="hero-title">
              Securing the Web.<br />
              <span className="gradient-text">Building the Future.</span>
            </h1>
            <p className="hero-description">
              Fourth-year B.E. Computer Science Engineering (Cybersecurity) student with hands-on experience building full-stack applications, scripting security scans, and setting up cloud environments.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="primary-btn">
                <span>View Projects</span>
                <ChevronRight size={16} />
              </a>
              <a href="#contact" className="secondary-btn">
                <span>Secure Connection</span>
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-num">4+</span>
                <span className="stat-label">Core Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">AWS</span>
                <span className="stat-label">Cloud Certified</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">SEC</span>
                <span className="stat-label">Mindset</span>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className="terminal-label">
              <Lock size={12} className="lock-icon" />
              <span>SECURE SHELL INTEGRATION</span>
            </div>
            <Terminal />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A brief overview of my engineering philosophy and professional drive.</p>
        </div>
        <div className="about-content">
          <div className="about-card">
            <div className="about-icon-box">
              <Cpu size={32} />
            </div>
            <h3>Full-Stack Security Engineer</h3>
            <p>
              I bridge the gap between building feature-rich applications and auditing them for potential security flaws. From setting up React frontends to designing asynchronous FastAPI endpoints, containerizing builds with Docker, and scanning network logs, I focus on building scalable, customer-facing systems that are secure by design.
            </p>
          </div>
          <div className="about-card">
            <div className="about-icon-box">
              <ShieldAlert size={32} />
            </div>
            <h3>Security & Cloud Mindset</h3>
            <p>
              Holding the AWS Certified Cloud Practitioner designation, I understand cloud configurations, virtual private clouds, and security group architectures. I apply tools like Nmap, Wireshark, and Burp Suite to audit systems and write automated scripts to protect core application pipelines.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Showcase */}
      <Skills />

      {/* Projects Grid */}
      <Projects />

      {/* Education Timeline */}
      <section className="timeline-section" id="education">
        <div className="section-header">
          <h2 className="section-title">Education & Milestones</h2>
          <p className="section-subtitle">Academic pathway and qualifications in engineering and technology.</p>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-badge">
              <BookOpen size={16} />
            </div>
            <div className="timeline-panel">
              <div className="timeline-header">
                <h3>B.E. Computer Science Engineering (Cybersecurity)</h3>
                <span className="timeline-date">2023 – 2027 (Expected)</span>
              </div>
              <h4 className="timeline-institution">Prince Dr. K. Vasudevan College of Engineering and Technology</h4>
              <p className="timeline-location">Chennai, India</p>
              <p className="timeline-desc">Specialized coursework covering cryptography, network defenses, operating systems security, data structures, algorithms, and agile workflow methodologies.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-badge">
              <BookOpen size={16} />
            </div>
            <div className="timeline-panel">
              <div className="timeline-header">
                <h3>Higher Secondary Certificate (HSC)</h3>
                <span className="timeline-date">2021 – 2023</span>
              </div>
              <h4 className="timeline-institution">St. Mary's Higher Secondary School</h4>
              <p className="timeline-location">Melpalai, India</p>
              <p className="timeline-desc">Graduated with a focus on advanced Mathematics, Physics, Chemistry, and Computer Science.</p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-badge">
              <BookOpen size={16} />
            </div>
            <div className="timeline-panel">
              <div className="timeline-header">
                <h3>SSLC</h3>
                <span className="timeline-date">2020 – 2021</span>
              </div>
              <h4 className="timeline-institution">Mount Carmel Matric School</h4>
              <p className="timeline-location">Muzhucode, India</p>
              <p className="timeline-desc">Completed secondary school curriculum with distinction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="section-header">
          <h2 className="section-title">Establish Secure Connection</h2>
          <p className="section-subtitle">Reach out for collaborations, internship opportunities, or security consulting.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Contact Channels</h3>
            <p>Feel free to contact me via any of the securing channels below. I'm always open to discussing full-stack development, Python engineering, or cybersecurity projects.</p>
            
            <div className="info-list">
              <div className="info-item">
                <Mail className="info-icon" size={18} />
                <div>
                  <span>Email</span>
                  <a href="mailto:ksadithyan2021@gmail.com">ksadithyan2021@gmail.com</a>
                </div>
              </div>
              <div className="info-item">
                <Phone className="info-icon" size={18} />
                <div>
                  <span>Secure Phone</span>
                  <a href="tel:+918220448087">+91 8220448087</a>
                </div>
              </div>
              <div className="info-item">
                <MapPin className="info-icon" size={18} />
                <div>
                  <span>Location</span>
                  <p>Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            <div className="social-links-row">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-btn">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/k-s-adithyan-k-s-adithyan" target="_blank" rel="noopener noreferrer" className="social-btn">
                <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="contact-form-box">
            <h3>Transmit Secure Message</h3>
            
            {submitted ? (
              <div className="form-success">
                <CheckCircle className="success-icon" size={48} />
                <h4>Message Transmitted Successfully!</h4>
                <p>Identity handshake complete. I will reply shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form" id="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name / Organisation</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="Enter your name" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Return Mail Address</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@company.com" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Mobile Number</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    placeholder="+91 00000 00000" 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message Payload</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Outline project collaboration details..." 
                    required
                  ></textarea>
                </div>
                {error && <p className="form-error">{error}</p>}
                <button type="submit" className="submit-btn" disabled={sending}>
                  {sending ? <><Loader size={16} className="spin" /><span>Transmitting...</span></> : <span>Send Message</span>}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Adithyan K S. All rights reserved.</p>
          <div className="footer-links">
            <span className="secure-badge">
              <Lock size={12} />
              <span>Secure Connection AES-256</span>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
