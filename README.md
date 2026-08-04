# SEÇKİN Sürücü Kursları — Web Sitesi

**Bu dosya ne için?** Bu README, projeye ilk defa bakan birinin "bu ne, nereden başlıyorum" sorularına cevap verir. Detaylı değişiklik talimatları için `docs/` klasörüne bakman gerekecek.

Bu dokümantasyon, kod bilmeyen ama sitenin bakımını kendisi yapacak biri için yazıldı. Hiçbir yerde satır numarası verilmiyor çünkü kodu her değiştirdiğinde numaralar kayar — onun yerine "Ctrl+F ile şunu ara" yöntemi kullanılıyor.

## Bu site nedir?

SEÇKİN Sürücü Kursları'nın (Antalya — Korkuteli ve Konyaaltı şubeleri) tanıtım sitesi. Tek sayfalık (tüm bölümler aynı sayfada, aşağı kaydırarak gezilen) bir site. Build aracı, npm, framework yok — düz HTML/CSS/JS dosyaları, doğrudan tarayıcıda çalışır.

Site şu bölümlerden oluşuyor (yukarıdan aşağıya, sayfada göründükleri sıra):

1. **Üst menü (nav)** — logo, menü linkleri, "Hemen Kayıt Ol" butonu
2. **Hero** — arka planda video/fotoğraf olan büyük giriş bölümü, sağda başarı oranı göstergesi
3. **İstatistik şeridi** — hero'nun hemen altında ince bir çizgide "30 araç · %95,64 başarı · 2 şube · 4000+ mezun"
4. **Kayan yazı (marquee)** — araç modellerinin aktığı sarı şerit (şu an TODO yer tutucu, gerçek modeller eklenecek)
5. **Ehliyet Sınıfları** — A1, A2, A, B, C, CE kartları. Kartların hemen altında **"Hangi ehliyet sana uygun?" testi** tıklanınca açılan katlanır bir kutu (accordion) olarak duruyor — artık ayrı bir bölüm değil.
6. **Özel Dersler** — ehliyeti olup direksiyona güvenmeyenler için
7. **Şubeler** — Korkuteli ve Konyaaltı adres/telefon/harita kartları
8. **Süreç** — kayıt olma adımları (1, 2, 3, 4). 2. adımın ("Kaydını Tamamla") içinde **gerekli belgeler listesi** katlanır bir kutu olarak duruyor — artık ayrı bir bölüm değil.
9. **Yorumlar** — öğrenci yorumları
10. **SSS** — sık sorulan sorular (açılır/kapanır kutular)
11. **CTA (İletişim)** — "Yola çıkmaya hazır mısın?" kayıt çağrısı
12. **Footer** — alt bilgi, iki şubenin iletişim bilgileri
13. **Mobil sabit çubuk** — sadece telefonda görünen, altta sabit duran "Ara / WhatsApp" çubuğu

Eskiden ayrı bölüm olan **İstatistikler** (sayaç animasyonlu) ve **Belgeler** artık yok — içerikleri yukarıdaki gibi başka bölümlere taşındı/sadeleşti. Bölüm başlıklarının önündeki "01 —", "02 —" gibi numaralar da kaldırıldı.

Her bölümün ekranda tam olarak nereye denk geldiğini ve hangi dosyaların onu kontrol ettiğini **`docs/DOSYA-REHBERI.md`** dosyasında bulabilirsin.

## Klasör ağacı

```
index.html              → Sitenin ana iskeleti (tüm metin ve yapı burada)
_backup/                → Değişiklikten önceki orijinal dosyanın yedeği
css/                    → Görünüm (renk, yazı tipi, boşluk, mobil uyum) dosyaları
js/                     → Tıklama, animasyon gibi hareketli davranışların dosyaları
assets/img/             → Fotoğraflar
assets/video/           → Videolar
docs/                   → Bu klasördeki detaylı rehberler (sen buradasın)
```

Her klasörün tek cümlelik görevi:

| Klasör | Görevi |
|---|---|
| `css/` | Sitenin **nasıl göründüğünü** belirler — renkler, yazı tipleri, aralıklar, mobil görünüm |
| `js/` | Sitenin **nasıl davrandığını** belirler — menü açılması, quiz'in çalışması, sayaç animasyonu |
| `assets/img/` | Site üzerindeki fotoğraflar (şu an: hero videosunun arka plan görseli) |
| `assets/video/` | Site üzerindeki videolar (şu an: hero bölümündeki arka plan videosu) |
| `_backup/` | Bölme işleminden önceki **tek parça** orijinal dosyanın yedeği — acil durumda geri dönmek için |
| `docs/` | Bu README'nin devamı niteliğindeki ayrıntılı rehberler |

Hangi dosyanın tam olarak ne içerdiğini (dosya dosya, satır satır değil, bölüm bölüm) öğrenmek için **`docs/DOSYA-REHBERI.md`** dosyasına bak.

