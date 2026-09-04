/* =========================================================
   PERSONAL PORTFOLIO
   VANILLA JAVASCRIPT
========================================================= */


/* =========================================================
   PORTFOLIO DATA
========================================================= */

const portfolioData = [

    {
        title:
            "Modern Landing Page",

        category:
            "programming",

        type:
            "website",

        image:
            "assets/flex/Cuplikan layar 2026-08-11 212831-dymasyogaf.webp",

        url:
            "https://penerbitutama.com/",

        description:
            "Landing page modern dengan responsive layout dan interactive UI."
    },


    {
        title:
            "Meta Ads Campaign",

        category:
            "advertising",

        type:
            "image",

        image:
            "assets/flex/Cuplikan layar 2026-08-11 213021-dymasyogaf.webp",

        description:
            "Campaign advertising dengan fokus pada performa, audiens dan konversi iklan."
    },


    {
        title:
            "Cinematic Portrait",

        category:
            "photography",

        type:
            "image",

        image:
            "assets/flex/potographer aesthetic-dymasyogaf.webp",

        description:
            "Portrait photography dengan cinematic visual treatment."
    },


    {
        title:
            "Creative Tech Project",

        category:
            "achievement",

        type:
            "image",

        image:
            "assets/flex/SERTIFIKAT JAVASCRIPT ASYAM-dymasyogaf.webp",

        description:
            "Sertifikat kepesertaan kursus online Cisco Networking Academy JavaScript Essentials."
    },


    {
        title:
            "Campaign Dashboard",

        category:
            "advertising",

        type:
            "image",

        image:
            "assets/flex/Cuplikan layar 2026-08-11 213455-dymasyogaf.webp",

        description:
            "Visual dashboard untuk monitoring performa campaign dan iklan."
    },


    {
        title:
            "Event Documentation",

        category:
            "photography",

        type:
            "image",

        image:
            "assets/flex/DSC01807 (2)-dymasyogaf.webp",

        description:
            "Dokumentasi event organisasi dengan pendekatan storytelling."
    },


    {
        title:
            "Creative Tech Project",

        category:
            "achievement",

        type:
            "image",

        image:
            "assets/flex/SERTIFIKAT SOLOLEARN ASYAM (1).webp",

        description:
            "Sertifikat pelatihan online Web Development di SoloLearn."
    },


    {
        title:
            "Creative Tech Project",

        category:
            "achievement",

        type:
            "image",

        image:
            "assets/flex/piag_Informatika - OPSI 2026 (1).webp",

        description:
            "Piagam penghargaan olimpiade online informatika dalam event OPSI 2026 yang diselenggarakan oleh PUSKANAS."
    },


    {
        title:
            "Typography Portrait",

        category:
            "photography",

        type:
            "image",

        image:
            "assets/flex/TYPOGRAFI 6 (1)-dymasyogaf.webp",

        description:
            "Portrait typografi dengan cinematic playable visual treatment."
    },

    {
        title:
            "Modern Website",

        category:
            "programming",

        type:
            "website",

        image:
            "assets/flex/Cuplikan layar 2026-09-03 134643-dymasyogaf.webp",

        url:
            "https://money-flow-rho-eight.vercel.app/",

        description:
            "Website money tracker yang berguna untuk kaum remaja."
    }

];


/* =========================================================
   PORTFOLIO ELEMENT
========================================================= */

const portfolioGrid =
    document.getElementById(
        "portfolioGrid"
    );


/* =========================================================
   LIGHTBOX
========================================================= */

let portfolioLightbox =
    null;


/* =========================================================
   CREATE LIGHTBOX
========================================================= */

