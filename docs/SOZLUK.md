# Sözlük

**Bu dosya ne için?** Kodun içinde karşına çıkacak İngilizce/teknik terimleri tek cümlelik sade açıklamalarla anlatır. Her terimin altında bu projeden gerçek bir örnek satır var — soyut kalmasın diye.

Terimler HTML, CSS ve JS (JavaScript) olmak üzere üç grupta. Bir kelimenin ne anlama geldiğini unutursan buraya dön, Ctrl+F ile terimi ara.

---

## HTML terimleri

HTML, sayfanın **yapısını ve metnini** oluşturan dildir — `index.html` dosyasının tamamı HTML'dir.

### Etiket (tag)
Köşeli parantezle (`< >`) yazılan, bir parçanın ne olduğunu belirten işaret. Genelde bir açılışı (`<h1>`) bir de kapanışı (`</h1>`) olur, arasındaki her şey o etikete aittir.

BU PROJEDEN:
```html
<h1 class="reveal">Direksiyona<br>güvenle <span class="hl">geç.</span></h1>
```
Burada `h1`, `br` ve `span` birer etikettir.

### Öznitelik (attribute)
Bir etiketin açılışında, etiket adının yanında `isim="değer"` şeklinde yazılan ek bilgi. Etikete "nasıl davranacağını" veya "neyle ilişkili olduğunu" söyler.

BU PROJEDEN:
```html
<div class="csign reveal" data-veh="moto">
```
`class="csign reveal"` ve `data-veh="moto"` birer özniteliktir.

### div
Hiçbir özel anlamı olmayan, sadece bir alanı gruplamaya yarayan genel amaçlı bir kutu etiketi. Sayfada görünmez, sadece içindeki şeyleri bir arada tutar (stil vermek veya konumlandırmak için kullanılır).

BU PROJEDEN:
```html
<div class="hero-media" aria-hidden="true">
```

### section (bölüm)
Sayfanın anlamlı, bağımsız bir bölümünü işaretleyen etiket — bu projede her ana bölüm (Hero, Quiz, SSS vb.) bir `<section>` ile sarılı.

BU PROJEDEN:
```html
<section class="sec" id="siniflar">
```

### class
Bir etikete verilen, CSS'in ve JS'in "bu görünümü/davranışı bu etikete uygula" diyebilmesi için kullandığı etiket. Aynı class'ı birden fazla etikete verebilirsin — hepsi aynı stili paylaşır.

BU PROJEDEN:
```html
<a class="btn ghost" href="#siniflar">Sınıfları İncele</a>
```
Burada `btn` ve `ghost` iki ayrı class'tır (bir etiket birden fazla class alabilir, aralarına boşluk konur).

### id
Bir etikete verilen, sayfada **tek ve eşsiz** olması gereken isim. CSS `#isim` şeklinde, JS `getElementById('isim')` şeklinde, HTML linkleri de `#isim` şeklinde bu etikete referans verir.

BU PROJEDEN:
```html
<div class="qresult" id="qresult">
```
Menüdeki `<a class="lk" href="#test">Hangi Ehliyet?</a>` linki, `id="test"` olan bölüme atlar.

### details / summary (açılır/kapanır kutu, "accordion")
Tarayıcının kendi başına, hiç JS kodu gerektirmeden sunduğu bir "aç/kapa" yapısı. `<summary>` içindeki yazı her zaman görünür ve tıklanabilir; `<details>` etiketinin geri kalan içeriği, kullanıcı `<summary>`'ye tıklayana kadar gizli kalır. Bu sitede SSS, quiz'in "3 soruda söyleyelim →" tetikleyicisi ve Süreç bölümündeki "Gerekli belgeler" listesi hep bu yapıyla açılıp kapanıyor.

BU PROJEDEN:
```html
<details class="fq">
  <summary>Ehliyet almak ne kadar sürer?</summary>
  <div class="fqin"><p>Süreç genelde 1,5 – 2 ay arasında tamamlanır. ...</p></div>
</details>
```
Kullanıcı "Ehliyet almak ne kadar sürer?" yazısına tıklayana kadar `<div class="fqin">` içindeki cevap gizlidir. `open` özniteliği eklenirse (`<details open>`), kutu sayfa yüklenirken zaten açık başlar — bu sitede `js/utils.js`, nav'daki "Hangi Ehliyet?" linkine tıklanınca quiz'in `<details>`'ına tam olarak bu `open` özniteliğini JS ile ekliyor.

### Yorum satırı (comment)
Tarayıcının/kodun görmezden geldiği, sadece insanların okuması için yazılan not. HTML'de `<!-- ... -->` arasına yazılır.

BU PROJEDEN:
```html
<!-- ===== HERO BÖLÜMÜ | stil: css/10-hero.css | script: js/gauge.js ===== -->
```

---

## CSS terimleri

CSS, sayfanın **görünümünü** (renk, boyut, boşluk, mobil uyum) belirleyen dildir — `css/` klasöründeki her dosya CSS'tir.

