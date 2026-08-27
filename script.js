/* =========================================================
   PERSONAL PORTFOLIO
   VANILLA JAVASCRIPT
========================================================= */


/* =========================================================
   PORTFOLIO DATA
========================================================= */

const portfolioData = [

    {
        title: "Modern Landing Page",
        category: "programming",
        image: "assets/flex/Cuplikan layar 2026-08-11 212831-dymasyogaf.webp",
        description:
            "Landing page modern dengan responsive layout dan interactive UI."
    },

    {
        title: "Meta Ads Campaign",
        category: "advertising",
        image: "assets/flex/Cuplikan layar 2026-08-11 213021-dymasyogaf.webp",
        description:
            "Campaign advertising dengan fokus pada performa, audiens dan konversi iklan."
    },

    {
        title: "Cinematic Portrait",
        category: "photography",
        image: "assets/flex/potographer aesthetic-dymasyogaf.webp",
        description:
            "Portrait photography dengan cinematic visual treatment."
    },

    {
        title: "Creative Tech Project",
        category: "achievement",
        image: "assets/flex/SERTIFIKAT JAVASCRIPT ASYAM-dymasyogaf.webp",
        description:
            "Sertifikat kepesertaan kursus online Cisco Networking Academy JavaScript Essentials."
    },

    {
        title: "Campaign Dashboard",
        category: "advertising",
        image: "assets/flex/Cuplikan layar 2026-08-11 213455-dymasyogaf.webp",
        description:
            "Visual dashboard untuk monitoring performa campaign dan iklan."
    },

    {
        title: "Event Documentation",
        category: "photography",
        image: "assets/flex/DSC01807 (2)-dymasyogaf.webp",
        description:
            "Dokumentasi event organisasi dengan pendekatan storytelling."
    },

    {
        title: "Creative Tech Project",
        category: "achievement",
        image: "assets/flex/SERTIFIKAT SOLOLEARN ASYAM (1).webp",
        description:
            "Sertifikat pelatihan online Web Development di SoloLearn."
    },

    {
        title: "Creative Tech Project",
        category: "achievement",
        image: "assets/flex/piag_Informatika - OPSI 2026 (1).webp",
        description:
            "Piagam penghargaan olimpiade online informatika dalam event OPSI 2026 yang diselenggarakan oleh PUSKANAS."
    },

    {
        title: "Typography Portrait",
        category: "photography",
        image: "assets/flex/TYPOGRAFI 6 (1)-dymasyogaf.webp",
        description:
            "Portrait typografi dengan cinematic playable visual treatment."
    }

];


/* =========================================================
   PORTFOLIO
========================================================= */

const portfolioGrid =
    document.getElementById("portfolioGrid");


function renderPortfolio(filter = "all") {

    if (!portfolioGrid) return;

    portfolioGrid.innerHTML = "";

    const filteredData =
        filter === "all"
            ? portfolioData
            : portfolioData.filter(
                item => item.category === filter
            );


    filteredData.forEach((item, index) => {

        const card =
            document.createElement("article");


        card.className =
            "portfolio-card group rounded-3xl reveal";


        card.innerHTML = `

            <div class="relative aspect-[4/3] overflow-hidden rounded-3xl">

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

                            <h3 class="font-bold mt-1">
                                ${item.title}
                            </h3>

                        </div>

                        <span
                            class="w-9 h-9 shrink-0 rounded-full bg-white/10 backdrop-blur flex items-center justify-center group-hover:bg-[#00f5a0] group-hover:text-black transition"
                        >
                            ↗
                        </span>

                    </div>

                    <p
                        class="text-xs text-gray-400 mt-3 line-clamp-2"
                    >
                        ${item.description}
                    </p>

                </div>

            </div>
        `;


        portfolioGrid.appendChild(card);


        setTimeout(() => {
            card.classList.add("active");
        }, index * 80);

    });

}


/* Jalankan portfolio */

renderPortfolio();


/* =========================================================
   PORTFOLIO FILTER
========================================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter =
            button.dataset.filter;


        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });


        button.classList.add("active");


        renderPortfolio(filter);

    });

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("open");

    });

}


/* Tutup mobile menu */

const mobileLinks =
    document.querySelectorAll(".mobile-link");


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (mobileMenu) {
            mobileMenu.classList.remove("open");
        }

    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

let revealObserver;


function observeRevealElements() {

    if (revealObserver) {
        revealObserver.disconnect();
    }


    const revealElements =
        document.querySelectorAll(".reveal");


    revealObserver =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("active");

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

}


/* Jalankan observer */

observeRevealElements();


/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", async (event) => {

        event.preventDefault();

        const submitButton =
            contactForm.querySelector('button[type="submit"]');

        const originalText = submitButton.textContent;

        submitButton.disabled = true;
        submitButton.textContent = "Mengirim...";

        if (formMessage) {
            formMessage.classList.remove("hidden");
            formMessage.textContent = "Mengirim pesan...";
        }

        try {

            const response = await fetch(
                contactForm.action,
                {
                    method: "POST",
                    body: new FormData(contactForm),
                    headers: {
                        "Accept": "application/json"
                    }
                }
            );

            if (response.ok) {

                contactForm.reset();

                if (formMessage) {
                    formMessage.textContent =
                        "Pesan berhasil dikirim! ✓";
                }

                submitButton.textContent = "Terkirim ✓";

                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                }, 3000);

            } else {

                throw new Error("Gagal mengirim");

            }

        } catch (error) {

            if (formMessage) {
                formMessage.textContent =
                    "Gagal mengirim pesan. Coba lagi.";
            }

            submitButton.textContent = originalText;
            submitButton.disabled = false;

        }

    });

}


/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar =
    document.getElementById("navbar");


window.addEventListener("scroll", () => {

    if (!navbar) return;


    if (window.scrollY > 30) {

        navbar.classList.add("shadow-2xl");

    } else {

        navbar.classList.remove("shadow-2xl");

    }

});


/* =========================================================
   LIVE META ADS CHART
========================================================= */

const chartBars = document.querySelectorAll(".chart-bar");

if (chartBars.length) {

    // Tinggi awal masing-masing bar
    const chartHeights = [
        30,
        45,
        35,
        60,
        70,
        85,
        100
    ];

    // Set tinggi awal
    chartBars.forEach((bar, index) => {
        bar.style.height = `${chartHeights[index]}%`;
    });


    function animateChart() {

        chartBars.forEach((bar, index) => {

            // Bar terakhir dibuat sebagai highlight
            if (index === chartBars.length - 1) {
                bar.classList.add("active");
            }

            // Buat variasi gerakan
            const variation =
                Math.floor(Math.random() * 25) - 12;

            let newHeight =
                chartHeights[index] + variation;

            // Batas minimum & maksimum
            newHeight =
                Math.max(25, Math.min(100, newHeight));

            bar.style.height =
                `${newHeight}%`;

        });

    }


    // Animasi pertama
    setTimeout(() => {
        animateChart();
    }, 500);


    // Bergerak setiap 2 detik
    setInterval(() => {
        animateChart();
    }, 2000);

}