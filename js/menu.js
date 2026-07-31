// Bu dosya üst menüdeki mobil hamburger butonunu ve menünün açılıp kapanmasını kontrol eder.
  const links=document.getElementById('navlinks');
  [document.getElementById('burger'),document.getElementById('burger2')].forEach(b=>{
    if(!b)return;
    b.addEventListener('click',()=>{
      const open=links.classList.toggle('open');
      b.setAttribute('aria-expanded',open);
    });
  });
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
