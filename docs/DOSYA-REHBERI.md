# Dosya Rehberi

**Bu dosya ne için?** Projedeki her dosyanın ne işe yaradığını, sitenin hangi bölümünü kontrol ettiğini tek tek anlatır. "Şu bölümü değiştirmek istiyorum ama hangi dosyayı açacağım?" sorusunun cevabı burada.

Not: `index.html` içinde her bölümün hemen üstünde şöyle bir yorum satırı var:

```html
<!-- ===== HERO BÖLÜMÜ | stil: css/10-hero.css | script: js/gauge.js ===== -->
```

Yani tarayıcıda bir yeri görüp "bu neresi, hangi dosyayı açmalıyım" diye merak edersen, VS Code'da `index.html`'i aç, Ctrl+F ile o bölümün görünen bir metnini ara (örn. "Yola çıkmaya hazır mısın"), üstündeki yorum satırı sana hangi CSS ve JS dosyasını açman gerektiğini söyler.

---

## index.html

Sitenin tüm iskeleti ve **görünen bütün metinler** bu dosyada. Başlıklar, paragraflar, telefon numaraları, adresler — hepsi burada yazıyor. CSS dosyaları bu metinlerin nasıl göründüğünü, JS dosyaları nasıl davrandığını belirler, ama metnin kendisini değiştirmek için her zaman `index.html`'i açacaksın.

## HTML'deki ana bölümler (sırayla, ekrandaki karşılıkları)

Sayfayı yukarıdan aşağı taradığında göreceğin sıra:

| # | Bölüm (yorum satırındaki adı) | Ekranda ne görüyorsun | Stil dosyası | Script dosyası |
|---|---|---|---|---|
| 1 | NAV BÖLÜMÜ | En üstte sabit duran logo + menü + "Hemen Kayıt Ol" butonu | `css/02-yerlesim.css` | `js/menu.js` |
| 2 | HERO BÖLÜMÜ | Video arka planlı büyük giriş, "Direksiyona güvenle geç." başlığı, sağda yüzde göstergesi | `css/10-hero.css` | `js/gauge.js` |
| 3 | MARQUEE BÖLÜMÜ | Sarı şerit üzerinde kayan "A1 Motosiklet, A2, A, B Otomobil..." yazıları | `css/11-marquee.css` | yok |
| 4 | EHLİYET SINIFLARI BÖLÜMÜ | A1'den CE'ye kadar fotoğraflı sınıf kartları | `css/12-siniflar.css` | yok |
| 5 | QUIZ BÖLÜMÜ | "Hangi ehliyet sana uygun?" testi (3 soru + sonuç) | `css/13-quiz.css` | `js/quiz.js` |
| 6 | İSTATİSTİKLER BÖLÜMÜ | Koyu zemin üzerinde sayan rakamlar ("30", "4000+"...) | `css/14-istatistikler.css` | `js/istatistikler.js` |
| 7 | ÖZEL DERSLER BÖLÜMÜ | "Ehliyetin var ama direksiyona korkuyor musun?" bölümü | `css/15-ozel-dersler.css` | yok |
| 8 | ŞUBELER BÖLÜMÜ | Korkuteli ve Konyaaltı kartları — harita, adres, telefonlar | `css/16-subeler.css` | yok |
| 9 | SÜREÇ BÖLÜMÜ | "Dört adımda direksiyon başında" — 1,2,3,4 adımları | `css/17-surec.css` | yok |
| 10 | BELGELER BÖLÜMÜ | Kayıt için gereken 6 belge kartı | `css/18-belgeler.css` | yok |
| 11 | YORUMLAR BÖLÜMÜ | Öğrenci yorumları (3 alıntı) | `css/19-yorumlar.css` | yok |
| 12 | SSS BÖLÜMÜ | Tıklayınca açılan/kapanan soru-cevap kutuları | `css/20-sss.css` | yok |
| 13 | CTA BÖLÜMÜ | Sarı zeminli "Yola çıkmaya hazır mısın?" + iki şubenin telefon kartları | `css/21-cta.css` | yok |
| 14 | FOOTER BÖLÜMÜ | En alt, koyu zemin — iki şubenin özet iletişim bilgileri | `css/02-yerlesim.css` | yok |
| 15 | MOBİL SABİT ÇUBUK | Sadece telefon ekranında altta sabit duran "Ara / WhatsApp" çubuğu | `css/02-yerlesim.css` | `js/menu.js` (açılış/kapanışla ilgisi yok, ayrı bir davranışı yok — sadece linkler) |

