# Nasıl Değiştiririm?

**Bu dosya ne için?** En sık ihtiyaç duyacağın değişiklikleri (telefon güncelleme, SSS ekleme, renk değiştirme vb.) adım adım anlatır. Her işlem için hangi dosyayı açacağını, Ctrl+F ile ne arayacağını ve önce/sonra kod örneğini bulacaksın.

## Başlamadan önce 3 kural

1. **Değiştirmeden önce dosyayı kopyala.** (Bkz. ana `README.md` → "Değişiklik yapmadan önce ne yedeklemelisin".)
2. **Sadece görünen metni değiştir.** `<` ve `>` işaretleri arasındaki kelimelere (örn. `class="btn"`, `href="tel:..."`) dokunma — onlar kodun "iskeleti", bozulursa site çöker.
3. **Kaydet (Ctrl+S) ve tarayıcıda kontrol et.** Live Server açıksa otomatik yenilenir (bkz. `README.md`).

Her dosyada Ctrl+F ile arama yaparken: VS Code'da dosyayı aç, klavyeden **Ctrl+F**'e bas, aranacak kelimeyi yaz, Enter'a bas — imleç o kelimeye atlar.

---

## 1) Telefon / Adres / WhatsApp değiştirme

**Nerede:** `index.html`

⚠️ Önemli: aynı telefon numarası veya adres sitede **birden fazla yerde tekrar ediyor**. Sadece birini değiştirip diğerlerini unutursan, sitede iki farklı numara görünür. Örneğin Korkuteli'nin ana numarası (`0242 643 02 66`) şu 4 yerde geçiyor:

- Sayfanın en üstünde, görünmeyen `<head>` bölümündeki arama motoru bilgisi (JSON-LD — bkz. bu dosyanın sonundaki "SAKIN DOKUNMA")
- ŞUBELER bölümündeki Korkuteli kartı
- Sayfanın altındaki FOOTER
- CTA bölümündeki (Yola çıkmaya hazır mısın?) Korkuteli kartı

**Ctrl+F ile ara:** `0242 643 02 66` — çıkan her sonucu tek tek değiştir (VS Code arama kutusunda "◀ ▶" ok işaretleriyle bir sonrakine geçebilirsin).

Her telefon numarası **iki yerde** yazılıdır: görünen metin (`0242 643 02 66`) ve tıklanınca aranan gerçek numara (`href="tel:+902426430266"`, boşluksuz, başında ülke kodu `+90`). **İkisini de değiştirmen gerekir.**

Önce:
```html
<a class="ctab-phone" href="tel:+902426430266">0242 643 02 66</a>
```

Sonra (örnek yeni numara):
```html
<a class="ctab-phone" href="tel:+902429998877">0242 999 88 77</a>
```

**WhatsApp linki de aynı mantıkla iki parçalıdır** — görünen yazı genelde "WhatsApp" ya da telefon numarasıdır, gerçek numara `href="https://wa.me/905523650266"` içinde (yine boşluksuz, başında `90`, artı işareti YOK bu sefer):

Önce:
```html
<a class="wa-mini" href="https://wa.me/905523650266" target="_blank" rel="noopener" aria-label="0552 365 02 66 WhatsApp">
```

Sonra:
```html
<a class="wa-mini" href="https://wa.me/905321112233" target="_blank" rel="noopener" aria-label="0532 111 22 33 WhatsApp">
```
(Hem `wa.me/...` numarasını hem `aria-label` içindeki görünmeyen yardımcı metni hem de varsa yanındaki görünen yazıyı güncelle.)

**E-posta değiştirmek istersen:** Ctrl+F ile `korkuteliseckinmtsk@gmail.com` ara. Bu da birkaç yerde (ŞUBELER kartı, FOOTER, JSON-LD) tekrar eder. Görünen yazı ile `mailto:` içindeki adres birebir aynı olmalı:

Önce:
```html
<a class="bmail" href="mailto:korkuteliseckinmtsk@gmail.com">korkuteliseckinmtsk@gmail.com</a>
```

