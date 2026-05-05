const revealItems = document.querySelectorAll('.flavour-card, .benefit-card, .scan-card, .contact-box');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

revealItems.forEach((item) => {
  item.classList.add('reveal');
  observer.observe(item);
});
