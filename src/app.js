class Slider {
    #slides = document.querySelectorAll('.slide');

    #btnNext = document.querySelector('.btn-next');

    #btnPrev = document.querySelector('.btn-prev');

    #counter = 0;

    init = () => {
        this.#slides.forEach((slide, index) => {
            slide.style.left = `${index * 100}%`;
        });

        this.#btnNext.addEventListener('click', () => {
            if (this.#counter === this.#slides.length - 1) {
                this.#counter = 0;
            } else {
                this.#counter += 1;
            }
            this.#updateSlides();
        });

        this.#btnPrev.addEventListener('click', () => {
            if (this.#counter === 0) {
                this.#counter = this.#slides.length - 1;
            } else {
                this.#counter -= 1;
            }
            this.#updateSlides();
        });
    };

    #updateSlides = () => {
        this.#slides.forEach(slide => {
            slide.style.transform = `translateX(-${this.#counter * 100}%`;
        });
    };
}

new Slider().init();
