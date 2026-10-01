import './style.css';

const projects = [
  {
    number: '01',
    category: 'FINAL PROJECT · IoT SECURITY',
    title: 'IoT Intrusion Detection System',
    description: 'Machine-learning based intrusion detection for RPL-based IoT networks, developed with Contiki-NG and Cooja simulation.',
    tags: ['Python', 'Scikit-learn', 'RPL', 'Cooja'],
    link: '/projects/iot-ids/'
  },
  {
    number: '02', category: 'EXPERIMENTAL · AI', title: 'AIRI — AI VTuber',
    description: 'An experimental real-time AI companion focused on conversational interaction, voice input, memory, and personality.',
    tags: ['Python', 'AI', 'Whisper', 'Voice'], link: '#contact'
  },
  {
    number: '03', category: 'PROFESSIONAL · NETWORKING', title: 'Network & Geospatial Documentation',
    description: 'Network documentation and geospatial data workflows involving ODC/ODP, KML, DWG, GIS, and internal documentation systems.',
    tags: ['GIS', 'KML', 'DWG', 'Networking'], link: '#contact'
  },
  {
    number: '04', category: 'STEM · ROBOTICS', title: 'Arduino Robotics Projects',
    description: 'Hands-on Arduino projects covering sensors, LEDs, alarms, and introductory robotics concepts for STEM learning.',
    tags: ['Arduino', 'C++', 'Robotics', 'STEM'], link: '#contact'
  }
];

const experiences = [
  { period: 'Sep 2026 — Present', role: 'IT Hardware & Networking Intern', company: 'Hyoshii Farm Indonesia', description: 'Supporting IT hardware and networking activities in a practical work environment.' },
  { period: 'Aug 2026', role: 'Robotics Instructor · Freelance', company: 'Yello Academy Bandung', description: 'Delivered hands-on Arduino and introductory robotics sessions for junior-high students through guided projects and practical exercises.' },
  { period: 'Aug — Dec 2025', role: 'Social Network Engineering Intern', company: 'PT Telkom Akses Bandung', description: 'Supported network documentation and geospatial workflows, including ODC/ODP monitoring, KML/DWG data, GIS, and internal documentation.' },
  { period: 'Jun — Jul 2025', role: 'Internship · Digital & Public Service Project', company: 'Disnaker Tangerang Selatan', description: 'Contributed to the Anggur application project and supported activities related to digital services and workforce training.' }
];

const personalDevelopment = [
  { period: '2023 — Present', role: 'AI & Software Development', description: 'Developing personal technology projects in AI, software, and automation, including AIRI and other experimental applications built with Python.' }
];

const activities = [
  { period: 'Sep 2022 — Aug 2024', role: 'Science Department Member', organization: 'HIMATEL POLBAN', description: 'Supported IoT-focused educational activities, publication, media, event documentation, and visual materials for student initiatives.' },
  { period: 'Jan 2025', role: 'Fiber Optic Workshop', organization: 'TELEPATI 5.0 · PT Len Industri', description: 'Completed a practical workshop introducing fiber-optic fundamentals and applications in telecommunications.' }
];

const skills = [
  ['Networking', 'TCP/IP · Cisco · Network Troubleshooting · OTDR · Fusion Splicing'],
  ['IoT', 'Arduino · Contiki-NG · Cooja · RPL'],
  ['Programming', 'Python · Java · JavaScript · SQL'],
  ['Machine Learning', 'Scikit-learn · TensorFlow · Data Analysis'],
  ['Tools', 'Git · VS Code · GIS · DWG/KML · Microsoft Office'],
  ['Other', 'Technical Documentation · Research · Project Development']
];

const certifications = [
  ['CCNA: Enterprise Networking, Security, and Automation', 'Cisco Networking Academy · Jun 2026'],
  ['CyberOps Associate', 'Cisco Networking Academy · Jun 2026'],
  ['Cisco Certified Network Associate Cyber Ops (CCNA)', 'Cisco CCNA & CCNP Training & Certification Exam Center · Jun 2025'],
  ['TOEIC · Score 835', 'PT. International Test Center · May 2026 — May 2028']
];

