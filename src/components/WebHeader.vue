<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isMenuOpen = ref(false)

const navitems = [
    { name: "首頁", to: "/" },
    { name: "產品介紹", to: "/products" },
    { name: "關於我們", to: "/about" }
]

// 切換選單
const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
}

// 換頁時自動關閉選單
watch(() => route.path, () => {
    isMenuOpen.value = false
})
</script>

<template>
    <header class="navbar">
        <div class="nav-container">
            <div class="logo">
                <router-link to="/">
                    <span class="brand-text">大璉木業</span>
                    <span class="brand-sub">TA-LIEN</span>
                </router-link>
            </div>

            <nav :class="{ 'show': isMenuOpen }">
                <ul>
                    <li v-for="item in navitems" :key="item.name">
                        <router-link :to="item.to" class="nav-link">
                            {{ item.name }}
                        </router-link>
                    </li>
                </ul>
            </nav>

            <button @click="toggleMenu" class="menu-btn" :class="{ 'is-active': isMenuOpen }">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>
            <div v-if="isMenuOpen" class="menu-overlay" @click="isMenuOpen = false"></div>
        </div>
    </header>
</template>

<style scoped>
/* 導覽列主體 */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    /* 稍微加高增加呼吸感 */
    background: rgba(255, 255, 255, 0.95);
    /* 半透明更有高級感 */
    backdrop-filter: blur(10px);
    /* 磨砂玻璃效果 */
    z-index: 1000;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
}

.nav-container {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
}

/* Logo 區塊美化 */
.logo a {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    line-height: 1.2;
}

.brand-text {
    font-size: 1.6rem;
    font-weight: 800;
    color: #4e342e;
    letter-spacing: 2px;
}

.brand-sub {
    font-size: 0.75rem;
    color: #8d6e63;
    letter-spacing: 4px;
    margin-top: 2px;
}

/* 選單連結樣式 */
nav ul {
    display: flex;
    list-style: none;
    gap: 40px;
}

.nav-link {
    text-decoration: none;
    color: #5d4037;
    font-weight: 500;
    font-size: 1.05rem;
    padding: 10px 0;
    position: relative;
    transition: color 0.3s ease;
}

/* 經典木質風格底線動畫 */
.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: #a1887f;
    transition: width 0.3s ease;
}

.nav-link:hover {
    color: #a1887f;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
    width: 100%;
}

/* 漢堡選單按鈕美化 */
.menu-btn {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 24px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
}

.hamburger-line {
    width: 100%;
    height: 2px;
    background-color: #4e342e;
    transition: all 0.3s ease;
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6); /* 暗化 60% */
  backdrop-filter: blur(3px);     /* 增加一點模糊感會更有質感 */
  z-index: 998;                   /* 低於 nav (999) 但高於 homepage (0) */
  animation: fadeIn 0.3s ease;    /* 讓暗化效果淡入 */
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (max-width: 768px) {
  nav {
    /* 確保手機版選單的 z-index 最高 */
    z-index: 999;
    /* ... 你原本的 nav 樣式 ... */
  }
  
  .menu-btn {
    z-index: 1000; /* 按鈕要能被點到 */
  }
}

/* 手機版 RWD 優化 */
@media (max-width: 768px) {
    .menu-btn {
        display: flex;
    }

    nav {
        position: fixed;
        top: 0;
        right: -100%;
        width: 250px;
        height: 100vh;
        background: #fdfbf9;
        box-shadow: -10px 0 30px rgba(0, 0, 0, 0.05);
        transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    nav.show {
        right: 0;
    }

    nav ul {
        flex-direction: column;
        align-items: center;
        gap: 30px;
    }

    .nav-link {
        font-size: 1.2rem;
    }

    /* 漢堡按鈕變叉叉的動畫 */
    .menu-btn.is-active .hamburger-line:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .menu-btn.is-active .hamburger-line:nth-child(2) {
        opacity: 0;
    }

    .menu-btn.is-active .hamburger-line:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
}
</style>