**Adres değiştirmek istersen:** Ctrl+F ile mevcut adresin bir parçasını ara, örn. `Kiremitli Mah.`. Bu da ŞUBELER kartında ve FOOTER'da düz metin olarak geçiyor, kolayca değiştirebilirsin:

Önce:
```html
<p class="baddr">...Kiremitli Mah. Antalya Cad. No 2/C, Korkuteli / Antalya</p>
```

⚠️ **Ama dikkat:** Şube kartındaki **harita** (haritanın kendisi, gri kutu değil gerçek Google Haritası) ve "Yol Tarifi Al" linki, adresi ayrıca **şifreli/kodlanmış bir web adresi** (URL) içinde tutuyor:

```html
<iframe class="bmapreal" ... src="https://maps.google.com/maps?q=Kiremitli%20Mahallesi%20Antalya%20Caddesi%20No%202%20Korkuteli%20Antalya&z=15&output=embed"></iframe>
```

Buradaki `%20` gibi işaretler boşluk anlamına gelir — bu satırı elle düzenlemek yerine, adres gerçekten değiştiyse şunu yap:
1. [Google Haritalar](https://www.google.com/maps)'a git, yeni adresi ara.
2. "Paylaş" → "Harita yerleştir" (Embed a map) seçeneğinden yeni `<iframe ...>` kodunu kopyala, buradaki eski `<iframe class="bmapreal" ...></iframe>` satırının tamamının yerine yapıştır (`class="bmapreal"` kısmını sil, o iframe kodunda olmayabilir, projedeki `class="bmapreal"` yazısını yeni kodun içine de eklemelisin ki görünüm bozulmasın).
3. "Yol Tarifi Al" linkindeki `href="https://www.google.com/maps/dir/?api=1&destination=..."` kısmını da, adresi Google Haritalar'da arayıp "Yol Tarifi" butonundan aldığın linkle değiştir.

---

## 2) Fiyat veya rakam güncelleme

Sitede şu an sabit bir **fiyat** gösterilmiyor (SSS'te "Taksitle ödeme yapabilir miyim?" sorusunun cevabı fiyat vermiyor, aramaya yönlendiriyor). Fiyat eklemek istersen, bu normal bir **metin düzenleme**dir — bkz. bu dosyanın 8. maddesi.

**İstatistik şeridindeki rakamları değiştirmek için** → `index.html`

Hero'nun hemen altındaki ince şerit ("30 araç · %95,64 başarı · 2 şube · 4000+ mezun") artık düz metin — sayaç animasyonu yok, sayı istersen doğrudan değiştirirsin. Ctrl+F ile ara: `4000+ mezun`

Önce:
```html
<span>30 araç</span><span class="sep">·</span><span>%95,64 başarı</span><span class="sep">·</span><span>2 şube</span><span class="sep">·</span><span>4000+ mezun</span>
```

Sonra (örnek):
```html
<span>35 araç</span><span class="sep">·</span><span>%95,64 başarı</span><span class="sep">·</span><span>2 şube</span><span class="sep">·</span><span>4500+ mezun</span>
```

Her `<span>...</span>` çifti arasındaki yazıyı istediğin gibi değiştirebilirsin, `<span class="sep">·</span>` olan aradaki nokta işaretlerine dokunma (onlar ayraç).

**Hero'daki "Sınav Başarısı %95,64" göstergesini değiştirmek için** → `js/gauge.js`

Ctrl+F ile ara: `GAUGE_VALUE`

Önce:
```js
const GAUGE_VALUE=95.64;
```

Sonra:
```js
const GAUGE_VALUE=97.2;
```

Not: Türkçe virgül değil, İngilizce nokta kullan (`97.2`, `97,2` değil) — kod bu şekilde okur, ekranda otomatik olarak Türkçe virgülle (`97,20`) gösterir.

Bu yüzdeyi değiştirdiysen, `index.html`'in en üstündeki arama motoru açıklamasında da aynı sayı geçiyor, onu da güncellemek iyi olur:

Ctrl+F ile ara: `başarı oranı` → şu satırı bulursun:
```html
<meta name="description" content="SEÇKİN Sürücü Kursları — Antalya Korkuteli ve Konyaaltı. A1, A2, A, B, C, CE ehliyet sınıfları ve ehliyeti olanlara özel direksiyon dersleri. 30 araçlık filo, %95,64 başarı oranı.">
```
Bu düz metin, içindeki `%95,64` ve `30` yazılarını değiştirmen yeterli.

---

## 3) Yeni SSS ekleme

**Nerede:** `index.html`, SSS bölümü.

Ctrl+F ile ara: `Derslere gelemediğim gün olursa ne olur?` (şu anki son soru). Bu sorunun kapanışını (`</details>`) bulacaksın:

```html
      <details class="fq">
        <summary>Derslere gelemediğim gün olursa ne olur?</summary>
        <div class="fqin"><p>Direksiyon derslerini müsaitliğine göre planlıyoruz. Bir aksilik olursa önceden haber vermen yeterli, dersini başka bir güne alıyoruz. Teorik derslerde ise devam zorunluluğu bulunuyor.</p></div>
      </details>
```

Bu bloğun **hemen altına**, yeni sorunu aynı kalıpla ekle:

```html
      <details class="fq">
        <summary>Derslere gelemediğim gün olursa ne olur?</summary>
        <div class="fqin"><p>Direksiyon derslerini müsaitliğine göre planlıyoruz. Bir aksilik olursa önceden haber vermen yeterli, dersini başka bir güne alıyoruz. Teorik derslerde ise devam zorunluluğu bulunuyor.</p></div>
      </details>

      <details class="fq">
        <summary>Buraya yeni sorunu yaz</summary>
        <div class="fqin"><p>Buraya cevabını yaz.</p></div>
      </details>
```

Kurallar:
- `<summary>...</summary>` içine **soru**, `<div class="fqin"><p>...</p></div>` içine **cevap** yaz.
- Her `<details class="fq">` bir `</details>` ile kapanmalı — birini eklerken diğerini silme.
- Cevap içinde bir kelimeyi kalın yapmak istersen `<strong>böyle</strong>` şeklinde sarmalayabilirsin (mevcut sorularda örnekleri var, örn. "Manuel mi otomatik mi almalıyım?" sorusunun cevabında).

**Bir soruyu tamamen silmek** istersen, o sorunun `<details class="fq">` ile başlayıp `</details>` ile biten **tüm bloğunu** seç ve sil (aradaki hiçbir şeyi bölme).

---

## 4) Quiz sorusu ekleme/düzenleme

**Nerede:** `index.html` (görünen yazılar) ve `js/quiz.js` (sonuç mantığı).

Not: Quiz artık ayrı bir bölüm değil — Ehliyet Sınıfları kartlarının altında, "Hangisi sana uygun bilmiyor musun? 3 soruda söyleyelim →" yazısına tıklayınca açılan bir kutu içinde. Bu tetikleyici yazıyı değiştirmek istersen Ctrl+F ile `3 soruda söyleyelim` ara, `<summary>...</summary>` içindeki metni düzenle. Quiz'in kendi soru/sonuç mantığı aşağıdaki gibi aynen çalışmaya devam eder.

### Kolay: Bir sorunun veya seçeneğin yazısını değiştirmek

Ctrl+F ile ara (örneğin): `Ne kullanmak istiyorsun?`

```html
      <div class="qstep" data-step="2">
        <div class="qnum">Soru 2 / 3</div>
        <h3>Ne kullanmak istiyorsun?</h3>
        <div class="qopts">
          <button class="qopt" data-key="veh" data-val="moto">Motosiklet</button>
          <button class="qopt" data-key="veh" data-val="oto">Otomobil</button>
          <button class="qopt" data-key="veh" data-val="agir">Kamyon / Tır</button>
        </div>
      </div>
```

Soru başlığını (`<h3>...</h3>`) veya seçeneklerin **görünen yazısını** (`>Motosiklet<` gibi, iki `>` `<` arasındaki kısım) istediğin gibi değiştirebilirsin.

⚠️ **`data-val="moto"` gibi tırnak içindeki değerlere DOKUNMA.** Bu görünmez — `js/quiz.js` bu kelimelere bakarak hangi sonucu göstereceğine karar veriyor. Sadece görünen yazıyı değiştir:

Önce:
```html
<button class="qopt" data-key="veh" data-val="moto">Motosiklet</button>
```

Sonra (sadece görünen yazı değişti, `data-val="moto"` aynı kaldı):
```html
<button class="qopt" data-key="veh" data-val="moto">İki Tekerlekli</button>
```

### Kolay: Sonuç metinlerini değiştirmek

Quiz bittiğinde çıkan öneri yazıları `js/quiz.js` içinde, tırnak içinde düz Türkçe metin olarak duruyor. Ctrl+F ile ara: `A1 ile başla`

```js
if(a<18){code=oto?'A1 Otomatik':'A1';title='A1 ile başla';
  desc='16 yaşında alabileceğin motosiklet ehliyeti. 125 cc\'ye kadar hafif motosikletler için. Şehir içi kullanımda ideal bir başlangıç.';
  note='İki şubemizde de var. 18 yaşını doldurunca A2\'ye yükseltebilirsin.';}
```

`title=`, `desc=`, `note=` işaretlerinden sonraki, **tek tırnak (`'...'`) içindeki** Türkçe cümleleri değiştirebilirsin. Tek kural: cümle içinde kesme işareti (apostrof, `'`) kullanman gerekirse önüne ters taksim koy: `İki\'ye` gibi (yukarıdaki örnekte `A2\'ye` yazımına dikkat et — bu `\'`, kesme işaretinin kod tarafından yanlış anlaşılmasını engelliyor). Bunu unutursan kod hata verir ve tüm quiz çalışmaz hale gelir.

### İleri seviye: Tamamen yeni bir soru eklemek

Bunu tek başına yapman **önerilmez** çünkü iki dosyada birden değişiklik gerektirir:

1. `index.html`'e yeni bir `<div class="qstep" data-step="4">...</div>` bloğu eklemek (mevcut 3 sorudan birini kopyalayıp uyarlayarak).
2. `js/quiz.js` içindeki `decide()` fonksiyonuna, bu yeni sorunun cevabına göre farklı sonuç verecek **yeni bir mantık** eklemek — bu, kod yazmayı gerektirir, kopyala-yapıştırla yapılamaz.

Eğer gerçekten 4. bir soru eklemek istiyorsan, en güvenlisi bu değişikliği kod bilen biriyle (ya da benimle, bu konuşmada) birlikte yapmaktır. Bunun yerine mevcut 3 sorudan birinin metnini/seçeneklerini yukarıdaki gibi düzenlemek tamamen güvenlidir ve çoğu ihtiyacı karşılar.

---

## 5) Renk değiştirme

**Nerede:** `css/00-degiskenler.css`

Sitenin tüm renkleri bu dosyanın en başında, tek bir yerde tanımlı. Bir rengi burada değiştirirsen, o rengi kullanan **sitenin her yerindeki** her şey aynı anda değişir.

En sık işine yarayacak olanlar:

| Değişken | Ne renk | Nerede kullanılıyor |
|---|---|---|
| `--signal` | Ana sarı vurgu rengi | Butonlar, "eyebrow" çizgileri, quiz rozeti, ilerleme çubuğu |
| `--signal-2` | Sarının biraz daha koyu tonu | Buton üzerine gelince (hover), yıldızlar |
| `--asphalt` | Koyu (neredeyse siyah) zemin rengi | Hero, footer, SSS, süreç bölümünün arka planı |
| `--concrete` | Açık gri zemin rengi | Sayfanın genel arka planı |
| `--ink` | Ana yazı rengi (koyu) | Açık zeminlerdeki başlık ve metinler |

Ctrl+F ile ara: `--signal:`

Önce:
```css
--signal:#FFB300;
```

Sonra (örnek: sarı yerine turuncu-kırmızı):
```css
--signal:#FF3B30;
```

Renk kodlarını (`#FFB300` gibi) bulmak için [htmlcolorcodes.com](https://htmlcolorcodes.com) gibi bir siteden istediğin rengi seçip yanındaki `#` ile başlayan kodu kopyalayabilirsin. `#` işaretini silme, kodun kendisini değiştir.

---

## 6) Fotoğraf / video değiştirme

**Nerede:** `assets/img/` ve `assets/video/` klasörleri, artı `index.html` ve `css/10-hero.css`.

### En kolay yöntem: Dosyayı aynı isimle değiştir

1. Yeni fotoğrafını al, adını tam olarak **`a-poster.jpg`** yap.
2. `assets/img/` klasöründeki eski `a-poster.jpg` dosyasının üzerine bu yeni dosyayı koy (üzerine yazmasını onayla).
3. Video için aynısını **`a-web.mp4`** adıyla `assets/video/` klasöründe yap.

Bu yöntemde `index.html` veya CSS'te hiçbir şeyi değiştirmene gerek yok — kod zaten bu isimlere bakıyor, sen sadece dosyanın içeriğini değiştirmiş oluyorsun.

⚠️ Video formatının **`.mp4`**, fotoğrafın **`.jpg`** olduğundan emin ol (farklı bir formatta ise önce bir dönüştürücüyle .mp4/.jpg'ye çevir), yoksa tarayıcı dosyayı oynatamaz/gösteremez.

### Farklı bir isimle eklemek istersen

Diyelim yeni dosyanı `yeni-video.mp4` olarak `assets/video/` klasörüne attın. O zaman 3 yeri güncellemen gerekir:

**`index.html`** içinde Ctrl+F ile ara: `a-web.mp4`
```html
<video class="hero-video" autoplay muted loop playsinline preload="metadata" poster="./assets/img/a-poster.jpg">
  <source src="./assets/video/a-web.mp4" type="video/mp4">
</video>
```
`src="./assets/video/a-web.mp4"` kısmını `src="./assets/video/yeni-video.mp4"` yap.

**`css/10-hero.css`** içinde Ctrl+F ile ara: `a-poster.jpg` (bu, videonun yüklenemediği durumlarda ve mobilde gösterilen yedek görsel, **iki kez** geçiyor — ikisini de değiştir):
```css
.hero-media{background:url('../assets/img/a-poster.jpg') center/cover no-repeat}
```

Yol yazarken başındaki `./` veya `../` kısmına dokunma, sadece dosya adını (`a-poster.jpg` / `a-web.mp4`) değiştir — bu işaretler "bu klasörden bak" anlamına geliyor, silersen dosya bulunamaz.

### Ehliyet sınıfı kartlarına (A1, A2, B...) gerçek fotoğraf eklemek

7 karta (A1, A1 Otomatik, A2, A2 Otomatik, A, B, B Otomatik) zaten gerçek fotoğraf eklendi. Sadece **C** ve **CE** kartlarında hâlâ eski simge (ikon) duruyor — onlar için henüz fotoğraf verilmedi.

C veya CE için fotoğraf eklemek istersen, Ctrl+F ile ara: `<div class="ccode">C<span class="cbranch">` (CE için `CE<span class="cbranch">`), birkaç satır yukarısında şunu bulursun:

```html
<div class="cphoto"><svg class="cwm" viewBox="0 0 48 48" ...>...</svg></div>
```

`<div class="cphoto">` ile `</div>` arasındaki `<svg ...>...</svg>` simgesini silip yerine bir `<img>` koy — diğer 7 kartta kullanılan kalıp aynen:

```html
<div class="cphoto"><img src="./assets/img/sinif-c.jpg"
     srcset="./assets/img/sinif-c.jpg 480w, ./assets/img/sinif-c@2x.jpg 960w"
     sizes="(max-width: 900px) 100vw, 400px"
     width="480" height="360"
     loading="lazy" decoding="async"
     alt="C sınıfı kamyon eğitim aracı"></div>
```

`assets/img/` klasörüne o isimde (yukarıdaki örnekte `sinif-c.jpg` ve `sinif-c@2x.jpg`) fotoğraf eklemen yeterli. `srcset`/`@2x` kısmı zorunlu değil — sadece `src="..."` ile tek boyutlu bir fotoğraf da kullanabilirsin, `srcset` satırını o zaman tamamen silebilirsin.

### Kayan bant (marquee) araç modellerini eklemek

Şu an kayan bantta `TODO: Araç Modeli 1` gibi yer tutucu yazılar var. Ctrl+F ile ara: `TODO: Araç Modeli`

```html
<span>TODO: Araç Modeli 1</span><span>TODO: Araç Modeli 2</span><span>TODO: Araç Modeli 3</span><span>TODO: Araç Modeli 4</span><span>TODO: Araç Modeli 5</span><span>TODO: Araç Modeli 6</span>
```

Bu satır sayfada **iki kez art arda** yazılıdır (kayma animasyonunun kesintisiz görünmesi için) — her iki tekrarı da **aynı anda, aynı şekilde** değiştir, aksi halde kayarken bir yerde "atlama" görünür. Kaç model yazacağın önemli değil, `<span>...</span>` ekleyip çıkarabilirsin, yeter ki iki blok birbirinin birebir aynısı kalsın.

---

## 7) Bir bölümü tamamen gizleme

**Nerede:** `index.html`

Her bölüm `<section ...>` ile başlar `</section>` ile biter (bazıları `<div class="marquee">` / `<footer>` gibi farklı etiketlerle). Bir bölümü sitede görünmez yapmanın en güvenli yolu, açılış etiketine `style="display:none"` eklemektir.

Ctrl+F ile ara: `id="yorumlar"` (örnek: YORUMLAR bölümünü gizlemek istediğini varsayalım)

Önce:
```html
<section class="sec reviews" id="yorumlar">
```

Sonra:
```html
<section class="sec reviews" id="yorumlar" style="display:none">
```

Bu kadar — bölüm koddan silinmedi, sadece görünmez oldu. Geri getirmek istersen ` style="display:none"` kısmını silmen yeterli.

⚠️ Gizlediğin bölüme üst menüden bir link gidiyorsa (YORUMLAR örneğinde menüde link yok, sorun çıkmaz; ama SSS ya da Şubeler gibi menüde linki olan bir bölümü gizlersen), o menü linkine tıklayınca kullanıcı görünmeyen bir yere kaydırılır. Site bozulmaz ama garip durur. Menüden de kaldırmak istersen, NAV bölümünde Ctrl+F ile ilgili linki bul (örn. `href="#sss"`) ve o `<a class="lk" href="#sss">SSS</a>` satırının tamamını sil.

⚠️ **Süreç bölümünün içindeki "Gerekli belgeler" listesini** ya da **Ehliyet Sınıfları'nın altındaki quiz'i** gizlemek istersen, aynı yöntem çalışmaz çünkü onlar artık ayrı bir `<section>` değil, `<details class="fq">` ya da `<details class="quiz-toggle">` içindeler — o `<details ...>` etiketine aynı şekilde `style="display:none"` ekleyebilirsin, mantık aynı.

---

## 8) Metin düzenleme

**Nerede:** `index.html`

Genel kural: `>` ile `<` arasındaki, **gözle görülür kelimeleri** değiştir. Etiketlerin kendisine (`<h1 class="reveal">` gibi) dokunma.

Örnek — hero başlığı. Ctrl+F ile ara: `güvenle`

Önce:
```html
<h1 class="reveal">Direksiyona<br>güvenle <span class="hl">geç.</span></h1>
```

Sonra:
```html
<h1 class="reveal">Direksiyona<br>güvenle <span class="hl">ulaş.</span></h1>
```

Dikkat edilecekler:
- `<br>` satırı ikiye bölen bir işarettir (line break) — silersen metin tek satıra iner, kalmasını istiyorsan dokunma.
- `<span class="hl">geç.</span>` kısmındaki `<span class="hl">` ve `</span>` o kelimeyi **sarı renkte** gösteriyor. Sarı yapmak istediğin kelime neyse, onu bu iki etiketin arasına koy; etiketleri silme.
- Türkçe karakterler (ç, ğ, ı, ö, ş, ü, İ) sorunsuz kullanılabilir, dosya UTF-8 formatında kaydediliyor.
- Kesme işareti (apostrof) kullanman gereken bir yerde (örn. "Korkuteli'nin") normal tırnak tuşunu kullan, bir sorun çıkmaz — bu kural sadece `js/quiz.js` gibi `.js` dosyalarındaki tek tırnaklı metinler için geçerli (bkz. madde 4).

---

## SAKIN DOKUNMA

Aşağıdakiler bozulursa **site çalışmaz hale gelir** ya da arama motorlarında/paylaşımlarda görünmez olur. Değiştirirken özellikle dikkatli ol, emin değilsen dokunma.

- **`<script type="application/ld+json">...</script>` bloğu (index.html, en üstte, `<head>` içinde).** Bu, Google gibi arama motorlarına "burası bir sürücü kursu, adresi/telefonu bu" diyen görünmez bir veri bloğu (schema.org). İçindeki telefon/e-posta/adres **değerlerini** (tırnak içindeki yazıları) değiştirebilirsin ama virgülleri (`,`), süslü parantezleri (`{ }`), köşeli parantezleri (`[ ]`) veya tırnak işaretlerini (`"`) silme/taşıma — biri eksilirse tüm blok bozulur ve arama motorları siteyi yanlış okur (site görünüşte yine çalışır ama bu görünmez hata fark edilmesi zor bir sorun yaratır).

- **`<meta charset="UTF-8">` satırı (index.html, en üstte).** Bunu silersen veya değiştirirsen, Türkçe karakterler (ç, ğ, ı, ö, ş, ü) tarayıcıda bozuk sembollere dönüşür.

- **`<meta name="viewport" ...>` satırı.** Bu, sitenin telefonlarda düzgün küçülüp büyümesini sağlar. Silinirse site mobilde çok küçük/bozuk görünür.

- **`<link rel="stylesheet" href="./css/...">` satırlarının sırası (index.html, `<head>` içinde).** Bu satırlar CSS dosyalarını belli bir sırayla yükler. Sırasını değiştirirsen (örn. `21-cta.css`'i `00-degiskenler.css`'ten önce koyarsan) bazı renkler/boşluklar yanlış görünebilir çünkü sonraki dosyalar öncekilerin üzerine yazıyor.

- **`<script defer src="./js/...">` satırlarının sırası (index.html, en altta).** Aynı şekilde bu sıralama önemli: `menu.js`, `reveal.js`, `utils.js`, `gauge.js`, `quiz.js` sırasıyla yüklenir. `utils.js`, diğer bazı dosyaların ihtiyaç duyduğu ortak bir değeri (`reduce`) tanımlıyor — sırası bozulursa quiz veya gauge çalışmayabilir.

- **Quiz'in `id="test"` değeri (index.html) ve `js/utils.js` içindeki `#test` satırları.** Üst menüdeki "Hangi Ehliyet?" linki bu `id`'ye göre quiz kutusunu bulup otomatik açıyor. `id="test"`'i silersen ya da değiştirirsen (ve `js/utils.js`'te de aynı şekilde güncellemezsen), menü linkine tıklayınca quiz kapalı kalır.

- **`data-key`, `data-val`, `id="..."`, `class="..."` gibi tırnak içindeki teknik değerler.** Bunlar gözle görünmez ama JS ve CSS bunlara bakarak çalışır. Görünen yazıyı değiştirmek her zaman güvenlidir, tırnak içindeki bu teknik isimleri değiştirmek genelde güvenli değildir (istisnası: madde 6'da anlatılan dosya adı değişikliği gibi, hem kodda hem dosya sisteminde birlikte değiştirdiğin durumlar).

- **Tırnak işaretlerini (`'`, `"`) ve süslü/köşeli parantezleri (`{ }`, `[ ]`) `.js` dosyalarında dengesiz bırakmak.** Her açılan tırnak/parantez bir yerde kapanmalı. Bir tanesini yanlışlıkla silersen o JS dosyasının tamamı çalışmayı durdurur (sadece o dosyanın kontrol ettiği bölüm değil, bazen sayfadaki diğer davranışlar da etkilenebilir).

- **`_backup/index.original.html` dosyası.** Buna hiç dokunma — bölünmeden önceki orijinal sitenin son yedeği, acil durum kurtarma dosyası.