const nav = `
<header class="navbar">
  <a href="/" class="brand">IS<span>.</span></a>
  <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false">☰</button>
  <nav class="nav-links">
    <a href="/#about">About</a><a href="/#projects">Projects</a><a href="/#experience">Experience</a><a href="/#skills">Skills</a><a href="/#contact">Contact</a>
    <a href="/#contact" class="nav-contact">Let's Talk ↗</a>
  </nav>
</header>`;

const footer = `<footer class="footer section-shell"><span>© ${new Date().getFullYear()} Ignatius Sihotang</span><span>Built with curiosity & code.</span></footer>`;

function projectCards() {
  return projects.map(p => `
    <article class="project-card reveal">
      <div class="project-top"><span class="project-number">${p.number}</span><a href="${p.link}" class="project-arrow" aria-label="Learn more about ${p.title}">↗</a></div>
      <p class="project-category">${p.category}</p><h3>${p.title}</h3><p>${p.description}</p>
      <div class="tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
    </article>`).join('');
}

function homePage() {
  return `
    ${nav}
    <main>
      <section id="home" class="hero section-shell">
        <div class="hero-copy reveal">
          <p class="eyebrow">TELECOMMUNICATIONS ENGINEERING</p>
          <div class="availability"><span></span> OPEN TO ENGINEERING & TECHNOLOGY OPPORTUNITIES</div>
          <h1>Building with <span>networks</span>, IoT & intelligent systems.</h1>
          <p class="hero-description">I'm Ignatius Sihotang, a Telecommunications Engineering graduate interested in networking, wireless communications, IoT, machine learning, and practical technology.</p>
          <div class="hero-actions"><a href="#projects" class="button button-primary">Explore Projects <span>↗</span></a><a href="#contact" class="button button-ghost">Get in touch</a></div>
          <div class="quick-facts"><span>Based in Indonesia</span><span>·</span><span>Telecommunications Engineering Graduate</span><span>·</span><span>Politeknik Negeri Bandung</span></div>
        </div>
        <div class="hero-visual reveal" aria-hidden="true">
          <div class="orb orb-one"></div><div class="orb orb-two"></div><div class="network-grid"></div>
          <div class="signal-line signal-a"></div><div class="signal-line signal-b"></div><div class="signal-line signal-c"></div>
          <div class="node node-a"></div><div class="node node-b"></div><div class="node node-c"></div><div class="node node-d"></div>
          <div class="visual-label">01 / CONNECTED</div>
        </div>
      </section>

      <section id="about" class="section section-shell">
        <div class="section-heading reveal"><span>01</span><h2>About me</h2></div>
        <div class="about-grid">
          <div class="about-photo-wrap reveal"><img class="about-photo" src="/assets/profile-photo.jpeg" alt="Ignatius Sihotang at his graduation" loading="lazy" /></div>
          <div class="about-lead reveal"><p>Curious about how technology connects people, devices, and intelligent systems.</p></div>
          <div class="about-body reveal"><p>I’m a Telecommunications Engineering graduate from Politeknik Negeri Bandung. My interests sit at the intersection of <strong>computer networking, wireless telecommunications, IoT, and machine learning.</strong></p>
          <p>I enjoy turning technical concepts into practical projects — from network and geospatial documentation to ML-based IoT security systems and experimental AI applications.</p></div>
        </div>
      </section>

      <section id="projects" class="section section-shell section-muted">
        <div class="section-heading reveal"><span>02</span><h2>Selected projects</h2><p>A few things I've built, explored, and learned from — across academic, professional, and experimental work.</p></div>
        <div class="project-grid">${projectCards()}</div>
      </section>

      <section id="experience" class="section section-shell">
        <div class="section-heading reveal"><span>03</span><h2>Experience</h2></div>
        <div class="timeline">${experiences.map(x => `<article class="timeline-item reveal"><span class="timeline-period">${x.period}</span><div><h3>${x.role}</h3><p class="timeline-company">${x.company}</p><p>${x.description}</p></div></article>`).join('')}</div>
      </section>

      <section id="development" class="section section-shell">
        <div class="section-heading reveal"><span>04</span><h2>Personal development</h2><p>Technical work I build and explore outside formal employment.</p></div>
        <div class="timeline compact-timeline">${personalDevelopment.map(x => `<article class="timeline-item reveal"><span class="timeline-period">${x.period}</span><div><h3>${x.role}</h3><p>${x.description}</p></div></article>`).join('')}</div>
      </section>

      <section id="skills" class="section section-shell section-muted">
        <div class="section-heading reveal"><span>05</span><h2>Skills & tools</h2></div>
        <div class="skills-grid">${skills.map(([a,b]) => `<div class="skill-item reveal"><span class="skill-dot"></span><div><strong>${a}</strong><p>${b}</p></div></div>`).join('')}</div>
        <div class="cert-strip reveal"><div><span class="eyebrow">CERTIFICATIONS</span><h3>Networking & Cybersecurity</h3></div><div class="cert-list">${certifications.map(([name, issuer]) => `<div class="cert-item"><strong>${name}</strong><span>${issuer}</span></div>`).join('')}</div></div>
      </section>

      <section id="activities" class="section section-shell">
        <div class="section-heading reveal"><span>06</span><h2>Activities</h2><p>Selected academic and community involvement.</p></div>
        <div class="timeline compact-timeline">${activities.map(x => `<article class="timeline-item reveal"><span class="timeline-period">${x.period}</span><div><h3>${x.role}</h3><p class="timeline-company">${x.organization}</p><p>${x.description}</p></div></article>`).join('')}</div>
      </section>

      <section id="contact" class="contact section-shell reveal"><p class="eyebrow">07 / CONTACT</p><h2>Have a project or opportunity in mind?</h2><p>I'm open to conversations about networking, telecommunications, IoT, machine learning, and technology opportunities.</p>
        <div class="contact-links"><a href="mailto:ignasihotang07@gmail.com">ignasihotang07@gmail.com ↗</a><a href="https://www.linkedin.com/in/ignatiussihotang" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/airiseeker" target="_blank" rel="noreferrer">GitHub ↗</a></div>
      </section>
    </main>${footer}`;
}

