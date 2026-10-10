const publications = [
  {
    year: 2026,
    title: "A Polar Coordinate Prior for Self-Supervised Strong-Lens Representations",
    authors: "Karthik Gaur, Pranath Reddy, Michael W. Toomey & Sergei Gleyzer",
    summary: "Polar resampling with an azimuthal residual exposes non-axisymmetric lens structure and improves label-efficient representations without changing the encoder backbone.",
    tags: ["representations", "physics", "dark-matter"],
    labels: ["ML4PS", "Self-supervision", "Polar coordinates"],
    href: "papers/2026_polar-coordinate-prior_strong-lens-representations.pdf"
  },
  {
    year: 2026,
    title: "VELA: Stationary Latent Targets for Label-Efficient Strong-Lensing Representations",
    authors: "Karthik Gaur, Pranath Reddy, Michael W. Toomey & Sergei Gleyzer",
    summary: "Stationary latent targets improve frozen, label-efficient strong-lensing representations and axion-mass regression under a repaired multi-seed evaluation protocol.",
    tags: ["representations", "dark-matter"],
    labels: ["ML4PS", "Self-supervision", "Label-efficient"],
    href: "papers/2026_ml4ps_vela-stationary-latent-targets.pdf"
  },
  {
    year: 2026,
    title: "Bilinear C4-Covariant Spectral Neural Operator (BiC4-NO) for Scientific Field Surrogates and Gravitational Lensing",
    authors: "Sushmanth Reddy, Pranath Reddy, Michael W. Toomey & Sergei Gleyzer",
    summary: "A physics-guided C4-covariant spin-spectral neural operator improves strong-lensing field surrogates while preserving quarter-turn covariance to numerical precision.",
    tags: ["physics", "dark-matter"],
    labels: ["ML4PS", "Neural operators", "Equivariance"],
    href: "papers/2026_ml4ps_bic4-neural-operator.pdf"
  },
  {
    year: 2026,
    title: "Pooling Discards Resolution-Invariant Structure: An Architecture and Ablation Study on Darcy Flow",
    authors: "Paras Balani, Pranath Reddy, Michael W. Toomey & Sergei Gleyzer",
    summary: "A controlled neural-operator ablation shows that removing pooling preserves zero-shot resolution transfer on Darcy flow, while input-conditioned filters mainly improve in-distribution accuracy.",
    tags: ["physics"],
    labels: ["ML4PS", "Neural operators", "Darcy flow"],
    href: "papers/2026_ml4ps_pooling-resolution-invariant-structure.pdf"
  },
  {
    year: 2026,
    title: "Lens-LeJEPA: Learning the Right Invariances for Strong Gravitational Lenses",
    authors: "Arnesh Batra, Karthik Gaur, Pranath Reddy, Michael W. Toomey & Sergei Gleyzer",
    summary: "Task-aware joint-embedding learning with exact D4 correspondence and arc-weighted radial consistency.",
    tags: ["representations", "physics", "dark-matter"],
    labels: ["Self-supervision", "D4 symmetry", "Simulated"],
    href: "papers/54_Lens_LeJEPA_Learning_the_Ri%20(1).pdf"
  },
  {
    year: 2026,
    title: "D4-Equivariant Hybrid Quantum-Classical Learning for Strong Gravitational Lens Classification",
    authors: "Sushmanth Reddy, Pranath Reddy, Michael W. Toomey & Sergei Gleyzer",
    summary: "A controlled hybrid model that refines orbit-averaged classical features without claiming quantum advantage.",
    tags: ["physics", "dark-matter"],
    labels: ["Quantum-classical", "Equivariance", "Simulated"],
    href: "papers/FSS-26_Paper_XXX_8741.pdf"
  },
  {
    year: 2026,
    title: "DLens: Closed-Loop AI Agents for Parsimonious Scientific Machine Learning",
    authors: "Aatmaj Amol Salunke, Mywish Anand, Pranath Reddy, Michael W. Toomey & Sergei Gleyzer",
    summary: "Selected for a spotlight talk at the AAAI Fall Symposium; typed agents connect lens simulation, architecture search, evaluation, and experiment planning.",
    tags: ["agents", "dark-matter"],
    labels: ["AAAI Spotlight", "Agents", "Auditable workflow"],
    href: "papers/FSS-26_Paper_XXX_2415%20(1).pdf",
    codeHref: "https://github.com/ML4SCI/DeepLense-AI-Scientist"
  },
  {
    year: 2026,
    title: "Selective Memory Retention for Long-Horizon LLM Agents",
    authors: "Pranath Reddy",
    summary: "A bounded-memory study of learned retention under clean and noisy long-horizon agent experience.",
    tags: ["agents"],
    labels: ["LLM agents", "Memory", "Broader AI"],
    href: "https://arxiv.org/abs/2606.29178"
  },
  {
    year: 2026,
    title: "Trace–Answer Compatibility Emerges at Depth and Mediates Prediction in Diffusion Language Models",
    authors: "Ashutosh Ojha, Pranath Reddy & Sergei Gleyzer",
    summary: "An interpretability study of late hidden-state signals linking generated reasoning traces to final answers.",
    tags: ["representations"],
    labels: ["Interpretability", "Diffusion LMs", "Broader AI"],
    href: "papers/123_Trace_Answer_Compatibility.pdf"
  },
  {
    year: 2025,
    title: "FlowLensing: Simulating Gravitational Lensing with Flow Matching",
    authors: "Hamees Sayed, Pranath Reddy, Michael W. Toomey & Sergei Gleyzer",
    summary: "Fast, controllable generation of strong-lensing images across discrete classes and continuous parameters.",
    tags: ["generation", "dark-matter"],
    labels: ["Flow matching", "Simulation", "Conditional generation"],
    href: "https://arxiv.org/abs/2510.07878"
  },
  {
    year: 2025,
    title: "Lens-JEPA: Physics-Informed Joint Embedding Predictive Architecture for Gravitational Lensing",
    authors: "J Rishi, Pranath Reddy, Michael W. Toomey & Sergei Gleyzer",
    summary: "Joint-embedding predictive learning paired with a lens-equation physical encoder.",
    tags: ["representations", "physics", "dark-matter"],
    labels: ["JEPA", "Foundation models", "Simulated"],
    href: "https://ml4physicalsciences.github.io/2025/files/NeurIPS_ML4PS_2025_340.pdf"
  },
  {
    year: 2025,
    title: "HEAL-PINN: Physics-Informed Swin Transformer for Sparse Lensing Data",
    authors: "Dhruv Srivastava, Pranath Reddy, Michael W. Toomey & Sergei Gleyzer",
    summary: "Geometry-aware windows and lens-equation encoding for sparse-data morphology classification.",
    tags: ["physics", "dark-matter"],
    labels: ["Swin Transformer", "PINN", "Sparse data"],
    href: "https://ml4physicalsciences.github.io/2025/files/NeurIPS_ML4PS_2025_252.pdf"
  },
  {
    year: 2025,
    title: "From Simulation to Survey: Benchmarking Super-Resolution for LSST-like Lensing Data",
    authors: "Aleksandr Duplinskii, Pranath Reddy, Michael W. Toomey & Sergei Gleyzer",
    summary: "A direct test of whether better-looking reconstructions also improve downstream physical estimates.",
    tags: ["generation", "dark-matter"],
    labels: ["Super-resolution", "LSST-like", "Scientific utility"],
    href: "https://ml4physicalsciences.github.io/2025/files/NeurIPS_ML4PS_2025_317.pdf"
  },
  {
    year: 2025,
    title: "Domain Adaptation in Application to Gravitational Lens Finding",
    authors: "Hanna Parul, Sergei Gleyzer, Pranath Reddy & Michael W. Toomey",
    summary: "Simulation-to-observation transfer for rare lens discovery in real Hyper Suprime-Cam data.",
    tags: ["dark-matter", "representations"],
    labels: ["Domain adaptation", "Real observations", "Lens finding"],
    href: "https://doi.org/10.3847/1538-4357/adee16"
  },
  {
    year: 2024,
    title: "DiffLense: A Conditional Diffusion Model for Super-Resolution of Gravitational Lensing Data",
    authors: "Pranath Reddy, Michael W. Toomey, Hanna Parul & Sergei Gleyzer",
    summary: "Conditional diffusion for enhancing low-resolution lensing images while preserving fine morphology.",
    tags: ["generation", "dark-matter"],
    labels: ["Diffusion", "Super-resolution", "Mixed data"],
    href: "https://doi.org/10.1088/2632-2153/ad76f8"
  },
  {
    year: 2024,
    title: "LensPINN: Physics-Informed Neural Network for Learning Dark Matter Morphology in Lensing",
    authors: "Ashutosh Ojha, Sergei Gleyzer, Michael W. Toomey & Pranath Reddy",
    summary: "A ViT physical encoder and lens-equation inversion improve compact morphology classifiers.",
    tags: ["physics", "dark-matter"],
    labels: ["PINN", "Vision Transformer", "Simulated"],
    href: "https://ml4physicalsciences.github.io/2024/files/NeurIPS_ML4PS_2024_78.pdf"
  },
  {
    year: 2024,
    title: "Semi-Supervised Super-Resolution for Gravitational Lenses with an Estimated Degradation Model",
    authors: "Peimeng Guan, Sergei Gleyzer & Michael W. Toomey",
    summary: "Adaptive loop unrolling learns from sparse pairs when the observing operator is not exactly known.",
    tags: ["generation", "physics"],
    labels: ["Semi-supervision", "Inverse problems", "Sparse pairs"],
    href: "https://ml4physicalsciences.github.io/2024/files/NeurIPS_ML4PS_2024_110.pdf"
  },
  {
    year: 2024,
    title: "Unsupervised Physics-Informed Super-Resolution of Strong Lensing Images for Sparse Datasets",
    authors: "Anirudh Shankar, Michael W. Toomey & Sergei Gleyzer",
    summary: "The lens equation supplies supervision when high-resolution targets are unavailable.",
    tags: ["generation", "physics"],
    labels: ["Unsupervised", "Super-resolution", "Lens equation"],
    href: "https://ml4physicalsciences.github.io/2024/files/NeurIPS_ML4PS_2024_124.pdf"
  },
  {
    year: 2023,
    title: "Domain Adaptation for Simulation-Based Dark Matter Searches Using Strong Gravitational Lensing",
    authors: "Stephon Alexander, Sergei Gleyzer, Pranath Reddy, Marcos Tidball & Michael W. Toomey",
    summary: "Adversarial and consistency-based adaptation reduce performance loss across simulated observing domains.",
    tags: ["dark-matter", "representations"],
    labels: ["Domain adaptation", "Equivariance", "Simulation"],
    href: "https://doi.org/10.3847/1538-4357/acdfc7"
  },
  {
    year: 2023,
    title: "Equivariant Neural Networks for Signatures of Dark Matter Morphology in Strong Lensing Data",
    authors: "Geo Jolly Cheeramvelil, Sergei Gleyzer & Michael W. Toomey",
    summary: "Rotation- and reflection-aware networks encode physical symmetry directly into the architecture.",
    tags: ["physics", "dark-matter"],
    labels: ["Equivariance", "C8 symmetry", "Simulated"],
    href: "https://ml4physicalsciences.github.io/2023/files/NeurIPS_ML4PS_2023_188.pdf"
  },
  {
    year: 2023,
    title: "Learning Dark Matter Representation From Strong Lensing Images Through Self-Supervision",
    authors: "Yashwardhan A. Deshmukh, Sergei Gleyzer, Kartik Sachdev & Michael W. Toomey",
    summary: "Contrastive learning, BYOL, SimSiam, and DINO build reusable encoders from unlabeled simulations.",
    tags: ["representations", "dark-matter"],
    labels: ["Self-supervision", "Transformers", "Simulated"],
    href: "https://ml4physicalsciences.github.io/2023/files/NeurIPS_ML4PS_2023_207.pdf"
  },
  {
    year: 2023,
    title: "Lensformer: A Physics-Informed Vision Transformer for Gravitational Lensing",
    authors: "Lucas J. Velôso, Michael W. Toomey & Sergei Gleyzer",
    summary: "A Transformer is paired with lensing-potential estimation and source reconstruction.",
    tags: ["physics", "representations", "dark-matter"],
    labels: ["Vision Transformer", "Lens equation", "Simulated"],
    href: "https://ml4physicalsciences.github.io/2023/files/NeurIPS_ML4PS_2023_214.pdf"
  },
  {
    year: 2021,
    title: "Decoding Dark Matter Substructure without Supervision",
    authors: "Stephon Alexander, Sergei Gleyzer, Hanna Parul, Pranath Reddy, Michael W. Toomey, Emanuele Usai & Ryker Von Klar",
    summary: "Autoencoders learn a smooth-halo baseline and flag unexpected substructure through reconstruction error.",
    tags: ["dark-matter", "representations"],
    labels: ["Anomaly detection", "Unsupervised", "Simulated"],
    href: "https://arxiv.org/abs/2008.12731"
  },
  {
    year: 2021,
    title: "Deep Learning the Morphology of Dark Matter Substructure",
    authors: "Stephon Alexander, Sergei Gleyzer, Evan McDonough, Michael W. Toomey & Emanuele Usai",
    summary: "The founding study frames dark-matter substructure as morphology classification in simulated strong lenses.",
    tags: ["dark-matter"],
    labels: ["Founding paper", "CNN", "2019 preprint · 2020 journal"],
    href: "https://doi.org/10.3847/1538-4357/ab7925"
  }
];

