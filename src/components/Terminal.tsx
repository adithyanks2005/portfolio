import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, RefreshCw, AlertTriangle } from 'lucide-react';
import './Terminal.css';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
  isSystem?: boolean;
}

export default function Terminal() {
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'systeminfo',
      output: (
        <div className="terminal-system-info">
          <p className="highlight">ADITHYAN-SEC-SHELL v1.4.2 [Authorized Access Only]</p>
          <p>Target System: ADITHYAN K S (B.E. Cybersecurity Student)</p>
          <p>Cloud Certification: AWS Certified Cloud Practitioner [ACTIVE]</p>
          <p>Type <span className="accent-text">help</span> to view available operations.</p>
        </div>
      ),
      isSystem: true,
    },
  ]);
  const [input, setInput] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let response: React.ReactNode = '';

    switch (cmd) {
      case 'help':
        response = (
          <div className="terminal-help">
            <p>Available commands:</p>
            <p><span className="accent-text">about</span>      - Display professional profile summary</p>
            <p><span className="accent-text">skills</span>     - List core technical stack & certifications</p>
            <p><span className="accent-text">projects</span>   - Show projects & scanner modules</p>
            <p><span className="accent-text">scan</span>       - Run simulated AI vulnerability scan</p>
            <p><span className="accent-text">contact</span>    - Show secure transmission channels</p>
            <p><span className="accent-text">clear</span>      - Clear terminal buffer</p>
          </div>
        );
        break;
      case 'about':
        response = (
          <div className="terminal-about">
            <p>Adithyan K S is a Third-year B.E. Computer Science Engineering (Cybersecurity) student.</p>
            <p>Passionate about building secure web applications and designing defense mechanisms.</p>
            <p>Location: Chennai, India</p>
            <p>Comfortable working: FastAPI, Next.js, Docker, AWS, Linux, Security Tooling.</p>
          </div>
        );
        break;
      case 'skills':
        response = (
          <div className="terminal-skills">
            <p className="highlight">Languages:</p>
            <p>  - Python (Primary), JavaScript, TypeScript, C/C++</p>
            <p className="highlight">Web & Backend:</p>
            <p>  - FastAPI, Next.js, React, Node.js, REST APIs</p>
            <p className="highlight">Cloud & Security:</p>
            <p>  - AWS CCP, Docker, Linux, Nmap, Wireshark, Burp Suite</p>
          </div>
        );
        break;
      case 'projects':
        response = (
          <div className="terminal-projects">
            <p className="accent-text">[Project List]</p>
            <p>1. <span className="highlight">AI-Powered Vulnerability Scanner</span> (Python, AI analysis)</p>
            <p>2. <span className="highlight">Recon-X</span> (Python recon/OSINT tool)</p>
            <p>3. <span className="highlight">Nexora AI</span> (FastAPI, Google OAuth, Vercel)</p>
            <p>4. <span className="highlight">Parkide</span> (Real-time Parking booking app)</p>
            <p>Type <span className="accent-text">scan</span> to execute scanner test run.</p>
          </div>
        );
        break;
      case 'scan':
        response = (
          <div className="terminal-scan">
            <p className="warning-text"><AlertTriangle size={14} className="inline-icon" /> Initializing Vulnerability Check...</p>
            <p className="scan-line">Target: localhost:3000</p>
            <p className="scan-line">Scanning ports... 80 (open), 443 (open), 8000 (filtered)</p>
            <p className="scan-line">Analyzing web framework: Next.js + FastAPI backend detected</p>
            <p className="scan-line success-text">Scan complete. 0 critical vulnerabilities found. Code integrity verified!</p>
          </div>
        );
        break;
      case 'contact':
        response = (
          <div className="terminal-contact">
            <p>Transmission portals:</p>
            <p>Email: <a href="mailto:ksadithyan2021@gmail.com" className="term-link">ksadithyan2021@gmail.com</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/k-s-adithyan-k-s-adithyan" target="_blank" rel="noopener noreferrer" className="term-link">linkedin.com/in/k-s-adithyan-k-s-adithyan</a></p>
          </div>
        );
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        response = <p className="error-text">Command not found: '{cmd}'. Type 'help' for available commands.</p>;
    }

    setHistory((prev) => [...prev, { command: input, output: response }]);
    setInput('');
  };

  return (
    <div className="terminal-wrapper">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <div className="terminal-title">
          <TerminalIcon size={14} />
          <span>adithyan@cyber-shell:~</span>
        </div>
        <div className="terminal-actions">
          <button onClick={() => setHistory([{
            command: 'systeminfo',
            output: (
              <div className="terminal-system-info">
                <p className="highlight">ADITHYAN-SEC-SHELL v1.4.2 [Authorized Access Only]</p>
                <p>Target System: ADITHYAN K S (B.E. Cybersecurity Student)</p>
                <p>Cloud Certification: AWS Certified Cloud Practitioner [ACTIVE]</p>
                <p>Type <span className="accent-text">help</span> to view available operations.</p>
              </div>
            ),
            isSystem: true
          }])} title="Reset Terminal" aria-label="Reset Terminal">
            <RefreshCw size={12} />
          </button>
        </div>
      </div>
      <div className="terminal-body" ref={containerRef} onClick={handleTerminalClick}>
        {history.map((item, index) => (
          <div key={index} className="terminal-log">
            {!item.isSystem && (
              <div className="terminal-command-line">
                <span className="prompt-symbol">guest@adithyan:~$</span>
                <span className="entered-command">{item.command}</span>
              </div>
            )}
            <div className="terminal-output">{item.output}</div>
          </div>
        ))}
        <form onSubmit={handleCommand} className="terminal-input-form">
          <span className="prompt-symbol">guest@adithyan:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="terminal-input"
            autoComplete="off"
            autoCapitalize="none"
            spellCheck="false"
            aria-label="Terminal input"
          />
          <button type="submit" className="terminal-submit-btn" aria-label="Execute command">
            <Play size={10} />
          </button>
        </form>
      </div>
    </div>
  );
}
