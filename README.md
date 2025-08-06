# Mini Ürün Kataloğu

React ile geliştirilmiş modern bir ürün kataloğu uygulaması.

## Özellikler

- 📱 **Responsive Tasarım**: Mobil ve masaüstü uyumlu
- 🔍 **Arama ve Filtreleme**: Ürün adına göre arama, kategoriye göre filtreleme
- 📄 **Çok Sayfalı Yapı**: React Router ile sayfa yönlendirmesi
- 🎨 **Modern UI**: Tailwind CSS ile estetik tasarım
- ⚡ **API Entegrasyonu**: Fake Store API ile gerçek veri
- 🌟 **Yıldız Değerlendirme**: Ürün puanları ve yorum sayıları
- 🔄 **Loading States**: Yükleme animasyonları
- ❌ **Error Handling**: Hata yönetimi

## Teknolojiler

- **React 18** - Modern React hooks ve functional components
- **React Router DOM** - Sayfa yönlendirmesi
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon kütüphanesi
- **Fetch API** - HTTP istekleri

## Kurulum

1. Projeyi klonlayın:
```bash
git clone <repository-url>
cd staj3_catalog
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm start
```

4. Tarayıcınızda `http://localhost:3000` adresini açın.

## Proje Yapısı

```
src/
├── components/          # Yeniden kullanılabilir bileşenler
│   ├── Header.js       # Sayfa başlığı
│   └── ProductCard.js  # Ürün kartı bileşeni
├── pages/              # Sayfa bileşenleri
│   ├── ProductList.js  # Ana sayfa - ürün listesi
│   └── ProductDetail.js # Ürün detay sayfası
├── services/           # API servisleri
│   └── api.js         # API çağrıları
├── App.js             # Ana uygulama bileşeni
├── index.js           # Uygulama giriş noktası
└── index.css          # Global stiller
```

## API Kullanımı

Uygulama [Fake Store API](https://fakestoreapi.com/) kullanmaktadır:

- `GET /products` - Tüm ürünleri getir
- `GET /products/:id` - Belirli ürün detayını getir
- `GET /products/categories` - Kategorileri getir

## Özellikler Detayı

### Ana Sayfa (ProductList)
- Ürünleri grid layout ile gösterim
- Arama kutusu ile ürün adına göre filtreleme
- Kategori dropdown'u ile kategori filtreleme
- Filtreleri temizleme butonu
- Sonuç sayısı gösterimi
- Loading ve error state'leri

### Ürün Detay Sayfası (ProductDetail)
- Ürün görseli ve bilgileri
- Fiyat ve kategori bilgisi
- Yıldız değerlendirme sistemi
- Ürün açıklaması
- Breadcrumb navigasyon
- "Sepete Ekle" ve "Geri Dön" butonları

### Responsive Tasarım
- Mobil: 1 sütun
- Tablet: 2-3 sütun
- Desktop: 4-5 sütun
- Detay sayfasında 2 sütunlu layout

## Geliştirme

### Yeni Özellik Ekleme
1. İlgili bileşeni `src/components/` klasörüne ekleyin
2. Sayfa bileşenini `src/pages/` klasörüne ekleyin
3. API servisini `src/services/api.js` dosyasına ekleyin
4. Route'u `src/App.js` dosyasında tanımlayın

### Stil Değişiklikleri
- Tailwind CSS utility sınıfları kullanın
- Özel stiller için `src/index.css` dosyasını düzenleyin
- `tailwind.config.js` dosyasında tema özelleştirmeleri yapın

## Build

Production build için:
```bash
npm run build
```

## Test

Test çalıştırmak için:
```bash
npm test
```

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. 