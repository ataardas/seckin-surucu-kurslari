// Bu dosya diğer scriptlerin ortak kullandığı yardımcıları kontrol eder: azaltılmış hareket tercihi ve sayı animasyon fonksiyonu.
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // gauge + counters animate once visible
  function animate(el,to,suffix,dur,isYear){
    if(reduce){el.textContent=to+(suffix||'');return;}
    const start=performance.now();
    function tick(now){
      const p=Math.min((now-start)/dur,1);
      const eased=1-Math.pow(1-p,3);
      let val=Math.round(to*eased);
      if(isYear) val=Math.round(1900+(to-1900)*eased);
      el.textContent=val.toLocaleString('tr-TR')+(suffix||'');
      if(p<1)requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