### Seçici (selector)
Bir CSS kuralının en başında, "bu stili hangi etiketlere uygulayacağım" diyen kısım. Nokta ile başlarsa class'ı, `#` ile başlarsa id'yi, hiçbir işaret yoksa doğrudan etiket adını hedefler.

BU PROJEDEN:
```css
.btn:hover{background:var(--signal-2);transform:translateY(-2px)}
```
`.btn:hover` kısmı seçicidir — ".btn class'ı olan bir şeyin üzerine fare gelince" demektir.

### Sözde sınıf (pseudo-class)
Bir seçiciye eklenen, "belirli bir durumda" anlamına gelen `:isim` uzantısı. En sık kullanılanı `:hover` (fare üzerine gelince).

BU PROJEDEN:
```css
.nav-links a.lk:hover::after{width:100%}
```
`:hover` — fareyle üzerine gelindiğinde.

### Sözde öğe (pseudo-element)
Bir seçiciye eklenen, o etiketin içine gerçekte var olmayan sahte bir parça (genelde küçük bir süsleme) ekleyen `::isim` uzantısı.

BU PROJEDEN:
```css
.eyebrow::before{content:"";width:26px;height:2px;background:var(--signal)}
```
`::before` — eyebrow yazısının önüne, koddan görünmeyen küçük bir çizgi ekler.

### CSS değişkeni / custom property (`--isim`, `var()`)
Bir değeri (genelde bir rengi) tek bir yerde tanımlayıp, sitenin her yerinde o isimle çağırma yöntemi. Bu sitede tüm değişkenler `css/00-degiskenler.css` dosyasında tanımlı.

BU PROJEDEN:
```css
--signal:#FFB300;
```
tanımı, sitenin her yerinde şöyle **çağrılır**:
```css
background:var(--signal-2);
```

### Flexbox
Öğeleri yan yana veya alt alta, aralarında eşit boşluk bırakarak, ortalayarak vb. dizmeye yarayan bir CSS düzeni. `display:flex` ile başlar.

BU PROJEDEN:
```css
.hero-actions{display:flex;flex-wrap:wrap;gap:14px;align-items:center}
```
Bu kural, "Kayıt Ol" ve "Sınıfları İncele" butonlarını yan yana, aralarında 14px boşlukla dizer.

### Grid
Öğeleri satır ve sütunlardan oluşan bir tabloya benzer şekilde dizmeye yarayan CSS düzeni. `display:grid` ile başlar.

BU PROJEDEN:
```css
.kadro-photos{display:grid;grid-template-columns:1fr 1fr;gap:14px}
```
Bu kural, Kadro & Filo bölümündeki iki fotoğrafı **yan yana, 2 eşit sütuna** böler.

### @media (medya sorgusu)
"Ekran şu genişlikten küçükse/büyükse bu kuralları uygula" diyen bir CSS bloğu — mobil uyumluluğun (responsive tasarım) temelidir.

BU PROJEDEN:
```css
@media(max-width:900px){
  .hero-grid{grid-template-columns:1fr}
  .gauge{max-width:340px}
}
```
Ekran 900 pikselden dar olduğunda (telefon/tablet), hero bölümü tek sütuna döner.

### @keyframes (animasyon adımları)
Bir animasyonun başlangıç ve bitiş (veya ara) durumlarını tanımlayan CSS bloğu. Sonra bu isim, `animation` özelliğiyle bir etikete bağlanır.

BU PROJEDEN:
```css
@keyframes scroll{to{transform:translateX(-50%)}}
```
Bu, kayan yazı şeridinin (marquee) sürekli sola kaymasını sağlayan animasyonun tanımıdır.

### Göreli yol (relative path)
Bir dosyanın, başka bir dosyaya göre "nerede olduğunu" tarif eden adres. `./` "bulunduğum klasör", `../` "bir üst klasör" anlamına gelir.

BU PROJEDEN:
```html
<link rel="stylesheet" href="./css/00-degiskenler.css">
```
```css
.hero-media{background:url('../assets/img/a-poster.jpg') center/cover no-repeat}
```
İkinci örnekte `../` kullanılıyor çünkü bu kural `css/` klasöründeki bir dosyada yazılı, oradan `assets/` klasörüne ulaşmak için bir üst klasöre çıkması gerekiyor.

---

## JavaScript (JS) terimleri

JavaScript, sayfaya **davranış/hareket** (tıklama, animasyon, hesaplama) katan dildir — `js/` klasöründeki her dosya JavaScript'tir.

### const / let
İkisi de bir bilgiyi (sayı, yazı, sonuç vb.) bir isimle saklamaya yarar ("değişken tanımlama" denir). `const` ile sakladığın bilgi bir daha **değiştirilemez**, `let` ile saklanan değiştirilebilir.

