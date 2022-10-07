(function () {
    const parent = document.querySelector(".slider");
    if (!parent) return;

    const sliderContainer = parent.querySelector(".slider__container");
    const sliderWrapper = sliderContainer.querySelector(".slider__wrapper");
    const slides = sliderContainer.querySelectorAll(".slider__slide");

    const btnNext = parent.querySelector(".sl-arrows__btn--next");
    const btnPrev = parent.querySelector(".sl-arrows__btn--prev");
    
    const autoPlay = false;
    const autoPlayTime = 3000;
    const animation = 'fade';

    const btnsSlider = [btnNext, btnPrev];
    let activeSlideIndex = 0;

    if (sliderWrapper && animation) {
        sliderWrapper.classList.add(animation);
    }

    if (slides.length) {
        slides[activeSlideIndex].classList.add("active");
    }

    if (btnsSlider.length) {
        btnsSlider.forEach((el) => {
            el.addEventListener("click", () => {
                if (el == btnNext) {
                    nextSlide();
                }

                if (el === btnPrev) {
                    prevSlide();
                }
            });
        });
    }

    if (autoPlay) {
        setInterval(() => {
            nextSlide();
        }, autoPlayTime);
    }

    function nextSlide() {
        slides[activeSlideIndex].classList.remove("active");

        if (slides.length - 1 === activeSlideIndex) {
            activeSlideIndex = 0;
            slides[activeSlideIndex].classList.add("active");
            return;
        }

        activeSlideIndex = activeSlideIndex + 1;
        slides[activeSlideIndex].classList.add("active");
    }

    function prevSlide() {
        slides[activeSlideIndex].classList.remove("active");

        if (activeSlideIndex === 0) {
            activeSlideIndex = slides.length - 1;
            slides[activeSlideIndex].classList.add("active");
            return;
        }

        activeSlideIndex = activeSlideIndex - 1;
        slides[activeSlideIndex].classList.add("active");
    }

})();
