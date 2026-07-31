// Bu dosya "Hangi ehliyet sana uygun?" quiz bölümünün adım/karar mantığını kontrol eder.
  // ---- QUIZ ----
  (function(){
    const box=document.querySelector('.quiz-box');
    if(!box)return;
    const steps=[...box.querySelectorAll('.qstep')];
    const result=box.querySelector('#qresult');
    const bar=box.querySelector('#qbar');
    const ans={};
    let idx=0;

    function show(i){
      steps.forEach(s=>s.classList.remove('active'));
      result.classList.remove('active');
      if(i<steps.length){steps[i].classList.add('active');bar.style.width=((i)/steps.length*100)+'%';}
      else{result.classList.add('active');bar.style.width='100%';decide();}
    }

    function decide(){
      const a=parseInt(ans.age,10), v=ans.veh, g=ans.gear;
      const oto = g==='oto';
      let code='B', title='', desc='', note='';

      if(v==='moto'){
        if(a<18){code=oto?'A1 Otomatik':'A1';title='A1 ile başla';
          desc='16 yaşında alabileceğin motosiklet ehliyeti. 125 cc\'ye kadar hafif motosikletler için. Şehir içi kullanımda ideal bir başlangıç.';
          note='İki şubemizde de var. 18 yaşını doldurunca A2\'ye yükseltebilirsin.';}
        else if(a<24){code=oto?'A2 Otomatik':'A2';title='A2 sana uygun';
          desc='18 yaşından itibaren alabileceğin orta sınıf motosiklet ehliyeti. Daha güçlü motosikletlere geçiş için doğru adım.';
          note='A2 ehliyetini aldıktan 2 yıl sonra, 20 yaşını doldurmuşsan A sınıfına yükselebilirsin. İki şubemizde de mevcut.';}
        else{code='A';title='Doğrudan A alabilirsin';
          desc='24 yaşını doldurduğun için sınırsız motosiklet ehliyeti olan A sınıfına doğrudan başvurabilirsin. Güç sınırı olmadan tüm motosikletleri kullanabilirsin.';
          note='Dilersen A2 ile başlayıp kademeli de ilerleyebilirsin. İki şubemizde de mevcut.';}
      }
      else if(v==='oto'){
        if(a<18){code='B';title='Biraz beklemen gerek';
          desc='Otomobil ehliyeti olan B sınıfı için 18 yaşını doldurmuş olman gerekiyor. Ama şimdiden A1 motosiklet ehliyetini alabilirsin.';
          note='18\'ini doldurduğunda seni bekliyoruz. O zamana kadar A1 ile başlamak istersen bize ulaş.';}
        else{code=oto?'B Otomatik':'B';title='B sınıfı senin sınıfın';
          desc=oto
            ? 'En çok tercih edilen otomobil ehliyeti, otomatik vitesli olarak. Vites derdi olmadan sadece trafiğe ve sürüşe odaklanırsın.'
            : 'En çok tercih edilen otomobil ehliyeti. Manuel vites, her araca binebilmen anlamına gelir.';
          note=oto
            ? 'Not: Otomatik alınan ehliyetle manuel araç kullanılamaz. Her ikisini de kullanmak istersen manuel tercih etmelisin. İki şubemizde de mevcut.'
            : 'Manuel ehliyetle hem manuel hem otomatik araç kullanabilirsin. İki şubemizde de mevcut.';}
      }
      else{
        if(a<21){code='C / CE';title='Önce B, sonra C';
          desc='Kamyon ve tır ehliyeti için 21 yaşını doldurmuş olman ve en az 2 yıllık B sınıfı ehliyetin bulunması gerekiyor.';
          note='Şimdi B sınıfıyla başlarsan, 21 yaşında C sınıfına geçmeye hazır olursun. Planlamayı birlikte yapalım.';}
        else{code='C / CE';title='Ağır vasıta yolun açık';
          desc='21 yaşını doldurduysan ve en az 2 yıllık B sınıfı ehliyetin varsa, kamyon için C, römorklu ağır vasıta için CE sınıfına başvurabilirsin.';
          note='C ve CE sınıfları yalnızca Korkuteli şubemizde veriliyor. Detaylar için Korkuteli\'ni arayabilirsin.';}
      }

      box.querySelector('#qbadge').textContent=code;
      box.querySelector('#qtitle').textContent=title;
      box.querySelector('#qdesc').textContent=desc;
      box.querySelector('#qnote').textContent=note;
    }

    box.querySelectorAll('.qopt').forEach(b=>{
      b.addEventListener('click',()=>{
        ans[b.dataset.key]=b.dataset.val;
        idx++;
        show(idx);
      });
    });

    box.querySelector('#qreset').addEventListener('click',()=>{
      idx=0;
      show(0);
      box.scrollIntoView({behavior:reduce?'auto':'smooth',block:'center'});
    });

    show(0);
  })();
