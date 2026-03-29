<template>
  <div class="homepage">
    <section class="hero-section">
      <div class="hero-overlay">
        <div class="hero-text">
          <h2 class="subtitle">PREMIUM WOOD SUPPLIER</h2>
          <h1 class="title">大璉木業：您的優質原木夥伴</h1>
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

@media (max-width: 768px) {
  .title {
    font-size: 2.5rem;
  }

  .btn {
    width: 100%;
    margin: 10px 0;
    text-align: center;
  }
}
</style>