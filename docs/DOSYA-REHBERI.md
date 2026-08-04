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
| 3 | İSTATİSTİK ŞERİDİ | Hero'nun hemen altında ince bir çizgide "30 araç · %95,64 başarı · 2 şube · 4000+ mezun" | `css/14-istatistikler.css` | yok |
| 4 | MARQUEE BÖLÜMÜ | Sarı şerit üzerinde kayan araç modelleri (şu an TODO yer tutucu) | `css/11-marquee.css` | yok |
| 5 | EHLİYET SINIFLARI BÖLÜMÜ | A1'den CE'ye kadar sınıf kartları. Kartların hemen altında **"Hangisi sana uygun bilmiyor musun?"** yazısına tıklayınca açılan quiz (3 soru + sonuç) | `css/12-siniflar.css` + `css/13-quiz.css` | `js/quiz.js` |
| 6 | ÖZEL DERSLER BÖLÜMÜ | "Ehliyetin var ama direksiyona korkuyor musun?" bölümü | `css/15-ozel-dersler.css` | yok |
| 7 | ŞUBELER BÖLÜMÜ | Korkuteli ve Konyaaltı kartları — harita, adres, telefonlar | `css/16-subeler.css` | yok |
| 8 | SÜREÇ + BELGELER BÖLÜMÜ | "Dört adımda direksiyon başındasın" — 1,2,3,4 adımları. 2. adımın ("Kaydını Tamamla") içinde **"Gerekli belgeler (6)"** yazısına tıklayınca açılan belge listesi | `css/17-surec.css` | yok |
| 9 | YORUMLAR BÖLÜMÜ | Öğrenci yorumları (3 alıntı) | `css/19-yorumlar.css` | yok |
| 10 | SSS BÖLÜMÜ | Tıklayınca açılan/kapanan soru-cevap kutuları | `css/20-sss.css` | yok |
| 11 | CTA BÖLÜMÜ | Sarı zeminli "Yola çıkmaya hazır mısın?" + iki şubenin telefon kartları | `css/21-cta.css` | yok |
| 12 | FOOTER BÖLÜMÜ | En alt, koyu zemin — iki şubenin özet iletişim bilgileri | `css/02-yerlesim.css` | yok |
| 13 | MOBİL SABİT ÇUBUK | Sadece telefon ekranında altta sabit duran "Ara / WhatsApp" çubuğu | `css/02-yerlesim.css` | yok (sadece linkler) |

"Script: yok" yazan bölümlerde tıklama/animasyon gibi bir davranış yoktur — sadece durağan metin ve görseldir, JS dosyasına ihtiyaç duymaz. (SSS, quiz-tetikleyici ve belge listesindeki aç/kapa davranışı JS gerektirmez — tarayıcının kendi `<details>` özelliğiyle çalışır, bkz. `SOZLUK.md`.)

**Eskiden ayrı bölüm olan İstatistikler (sayaç animasyonlu) ve Belgeler artık yok** — içerikleri yukarıdaki gibi başka bölümlere taşındı. Bölüm başlıklarının önündeki "01 —" gibi numaralar da tüm bölümlerden kaldırıldı.

---

## css/ klasörü

Her CSS dosyası bir veya birkaç bölümün **görünümünü** (renk, boşluk, yazı tipi boyutu, mobilde nasıl daraldığı) kontrol eder. Dosya isimlerindeki sayılar (`00`, `01`, `10`, `11`...) kabaca sayfadaki sırayı gösterir ama artık birebir değil — gerçek yükleme sırasını `index.html`'in `<head>`'indeki `<link>` satırlarının sırası belirler; silme/ekleme yapmadıkça dosya sırasıyla oynama.

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
**Bu dosya ne için?** Sitede tekrar tekrar kullanılan küçük parçaları kontrol eder: "eyebrow" etiketleri (başlıkların üstündeki küçük yazılar, örn. "Ehliyet Sınıfları"), tüm butonlar ve sayfa kaydırıldıkça beliren "reveal" efekti.

Sitenin hangi bölümünü kontrol eder: Tek bir bölüm değil — her bölümdeki butonlar ve küçük üst etiketler.

Şunu değiştirmek istersen buraya bak: Butonların rengini/şeklini her yerde birden değiştirmek istiyorsan.