const people = [
  { initials: "MT", name: "Michael Toomey", affiliation: "MIT", focus: "Cosmology, simulation, and physics-informed machine learning.", lead: true, links: [["Website", "https://michael-toomey.com/"], ["GitHub", "https://github.com/mwt5345"]] },
  { initials: "PR", name: "Pranath Reddy", affiliation: "Independent Researcher", focus: "Generative models, super-resolution, and scientific agents.", lead: true, links: [["GitHub", "https://github.com/pranath-reddy"], ["Scholar", "https://scholar.google.com/citations?user=sq-LU5kAAAAJ&hl=en"]] },
  { initials: "AP", name: "Anna Parul", affiliation: "Paris Observatory", focus: "Real-lens discovery and the transfer from simulations to sky surveys.", lead: true, links: [["Publications", "https://arxiv.org/search/?query=Hanna+Parul&searchtype=author"]] },
  { initials: "AO", name: "Ashutosh Ojha", affiliation: "IIT Dhanbad", focus: "Physics-guided learning, interpretable models, and real lensing data.", links: [["GitHub", "https://github.com/ML4SCI/DeepLense/tree/main/DeepLense_Physics_Informed_Neural_Network_for_Dark_Matter_Morphology_Ashutosh_Ojha"]] },
  { initials: "HS", name: "Hamees Sayed", affiliation: "Smallest AI", focus: "FlowLensing, neural-operator simulation, and scientific image generation.", links: [["Website", "https://hamees-sayed.github.io/"], ["Hugging Face", "https://huggingface.co/hamees"]] },
  { initials: "KG", name: "Karthik Gaur", affiliation: "UA", focus: "Foundation models and physics-guided learning for gravitational lensing.", links: [["GitHub", "https://github.com/Karthikgaur8"]] },
  { initials: "AB", name: "Arnesh Batra", affiliation: "IIIT Delhi", focus: "JEPA-based foundation models for astronomy and strong lensing.", links: [["GSoC project", "https://summerofcode.withgoogle.com/programs/2026/organizations/machine-learning-for-science-ml4sci"]] },
  { initials: "RS", name: "Rajat Shinde", affiliation: "UAH", focus: "Hybrid quantum-classical representation learning and agentic systems.", links: [["Publications", "https://arxiv.org/search/?query=Rajat+Shinde&searchtype=author"]] },
  { initials: "SR", name: "Sushmanth Reddy", affiliation: "Cisco", focus: "D4-equivariant hybrid quantum-classical lens classification.", links: [["Research", "papers/FSS-26_Paper_XXX_8741.pdf"]] },
  { initials: "LP", name: "Lucca Paris", affiliation: "Brown", focus: "Survey-scale data processing and pipeline development for LSST.", links: [["Project", "https://ml4sci.org/gsoc/2026/proposal_DEEPLENSE7.html"]] },
  { initials: "AS", name: "Aatmaj Amol Salunke", affiliation: "NEU", focus: "Agentic AI for autonomous gravitational-lensing simulation workflows.", links: [["GSoC project", "https://summerofcode.withgoogle.com/programs/2026/organizations/machine-learning-for-science-ml4sci"]] },
  { initials: "MA", name: "Mywish Anand", affiliation: "IIT Madras", focus: "Scientific agents and autonomous gravitational-lensing workflows.", links: [["LinkedIn", "https://in.linkedin.com/in/mywishanand"]] },
  { initials: "PB", name: "Paras Balani", affiliation: "BITS Pilani", focus: "Neural operators for fast simulation of strong gravitational lensing.", links: [["GSoC project", "https://summerofcode.withgoogle.com/programs/2026/organizations/machine-learning-for-science-ml4sci"]] },
  { initials: "PU", name: "Prajwal Uday", affiliation: "RWTH Aachen University", focus: "Physics-informed unsupervised super-resolution of strong-lensing images.", links: [["GSoC project", "https://summerofcode.withgoogle.com/programs/2026/organizations/machine-learning-for-science-ml4sci"]] },
  { initials: "JC", name: "Jen-Yu Chang", affiliation: "NYCU, Taiwan", focus: "Hybrid quantum-classical representation learning for dark-matter substructure.", links: [["GSoC project", "https://summerofcode.withgoogle.com/programs/2026/organizations/machine-learning-for-science-ml4sci"]] },
  { initials: "BC", name: "Bryan Chen", affiliation: "Ecole Polytechnique", focus: "Physics-guided machine learning for gravitational lensing.", links: [["GitHub", "https://github.com/BryanBradfo"]] },
  { initials: "DS", name: "Dhruv Srivastava", affiliation: "UIUC", focus: "HEAL-PINN, sparse-data learning, and gravitational-lens finding.", links: [["Research", "https://ml4physicalsciences.github.io/2025/files/NeurIPS_ML4PS_2025_252.pdf"]] },
  { initials: "KM", name: "Kartik Mandar", affiliation: "University of Catania", focus: "DeepLense data-processing pipelines for LSST-scale observations.", links: [["Website", "https://www.kartikmandar.com/"]] },
  { initials: "SN", name: "Susmit Neogi", affiliation: "IIT Bombay", focus: "Physics-guided machine learning on real gravitational-lensing images.", links: [["GSoC project", "https://summerofcode.withgoogle.com/programs/2026/organizations/machine-learning-for-science-ml4sci"]] },
  { initials: "MJ", name: "Michael Jiao", affiliation: "Harvard", focus: "Machine learning for gravitational-lens finding.", links: [["GSoC project", "https://summerofcode.withgoogle.com/programs/2026/organizations/machine-learning-for-science-ml4sci"]] }
];

