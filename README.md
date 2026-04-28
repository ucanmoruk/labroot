# Root Kozmetik Website

Root Kozmetik için hazırlanmış, blog gerektirmeyen kurumsal web sitesi.

## Dosyalar

- `index.html`: Ana sayfa içerikleri, meta etiketleri, JSON-LD şema verileri ve form alanları.
- `hizmetler/index.html`: `/hizmetler/` temiz URL'si için regülasyon, dosya ve pazar erişimi detay sayfası.
- `testler/index.html`: `/testler/` temiz URL'si için kozmetik laboratuvar testleri detay sayfası.
- `hakkimizda/index.html`: `/hakkimizda/` temiz URL'si için Root Kozmetik yaklaşımı ve kurumsal konumlandırma sayfası.
- `iletisim/index.html`: `/iletisim/` temiz URL'si için teklif ve ön değerlendirme iletişim sayfası.
- `styles.css`: Tüm tasarım, renkler, grid yapısı ve mobil görünüm.
- `script.js`: Mobil menü ve header kaydırma davranışı.
- `assets/`: Root Kozmetik logosu, favicon ve TTNormsPro font dosyaları.

## Tasarım altyapısı

- Tailwind CSS CDN üzerinden tüm sayfalara eklenmiştir.
- Özel marka bileşenleri ve layout düzeni `styles.css` içinde tutulur.
- Genel görünüm Apple tarzı minimal estetikle, `#F8F9FA` kırık beyaz arka plan, `#1A1A1A` koyu gri metin, Inter font ve hafif gölgeli mavi CTA/buton sistemi üzerine kuruludur.

## Kolay düzenleme

- Firma e-postasını değiştirmek için proje genelinde `info@rootkozmetik.com` araması yapın.
- Ana renkleri değiştirmek için `styles.css` başındaki `:root` değişkenlerini güncelleyin.
- Logo değiştirmek için `assets/root-logo-dark.svg` ve `assets/root-logo-light.svg` dosyalarını güncelleyin.
- Yeni hizmet veya test eklemek için `hizmetler/index.html` veya `testler/index.html` içindeki kartlardan birini kopyalayın.
- LinkedIn adresini değiştirmek için `https://www.linkedin.com/` bağlantılarını kendi sayfanızla değiştirin.

## Yayına alma

Bu site statik HTML/CSS/JS dosyalarından oluşur. Netlify, Vercel, Cloudflare Pages veya klasik hosting üzerinde doğrudan yayınlanabilir.