"Script: yok" yazan bölümlerde tıklama/animasyon gibi bir davranış yoktur — sadece durağan metin ve görseldir, JS dosyasına ihtiyaç duymaz.

---

## css/ klasörü

Her CSS dosyası bir veya birkaç bölümün **görünümünü** (renk, boşluk, yazı tipi boyutu, mobilde nasıl daraldığı) kontrol eder. Dosya isimlerindeki sayılar (`00`, `01`, `10`, `11`...) sadece yükleme sırasını gösterir, silme/ekleme yapmadıkça bu sırayla oynama.

### css/00-degiskenler.css
**Bu dosya ne için?** Sitenin her yerinde kullanılan renkleri, boşlukları ve genişlik sınırlarını tek bir yerden tanımlar. Bir rengi burada değiştirirsen, o rengi kullanan **her yer** aynı anda değişir.

Sitenin hangi bölümünü kontrol eder: Hiçbir bölümü doğrudan değil — tüm bölümlerin ortak "renk paleti"dir. Örneğin sarı vurgu rengi (`--signal`), butonlardan başlıklara kadar her yerde kullanılıyor.

Şunu değiştirmek istersen buraya bak: Marka renklerini (sarı, koyu asfalt rengi vb.) değiştirmek istiyorsan.

### css/01-temel.css
**Bu dosya ne için?** Sayfanın en temel görünüm kurallarını (yazı tipi ailesi, satır aralığı, linklerin varsayılan rengi) belirler. Bu dosya olmadan site "çıplak" HTML gibi görünür.

Sitenin hangi bölümünü kontrol eder: Tüm sayfanın temel yazı tipi ve genel düzeni.

Şunu değiştirmek istersen buraya bak: Sitenin genel yazı tipini veya satır aralığını değiştirmek istiyorsan (nadiren dokunulur).

### css/02-yerlesim.css
**Bu dosya ne için?** Üst menü (nav), footer ve mobil sabit alt çubuğun görünümünü kontrol eder. Ayrıca her bölümün ortak başlık biçimini (`.sec-head` — eyebrow + başlık + açıklama düzeni) burada tanımlanır.

Sitenin hangi bölümünü kontrol eder: NAV BÖLÜMÜ, FOOTER BÖLÜMÜ, MOBİL SABİT ÇUBUK.

Şunu değiştirmek istersen buraya bak: Üst menünün yüksekliğini, footer'ın arka plan rengini veya mobildeki menünün açılma şeklini değiştirmek istiyorsan.

### css/03-bilesenler.css
**Bu dosya ne için?** Sitede tekrar tekrar kullanılan küçük parçaları kontrol eder: "eyebrow" etiketleri (başlıkların üstündeki küçük yazılar, örn. "01 — Ehliyet Sınıfları"), tüm butonlar ve sayfa kaydırıldıkça beliren "reveal" efekti.

Sitenin hangi bölümünü kontrol eder: Tek bir bölüm değil — her bölümdeki butonlar ve küçük üst etiketler.

Şunu değiştirmek istersen buraya bak: Butonların rengini/şeklini her yerde birden değiştirmek istiyorsan.

### css/10-hero.css
**Bu dosya ne için?** Sayfanın en üstündeki büyük giriş bölümünü (video arka plan, başlık, "Kayıt Ol" butonları) ve sağdaki başarı oranı göstergesini (gauge) kontrol eder.

Sitenin hangi bölümünü kontrol eder: HERO BÖLÜMÜ.

Şunu değiştirmek istersen buraya bak: Hero'nun yüksekliğini, video/görsel boyutunu, başlık yazı boyutunu değiştirmek istiyorsan.

### css/11-marquee.css
**Bu dosya ne için?** Sarı zeminde kayan yazı şeridinin (marquee) hızını ve görünümünü kontrol eder.

Sitenin hangi bölümünü kontrol eder: MARQUEE BÖLÜMÜ.

Şunu değiştirmek istersen buraya bak: Kayma hızını veya şeridin renklerini değiştirmek istiyorsan.

### css/12-siniflar.css
**Bu dosya ne için?** Ehliyet sınıfı kartlarının (A1, A2, B, C, CE...) görünümünü — kart boyutu, üzerine gelince büyüme efekti, alt gölgeleme — kontrol eder.

Sitenin hangi bölümünü kontrol eder: EHLİYET SINIFLARI BÖLÜMÜ.