const cohort2026 = [
  ["Aatmaj Amol Salunke", "Agentic AI for autonomous gravitational-lensing simulation workflows"],
  ["Arnesh Batra", "WaveLens-JEPA: a foundation model for gravitational lensing"],
  ["Jen-Yu Chang", "Hybrid quantum-classical representation learning for dark-matter substructure"],
  ["Michael Jiao", "Machine learning for gravitational-lens finding"],
  ["Paras Balani", "Neural operators for fast simulation of strong gravitational lensing"],
  ["Prajwal Uday", "Physics-informed unsupervised super-resolution of strong-lensing images"],
  ["Susmit Neogi", "Physics-guided machine learning on real gravitational-lensing images"]
];

function setupNavigation() {
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 20);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav?.classList.toggle('open', open);
    document.body.classList.toggle('nav-open', open);
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    toggle?.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
    document.body.classList.remove('nav-open');
  }));
}

function setupReveals() {
  const items = document.querySelectorAll('.reveal:not(.visible)');
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach(item => item.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });
  items.forEach(item => observer.observe(item));
}

function setupPeople() {
  const grid = document.querySelector('[data-people-grid]');
  if (grid) {
    grid.innerHTML = people.map((person, index) => {
      const links = person.links.map(([label, href]) => `<a href="${href}"${href.startsWith('http') ? ' target="_blank" rel="noreferrer"' : ''}>${label} ↗</a>`).join('');
      const leadMark = person.lead ? '<span class="lead-mark" title="Research lead"><span class="sr-only">Research lead</span></span>' : '';
      return `<article class="person-card${person.lead ? ' lead-card' : ''} reveal" data-delay="${index % 3}">
        <div class="mini-monogram">${person.initials}</div>
        <div class="person-info"><p class="role">${person.affiliation}</p><h3>${person.name}${leadMark}</h3><p>${person.focus}</p><div class="person-links">${links}</div></div>
      </article>`;
    }).join('');
  }

  const cohort = document.querySelector('[data-cohort-list]');
  if (cohort) {
    cohort.innerHTML = cohort2026.map(([name, project], index) => `<article class="cohort-item reveal" data-delay="${index % 4}"><span>${String(index + 1).padStart(2, '0')}</span><div><p>Contributor · ${name}</p><h3>${project}</h3></div></article>`).join('');
  }
}