BU PROJEDEN:
```js
const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```
```js
let idx=0;
```
`reduce` bir daha değişmeyecek bir bilgi (kullanıcının animasyon tercihi), `idx` ise quiz ilerledikçe değişen soru sırası.

### function (fonksiyon)
Belirli bir işi yapan, tekrar tekrar çağrılabilen bir kod bloğu. Aynı işi her yerde yeniden yazmak yerine, bir kere tanımlayıp ismiyle çağırırsın.

BU PROJEDEN:
```js
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
```

### Ok fonksiyonu (arrow function)
Fonksiyon yazmanın daha kısa bir yolu, `=>` ("ok") işaretiyle yazılır. Genelde küçük, tek seferlik işler için kullanılır.

BU PROJEDEN:
```js
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
```
`el=>io.observe(el)` kısmı bir ok fonksiyonudur: "her `el` için `io.observe(el)` çalıştır" demektir.

### Olay dinleyici (event listener)
"Şu etikete tıklanınca / fare üzerine gelince / bir şey değişince şu kodu çalıştır" demeye yarayan bağlantı. `addEventListener` ile kurulur.

BU PROJEDEN:
```js
b.addEventListener('click',()=>{
  const open=links.classList.toggle('open');
  b.setAttribute('aria-expanded',open);
});
```
Bu kod, hamburger menü butonuna (`b`) tıklanınca menüyü açar/kapatır.

### querySelector / querySelectorAll
Sayfada, CSS'teki gibi bir seçici (`.class`, `#id`) yazarak o etiket(ler)i bulmaya yarayan komut. `querySelector` **ilk eşleşeni**, `querySelectorAll` **hepsini** bulur.

BU PROJEDEN:
```js
const box=document.querySelector('.quiz-box');
```
```js
box.querySelectorAll('.qopt').forEach(b=>{
  b.addEventListener('click',()=>{
    ans[b.dataset.key]=b.dataset.val;
    idx++;
    show(idx);
  });
});
```

### classList (ve `.toggle`)
Bir etiketin class'larını JS'ten okuma/ekleme/çıkarma yolu. `.toggle('isim')`, o class varsa siler, yoksa ekler — açma/kapama düğmesi gibi çalışır.

BU PROJEDEN:
```js
const open=links.classList.toggle('open');
```
Menü kapalıyken bu satır çalışınca `open` class'ı eklenir (menü açılır); tekrar çalışınca silinir (menü kapanır).

### dataset
Bir etiketin `data-isim="değer"` şeklindeki özniteliklerini JS'ten okuma yolu. HTML'deki `data-count="30"`, JS'te `.dataset.count` olarak okunur.

BU PROJEDEN:
```js
ans[b.dataset.key]=b.dataset.val;
```
Bu satır, tıklanan quiz seçeneğinin (`b`) `data-key` ve `data-val` özniteliklerini okuyup verilen cevabı kaydeder.

### Üçlü operatör (ternary operator)
Tek satırda yazılan kısa bir "eğer-öyleyse-değilse" (if/else) yapısı: `koşul ? koşul-doğruysa : koşul-yanlışsa`.

BU PROJEDEN:
```js
code=oto?'A1 Otomatik':'A1';
```
"Eğer `oto` doğruysa `code`'a `'A1 Otomatik'` yaz, değilse `'A1'` yaz" demektir.

### IntersectionObserver
Bir öğenin **ekranda görünür olup olmadığını** takip eden bir tarayıcı aracı. Bu sitede, bir bölüm ekrana girdiğinde animasyonu (belirme efekti, sayaç, gösterge) başlatmak için kullanılıyor.

BU PROJEDEN:
```js
const io=new IntersectionObserver((es)=>{
  es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})
},{threshold:0.12});
```
Bu kod, `.reveal` class'lı bir öğe ekranın %12'si kadar görününce ona `in` class'ını ekleyip belirmesini sağlar.

### defer
Bir `<script>` etiketine eklenen, "bu dosyayı indir ama sayfanın geri kalanı okunup bitene kadar çalıştırma" diyen öznitelik. Sayfanın yavaş açılmasını engeller.

BU PROJEDEN:
```html
<script defer src="./js/menu.js"></script>
```

---

## Ekstra: sık geçen kısaltmalar

- **HTML** — HyperText Markup Language: sayfanın yapısını/metnini oluşturan dil.
- **CSS** — Cascading Style Sheets: sayfanın görünümünü belirleyen dil.
- **JS** — JavaScript: sayfaya davranış katan dil.
- **SVG** — vektörel (bulanıklaşmadan büyüyüp küçülebilen) bir görsel formatı; bu sitede logo ve ikonlar (telefon, WhatsApp, konum simgesi vb.) SVG olarak yazılı.
- **URL** — bir web adresi (örn. `https://wa.me/905523650266`).
- **SEO** — arama motoru optimizasyonu; `<meta name="description">` ve JSON-LD gibi görünmez etiketler, Google'ın siteyi doğru anlaması için var.
