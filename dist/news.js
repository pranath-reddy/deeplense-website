const blogPosts = [
  { year: 2026, author: "Arnesh Batra", title: "Lens-LeJEPA: Foundation Model for Gravitational Lensing", platform: "Project journal", type: "Final", date: "2026-09", url: "https://arnesh2212.github.io/lens-jepa.github.io/" },
  { year: 2026, author: "Prajwal Uday", title: "UnLense: Unsupervised Super-Resolution of Gravitational Lensing Images", platform: "Medium", type: "Mid-term", date: "2026-09-25", url: "https://medium.com/@uprajwal20/unsupervised-super-resolution-of-gravitational-lensing-images-gsoc-2026-mid-term-ml4sci-584a46d8d946" },
  { year: 2026, author: "Paras Balani", title: "Neural Operators as Fast Surrogates for Strong Gravitational Lensing", platform: "Medium", type: "Final", date: "2026-09-20", url: "https://medium.com/@f20230738_31618/neural-operators-as-fast-surrogates-for-strong-gravitational-lensing-be4dec273483" },
  { year: 2026, author: "Aatmaj Amol Salunke", title: "An AI Scientist for Dark Matter: Closed-Loop Agents for Strong Gravitational Lensing", platform: "Medium", type: "Final", date: "2026-09-16", url: "https://medium.com/@aatmajsalunke/an-ai-scientist-for-dark-matter-closed-loop-agents-for-strong-gravitational-lensing-e6e31a4b13ad" },
  { year: 2025, author: "J Rishi", title: "Foundation Model for Gravitational Lensing", platform: "Medium", type: "Final", date: "2025-11-18", url: "https://medium.com/@rishirswamy/foundation-model-for-gravitational-lensing-f6e75ab24d88" },
  { year: 2025, author: "Anirudh Shankar", title: "Grid-based Strong Gravitational Lensing for Unsupervised Super-Resolution", platform: "Medium", type: "Final", date: "2025-11-08", url: "https://medium.com/@anirudhshankar99/grid-based-strong-gravitational-lensing-for-unsupervised-super-resolution-d978796728c6" },
  { year: 2025, author: "Aleksandr Duplinskii", title: "Benchmarking Super-Resolution for LSST-like Data", platform: "Medium", type: "Final", date: "2025-09-29", url: "https://medium.com/@al.duplinskiy/benchmarking-super-resolution-for-lsst-like-data-5d34c1e793dc" },
  { year: 2025, author: "Anirudh Shankar", title: "Physics-informed Unsupervised Super-Resolution of Lensing Images", platform: "Medium", type: "Mid-term", date: "2025-08-20", url: "https://medium.com/@anirudhshankar99/physics-informed-unsupervised-super-resolution-of-lensing-images-gsoc-2025-mid-term-beb2df49c851" },
  { year: 2025, author: "Hamees Sayed", title: "FlowLensing: Simulating Gravitational Lensing with Flow Matching", platform: "Project page", type: "Final", date: "2025", url: "https://hamees-sayed.github.io/flowlensing" },
  { year: 2025, author: "Hamees Sayed", title: "Simulating Gravitational Lensing with Flow Matching", platform: "Medium", type: "Mid-term", date: "2025-08-02", url: "https://medium.com/@hameessayed71/simulating-gravitational-lensing-with-flow-matching-gsoc-midterm-update-7d4692375ae8" },
  { year: 2025, author: "Aleksandr Duplinskii", title: "Diffusion Model for Super-Resolution Imaging", platform: "Medium", type: "Mid-term", date: "2025-07-30", url: "https://medium.com/@al.duplinskiy/diffusion-model-for-superresolution-imaging-c0d6ec8b8597" },
  { year: 2025, author: "Ashutosh Ojha", title: "Physics-Informed Learning on Real Gravitational Lensing", platform: "Medium", type: "Mid-term", date: "2025-07-28", url: "https://medium.com/@ojhaaashutosh1005/physics-informed-learning-on-real-gravitational-lensing-5bb8f1d8248b" },
  { year: 2025, author: "Dhruv Srivastava", title: "HEALSwin-PINN", platform: "GitHub", type: "Final report", date: "2025", url: "https://github.com/EnderNinja7/HEALSwin-PINN/tree/main" },
  { year: 2024, author: "Anirudh Shankar", title: "Physics-Informed Unsupervised Super-Resolution of Lensing Images", platform: "Medium", type: "Final", date: "2024-11-03", url: "https://medium.com/@anirudhshankar99/physics-informed-unsupervised-super-resolution-of-lensing-images-gsoc-2024-x-ml4sci-51cedc1cfb00" },
  { year: 2024, author: "J Rishi", title: "Diffusion Models for Gravitational Lensing Simulations — Part 2", platform: "Medium", type: "Final", date: "2024-10-16", url: "https://medium.com/@rishirswamy/gsoc-24-with-ml4sci-part-2-diffusion-models-for-gravitational-lensing-simulations-7c667be4bf45" },
  { year: 2024, author: "Atal Gupta", title: "Single Image Super-Resolution Using a Denoising Autoencoder", platform: "Medium", type: "Final", date: "2024-09-23", url: "https://medium.com/@guptaatal/single-image-super-resolution-using-denoising-auto-encoder-f05facda6485" },
  { year: 2024, author: "Ashutosh Ojha", title: "Physics-Guided Machine Learning — Final Evaluation", platform: "Medium", type: "Final", date: "2024-09-23", url: "https://medium.com/@ojhaaashutosh1005/gsoc24-with-ml4sci-physics-guided-machine-learning-final-evaluation-0814ed47bbd2" },
  { year: 2024, author: "Sreehari Iyer", title: "Learning Representations Through Self-Supervision on Real Gravitational Lensing Images", platform: "Project journal", type: "Final", date: "2024", url: "https://iyersreehari.github.io/gsoc24-blog-deeplense-ssl/" },
  { year: 2024, author: "J Rishi", title: "Diffusion Models for Gravitational Lensing Simulations — Part 1", platform: "Medium", type: "Mid-term", date: "2024-07-26", url: "https://medium.com/@rishirswamy/gsoc-24-with-ml4sci-part-1-diffusion-models-for-gravitational-lensing-simulations-dd3bb39deb41" },
  { year: 2024, author: "Anirudh Shankar", title: "LensSR: Physics-Informed Unsupervised Super-Resolution of Lensing Images", platform: "Medium", type: "Mid-term", date: "2024-07-23", url: "https://medium.com/@anirudhshankar99/lenssr-physics-informed-super-resolution-of-lensing-images-on-sparse-datasets-ml4sci-x-gsoc-2024-1e9bc099a2fc" },
  { year: 2024, author: "Atal Gupta", title: "Diffusion Lensing: Single Image Super-Resolution with Diffusion", platform: "Medium", type: "Mid-term", date: "2024-07-22", url: "https://medium.com/@guptaatal/diffusion-lensing-single-image-super-resolution-with-diffusion-cd216c2a4466" },
  { year: 2024, author: "Ashutosh Ojha", title: "Physics-Informed Neural Networks for Dark Matter Morphology", platform: "Medium", type: "Mid-term", date: "2024-07-22", url: "https://medium.com/@ojhaaashutosh1005/physics-informed-neural-network-for-dark-matter-morphology-f6187164e4c8" },
  { year: 2023, author: "Geo Jolly", title: "Google Summer of Code 2023 with ML4SCI", platform: "Project journal", type: "Final", date: "2023-09-30", url: "https://kingjuno.github.io/blog/2023/09/30/gsoc-ml4sci.html" },
  { year: 2023, author: "Saranga K Mahanta", title: "Updating the DeepLense Pipeline — Part 2", platform: "Medium", type: "Final", date: "2023-09-25", url: "https://medium.com/@saranga.boo/updating-the-deeplense-pipeline-part-2-gsoc-2023-with-ml4sci-299a48d0dd23" },
  { year: 2023, author: "Lucas José", title: "Lensiformer: A Relativistic Physics-Informed Vision Transformer", platform: "Medium", type: "Final", date: "2023-09-25", url: "https://medium.com/@lucas.jose.veloso.de.souza/lensiformer-a-relativistic-physics-informed-vision-transformer-architecture-for-dark-matter-a119f6d0dc0d" },
  { year: 2023, author: "Yashwardhan Deshmukh", title: "Self-Supervised Learning for Strong Gravitational Lensing — Part 1", platform: "Medium", type: "Final", date: "2023", url: "https://yaashwardhan.medium.com/self-supervised-learning-for-strong-gravitational-lensing-part1-5a049e976b51" },
  { year: 2022, author: "Archil Srivastava", title: "Transformers for Dark Matter Morphology with Strong Gravitational Lensing", platform: "Medium", type: "Final", date: "2022-10-03", url: "https://medium.com/@archilsrivastava/transformers-for-dark-matter-morphology-with-strong-gravitational-lensing-gsoc-2022-with-ml4sci-b34a03d30114" },
  { year: 2022, author: "Yurii Halychanskyi", title: "Deep Regression for Exploring Dark Matter", platform: "Medium", type: "Final", date: "2022-10-01", url: "https://medium.com/@yuriihalyc/gsoc-2022-with-ml4sci-deep-regression-for-exploring-dark-matter-3f2f1badb60f" },
  { year: 2022, author: "Mriganka Nath", title: "Domain Adaptation for Gravitational Lens Finding", platform: "Medium", type: "Final", date: "2022-09-30", url: "https://mrinath.medium.com/domain-adaptation-for-gravitational-lens-finding-gsoc-22-ml4sci-7b70b2be6d6b" },
  { year: 2022, author: "Kartik Sachdev", title: "Benchmarking Vision Transformers for Dark Matter Substructure", platform: "Medium", type: "Final", date: "2022-09-30", url: "https://medium.com/@sachdev.kartik25/benchmarking-vision-transformers-for-classification-of-dark-matter-substructure-gsoc-2022-with-6ec7711cc32d" },
  { year: 2022, author: "Saranga K Mahanta", title: "Updating the DeepLense Pipeline", platform: "Medium", type: "Final", date: "2022-09-29", url: "https://medium.com/@saranga.boo/updating-the-deeplense-pipeline-gsoc-2022-with-ml4sci-deb9f20cc928" },
  { year: 2022, author: "Zhongchao Guan", title: "Deep Regression Exploration", platform: "Medium", type: "Final", date: "2022-09-21", url: "https://medium.com/@gg884691896/gsoc-2021-with-ml4sci-deep-regression-exploration-34d5d8fb4643" },
  { year: 2021, author: "Apoorva Vikram Singh", title: "Equivariant Neural Networks for Dark Matter Substructure", platform: "Medium", type: "Final", date: "2021-08-25", url: "https://medium.com/@singhapoorva388/gsoc-2021-with-ml4sci-equivariant-neural-networks-for-classification-of-dark-matter-substructure-64ef3877477a" },
  { year: 2021, author: "Marcos Tidball", title: "Domain Adaptation for Decoding Dark Matter", platform: "Medium", type: "Final", date: "2021-08-23", url: "https://medium.com/@marcostidball/gsoc-2021-with-ml4sci-domain-adaptation-for-decoding-dark-matter-bf0380898aed" },
  { year: 2021, author: "Yurii Halychanskyi", title: "Deep Regression for Exploring Dark Matter", platform: "Medium", type: "Final", date: "2021-08-21", url: "https://medium.com/@yuriihalyc/gsoc-2021-with-ml4sci-deep-regression-for-exploring-dark-matter-32691c46adfa" },
  { year: 2020, author: "Pranath Reddy", title: "Dark Matter and Deep Learning", platform: "Towards Data Science", type: "Final", date: "2020-09-02", url: "https://medium.com/data-science/gsoc-2020-with-cern-hsf-dark-matter-and-deep-learning-eb611850bb79" }
];

