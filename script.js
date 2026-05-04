const revealItems = document.querySelectorAll('.flavour-card, .why-card, .scan-card, .contact-box');
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
},{threshold:.16});
revealItems.forEach(item=>{
  item.style.opacity='0';
  item.style.transform='translateY(28px)';
  item.style.transition='opacity .55s ease, transform .55s ease';
  observer.observe(item);
});
const style=document.createElement('style');
style.innerHTML='.visible{opacity:1!important;transform:translateY(0)!important}';
document.head.appendChild(style);