## Siteyi bilgisayarında nasıl açarsın (VS Code Live Server ile)

`index.html` dosyasını çift tıklayarak da açabilirsin (tarayıcıda düzgün görünür), ama bazı tarayıcı güvenlik kısıtlamaları yüzünden en sağlıklısı **Live Server** ile açmaktır. Adım adım:

1. **VS Code'u aç.** Yüklü değilse [code.visualstudio.com](https://code.visualstudio.com) adresinden indir.
2. Sol üstten **Dosya (File) → Klasör Aç (Open Folder)** ile bu proje klasörünü aç (`web 4.3` klasörü — `index.html`'in bulunduğu klasör).
3. Sol tarafta dosya listesinde **Uzantılar (Extensions)** simgesine tıkla (dört kare şeklindeki ikon, sol kenar çubuğunda).
4. Arama kutusuna **"Live Server"** yaz (yapımcısı: Ritwick Dey). Bul, **Install (Yükle)** butonuna bas.
5. Yükleme bitince sol taraftaki dosya listesinden **`index.html`** dosyasına sağ tıkla.
6. Açılan menüden **"Open with Live Server"** seçeneğine tıkla.
7. Tarayıcın otomatik açılır, site `http://127.0.0.1:5500` gibi bir adreste görünür.
8. Artık bir CSS veya JS dosyasında değişiklik yapıp kaydettiğinde (Ctrl+S), tarayıcı **otomatik yenilenir** — sayfayı elle yenilemene gerek yok.

Live Server'ı kapatmak için VS Code'un alt kenar çubuğundaki (sağ altta, mavi şerit üzerinde) **"Port: 5500"** yazısına tıkla.

## Netlify Drop ile nasıl yayınlarsın

Netlify Drop, hesap açmadan (ya da basit bir hesapla) klasörünü sürükleyip bırakarak siteni internete koymanı sağlar.

1. Tarayıcıda [app.netlify.com/drop](https://app.netlify.com/drop) adresine git.
2. Bilgisayarında proje klasörünü (yani `web 4.3` — içinde `index.html`, `css/`, `js/`, `assets/` olan klasör) bul.
3. Bu klasörü **doğrudan tarayıcı sekmesindeki kutunun üzerine sürükle bırak.**
   - ⚠️ `_backup/` klasörünü ve kök dizindeki eski `surucu-kursu.html`, `A_poster.jpg`, `A_web.mp4` dosyalarını yüklemene gerek yok, onlar sadece senin referansın için duruyor — ama yüklersen de site bozulmaz, sadece gereksiz yer kaplar.
4. Netlify dosyaları otomatik yükler ve birkaç saniye içinde sana `rastgele-isim.netlify.app` şeklinde bir adres verir.
5. Site artık o adreste canlı yayında. Adresi kendi alan adına bağlamak istersen, Netlify panelindeki **"Domain settings"** kısmından yapılır (bu README'nin kapsamı dışında).
6. Bir güncelleme yapmak istediğinde: aynı klasörü tekrar aynı sürükle-bırak kutusuna atman yeterli — Netlify eski siteyi yenisiyle değiştirir.

## Değişiklik yapmadan önce ne yedeklemelisin

Her değişiklikten önce şunu yap: **değiştireceğin dosyanın bir kopyasını al.**

En basit yöntem:
1. Değiştirmeden önce dosyayı (örn. `css/00-degiskenler.css`) sağ tıkla → **Kopyala**.
2. Aynı klasöre **Yapıştır** — Windows otomatik olarak `00-degiskenler - Kopya.css` gibi bir isim verecektir.
3. Değişikliği orijinal dosyada yap.
4. Site bozulursa, kopyaladığın dosyanın içeriğini orijinalin üzerine yapıştırıp eski haline dönebilirsin.

Eğer sitenin **tamamı** üzerinde büyük bir değişiklik yapacaksan (birden fazla dosyada), en güvenlisi tüm proje klasörünü (`web 4.3`) başka bir yere kopyalayıp orada çalışmaktır — böylece bir şey ters giderse klasörü değiştirmeden önceki haliyle geri koyarsın.

`_backup/index.original.html` dosyasına **asla dokunma** — bu, sitenin hiç bölünmemiş, tek parça hâlinin son yedeğidir. Her şey ters giderse en son başvurulacak dosya budur.

## Daha fazla detay

- **`docs/DOSYA-REHBERI.md`** — her dosyanın tek tek ne işe yaradığı, sitenin hangi bölümünü kontrol ettiği.
- **`docs/NASIL-DEGISTIRIRIM.md`** — en sık yapacağın işlemler (telefon değiştirme, SSS ekleme, renk değiştirme vb.) adım adım, önce/sonra kod örnekleriyle.
- **`docs/SOZLUK.md`** — kodda göreceğin İngilizce/teknik terimlerin sade Türkçe açıklamaları.