const kartikSeries = [
  ["2025-02-15", "GSoC again?", "https://gsoc2025.blogspot.com/2025/02/gsoc-again.html"],
  ["2025-02-18", "Back to School!", "https://gsoc2025.blogspot.com/2025/02/back-to-school.html"],
  ["2025-02-23", "Supervised Learning... Supervised Me!", "https://gsoc2025.blogspot.com/2025/02/supervised-learning-supervised-me.html"],
  ["2025-02-28", "Neural Nets & TensorFlow – Entering the Matrix?", "https://gsoc2025.blogspot.com/2025/02/neural-nets-tensorflow-entering-matrix.html"],
  ["2025-03-01", "Projects are LIVE! DeepLense & LSST", "https://gsoc2025.blogspot.com/2025/03/projects-are-live-deeplense-lsst.html"],
  ["2025-03-04", "Understanding LSST & DeepLense", "https://gsoc2025.blogspot.com/2025/03/understanding-lsst-deeplense.html"],
  ["2025-03-08", "Environment Setup Shenanigans", "https://gsoc2025.blogspot.com/2025/03/environment-setup-shenanigans.html"],
  ["2025-03-12", "Deep Dive into Deep Learning (Literally)", "https://gsoc2025.blogspot.com/2025/03/deep-dive-into-deep-learning-literally.html"],
  ["2025-03-16", "CNNs - Seeing the Light (or Lens?)", "https://gsoc2025.blogspot.com/2025/03/cnns-seeing-light-or-lens.html"],
  ["2025-03-20", "The LSST Butler", "https://gsoc2025.blogspot.com/2025/03/the-lsst-butler.html"],
  ["2025-03-25", "Test Time! Task 1", "https://gsoc2025.blogspot.com/2025/03/test-time-task-1.html"],
  ["2025-03-28", "ConvNeXt V2 Seems to Work! (Task 1)", "https://gsoc2025.blogspot.com/2025/03/convnext-v2-seems-to-work-task-1.html"],
  ["2025-03-29", "Task 2: Lens Finding", "https://gsoc2025.blogspot.com/2025/03/task-2-lens-finding.html"],
  ["2025-04-01", "Tests Submitted!", "https://gsoc2025.blogspot.com/2025/04/tests-submitted.html"],
  ["2025-04-04", "Proposal Mode: Activated", "https://gsoc2025.blogspot.com/2025/04/proposal-mode-activated.html"],
  ["2025-04-08", "Proposal Sent! The Waiting Game Begins...", "https://gsoc2025.blogspot.com/2025/04/proposal-sent-waiting-game-begins.html"],
  ["2025-05-09", "Damn couldn't believe I got in again.", "https://gsoc2025.blogspot.com/2025/05/damn-couldnt-believe-i-got-in-again.html"],
  ["2025-05-15", "My First Foray into the Butler Repository", "https://gsoc2025.blogspot.com/2025/05/my-first-foray-into-butler-repository.html"],
  ["2025-05-19", "The Great LSST Stack Update", "https://gsoc2025.blogspot.com/2025/05/the-great-lsst-stack-update.html"],
  ["2025-05-28", "My Brain Hurts", "https://gsoc2025.blogspot.com/2025/05/my-brain-hurts.html"],
  ["2025-06-01", "Phase 0 Complete! (Finally)", "https://gsoc2025.blogspot.com/2025/06/phase-0-complete-finally.html"],
  ["2025-06-05", "The LsstDataFetcher Awakens", "https://gsoc2025.blogspot.com/2025/06/the-lsstdatafetcher-awakens.html"],
  ["2025-06-10", "Down the Error Handling Rabbit Hole", "https://gsoc2025.blogspot.com/2025/06/down-error-handling-rabbit-hole.html"],
  ["2025-06-14", "The Subtle Art of Chugging Coffee", "https://gsoc2025.blogspot.com/2025/06/the-subtle-art-of-chugging-coffee.html"],
  ["2025-06-18", "Cache Me If You Can", "https://gsoc2025.blogspot.com/2025/06/cache-me-if-you-can.html"],
  ["2025-06-25", "Batch Processing", "https://gsoc2025.blogspot.com/2025/06/batch-processing.html"],
  ["2025-06-30", "Multi-Band Synchronization", "https://gsoc2025.blogspot.com/2025/06/multi-band-synchronization.html"],
  ["2025-07-05", "Obsession with Quality Control", "https://gsoc2025.blogspot.com/2025/07/obsession-with-quality-control.html"],
  ["2025-07-10", "If You Can't Measure It, You Can't Improve It", "https://gsoc2025.blogspot.com/2025/07/if-you-cant-measure-it-you-cant-improve.html"],
  ["2025-07-13", "Diving into Preprocessing", "https://gsoc2025.blogspot.com/2025/07/diving-into-preprocessing.html"],
  ["2025-07-16", "Welcome to PSF Hell", "https://gsoc2025.blogspot.com/2025/07/welcome-to-psf-hell.html"],
  ["2025-07-21", "The Normalization Nightmare", "https://gsoc2025.blogspot.com/2025/07/the-normalization-nightmare.html"],
  ["2025-07-29", "RIPPLe: Building a Bridge Between LSST and DeepLense", "https://gsoc2025.blogspot.com/2025/07/ripple-building-bridge-between-lsst-and.html"],
  ["2025-08-04", "Returning to the Code with a Fresh Perspective", "https://gsoc2025.blogspot.com/2025/08/returning-to-code-with-fresh-perspective.html"],
  ["2025-08-11", "Engineering a Flexible Model Interface", "https://gsoc2025.blogspot.com/2025/08/engineering-flexible-model-interface.html"],
  ["2025-08-18", "Milestone Achieved: First End-to-End Pipeline Run", "https://gsoc2025.blogspot.com/2025/08/milestone-achieved-first-end-to-end.html"],
  ["2025-08-25", "The Scalability Challenge: From a Single Image to a Mock Survey", "https://gsoc2025.blogspot.com/2025/08/the-scalability-challenge-from-single.html"],
  ["2025-09-02", "Profiling the Pipeline and Hunting for Bottlenecks", "https://gsoc2025.blogspot.com/2025/09/profiling-pipeline-and-hunting-for.html"],
  ["2025-09-09", "Implementing a Parallel Processing Workflow", "https://gsoc2025.blogspot.com/2025/09/implementing-parallel-processing.html"],
  ["2025-09-14", "Decoupling Configuration from Code with YAML", "https://gsoc2025.blogspot.com/2025/09/decoupling-configuration-from-code-with.html"],
  ["2025-09-22", "The Final Frontier: Documentation and Usability", "https://gsoc2025.blogspot.com/2025/09/the-final-frontier-documentation-and.html"],
  ["2025-09-26", "Finalizing the Pipeline: Testing and Refinements", "https://gsoc2025.blogspot.com/2025/09/finalizing-pipeline-testing-and.html"],
  ["2025-09-29", "GSoC 2025: Final Submission and a Look Ahead", "https://gsoc2025.blogspot.com/2025/09/gsoc-2025-final-submission-and-look.html"]
];

