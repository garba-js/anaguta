  document.getElementById('yr').textContent = new Date().getFullYear();
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 60));
  document.getElementById('hamburger').addEventListener('click', () => document.getElementById('mobileMenu').classList.toggle('open'));
  function closeMobile() { document.getElementById('mobileMenu').classList.remove('open'); }
  const observer = new IntersectionObserver(entries => {
    entries.forEach((e,i) => { if(e.isIntersecting){ setTimeout(()=>e.target.classList.add('visible'),i*80); observer.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
