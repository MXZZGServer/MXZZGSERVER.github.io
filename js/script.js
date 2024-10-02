// 获取所有的图片和 slides 容器
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slide img');
const totalSlides = images.length;
const indicatorContainer = document.querySelector('.indicators');
let intervalID

// 动态设置 slides 容器的宽度
slides.style.width = `${totalSlides * 100}%`;

// 动态生成 indicators
for (let i = 0; i < totalSlides; i++) {
    const indicator = document.createElement('span');
    indicator.classList.add('indicator');
    indicator.addEventListener('click', () => {
        showSlide(i);
        clearInterval(intervalID);
        intervalID = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalSlides;
            showSlide(currentIndex);
        }, 3000);
    }); // 点击indicator切换到相应的图片
    indicatorContainer.appendChild(indicator);
}

// 设置第一个 indicator 为 active
let currentIndex = 0;
updateActiveIndicator();

// 切换轮播图函数
function showSlide(index) {
    const carouselWidth = document.querySelector('.carousel').offsetWidth;
    slides.style.transform = `translateX(${-index * carouselWidth}px)`;
    currentIndex = index;
    updateActiveIndicator();
}

// 更新 active indicator 样式
function updateActiveIndicator() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// 自动播放轮播图
intervalID = setInterval(() => {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}, 3000);