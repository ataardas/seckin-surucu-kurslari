// Bu dosya "Sayılar konuşuyor" bölümündeki sayaç (istatistik) animasyonunu kontrol eder.
  const statObs=new IntersectionObserver((es)=>{
    es.forEach(e=>{
      if(e.isIntersecting){
        const el=e.target;
        const to=parseInt(el.dataset.count,10);
        const small=el.querySelector('small');
        const suffix=small?small.outerHTML:'';
        const isYear=to>1900&&to<2100;
        if(reduce){el.innerHTML=(isYear?String(to):to.toLocaleString('tr-TR'))+suffix;}
        else{
          const start=performance.now();
          (function tick(now){
            const p=Math.min((now-start)/1500,1);
            const eased=1-Math.pow(1-p,3);
            let v=isYear?Math.round(1900+(to-1900)*eased):Math.round(to*eased);
            el.innerHTML=(isYear?String(v):v.toLocaleString('tr-TR'))+suffix;
            if(p<1)requestAnimationFrame(tick);
          })(start);
        }
        statObs.unobserve(el);
      }
    });
  },{threshold:0.5});
  document.querySelectorAll('.stat .snum').forEach(el=>statObs.observe(el));