function createPortfolioLightbox() {

    if (portfolioLightbox) {
        return;
    }


    portfolioLightbox =
        document.createElement(
            "div"
        );


    portfolioLightbox.className =
        "portfolio-lightbox";


    portfolioLightbox.innerHTML = `

        <button
            type="button"
            class="lightbox-close"
            aria-label="Tutup preview"
        >
            ×
        </button>


        <div class="lightbox-panel">

            <img
                class="lightbox-image"
                src=""
                alt=""
            >


            <div class="lightbox-caption">

                <h3
                    class="font-bold text-lg"
                ></h3>


                <p
                    class="text-sm mt-1"
                ></p>


                <p class="lightbox-hint mt-3">

                    Klik di luar gambar
                    atau tekan ESC untuk menutup

                </p>

            </div>

        </div>

    `;


    document.body.appendChild(
        portfolioLightbox
    );


    const closeButton =
        portfolioLightbox.querySelector(
            ".lightbox-close"
        );


    closeButton.addEventListener(
        "click",
        closePortfolioLightbox
    );


    portfolioLightbox.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                portfolioLightbox
            ) {

                closePortfolioLightbox();

            }

        }
    );

}


/* =========================================================
   OPEN LIGHTBOX
========================================================= */

function openPortfolioLightbox(
    item
) {

    createPortfolioLightbox();


    const image =
        portfolioLightbox.querySelector(
            ".lightbox-image"
        );


    const title =
        portfolioLightbox.querySelector(
            ".lightbox-caption h3"
        );


    const description =
        portfolioLightbox.querySelector(
            ".lightbox-caption p"
        );


    image.src =
        item.image;


    image.alt =
        item.title;


    title.textContent =
        item.title;


    description.textContent =
        item.description;


    portfolioLightbox.classList.add(
        "open"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   CLOSE LIGHTBOX
========================================================= */

function closePortfolioLightbox() {

    if (!portfolioLightbox) {
        return;
    }


    portfolioLightbox.classList.remove(
        "open"
    );


    document.body.style.overflow =
        "";

}


/* =========================================================
   ESC TO CLOSE
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            portfolioLightbox &&
            portfolioLightbox.classList.contains(
                "open"
            )
        ) {

            closePortfolioLightbox();

        }

    }
);


/* =========================================================
   PORTFOLIO ACTION
========================================================= */

function handlePortfolioItem(
    item
) {

    /*
        WEBSITE
        ----------------
        Buka website asli
    */

    if (
        item.type === "website" &&
        item.url
    ) {

        window.open(
            item.url,
            "_blank",
            "noopener,noreferrer"
        );

        return;
    }


    /*
        IMAGE
        ----------------
        Buka lightbox
    */

    openPortfolioLightbox(
        item
    );

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

let revealObserver =
    null;


/*
    Fungsi untuk menentukan
    elemen mana yang perlu
    menunggu scroll.
*/

function prepareRevealElements() {

    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    elements.forEach(
        element => {

            if (
                element.classList.contains(
                    "active"
                )
            ) {
                return;
            }


            const rect =
                element.getBoundingClientRect();


            /*
                Elemen yang sudah berada
                dekat viewport langsung tampil.

                Ini mencegah hero blank.
            */

            if (
                rect.top <
                window.innerHeight * 0.92
            ) {

                element.classList.add(
                    "active"
                );

                element.classList.remove(
                    "reveal-pending"
                );

            } else {

                element.classList.add(
                    "reveal-pending"
                );

            }

        }
    );

}


/* =========================================================
   OBSERVE REVEAL ELEMENTS
========================================================= */

function observeRevealElements() {

    prepareRevealElements();


    const elements =
        document.querySelectorAll(
            ".reveal"
        );


    /*
        Browser tidak support
        IntersectionObserver.
    */

    if (
        !(
            "IntersectionObserver"
            in window
        )
    ) {

        elements.forEach(
            element => {

                element.classList.add(
                    "active"
                );

                element.classList.remove(
                    "reveal-pending"
                );

            }
        );

        return;

    }


    /*
        Buat observer hanya sekali.
    */

    if (!revealObserver) {

        revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "active"
                                );


                                entry.target.classList.remove(
                                    "reveal-pending"
                                );


                                revealObserver.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold:
                        0.12,

                    rootMargin:
                        "0px 0px -40px 0px"
                }
            );

    }


    elements.forEach(
        element => {

            if (
                element.classList.contains(
                    "active"
                )
            ) {
                return;
            }


            revealObserver.observe(
                element
            );

        }
    );

}


/* =========================================================
   RENDER PORTFOLIO
========================================================= */

