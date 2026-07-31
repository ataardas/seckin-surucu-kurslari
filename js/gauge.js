// Bu dosya HERO bölümündeki sınav başarı oranı göstergesinin (gauge) animasyonunu kontrol eder.
  // gauge (placeholder value — swap with real satisfaction/pass rate)
  const GAUGE_VALUE=95.64;
  const gaugeObs=new IntersectionObserver((es)=>{
    es.forEach(e=>{
      if(e.isIntersecting){
        const arc=document.getElementById('arc');
        const gval=document.getElementById('gval');
        const total=251;
        if(reduce){arc.style.strokeDashoffset=total-(total*GAUGE_VALUE/100);gval.textContent=GAUGE_VALUE.toFixed(2).replace('.',',');}
        else{
          arc.style.transition='stroke-dashoffset 1.6s cubic-bezier(.2,.8,.2,1)';
          requestAnimationFrame(()=>{arc.style.strokeDashoffset=total-(total*GAUGE_VALUE/100);});
          const st=performance.now();
          (function tk(now){
            const p=Math.min((now-st)/1600,1);
            const e=1-Math.pow(1-p,3);
            gval.textContent=(GAUGE_VALUE*e).toFixed(2).replace('.',',');
            if(p<1)requestAnimationFrame(tk);
          })(st);
        }
        gaugeObs.disconnect();
      }
    });
  },{threshold:0.4});
  const gEl=document.querySelector('.gauge');
  if(gEl)gaugeObs.observe(gEl);