Şunu değiştirmek istersen buraya bak: Kartların boyutunu, aralarındaki boşluğu veya kart üstü rozet (Otomatik, Korkuteli gibi) renklerini değiştirmek istiyorsan.

### css/13-quiz.css
**Bu dosya ne için?** "Hangi ehliyet sana uygun?" testinin kutusunu, soru/seçenek butonlarını ve ilerleme çubuğunu kontrol eder.

Sitenin hangi bölümünü kontrol eder: QUIZ BÖLÜMÜ.

Şunu değiştirmek istersen buraya bak: Quiz kutusunun rengini, seçenek butonlarının görünümünü değiştirmek istiyorsan. (Soruların kendisini değiştirmek için `index.html` ve `js/quiz.js`'e bakman gerekir — bkz. `NASIL-DEGISTIRIRIM.md`.)

### css/14-istatistikler.css
**Bu dosya ne için?** "Sayılar konuşuyor" bölümündeki koyu zemini, arka plandaki hareketli çizgi animasyonunu ve sayaçların düzenini kontrol eder.

Sitenin hangi bölümünü kontrol eder: İSTATİSTİKLER BÖLÜMÜ.

Şunu değiştirmek istersen buraya bak: Sayaçların yan yana mı alt alta mı dizileceğini (mobilde) veya rakamların rengini değiştirmek istiyorsan.

### css/15-ozel-dersler.css
**Bu dosya ne için?** "Ehliyetin var ama direksiyona korkuyor musun?" bölümünün iki sütunlu düzenini (solda metin, sağda koyu kart) kontrol eder.

Sitenin hangi bölümünü kontrol eder: ÖZEL DERSLER BÖLÜMÜ.

Şunu değiştirmek istersen buraya bak: Bu bölümdeki kartın rengini veya madde işaretli listenin görünümünü değiştirmek istiyorsan.

### css/16-subeler.css
**Bu dosya ne için?** Şube kartlarının (harita, telefon, WhatsApp butonları, adres) tüm görünümünü kontrol eder.

Sitenin hangi bölümünü kontrol eder: ŞUBELER BÖLÜMÜ.

Şunu değiştirmek istersen buraya bak: Şube kartlarının düzenini, "Ana Şube" / "Yeni Açıldı" rozetlerinin rengini değiştirmek istiyorsan.

### css/17-surec.css
**Bu dosya ne için?** "Dört adımda direksiyon başında" bölümündeki numaralı adım listesinin (1, 2, 3, 4 daireleri ve aralarındaki çizgi) görünümünü kontrol eder.

Sitenin hangi bölümünü kontrol eder: SÜREÇ BÖLÜMÜ.

Şunu değiştirmek istersen buraya bak: Adım numaralarının rengini veya aralarındaki boşluğu değiştirmek istiyorsan.

### css/18-belgeler.css
**Bu dosya ne için?** Kayıt belgeleri kartlarının (numara rozeti + başlık + açıklama) görünümünü kontrol eder.

Sitenin hangi bölümünü kontrol eder: BELGELER BÖLÜMÜ.

Şunu değiştirmek istersen buraya bak: Belge kartlarının boyutunu veya numara rozetinin rengini değiştirmek istiyorsan.

### css/19-yorumlar.css
**Bu dosya ne için?** Öğrenci yorumu kartlarının (yıldızlar, alıntı metni, isim) görünümünü kontrol eder.

Sitenin hangi bölümünü kontrol eder: YORUMLAR BÖLÜMÜ.

Şunu değiştirmek istersen buraya bak: Yıldızların rengini veya yorum kartlarının kenarlık stilini değiştirmek istiyorsan.

### css/20-sss.css
**Bu dosya ne için?** Sık sorulan sorular kutularının (kapalı/açık hâli, ok işaretinin dönmesi) görünümünü kontrol eder.

Sitenin hangi bölümünü kontrol eder: SSS BÖLÜMÜ.

Şunu değiştirmek istersen buraya bak: Soruların yazı boyutunu veya açılınca çıkan ok işaretinin rengini değiştirmek istiyorsan. (Yeni soru eklemek için `index.html`'e bakman gerekir — bkz. `NASIL-DEGISTIRIRIM.md`.)

### css/21-cta.css
**Bu dosya ne için?** Sayfanın sonlarındaki sarı zeminli "Yola çıkmaya hazır mısın?" kayıt çağrısı bölümünü ve içindeki iki şube kartını kontrol eder.

Sitenin hangi bölümünü kontrol eder: CTA BÖLÜMÜ.

Şunu değiştirmek istersen buraya bak: Bu bölümün arka plan rengini veya şube kartlarının düzenini değiştirmek istiyorsan.

---

## js/ klasörü

Her JS dosyası bir **davranışı** (tıklama, kaydırma, sayma animasyonu) yönetir. JS dosyalarının hepsi `index.html`'in en altında, belli bir **sırayla** yükleniyor — bu sıra önemli, değiştirme (nedeni için bu belgenin sonundaki "SAKIN DOKUNMA" bölümüne bak).

### js/menu.js
**Bu dosya ne için?** Üst menüdeki hamburger butonuna (☰ üç çizgi ikonu) basınca mobil menünün açılıp kapanmasını sağlar.

Sitenin hangi bölümünü kontrol eder: NAV BÖLÜMÜ (mobil görünümdeki menü açma/kapama).

Şunu değiştirmek istersen buraya bak: Menüye tıklayınca ne olduğunu değiştirmek istiyorsan (nadiren dokunulur, çoğu görünüm değişikliği aslında CSS'tedir).

### js/reveal.js
**Bu dosya ne için?** Sayfa aşağı kaydırıldıkça, başlık ve kartların yavaşça belirip yukarı doğru kayarak görünmesini sağlar (buna "scroll reveal" denir).

Sitenin hangi bölümünü kontrol eder: Neredeyse tüm bölümler — her yerde kullanılan ortak bir efekt.

Şunu değiştirmek istersen buraya bak: Bu belirme efektini tamamen kapatmak istersen (nadiren dokunulur).

### js/utils.js
**Bu dosya ne için?** Diğer JS dosyalarının ortak kullandığı iki şeyi barındırır: kullanıcının "hareketi azalt" tercihini kontrol eden `reduce` değeri, ve bir sayıyı belirli bir sürede sayarak gösteren `animate` fonksiyonu.

Sitenin hangi bölümünü kontrol eder: Doğrudan bir bölümü değil — `gauge.js`, `quiz.js` ve `istatistikler.js` bu dosyadaki `reduce` değerine ihtiyaç duyar.

Şunu değiştirmek istersen buraya bak: Neredeyse hiçbir zaman — bu bir "arka plan" dosyasıdır, dokunman gerekmeyecek.

### js/gauge.js
**Bu dosya ne için?** Hero bölümündeki dairesel "Sınav Başarısı %95,64" göstergesinin, sayfaya gelindiğinde sıfırdan gerçek değere doğru dolarak/sayarak animasyonla belirmesini sağlar.

Sitenin hangi bölümünü kontrol eder: HERO BÖLÜMÜ (sağdaki yüzde göstergesi).

Şunu değiştirmek istersen buraya bak: Gösterilen başarı yüzdesini değiştirmek istiyorsan — bkz. `NASIL-DEGISTIRIRIM.md`.

### js/quiz.js
**Bu dosya ne için?** "Hangi ehliyet sana uygun?" testinin tüm mantığını yönetir: soruları sırayla gösterir, cevaplara göre hangi ehliyet sınıfının önerileceğine karar verir, sonucu ekrana yazar.

Sitenin hangi bölümünü kontrol eder: QUIZ BÖLÜMÜ.

Şunu değiştirmek istersen buraya bak: Quiz'in sonuç metinlerini (öneri yazılarını) değiştirmek istiyorsan — bkz. `NASIL-DEGISTIRIRIM.md`.

### js/istatistikler.js
**Bu dosya ne için?** "Sayılar konuşuyor" bölümündeki rakamların (30, 4000+, 2021, 2), sayfaya gelindiğinde sıfırdan başlayıp gerçek değerine doğru sayarak artmasını sağlar.

Sitenin hangi bölümünü kontrol eder: İSTATİSTİKLER BÖLÜMÜ.

Şunu değiştirmek istersen buraya bak: Sayma animasyonunun süresini değiştirmek istiyorsan (rakamların kendisini değiştirmek için sadece `index.html` yeterli — bkz. `NASIL-DEGISTIRIRIM.md`).

---

## assets/ klasörü

### assets/img/a-poster.jpg
Hero bölümündeki videonun yüklenmeden önce (veya mobilde video yerine) gösterilen fotoğrafı.

### assets/video/a-web.mp4
Hero bölümünün arka planında oynayan video.

---

## _backup/ klasörü

### _backup/index.original.html
Site bölünmeden önceki, tek parça hâlindeki orijinal dosyanın birebir kopyası. **Değiştirme, silme** — sadece her şey ters giderse başvurulacak son yedek.
