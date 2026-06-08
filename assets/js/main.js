document.addEventListener('DOMContentLoaded', () => {
  const mobileMenu = document.getElementById('mobile-menu');
  const hamburger = document.querySelector('.hamburger');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
  }
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
  const pathname = window.location.pathname.split('/').pop();
  const mapping = {
    '': 'nav-home',
    'index.html': 'nav-home',
    'projects.html': 'nav-projects',
    'instarecipe.html': 'nav-projects',
    'codexia.html': 'nav-projects',
    'phishing-email-detector.html': 'nav-projects'
  };
  const activeId = mapping[pathname];
  if (activeId) {
    document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
    const activeLink = document.getElementById(activeId);
    if (activeLink) activeLink.classList.add('active');
  }
  initFadeIns();
  initCodexiaVideoToggle();
});
function initCodexiaVideoToggle() {
  const toggleBtn = document.getElementById('codexia-toggle-video');
  const videoLabel = document.getElementById('codexia-video-label');
  const videoElement = document.getElementById('codexia-feature-video');
  if (!toggleBtn || !videoElement || !videoLabel) return;

  const videos = [
    {
      src: 'assets/gallery/NonAI-Codexia.mp4',
      label: 'Non-AI Features'
    },
    {
      src: 'assets/gallery/AI-Codexia.mp4',
      label: 'AI Features'
    }
  ];
  let activeIndex = 0;

  const updateVideo = () => {
    const current = videos[activeIndex];
    videoElement.pause();
    videoElement.src = current.src;
    videoElement.load();
    videoLabel.textContent = current.label;
    toggleBtn.classList.toggle('rotate', activeIndex === 1);
  };

  toggleBtn.addEventListener('click', () => {
    activeIndex = activeIndex === 0 ? 1 : 0;
    updateVideo();
  });
}
function initFadeIns() {
  const els = document.querySelectorAll('.fade-in');
  els.forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), i * 120);
  });
}