function publicationMarkup(paper) {
  const labels = paper.labels.map(label => `<span>${label}</span>`).join('');
  const external = paper.href.startsWith('http') ? ' target="_blank" rel="noreferrer"' : '';
  const codeLink = paper.codeHref ? `<a class="publication-code" href="${paper.codeHref}" target="_blank" rel="noreferrer">Code <span aria-hidden="true">↗</span></a>` : '';
  return `
    <article class="publication-card reveal" data-tags="${paper.tags.join(' ')}" data-search="${[paper.title, paper.authors, paper.summary, paper.labels.join(' '), paper.year].join(' ').toLowerCase()}">
      <div class="publication-title">
        <h3><a href="${paper.href}"${external}>${paper.title}</a></h3>
        <p>${paper.authors}</p>
        <div class="publication-tags">${labels}</div>
      </div>
      <div class="publication-summary-wrap"><p class="publication-summary">${paper.summary}</p>${codeLink}</div>
      <a class="publication-link" href="${paper.href}"${external} aria-label="Read ${paper.title}"><span aria-hidden="true">↗</span></a>
    </article>`;
}

function setupPublications() {
  const containers = document.querySelectorAll('[data-publications]');
  if (!containers.length) return;
  containers.forEach(container => {
    const year = Number(container.dataset.publications);
    container.innerHTML = publications.filter(paper => paper.year === year).map(publicationMarkup).join('');
  });
  document.querySelectorAll('[data-paper-count]').forEach(node => node.textContent = publications.length);
  const search = document.querySelector('[data-paper-search]');
  const filters = [...document.querySelectorAll('[data-filter]')];
  const empty = document.querySelector('[data-empty-state]');
  let activeFilter = 'all';

  const applyFilters = () => {
    const term = (search?.value || '').trim().toLowerCase();
    let visibleCount = 0;
    document.querySelectorAll('.publication-card').forEach(card => {
      const categoryMatch = activeFilter === 'all' || card.dataset.tags.split(' ').includes(activeFilter);
      const searchMatch = !term || card.dataset.search.includes(term);
      const visible = categoryMatch && searchMatch;
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    document.querySelectorAll('[data-year-group]').forEach(group => {
      group.hidden = !group.querySelector('.publication-card:not([hidden])');
    });
    if (empty) empty.hidden = visibleCount !== 0;
  };
  search?.addEventListener('input', applyFilters);
  filters.forEach(button => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filters.forEach(item => item.classList.toggle('active', item === button));
    applyFilters();
  }));
}