function idsPage() {
  return `
    ${nav}
    <main class="case-study">
      <section class="case-hero section-shell">
        <a class="back-link" href="/#projects">← Back to projects</a>
        <p class="eyebrow">01 / FINAL PROJECT · IoT SECURITY</p>
        <h1>IoT Intrusion<br><span>Detection System</span></h1>
        <p class="case-lead">Machine Learning-Based Intrusion Detection for RPL-Based IoT Networks using Contiki-NG and Cooja simulation.</p>
        <div class="case-tags"><span>Python</span><span>Scikit-learn</span><span>Contiki-NG</span><span>Cooja</span><span>RPL</span></div>
      </section>

      <section class="case-section section-shell">
        <div class="case-label">01 / OVERVIEW</div>
        <div class="case-two-col"><h2>Detecting abnormal behavior in constrained IoT networks.</h2><div><p>This final project explores an intrusion detection system for RPL-based IoT networks. Network traffic is generated through Cooja/Contiki-NG simulation, transformed into a structured dataset, and classified using machine-learning models.</p><p>The goal is to distinguish normal traffic from several RPL-related attack patterns and present the detection process through a desktop demonstration interface.</p></div></div>
      </section>

      <section class="case-section section-muted-full">
        <div class="section-shell"><div class="case-label">02 / SYSTEM FLOW</div><h2 class="case-wide-title">From simulation to detection.</h2>
          <div class="flow-grid"><div class="flow-step"><span>01</span><strong>Contiki-NG</strong><p>IoT nodes and RPL network behavior.</p></div><div class="flow-arrow">→</div><div class="flow-step"><span>02</span><strong>Cooja</strong><p>Network simulation and traffic generation.</p></div><div class="flow-arrow">→</div><div class="flow-step"><span>03</span><strong>Dataset</strong><p>Traffic features prepared for ML.</p></div><div class="flow-arrow">→</div><div class="flow-step"><span>04</span><strong>Classifier</strong><p>Traffic classified into defined classes.</p></div></div>
        </div>
      </section>

      <section class="case-section section-shell">
        <div class="case-label">03 / ATTACK CLASSES</div><div class="attack-grid">
          ${[['SHA','Sinkhole Attack'],['DFA','DAO Flooding / Decreased Rank'],['SFA','Spoofing Attack'],['SYA','Sybil Attack'],['VNA','Version Number Attack']].map(([a,b])=>`<div class="attack-card"><span>${a}</span><h3>${b}</h3><p>RPL-related traffic pattern represented in the experimental dataset.</p></div>`).join('')}
        </div>
      </section>

      <section class="case-section section-muted-full">
        <div class="section-shell"><div class="case-label">04 / MACHINE LEARNING</div><div class="model-grid"><div><h2>Comparing multiple classifiers.</h2><p>The project evaluates several supervised-learning approaches so their behavior can be compared under the same prepared dataset and evaluation workflow.</p></div><div class="model-list"><div><strong>Random Forest (Tuned)</strong><span>Ensemble classifier</span></div><div><strong>Decision Tree</strong><span>Interpretable tree-based model</span></div><div><strong>KNN</strong><span>Distance-based classifier</span></div><div><strong>Naive Bayes</strong><span>Probabilistic baseline</span></div></div></div></div>
      </section>

      <section class="case-section section-shell">
        <div class="case-label">05 / DATA & EVALUATION</div><div class="metric-grid"><div><strong>16</strong><span>dataset features</span></div><div><strong>6</strong><span>traffic classes</span></div><div><strong>4</strong><span>classification approaches</span></div><div><strong>K-FOLD</strong><span>cross-validation & train-test evaluation</span></div></div><p class="case-note">Evaluation uses standard classification metrics and cross-validation to assess model behavior across the prepared traffic dataset.</p></div>

        <div class="case-section results-section"><div class="case-label">06 / RESULTS</div><div class="split"><div><h2>Model accuracy under K-Fold CV.</h2><p>Several supervised-learning models were evaluated using the same prepared dataset and evaluation workflow. The comparison is intended to show how different classification approaches behave on the project data.</p></div><div class="results-list"><div><span>Decision Tree</span><strong>74.59%</strong></div><div><span>K-Nearest Neighbors</span><strong>63.19%</strong></div><div><span>Naive Bayes</span><strong>39.83%</strong></div><div><span>Random Forest (Default)</span><strong>78.84%</strong></div><div><span>Random Forest (Tuned)</span><strong>79.06%</strong></div></div></div><p class="case-note">The results provide a high-level view of model performance under the project evaluation workflow. Detailed experimental configurations and supporting analysis can be discussed separately when requested.</p></div>
      </section>

      <section class="case-section section-shell"><div class="case-label">07 / PROJECT OUTCOME</div><div class="outcome-panel"><h2>From research to a working detection concept.</h2><p>The project combines network simulation, dataset preparation, supervised machine learning, and a desktop-oriented detection workflow into one end-to-end IoT security study.</p><p class="case-note">Technical implementation details, experimental configurations, and supporting materials can be discussed in a private technical conversation.</p></div></section>

      <section class="case-section section-shell case-next"><p class="eyebrow">NEXT</p><h2>Want to explore the implementation?</h2><p>Once the repository and final experiment outputs are ready, this page can link directly to the source code, dataset documentation, and demo materials.</p><div class="contact-links"><a href="/#contact">Get in touch ↗</a><a href="/#projects">More projects ↗</a></div></section>
    </main>${footer}`;
}

const isIds = location.pathname.replace(/\/+$/, '') === '/projects/iot-ids';
document.querySelector('#app').innerHTML = isIds ? idsPage() : homePage();

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle?.addEventListener('click', () => { const open = navLinks.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', open); });
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => navLinks?.classList.remove('open')));

const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
