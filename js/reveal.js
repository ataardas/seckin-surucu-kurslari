// Bu dosya sayfa kaydırıldıkça ".reveal" sınıflı öğelerin görünür hale gelmesini (scroll reveal) kontrol eder.
  const io=new IntersectionObserver((es)=>{
    es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})
  },{threshold:0.12});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