const archive = document.querySelector('[data-blog-archive]');
const filterRoot = document.querySelector('[data-blog-filters]');
const searchInput = document.querySelector('[data-blog-search]');
const emptyState = document.querySelector('[data-blog-empty]');
const seriesList = document.querySelector('[data-series-list]');
let activeYear = 'all';

const dateLabel = value => {
  if (!value || /^\d{4}$/.test(value)) return value || '';
  const parts = value.split('-').map(Number);
  if (parts.length === 2) return new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(Date.UTC(parts[0], parts[1] - 1, 1)));
  return new Intl.DateTimeFormat('en', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`));
};

const postMarkup = post => `
  <a class="blog-entry" href="${post.url}" target="_blank" rel="noreferrer">
    <div class="blog-entry-meta"><span>${post.author}</span><time datetime="${post.date}">${dateLabel(post.date)}</time></div>
    <h3>${post.title}</h3>
    <div class="blog-entry-foot"><span>${post.platform} · ${post.type}</span><span aria-hidden="true">↗</span></div>
  </a>`;

function renderArchive() {
  if (!archive) return;
  const query = (searchInput?.value || '').trim().toLowerCase();
  const filtered = blogPosts.filter(post => {
    const inYear = activeYear === 'all' || post.year === Number(activeYear);
    const searchable = `${post.title} ${post.author} ${post.platform}`.toLowerCase();
    return inYear && searchable.includes(query);
  });
  const grouped = filtered.reduce((years, post) => {
    (years[post.year] ||= []).push(post);
    return years;
  }, {});
  archive.innerHTML = Object.keys(grouped).sort((a, b) => b - a).map(year => `
    <section class="blog-year" aria-labelledby="blog-year-${year}">
      <div class="blog-year-heading"><h3 id="blog-year-${year}">${year}</h3><span>${grouped[year].length} ${grouped[year].length === 1 ? 'entry' : 'entries'}</span></div>
      <div class="blog-grid">${grouped[year].map(postMarkup).join('')}</div>
    </section>`).join('');
  if (emptyState) emptyState.hidden = filtered.length > 0;
}

if (filterRoot) {
  const years = [...new Set(blogPosts.map(post => post.year))].sort((a, b) => b - a);
  filterRoot.innerHTML = ['all', ...years].map(year => `<button class="filter-chip${year === 'all' ? ' active' : ''}" type="button" data-blog-year="${year}">${year === 'all' ? 'All years' : year}</button>`).join('');
  filterRoot.addEventListener('click', event => {
    const button = event.target.closest('[data-blog-year]');
    if (!button) return;
    activeYear = button.dataset.blogYear;
    filterRoot.querySelectorAll('[data-blog-year]').forEach(item => item.classList.toggle('active', item === button));
    renderArchive();
  });
}

searchInput?.addEventListener('input', renderArchive);

if (seriesList) {
  seriesList.innerHTML = kartikSeries.map(([date, title, url], index) => `
    <li><span>${String(index + 1).padStart(2, '0')}</span><a href="${url}" target="_blank" rel="noreferrer"><strong>${title}</strong><time datetime="${date}">${dateLabel(date)}</time><i aria-hidden="true">↗</i></a></li>`).join('');
}

renderArchive();