function renderPortfolio(
    filter = "all"
) {

    if (!portfolioGrid) {
        return;
    }


    portfolioGrid.innerHTML =
        "";


    const filteredData =
        filter === "all"
            ? portfolioData
            : portfolioData.filter(
                item =>
                    item.category ===
                    filter
            );


    filteredData.forEach(
        (item, index) => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "portfolio-card group rounded-3xl reveal";


            /*
                Accessibility
            */

            card.setAttribute(
                "tabindex",
                "0"
            );


            card.setAttribute(
                "role",
                "button"
            );


            const actionIcon =
                item.type === "website"
                    ? "↗"
                    : "⌕";


            const actionLabel =
                item.type === "website"
                    ? "Buka website"
                    : "Preview gambar";


            card.setAttribute(
                "aria-label",
                `${actionLabel}: ${item.title}`
            );


            card.innerHTML = `

                <div
                    class="relative aspect-[4/3] overflow-hidden rounded-3xl"
                >

                    <img
                        src="${item.image}"
                        alt="${item.title}"
                        loading="lazy"
                        class="portfolio-image w-full h-full object-cover"
                    >


                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"
                    ></div>


                    <div
                        class="absolute inset-x-0 bottom-0 p-5"
                    >

                        <div
                            class="flex items-center justify-between gap-3"
                        >

                            <div>

                                <span
                                    class="text-[10px] uppercase tracking-widest text-[#00f5a0]"
                                >
                                    ${item.category}
                                </span>


                                <h3
                                    class="font-bold mt-1"
                                >
                                    ${item.title}
                                </h3>

                            </div>


                            <button
                                type="button"
                                class="portfolio-action w-9 h-9 shrink-0 rounded-full bg-white/10 backdrop-blur flex items-center justify-center group-hover:bg-[#00f5a0] group-hover:text-black transition"
                                aria-label="${actionLabel}"
                                title="${actionLabel}"
                            >
                                ${actionIcon}
                            </button>

                        </div>


                        <p
                            class="text-xs text-gray-400 mt-3 line-clamp-2"
                        >
                            ${item.description}
                        </p>

                    </div>

                </div>

            `;


            portfolioGrid.appendChild(
                card
            );


            const actionButton =
                card.querySelector(
                    ".portfolio-action"
                );


            /*
                Klik tombol
            */

            actionButton.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    handlePortfolioItem(
                        item
                    );

                }
            );


            /*
                Klik card
            */

            card.addEventListener(
                "click",
                () => {

                    handlePortfolioItem(
                        item
                    );

                }
            );


            /*
                Keyboard
            */

            card.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key ===
                            "Enter" ||
                        event.key ===
                            " "
                    ) {

                        event.preventDefault();

                        handlePortfolioItem(
                            item
                        );

                    }

                }
            );


            /*
                Animasi card masuk
            */

            setTimeout(
                () => {

                    card.classList.add(
                        "active"
                    );

                    card.classList.remove(
                        "reveal-pending"
                    );

                },
                index * 80
            );

        }
    );


    /*
        Observe card baru
    */

    observeRevealElements();

}


/* =========================================================
   INITIAL PORTFOLIO
========================================================= */

renderPortfolio();


/* =========================================================
   PORTFOLIO FILTER
========================================================= */

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );


filterButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                const filter =
                    button.dataset.filter;


                filterButtons.forEach(
                    btn => {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                renderPortfolio(
                    filter
                );

            }
        );

    }
);


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton =
    document.getElementById(
        "menuButton"
    );


const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );


if (
    menuButton &&
    mobileMenu
) {

    menuButton.addEventListener(
        "click",
        () => {

            mobileMenu.classList.toggle(
                "open"
            );

        }
    );

}


/* =========================================================
   CLOSE MOBILE MENU
========================================================= */

const mobileLinks =
    document.querySelectorAll(
        ".mobile-link"
    );


mobileLinks.forEach(
    link => {

        link.addEventListener(
            "click",
            () => {

                if (mobileMenu) {

                    mobileMenu.classList.remove(
                        "open"
                    );

                }

            }
        );

    }
);


