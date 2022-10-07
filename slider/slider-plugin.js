class Slider {
    constructor(name, props) {
        this.nameSlider = name;
        this.activeSlideIndex = 0;

        this.btnNext = document.querySelector(props["btnNext"]);
        this.btnPrev = document.querySelector(props["btnPrev"]);

        this.autoPlay = props["autoPlay"] || false;
        this.animation = props["animation"] || false;
        this.autoPlayTime = props["autoPlayTime"] || false;

        this.btnsSlider = [this.btnNext, this.btnPrev];
        this.sliderContainer = document.querySelector(this.nameSlider);

        if (this.sliderContainer) {
            this.sliderWrapper = this.sliderContainer.querySelector(".slider__wrapper");
            this.slides = this.sliderContainer.querySelectorAll(".slider__slide");
        }

        this.init();
    }

    init() {
        if (!this.sliderContainer) return;

        if (this.slides.length) {
            this.slides[this.activeSlideIndex].classList.add("active");
        }

        if (this.sliderWrapper && this.animation) {
            this.sliderWrapper.classList.add(this.animation);
        }

        if (this.btnsSlider.length && this.slides.length) {
            this.btnsSlider.forEach((el) => {
                el.addEventListener("click", () => {
                    this.autoPlay = false;

                    if (el == this.btnNext) {
                        this.nextSlide();
                    }

                    if (el === this.btnPrev) {
                        this.prevSlide();
                    }
                });
            });
        }

        if (this.autoPlay) {
            setInterval(() => {
                if (this.autoPlay) {
                    this.nextSlide();
                }
            }, this.autoPlayTime);
        }
    }

    nextSlide() {
        if (!this.slides.length) return;
        this.slides[this.activeSlideIndex].classList.remove("active");

        if (this.slides.length - 1 === this.activeSlideIndex) {
            this.activeSlideIndex = 0;
            this.slides[this.activeSlideIndex].classList.add("active");
            return;
        }

        this.activeSlideIndex = this.activeSlideIndex + 1;
        this.slides[this.activeSlideIndex].classList.add("active");
    }

    prevSlide() {
        if (!this.slides.length) return;
        this.slides[this.activeSlideIndex].classList.remove("active");

        if (this.activeSlideIndex === 0) {
            this.activeSlideIndex = this.slides.length - 1;
            this.slides[this.activeSlideIndex].classList.add("active");
            return;
        }

        this.activeSlideIndex = this.activeSlideIndex - 1;
        this.slides[this.activeSlideIndex].classList.add("active");
    }
}

const i = new Slider(".slider__container", {
    btnNext: ".sl-arrows__btn--next",
    btnPrev: ".sl-arrows__btn--prev",
    autoPlay: "true",
    animation: "fade",
    autoPlayTime: 3000,
});
