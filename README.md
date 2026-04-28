# Root Kozmetik Website

Root Kozmetik için hazırlanmış, blog gerektirmeyen kurumsal web sitesi.

## Dosyalar

- `index.html`: Ana sayfa içerikleri, meta etiketleri, JSON-LD şema verileri ve form alanları.
- `hizmetler.html`: Regülasyon, dosya ve pazar erişimi hizmetlerinin detay sayfası.
- `testler.html`: Kozmetik laboratuvar testlerinin detay sayfası.
- `styles.css`: Tüm tasarım, renkler, grid yapısı ve mobil görünüm.
- `script.js`: Mobil menü ve header kaydırma davranışı.
- `assets/`: Root Kozmetik logosu, favicon ve TTNormsPro font dosyaları.

## Kolay düzenleme

- Firma e-postasını değiştirmek için `index.html` içinde `info@rootkozmetik.com` araması yapın.
- Ana renkleri değiştirmek için `styles.css` başındaki `:root` değişkenlerini güncelleyin. Mevcut renkler rootkozmetik.com marka paletinden alınmıştır.
- Logo değiştirmek için `assets/root-logo-dark.svg` ve `assets/root-logo-light.svg` dosyalarını güncelleyin.
- Yeni hizmet veya test eklemek için `hizmetler.html` veya `testler.html` içindeki kartlardan birini kopyalayın.
- LinkedIn adresini değiştirmek için `https://www.linkedin.com/` bağlantılarını kendi sayfanızla değiştirin.

## Yayına alma

Bu site statik HTML/CSS/JS dosyalarından oluşur. Netlify, Vercel, Cloudflare Pages veya klasik hosting üzerinde doğrudan yayınlanabilir.