/* =========================================================
   INITIAL REVEAL
========================================================= */

observeRevealElements();


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
    document.getElementById(
        "contactForm"
    );


const formMessage =
    document.getElementById(
        "formMessage"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async event => {

            event.preventDefault();


            const submitButton =
                contactForm.querySelector(
                    'button[type="submit"]'
                );


            if (!submitButton) {
                return;
            }


            const originalText =
                submitButton.textContent;


            submitButton.disabled =
                true;


            submitButton.textContent =
                "Mengirim...";


            if (formMessage) {

                formMessage.classList.remove(
                    "hidden"
                );


                formMessage.textContent =
                    "Mengirim pesan...";

            }


            try {

                const response =
                    await fetch(
                        contactForm.action,
                        {
                            method:
                                "POST",

                            body:
                                new FormData(
                                    contactForm
                                ),

                            headers: {
                                "Accept":
                                    "application/json"
                            }
                        }
                    );


                if (
                    response.ok
                ) {

                    contactForm.reset();


                    if (formMessage) {

                        formMessage.textContent =
                            "Pesan berhasil dikirim! ✓";

                    }


                    submitButton.textContent =
                        "Terkirim ✓";


                    setTimeout(
                        () => {

                            submitButton.textContent =
                                originalText;

                            submitButton.disabled =
                                false;

                        },
                        3000
                    );

                } else {

                    throw new Error(
                        "Gagal mengirim"
                    );

                }

            } catch (error) {

                if (formMessage) {

                    formMessage.textContent =
                        "Gagal mengirim pesan. Coba lagi.";

                }


                submitButton.textContent =
                    originalText;


                submitButton.disabled =
                    false;

            }

        }
    );

}


/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement =
    document.getElementById(
        "year"
    );


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar =
    document.getElementById(
        "navbar"
    );


window.addEventListener(
    "scroll",
    () => {

        if (!navbar) {
            return;
        }


        if (
            window.scrollY > 30
        ) {

            navbar.classList.add(
                "shadow-2xl"
            );

        } else {

            navbar.classList.remove(
                "shadow-2xl"
            );

        }

    }
);


/* =========================================================
   LIVE META ADS CHART
========================================================= */

const chartBars =
    document.querySelectorAll(
        ".chart-bar"
    );


if (chartBars.length) {


    /*
        Tinggi awal
    */

    let chartHeights = [
        30,
        45,
        35,
        60,
        70,
        85,
        100
    ];


    /*
        Set tinggi awal
    */

    chartBars.forEach(
        (bar, index) => {

            const height =
                chartHeights[index]
                ?? 50;


            bar.style.height =
                `${height}%`;

        }
    );


    /*
        Respect reduced motion
    */

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    if (!reducedMotion) {


        function randomBetween(
            min,
            max
        ) {

            return Math.floor(
                Math.random()
                *
                (
                    max -
                    min +
                    1
                )
            ) + min;

        }


        function animateChart() {


            /*
                Setiap bar bergerak
                dari posisi terakhir.

                Jadi gerakannya tidak
                terasa lompat.
            */

            chartHeights =
                chartHeights.map(
                    height => {

                        const variation =
                            randomBetween(
                                -10,
                                12
                            );


                        return Math.max(
                            25,
                            Math.min(
                                100,
                                height +
                                variation
                            )
                        );

                    }
                );


            /*
                Update tinggi bar
            */

            chartBars.forEach(
                (bar, index) => {

                    bar.style.height =
                        `${chartHeights[index]}%`;

                }
            );


            /*
                Cari bar tertinggi
            */

            const highest =
                Math.max(
                    ...chartHeights
                );


            /*
                Highlight bar tertinggi
            */

            chartBars.forEach(
                (bar, index) => {

                    if (
                        chartHeights[index] ===
                        highest
                    ) {

                        bar.classList.add(
                            "active"
                        );

                    } else {

                        bar.classList.remove(
                            "active"
                        );

                    }

                }
            );

        }


        /*
            Gerakan pertama
        */

        setTimeout(
            animateChart,
            700
        );


        /*
            Update terus
        */

        setInterval(
            animateChart,
            1800
        );

    }

}