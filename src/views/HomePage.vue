<template>
  <div class="homepage">
    <section class="hero-section">
      <div class="hero-overlay">
        <div class="hero-text">
          <h2 class="subtitle">PREMIUM WOOD SUPPLIER</h2>
          <h1 class="title">大璉木業</h1>
          <p class="description">
            深耕木業數十年，專精於世界各國優質原木、板材進口與批發。
            我們堅持嚴格的品質篩選，為建築與裝潢產業提供最穩定的材料後盾。
          </p>
          <div class="hero-btns">
            <router-link to="/products" class="btn btn-primary">查看現貨板材</router-link>
            <router-link to="/about" class="btn btn-outline">材料來源說明</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="features-section">
      <div class="container">
        <div class="section-header">
          <span class="tag">OUR STRENGTH</span>
          <h2>核心供應優勢</h2>
        </div>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="icon">🌍</div>
            <h3>全球嚴選採購</h3>
            <p>直接對接國際林場，確保木材合法來源與多樣化品種選擇。</p>
          </div>
          <div class="feature-card">
            <div class="icon">🏛️</div>
            <h3>豐富倉儲現貨</h3>
            <p>擁有大型專業乾燥倉庫，各規格板材備貨充足，縮短您的等待時間。</p>
          </div>
          <div class="feature-card">
            <div class="icon">🔍</div>
            <h3>嚴格品等分級</h3>
            <p>專業人員逐片檢驗，提供最真實的等級標註與品質保證。</p>
          </div>
        </div>
      </div>
    </section>
  </div>

  <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info">
            <h3 class="footer-logo">大璉木業 TA-LIEN</h3>
            <p>專業原木進口與批發供應商，提供最穩定的材料品質與專業服務。</p>
          </div>
          
          <div class="contact-details">
            <h4>聯繫我們</h4>
            <ul>
              <li><span>📍</span> 新北市五股區凌雲路三段2號A A-3</li>
              <li><span>📞</span> 02-2904-8855</li>
              <!-- <li><span>📧</span> service@ta-lien.com</li>
              <li><span>⏰</span> 週一至週五 08:30 - 17:30</li> -->
            </ul>
          </div>

          <div class="contact-links">
            <h4>快速連結</h4>
            <ul>
              <li><router-link to="/">首頁</router-link></li>
              <li><router-link to="/products">材料庫</router-link></li>
              <li><router-link to="/about">材料來源</router-link></li>
            </ul>
          </div>
        </div>
        
        <div class="copyright">
          <p>&copy; 2026 大璉木業 TA-LIEN 版權所有</p>
        </div>
      </div>
    </section>
</template>

<style scoped>
.homepage {
  padding-top: 80px;
}

/* 英雄區背景：使用木頭堆疊或林場感圖片 */
.hero-section {
  height: calc(100vh - 80px);
  background: url('https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2070') center/cover no-repeat;
  position: relative;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3));
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-text {
  text-align: center;
  color: white;
  max-width: 850px;
  padding: 0 20px;
}

.subtitle {
  font-size: 1rem;
  letter-spacing: 5px;
  margin-bottom: 1rem;
  color: #d7ccc8;
  font-weight: 400;
}

.title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
}

.description {
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.9);
}

.btn {
  padding: 14px 40px;
  border-radius: 4px;
  /* 改為方正一點的設計，感覺更穩重 */
  text-decoration: none;
  font-weight: 600;
  margin: 0 10px;
  transition: 0.3s;
  display: inline-block;
}

.btn-primary {
  background: #5d4037;
  color: white;
}

.btn-primary:hover {
  background: #4e342e;
}

.btn-outline {
  border: 1px solid white;
  color: white;
}

.btn-outline:hover {
  background: white;
  color: #4e342e;
}

.features-section {
  padding: 80px 20px;
  background: #ffffff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.tag {
  color: #8d6e63;
  font-weight: bold;
  letter-spacing: 2px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
}

.feature-card {
  text-align: center;
  padding: 20px;
}

.feature-card .icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
  display: block;
}

.feature-card h3 {
  color: #4e342e;
  margin-bottom: 15px;
  font-size: 1.4rem;
}

.feature-card p {
  color: #666;
  line-height: 1.7;
}

/* 聯絡資訊區樣式 */
.contact-section {
  background: #2d2421; /* 極深木棕色 */
  color: #d7ccc8;
  padding: 60px 20px 20px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 2fr 1.5fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
}

.footer-logo {
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.contact-info p {
  line-height: 1.6;
  font-size: 0.95rem;
  opacity: 0.8;
}

.contact-details h4, .contact-links h4 {
  color: #ffffff;
  margin-bottom: 20px;
  font-size: 1.1rem;
}

.contact-details ul, .contact-links ul {
  list-style: none;
  padding: 0;
}

.contact-details li {
  margin-bottom: 12px;
  font-size: 0.95rem;
  display: flex;
  gap: 10px;
}

.contact-links li {
  margin-bottom: 10px;
}

.contact-links a {
  color: #d7ccc8;
  text-decoration: none;
  transition: 0.3s;
}

.contact-links a:hover {
  color: #ffffff;
  padding-left: 5px;
}

.copyright {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  text-align: center;
  font-size: 0.85rem;
  opacity: 0.6;
}

/* 手機版適應 */
@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .title {
    font-size: 2.5rem;
  }

  .btn {
    width: 50%;
    margin: 10px 0;
    text-align: center;
  }
}
</style>