### css/10-hero.css
**Bu dosya ne için?** Sayfanın en üstündeki büyük giriş bölümünü (video arka plan, başlık, "Kayıt Ol" butonları) ve sağdaki başarı oranı göstergesini (gauge) kontrol eder.

Sitenin hangi bölümünü kontrol eder: HERO BÖLÜMÜ.

Şunu değiştirmek istersen buraya bak: Hero'nun yüksekliğini, video/görsel boyutunu, başlık yazı boyutunu değiştirmek istiyorsan.

### css/14-istatistikler.css
**Bu dosya ne için?** Hero'nun hemen altındaki ince istatistik şeridini ("30 araç · %95,64 başarı · 2 şube · 4000+ mezun") kontrol eder. Sayfa sırasında hero'dan hemen sonra geldiği için dosya `<link>`'i `index.html`'de erken yükleniyor, ama dosya adı hâlâ `14` (bkz. yukarıdaki not).

Sitenin hangi bölümünü kontrol eder: İSTATİSTİK ŞERİDİ.

Şunu değiştirmek istersen buraya bak: Şeridin arka plan rengini, yazı boyutunu veya öğeler arası boşluğu değiştirmek istiyorsan. (Rakamların kendisi düz metin olarak `index.html`'de — animasyon yok, JS'e gerek yok.)

### css/11-marquee.css
**Bu dosya ne için?** Sarı zeminde kayan yazı şeridinin (marquee) hızını ve görünümünü kontrol eder.

Sitenin hangi bölümünü kontrol eder: MARQUEE BÖLÜMÜ.

Şunu değiştirmek istersen buraya bak: Kayma hızını veya şeridin renklerini değiştirmek istiyorsan.

### css/12-siniflar.css
**Bu dosya ne için?** Ehliyet sınıfı kartlarının (A1, A2, B, C, CE...) görünümünü — kart boyutu, üzerine gelince büyüme efekti, alt gölgeleme — kontrol eder.

Sitenin hangi bölümünü kontrol eder: EHLİYET SINIFLARI BÖLÜMÜ (kartlar kısmı).

Şunu değiştirmek istersen buraya bak: Kartların boyutunu, aralarındaki boşluğu veya kart üstü rozet (Otomatik, Korkuteli gibi) renklerini değiştirmek istiyorsan.

### css/13-quiz.css
**Bu dosya ne için?** "Hangi ehliyet sana uygun?" testinin kutusunu, soru/seçenek butonlarını, ilerleme çubuğunu VE Ehliyet Sınıfları kartlarının altındaki "Hangisi sana uygun bilmiyor musun?" tıklanabilir açma/kapama satırını kontrol eder.

Sitenin hangi bölümünü kontrol eder: EHLİYET SINIFLARI BÖLÜMÜ (quiz kısmı — artık ayrı bir bölüm değil, kartların altına gömülü).

