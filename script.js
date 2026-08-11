/* =========================================================
   PERSONAL PORTFOLIO
   VANILLA JAVASCRIPT
========================================================= */


/* =========================================================
   PORTFOLIO DATA

   FOTO LO TARUH DI:

   assets/
   └── flex/
       ├── project-website.jpg
       ├── meta-ads.jpg
       ├── foto-portrait.jpg
       ├── achievement.jpg
       ├── campaign-dashboard.jpg
       └── event.jpg

   Tinggal tambah object baru kalau mau tambah Flex.
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
    }

];


/* =========================================================
   PORTFOLIO ELEMENT
========================================================= */

const portfolioGrid =
    document.getElementById("portfolioGrid");


/* =========================================================
   RENDER PORTFOLIO
========================================================= */

function renderPortfolio(filter = "all") {

    if (!portfolioGrid) {
        return;
    }


    portfolioGrid.innerHTML = "";


    const filteredData =
        filter === "all"
            ? portfolioData
            : portfolioData.filter(
                item => item.category === filter
            );


    filteredData.forEach(
        (item, index) => {

            const card =
                document.createElement("article");


            card.className =
                "portfolio-card group rounded-3xl";


            card.innerHTML = `

                <!-- IMAGE -->

                <div
                    class="relative aspect-[4/3] overflow-hidden rounded-3xl"
                >

                    <img
                        src="${item.image}"
                        alt="${item.title}"
                        loading="lazy"
                        class="portfolio-image w-full h-full object-cover"
                    >


                    <!-- OVERLAY -->

                    <div
                        class="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"
                    ></div>


                    <!-- CONTENT -->

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


            /* Reveal card */

            setTimeout(
                () => {
                    card.classList.add("active");
                },
                index * 80
            );

        }
    );

}


/* Jalankan pertama kali */

renderPortfolio();


/* =========================================================
   PORTFOLIO FILTER
========================================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");


filterButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                const filter =
                    button.dataset.filter;


                /* Reset semua button */

                filterButtons.forEach(
                    btn => {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                /* Aktifkan button */

                button.classList.add(
                    "active"
                );


                /* Render */

                renderPortfolio(filter);

            }
        );

    }
);


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");


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


/* Tutup menu setelah klik link */

const mobileLinks =
    document.querySelectorAll(
        ".mobile-link"
    );


mobileLinks.forEach(
    link => {

        link.addEventListener(
            "click",
            () => {

                mobileMenu.classList.remove(
                    "open"
                );

            }
        );

    }
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

let revealObserver;


function observeRevealElements() {

    if (revealObserver) {

        revealObserver.disconnect();

    }


    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    revealObserver =
        new IntersectionObserver(
            (
                entries
            ) => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "active"
                            );


                            revealObserver.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(
        element => {

            revealObserver.observe(
                element
            );

        }
    );

}


/* Jalankan observer */

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
        event => {

            event.preventDefault();


            const formData =
                new FormData(
                    contactForm
                );


            const name =
                formData.get(
                    "name"
                );


            const email =
                formData.get(
                    "email"
                );


            const message =
                formData.get(
                    "message"
                );


            /*
                GANTI EMAIL LO DI SINI
            */

            const targetEmail =
                "hello@example.com";


            const subject =
                encodeURIComponent(
                    `Portfolio Contact — ${name}`
                );


            const body =
                encodeURIComponent(
                    `Nama: ${name}

Email: ${email}

Pesan:
${message}`
                );


            if (formMessage) {

                formMessage.classList.remove(
                    "hidden"
                );

            }


            window.location.href =
                `mailto:${targetEmail}?subject=${subject}&body=${body}`;

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