function setupLensCanvas() {
  const canvas = document.querySelector('[data-lens-canvas]');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let width = 0;
  let height = 0;
  let dpr = 1;
  let pointer = { x: .73, y: .43 };
  let target = { ...pointer };
  let raf = 0;
  let resizeRaf = 0;

  const resize = () => {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(Math.max(window.devicePixelRatio || 1, 1), 3);
    width = rect.width;
    height = rect.height;
    const pixelWidth = Math.max(1, Math.round(width * dpr));
    const pixelHeight = Math.max(1, Math.round(height * dpr));
    if (canvas.width !== pixelWidth) canvas.width = pixelWidth;
    if (canvas.height !== pixelHeight) canvas.height = pixelHeight;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw();
  };

  const requestResize = () => {
    cancelAnimationFrame(resizeRaf);
    resizeRaf = requestAnimationFrame(() => {
      resize();
      resizeRaf = requestAnimationFrame(resize);
    });
  };

  const arc = (cx, cy, rx, ry, rotation, start, end, color, lineWidth = 1) => {
    ctx.beginPath();
    ctx.ellipse(cx, cy, rx, ry, rotation, start, end);
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  };

  const draw = () => {
    ctx.clearRect(0, 0, width, height);
    const cx = width * pointer.x;
    const cy = height * pointer.y;
    const base = Math.min(width, height) * .31;

    const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, base * .75);
    glow.addColorStop(0, 'rgba(244,240,168,.82)');
    glow.addColorStop(.07, 'rgba(244,240,168,.3)');
    glow.addColorStop(.46, 'rgba(168,239,192,.08)');
    glow.addColorStop(1, 'rgba(168,239,192,0)');
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < 11; i += 1) {
      const r = base * (.42 + i * .085);
      arc(cx, cy, r, r * (.48 + i * .012), -.48 + i * .075, -.08, Math.PI * 1.43, `rgba(16,45,44,${.32 - i * .018})`, i % 4 === 0 ? 1.4 : .75);
    }
    arc(cx, cy, base * .72, base * .33, .55, Math.PI * .72, Math.PI * 1.88, 'rgba(16,45,44,.76)', 2.1);
    arc(cx, cy, base * .52, base * .23, -.72, Math.PI * 1.08, Math.PI * 2.18, 'rgba(255,255,255,.72)', 1.6);
    arc(cx, cy, base * .92, base * .39, .18, Math.PI * 1.2, Math.PI * 1.72, 'rgba(16,45,44,.55)', 4.2);

    ctx.fillStyle = '#102d2c';
    ctx.beginPath(); ctx.arc(cx, cy, 5.5, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = '#a8efc0';
    [[-.88,-.08,4], [.73,-.52,3], [.42,.74,2.5], [-.44,.63,2]].forEach(([x,y,r]) => {
      ctx.beginPath(); ctx.arc(cx + base*x, cy + base*y, r, 0, Math.PI*2); ctx.fill();
    });
  };

  const tick = () => {
    pointer.x += (target.x - pointer.x) * .035;
    pointer.y += (target.y - pointer.y) * .035;
    draw();
    raf = requestAnimationFrame(tick);
  };
  canvas.parentElement?.addEventListener('pointermove', event => {
    if (reduced) return;
    const rect = canvas.getBoundingClientRect();
    target.x = Math.max(.58, Math.min(.88, (event.clientX - rect.left) / rect.width));
    target.y = Math.max(.28, Math.min(.62, (event.clientY - rect.top) / rect.height));
  }, { passive: true });
  canvas.parentElement?.addEventListener('pointerleave', () => { target = { x: .73, y: .43 }; });
  const resizeObserver = 'ResizeObserver' in window ? new ResizeObserver(requestResize) : null;
  resizeObserver?.observe(canvas);
  window.addEventListener('resize', requestResize, { passive: true });
  window.visualViewport?.addEventListener('resize', requestResize, { passive: true });
  window.addEventListener('orientationchange', requestResize, { passive: true });
  window.addEventListener('pageshow', requestResize, { passive: true });
  document.fonts?.ready.then(requestResize);
  requestResize();
  if (!reduced) raf = requestAnimationFrame(tick);
  window.addEventListener('pagehide', () => {
    cancelAnimationFrame(raf);
    cancelAnimationFrame(resizeRaf);
    resizeObserver?.disconnect();
  }, { once: true });
}

document.querySelectorAll('[data-year]').forEach(node => node.textContent = new Date().getFullYear());
setupNavigation();
setupPublications();
setupPeople();
setupLensCanvas();
setupReveals();