Şunu değiştirmek istersen buraya bak: Quiz kutusunun rengini, tetikleyici satırın yazısını/okunu, seçenek butonlarının görünümünü değiştirmek istiyorsan. (Soruların kendisini değiştirmek için `index.html` ve `js/quiz.js`'e bakman gerekir — bkz. `NASIL-DEGISTIRIRIM.md`.)

### css/15-ozel-dersler.css
**Bu dosya ne için?** "Ehliyetin var ama direksiyona korkuyor musun?" bölümünün iki sütunlu düzenini (solda metin, sağda koyu kart) kontrol eder.

Sitenin hangi bölümünü kontrol eder: ÖZEL DERSLER BÖLÜMÜ.

Şunu değiştirmek istersen buraya bak: Bu bölümdeki kartın rengini veya madde işaretli listenin görünümünü değiştirmek istiyorsan.

### css/16-subeler.css
**Bu dosya ne için?** Şube kartlarının (harita, telefon, WhatsApp butonları, adres) tüm görünümünü kontrol eder.

Sitenin hangi bölümünü kontrol eder: ŞUBELER BÖLÜMÜ.

Şunu değiştirmek istersen buraya bak: Şube kartlarının düzenini, "Ana Şube" / "Yeni Açıldı" rozetlerinin rengini değiştirmek istiyorsan.

### css/17-surec.css
**Bu dosya ne için?** "Dört adımda direksiyon başındasın" bölümündeki numaralı adım listesini (1, 2, 3, 4 daireleri ve aralarındaki çizgi) VE 2. adımın içine gömülü "Gerekli belgeler" katlanır listesini kontrol eder.

Sitenin hangi bölümünü kontrol eder: SÜREÇ + BELGELER BÖLÜMÜ.

Şunu değiştirmek istersen buraya bak: Adım numaralarının rengini, aralarındaki boşluğu veya belge kartlarının boyutunu/numara rozetinin rengini değiştirmek istiyorsan.

### css/19-yorumlar.css
**Bu dosya ne için?** Öğrenci yorumu kartlarının (yıldızlar, alıntı metni, isim) görünümünü kontrol eder.

Sitenin hangi bölümünü kontrol eder: YORUMLAR BÖLÜMÜ.

Şunu değiştirmek istersen buraya bak: Yıldızların rengini veya yorum kartlarının kenarlık stilini değiştirmek istiyorsan.

### css/20-sss.css
**Bu dosya ne için?** Sık sorulan sorular kutularının (kapalı/açık hâli, ok işaretinin dönmesi) görünümünü kontrol eder. Aynı "açılır kutu" görsel deseni artık SÜREÇ bölümündeki belge listesinde de kullanılıyor (o kısım `css/17-surec.css`'te tanımlı, ama temel görünüm kuralları buradan geliyor).

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
**Bu dosya ne için?** Diğer JS dosyalarının ortak kullandığı yardımcıları barındırır: kullanıcının "hareketi azalt" tercihini kontrol eden `reduce` değeri, bir sayıyı belirli bir sürede sayarak gösteren `animate` fonksiyonu, ve nav'daki "Hangi Ehliyet?" linkine tıklayınca kapalı quiz kutusunu otomatik açan küçük bir mantık.

Sitenin hangi bölümünü kontrol eder: Doğrudan bir bölümü değil — `gauge.js` ve `quiz.js` bu dosyadaki `reduce` değerine ihtiyaç duyar; EHLİYET SINIFLARI BÖLÜMÜ'ndeki quiz'in nav linkiyle açılması da bu dosyadan yönetilir.

Şunu değiştirmek istersen buraya bak: Neredeyse hiçbir zaman — bu bir "arka plan" dosyasıdır, dokunman gerekmeyecek.

### js/gauge.js
**Bu dosya ne için?** Hero bölümündeki dairesel "Sınav Başarısı %95,64" göstergesinin, sayfaya gelindiğinde sıfırdan gerçek değere doğru dolarak/sayarak animasyonla belirmesini sağlar.

Sitenin hangi bölümünü kontrol eder: HERO BÖLÜMÜ (sağdaki yüzde göstergesi).

Şunu değiştirmek istersen buraya bak: Gösterilen başarı yüzdesini değiştirmek istiyorsan — bkz. `NASIL-DEGISTIRIRIM.md`.

### js/quiz.js
**Bu dosya ne için?** "Hangi ehliyet sana uygun?" testinin tüm mantığını yönetir: soruları sırayla gösterir, cevaplara göre hangi ehliyet sınıfının önerileceğine karar verir, sonucu ekrana yazar. Quiz artık Ehliyet Sınıfları bölümünün içinde tıklanınca açılan bir kutu içinde, ama bu dosyanın mantığı hiç değişmedi.

Sitenin hangi bölümünü kontrol eder: EHLİYET SINIFLARI BÖLÜMÜ (quiz kısmı).

Şunu değiştirmek istersen buraya bak: Quiz'in sonuç metinlerini (öneri yazılarını) değiştirmek istiyorsan — bkz. `NASIL-DEGISTIRIRIM.md`.

---

## assets/ klasörü

### assets/img/a-poster.jpg
Hero bölümündeki videonun yüklenmeden önce (veya mobilde video yerine) gösterilen fotoğrafı.

### assets/video/a-web.mp4
Hero bölümünün arka planında oynayan video.

---

## _backup/ klasörü

### _backup/index.original.html
Site ilk bölünmeden önceki, tek parça hâlindeki orijinal dosyanın birebir kopyası. **Değiştirme, silme** — sadece her şey ters giderse başvurulacak son yedek.
