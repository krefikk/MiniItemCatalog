const BASE_URL = 'https://fakestoreapi.com';

export const api = {
  // Tüm ürünleri getir
  async getProducts() {
    try {
      const response = await fetch(`${BASE_URL}/products`);
      if (!response.ok) {
        throw new Error('Ürünler yüklenirken hata oluştu');
      }
      return await response.json();
    } catch (error) {
      throw new Error('API bağlantı hatası: ' + error.message);
    }
  },

  // Tek ürün detayını getir
  async getProduct(id) {
    try {
      const response = await fetch(`${BASE_URL}/products/${id}`);
      if (!response.ok) {
        throw new Error('Ürün detayı yüklenirken hata oluştu');
      }
      return await response.json();
    } catch (error) {
      throw new Error('API bağlantı hatası: ' + error.message);
    }
  },

  // Kategorileri getir
  async getCategories() {
    try {
      const response = await fetch(`${BASE_URL}/products/categories`);
      if (!response.ok) {
        throw new Error('Kategoriler yüklenirken hata oluştu');
      }
      return await response.json();
    } catch (error) {
      throw new Error('API bağlantı hatası: ' + error.message);
    }
  }
}; 