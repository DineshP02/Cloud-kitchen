/* =========================================================
   BOWL & HEARTH
   SHARED NAVBAR + FOOTER
   ---------------------------------------------------------
   FIXED VERSION
   ✓ HEADER ALWAYS LOADS
   ✓ FOOTER ALWAYS LOADS
   ✓ DOMContentLoaded SAFE
   ✓ ONE APPROVED LOGO
   ✓ SAME LOGO HEADER + FOOTER
   ✓ DESKTOP NAVIGATION
   ✓ DESKTOP HOME DROPDOWN
   ✓ MOBILE MENU
   ✓ MOBILE HOME DROPDOWN
   ✓ MOBILE LANGUAGE DROPDOWN
   ✓ LTR / RTL
   ✓ DARK MODE
   ✓ TABLET RESPONSIVE
   ✓ MOBILE RESPONSIVE
   ✓ FOOTER CTA REMOVED
========================================================= */


/* =========================================================
   WAIT UNTIL HTML IS READY
========================================================= */

(function () {

    "use strict";


    function initBowlAndHearth() {


        /* =====================================================
           NAVIGATION
        ===================================================== */

        const navItems = [

            {
                type: "dropdown",
                label: "Home",
                items: [
                    ["Home 1", "index.html"],
                    ["Home 2", "home-2.html"]
                ]
            },

            {
                type: "link",
                label: "About Us",
                file: "about.html"
            },

            {
                type: "link",
                label: "Menu",
                file: "menu.html"
            },

            {
                type: "link",
                label: "Cloud Kitchen",
                file: "cloud-kitchen.html"
            },

            {
                type: "link",
                label: "Bulk Orders",
                file: "bulk-orders.html"
            },

            {
                type: "link",
                label: "FAQ",
                file: "faq.html"
            },

            {
                type: "link",
                label: "Contact",
                file: "contact.html"
            }

        ];


        /* =====================================================
           PATH HANDLING
        ===================================================== */

        const currentPath =
            window.location.pathname
                .replace(/\\/g, "/");

        const normalizedPath =
            currentPath.replace(/\/+$/, "");

        const insidePagesFolder =
            normalizedPath.includes("/assets/pages/");

        const homeHref =
            insidePagesFolder
                ? "../../index.html"
                : "index.html";

        const pagePrefix =
            insidePagesFolder
                ? ""
                : "assets/pages/";


        /* =====================================================
           CURRENT FILE
        ===================================================== */

        function getCurrentFile() {

            let fileName =
                normalizedPath.split("/").pop();

            if (!fileName) {
                fileName = "index.html";
            }

            return fileName.toLowerCase();

        }


        function isCurrentPage(file) {

            return (
                getCurrentFile() ===
                file.toLowerCase()
            );

        }


        /* =====================================================
           RESOLVE LINKS
        ===================================================== */

        function resolveHref(label, file) {

            if (
                label === "Home 1" ||
                label === "Home"
            ) {
                return homeHref;
            }

            return `${pagePrefix}${file}`;

        }


        /* =====================================================
           RTL / LTR
        ===================================================== */

        const DIR_STORAGE_KEY =
            "bh-direction";


        function getStoredDirection() {

            try {

                const saved =
                    localStorage.getItem(
                        DIR_STORAGE_KEY
                    );

                return saved === "rtl"
                    ? "rtl"
                    : "ltr";

            } catch (error) {

                return "ltr";

            }

        }


        function applyDirection(dir) {

            const safeDirection =
                dir === "rtl"
                    ? "rtl"
                    : "ltr";


            document.documentElement.setAttribute(
                "dir",
                safeDirection
            );


            document.documentElement.setAttribute(
                "lang",
                safeDirection === "rtl"
                    ? "ar"
                    : "en"
            );


            try {

                localStorage.setItem(
                    DIR_STORAGE_KEY,
                    safeDirection
                );

            } catch (error) {}

        }


        const currentDirection =
            getStoredDirection();


        applyDirection(
            currentDirection
        );


        function getDirLabel(dir) {

            return dir === "rtl"
                ? "LTR"
                : "RTL";

        }


        function getDirTitle(dir) {

            return dir === "rtl"
                ? "Switch to left-to-right"
                : "Switch to right-to-left";

        }


        /* =====================================================
           ICONS
        ===================================================== */

        const ICONS = {

            moon: `
                <svg viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     stroke-width="1.8"
                     aria-hidden="true">
                    <path
                        d="M20.5 15.2
                        A8.5 8.5 0 0 1 8.8 3.5
                        8.5 8.5 0 1 0 20.5 15.2Z"
                        stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>
            `,


            sun: `
                <svg viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     stroke-width="1.8"
                     aria-hidden="true">

                    <circle cx="12" cy="12" r="4"/>

                    <path d="M12 2V4"/>
                    <path d="M12 20V22"/>
                    <path d="M4.93 4.93L6.34 6.34"/>
                    <path d="M17.66 17.66L19.07 19.07"/>
                    <path d="M2 12H4"/>
                    <path d="M20 12H22"/>
                    <path d="M4.93 19.07L6.34 17.66"/>
                    <path d="M17.66 6.34L19.07 4.93"/>

                </svg>
            `,


            globe: `
                <svg viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     stroke-width="1.8"
                     aria-hidden="true">

                    <circle cx="12" cy="12" r="9"/>
                    <path d="M3 12h18"/>
                    <path d="M12 3c2.5 2.5 3.5 5.5 3.5 9S14.5 18.5 12 21"/>
                    <path d="M12 3c-2.5 2.5-3.5 5.5-3.5 9S9.5 18.5 12 21"/>

                </svg>
            `,


            arrow: `
                <svg class="bh-small-arrow"
                     viewBox="0 0 24 24"
                     fill="none"
                     stroke="currentColor"
                     stroke-width="2"
                     aria-hidden="true">

                    <path d="M5 12h14"/>
                    <path d="m13 6 6 6-6 6"/>

                </svg>
            `,


            instagram: `
                <svg viewBox="0 0 24 24"
                     fill="none"
                     aria-hidden="true">

                    <rect x="3" y="3"
                          width="18"
                          height="18"
                          rx="5"
                          stroke="#D62976"
                          stroke-width="2"/>

                    <circle cx="12" cy="12"
                            r="4"
                            stroke="#D62976"
                            stroke-width="2"/>

                    <circle cx="17.4" cy="6.6"
                            r="1.2"
                            fill="#D62976"/>

                </svg>
            `,


            facebook: `
                <svg viewBox="0 0 24 24"
                     fill="none"
                     aria-hidden="true">

                    <circle cx="12" cy="12"
                            r="9"
                            fill="#1877F2"/>

                    <path
                        d="M13.5 8H12
                        c-1.1 0-2 .9-2 2v2H8v2h2v5h2.5v-5H15l.5-2h-3V10
                        c0-.3.2-.5.5-.5h1.5V8Z"
                        fill="white"/>

                </svg>
            `,


            whatsapp: `
                <svg viewBox="0 0 24 24"
                     fill="none"
                     aria-hidden="true">

                    <circle cx="12" cy="12"
                            r="9.5"
                            fill="#25D366"/>

                    <path
                        d="M8.3 8.2
                        c.35-.45.8-.45 1.12-.1
                        l1 1.1
                        c.22.25.22.58 0 .85
                        l-.55.7
                        c.75 1.25 1.75 2.25 3.05 3
                        l.72-.52
                        c.28-.2.62-.18.85.04
                        l1.08 1
                        c.35.32.34.8-.08 1.08
                        -.45.3-.95.42-1.45.22
                        -2.2-.7-4.7-3.2-5.4-5.4
                        -.2-.5-.1-1 .26-1.97Z"
                        fill="white"/>

                </svg>
            `

        };


        /* =====================================================
           APPROVED LOGO
        ===================================================== */

        function renderLogoMark() {

            return `

                <svg
                    class="bh-approved-logo-svg"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >

                    <circle
                        cx="40"
                        cy="40"
                        r="36"
                        stroke="currentColor"
                        stroke-width="3"
                    />

                    <circle
                        cx="30"
                        cy="23"
                        r="7"
                        fill="currentColor"
                    />

                    <circle
                        cx="50"
                        cy="23"
                        r="7"
                        fill="currentColor"
                    />

                    <circle
                        cx="40"
                        cy="17"
                        r="8.5"
                        fill="currentColor"
                    />

                    <circle
                        cx="40"
                        cy="27"
                        r="9.5"
                        fill="currentColor"
                    />

                    <rect
                        x="28"
                        y="29"
                        width="24"
                        height="11"
                        rx="3.5"
                        fill="currentColor"
                    />

                    <g
                        stroke="currentColor"
                        stroke-width="2.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >

                        <line
                            x1="27"
                            y1="45"
                            x2="53"
                            y2="67"
                        />

                        <line
                            x1="25"
                            y1="47"
                            x2="29"
                            y2="43"
                        />

                        <line
                            x1="29"
                            y1="51"
                            x2="33"
                            y2="47"
                        />

                        <line
                            x1="33"
                            y1="55"
                            x2="37"
                            y2="51"
                        />

                    </g>

                    <g
                        stroke="currentColor"
                        stroke-width="2.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    >

                        <line
                            x1="53"
                            y1="45"
                            x2="27"
                            y2="67"
                        />

                        <path
                            d="M56 41.5a5 5 0 1 1-7 7 5 5 0 0 1 7-7Z"
                            fill="currentColor"
                            stroke="none"
                        />

                    </g>

                </svg>

            `;

        }


        /* =====================================================
           BRAND
        ===================================================== */

        function renderBrandName() {

            return `

                <span class="bh-brand-mark">

                    ${renderLogoMark()}

                </span>

                <span class="bh-brand-text">

                    <span class="bh-brand-main">
                        Bowl
                    </span>

                    <span class="bh-brand-amp">
                        &amp;
                    </span>

                    <span class="bh-brand-main">
                        Hearth
                    </span>

                </span>

            `;

        }


        /* =====================================================
           DESKTOP NAVIGATION
        ===================================================== */

        function createDesktopNavigation() {

            return navItems.map((item, index) => {

                if (item.type === "link") {

                    const href =
                        resolveHref(
                            item.label,
                            item.file
                        );

                    const active =
                        isCurrentPage(
                            item.file
                        );

                    return `

                        <a
                            href="${href}"
                            class="bh-nav-link ${active ? "bh-active" : ""}"
                            ${active ? 'aria-current="page"' : ""}
                        >
                            ${item.label}
                        </a>

                    `;

                }


                const anyChildActive =
                    item.items.some(
                        ([, file]) =>
                            isCurrentPage(file)
                    );


                const dropdownId =
                    `bh-dropdown-${index}`;


                const subLinks =
                    item.items.map(
                        ([label, file]) => {

                            const href =
                                resolveHref(
                                    label,
                                    file
                                );

                            const active =
                                isCurrentPage(file);

                            return `

                                <a
                                    href="${href}"
                                    class="
                                        bh-nav-dropdown-link
                                        ${active
                                            ? "bh-nav-dropdown-link-active"
                                            : ""}
                                    "
                                    ${active
                                        ? 'aria-current="page"'
                                        : ""}
                                >

                                    <span>
                                        ${label}
                                    </span>

                                    ${ICONS.arrow}

                                </a>

                            `;

                        }
                    ).join("");


                return `

                    <div class="bh-nav-dropdown">

                        <button
                            type="button"
                            class="
                                bh-nav-link
                                bh-nav-dropdown-trigger
                                ${anyChildActive
                                    ? "bh-active"
                                    : ""}
                            "
                            aria-expanded="false"
                            aria-haspopup="true"
                            aria-controls="${dropdownId}"
                        >

                            <span>
                                ${item.label}
                            </span>

                            <span
                                class="bh-dropdown-chevron"
                            >
                                ↓
                            </span>

                        </button>


                        <div
                            class="bh-nav-dropdown-panel"
                            id="${dropdownId}"
                        >

                            ${subLinks}

                        </div>

                    </div>

                `;

            }).join("");

        }


        /* =====================================================
           MOBILE ICONS
        ===================================================== */

        function getMobileIcon(label) {

            const icons = {

                "Home":
                    `<span class="bh-mobile-icon">⌂</span>`,

                "About Us":
                    `<span class="bh-mobile-icon">◉</span>`,

                "Menu":
                    `<span class="bh-mobile-icon">✦</span>`,

                "Cloud Kitchen":
                    `<span class="bh-mobile-icon">♨</span>`,

                "Bulk Orders":
                    `<span class="bh-mobile-icon">▣</span>`,

                "FAQ":
                    `<span class="bh-mobile-icon">?</span>`,

                "Contact":
                    `<span class="bh-mobile-icon">✉</span>`

            };

            return icons[label] || "";

        }


        /* =====================================================
           MOBILE NAVIGATION
        ===================================================== */

        function createMobileNavigation() {

            return navItems.map((item, index) => {

                if (item.type === "link") {

                    const href =
                        resolveHref(
                            item.label,
                            item.file
                        );

                    const active =
                        isCurrentPage(
                            item.file
                        );

                    return `

                        <a
                            href="${href}"
                            class="
                                bh-mobile-link
                                ${active
                                    ? "bh-mobile-active"
                                    : ""}
                            "
                            ${active
                                ? 'aria-current="page"'
                                : ""}
                        >

                            <span class="bh-mobile-link-content">

                                ${getMobileIcon(item.label)}

                                <span>
                                    ${item.label}
                                </span>

                            </span>

                            <span class="bh-mobile-arrow">
                                →
                            </span>

                        </a>

                    `;

                }


                const anyChildActive =
                    item.items.some(
                        ([, file]) =>
                            isCurrentPage(file)
                    );


                const mobileDropdownId =
                    `bh-mobile-dropdown-${index}`;


                const subLinks =
                    item.items.map(
                        ([label, file]) => {

                            const href =
                                resolveHref(
                                    label,
                                    file
                                );

                            const active =
                                isCurrentPage(file);

                            return `

                                <a
                                    href="${href}"
                                    class="
                                        bh-mobile-sublink
                                        ${active
                                            ? "bh-mobile-active"
                                            : ""}
                                    "
                                >

                                    <span>
                                        ${label}
                                    </span>

                                    <span>
                                        →
                                    </span>

                                </a>

                            `;

                        }
                    ).join("");


                return `

                    <div class="bh-mobile-dropdown">

                        <button
                            type="button"
                            class="
                                bh-mobile-link
                                bh-mobile-dropdown-trigger
                                ${anyChildActive
                                    ? "bh-mobile-active"
                                    : ""}
                            "
                            aria-expanded="${anyChildActive}"
                            aria-controls="${mobileDropdownId}"
                        >

                            <span class="bh-mobile-link-content">

                                ${getMobileIcon("Home")}

                                <span>
                                    Home
                                </span>

                            </span>

                            <span>
                                ↓
                            </span>

                        </button>


                        <div
                            id="${mobileDropdownId}"
                            class="
                                bh-mobile-submenu
                                ${anyChildActive
                                    ? "bh-mobile-submenu-open"
                                    : ""}
                            "
                        >

                            ${subLinks}

                        </div>

                    </div>

                `;

            }).join("");

        }


        /* =====================================================
           CSS
        ===================================================== */

        const styleId =
            "bh-navbar-footer-styles";


        const oldStyle =
            document.getElementById(styleId);


        if (oldStyle) {
            oldStyle.remove();
        }


        const style =
            document.createElement("style");


        style.id = styleId;


        style.textContent = `

            html,
            body {
                width:100%;
                max-width:100%;
                margin:0;
                padding:0;
                overflow-x:hidden;
            }


            #bh-navbar,
            #bh-navbar *,
            #bh-mobile-menu,
            #bh-mobile-menu *,
            .bh-footer,
            .bh-footer * {
                box-sizing:border-box;
            }


            /* ================= HEADER ================= */

            #bh-navbar {
                position:fixed !important;
                top:0 !important;
                left:0 !important;
                right:0 !important;
                width:100% !important;
                z-index:99999 !important;

                background:rgba(250,248,244,.97);

                border-bottom:1px solid #e7e5e4;

                box-shadow:
                    0 5px 25px rgba(36,26,20,.08);

                backdrop-filter:blur(18px);
                -webkit-backdrop-filter:blur(18px);
            }


            .bh-navbar-inner {
                width:100%;
                max-width:1440px;
                min-height:78px;
                margin:0 auto;
                padding:0 32px;

                display:flex;
                align-items:center;
                gap:28px;
            }


            .bh-logo {
                display:inline-flex;
                align-items:center;
                gap:11px;

                flex:0 0 auto;

                color:#241a14;
                text-decoration:none;
                white-space:nowrap;
            }


            .bh-brand-mark,
            .bh-footer-logo-icon {
                width:50px;
                height:50px;

                flex:0 0 50px;

                display:flex;
                align-items:center;
                justify-content:center;

                color:#8f2b19;

                border:1px solid rgba(168,52,31,.25);
                border-radius:15px;

                background:
                    linear-gradient(
                        145deg,
                        rgba(168,52,31,.08),
                        rgba(201,134,47,.13)
                    );
            }


            .bh-approved-logo-svg {
                width:43px;
                height:43px;
                display:block;
            }


            .bh-brand-text,
            .bh-footer-logo-text {
                display:inline-flex;
                align-items:baseline;

                font-size:21px;
                line-height:1;
                font-weight:900;
                letter-spacing:-.045em;
            }


            .bh-brand-amp,
            .bh-footer-logo-amp {
                margin:0 4px;
                color:#c9862f;
                font-weight:800;
            }


            /* ================= DESKTOP NAV ================= */

            .bh-desktop-nav {
                display:flex;
                align-items:center;
                justify-content:flex-end;

                gap:8px;
                margin-left:auto;
            }


            .bh-nav-link {
                position:relative;

                height:44px;
                padding:0 12px;

                display:inline-flex;
                align-items:center;
                justify-content:center;
                gap:7px;

                color:#44403c;
                background:transparent;

                border:1px solid transparent;
                border-radius:999px;

                text-decoration:none;

                font-family:inherit;
                font-size:14px;
                font-weight:650;

                white-space:nowrap;
                cursor:pointer;

                transition:.22s ease;
            }


            .bh-nav-link:hover {
                color:#a8341f;
                background:rgba(168,52,31,.055);
                border-color:rgba(168,52,31,.10);
            }


            .bh-nav-link.bh-active {
                color:#a8341f;

                background:
                    linear-gradient(
                        135deg,
                        #fff3e8,
                        #fbe9e4
                    );

                border-color:rgba(168,52,31,.18);

                font-weight:800;
            }


            .bh-nav-dropdown {
                position:relative;
            }


            .bh-nav-dropdown-panel {
                display:none;

                position:absolute;

                top:calc(100% + 1px);
                left:50%;

                transform:translateX(-50%);

                width:155px;

                padding:6px;

                background:#fff;

                border:1px solid #e7e5e4;
                border-radius:12px;

                box-shadow:
                    0 14px 30px rgba(36,26,20,.14);

                z-index:100000;
            }


            .bh-nav-dropdown-panel.bh-dropdown-open {
                display:block;
            }


            .bh-nav-dropdown-link {
                width:100%;
                min-height:38px;

                padding:7px 9px;

                display:flex;
                align-items:center;
                justify-content:space-between;

                border-radius:8px;

                color:#44403c;
                text-decoration:none;

                font-size:12px;
                font-weight:650;
            }


            .bh-nav-dropdown-link:hover,
            .bh-nav-dropdown-link-active {
                background:#fbe9e4;
                color:#a8341f;
            }


            .bh-small-arrow {
                width:13px;
                height:13px;
            }


            /* ================= ACTIONS ================= */

            .bh-actions {
                display:flex;
                align-items:center;
                gap:9px;

                margin-left:auto;
            }


            .bh-lang-button,
            .bh-mobile-lang-trigger {
                height:40px;
                min-width:82px;

                padding:0 14px;

                display:inline-flex;
                align-items:center;
                justify-content:center;
                gap:7px;

                border:1px solid rgba(168,52,31,.35);
                border-radius:999px;

                background:
                    linear-gradient(
                        135deg,
                        #fff8eb,
                        #f8e4c2
                    );

                color:#8f2b19;

                font-size:12px;
                font-weight:850;

                cursor:pointer;
            }


            .bh-lang-icon {
                width:17px;
                height:17px;
                display:flex;
            }


            .bh-lang-icon svg {
                width:100%;
                height:100%;
            }


            .bh-theme-button,
            .bh-menu-button {
                width:40px;
                height:40px;

                display:flex;
                align-items:center;
                justify-content:center;

                padding:0;

                border:1px solid #d6d3d1;
                border-radius:50%;

                background:
                    linear-gradient(
                        145deg,
                        #fff,
                        #f4f1ec
                    );

                color:#6b3f2d;

                cursor:pointer;
            }


            .bh-theme-button svg {
                width:19px;
                height:19px;
            }


            .bh-menu-button {
                display:none;
                font-size:21px;
            }


            /* ================= MOBILE LANGUAGE ================= */

            .bh-mobile-lang-dropdown {
                display:none;
                position:relative;
            }


            .bh-mobile-lang-trigger {
                min-width:38px;
                padding:0 9px;
            }


            .bh-mobile-lang-current {
                font-size:10px;
                font-weight:900;
            }


            .bh-mobile-lang-menu {
                display:none;

                position:absolute;

                top:calc(100% + 8px);
                right:0;

                min-width:108px;

                padding:5px;

                border:1px solid #e7e5e4;
                border-radius:12px;

                background:#fff;

                box-shadow:
                    0 14px 30px rgba(36,26,20,.15);

                z-index:100001;
            }


            .bh-mobile-lang-dropdown.bh-lang-open
            .bh-mobile-lang-menu {
                display:block;
            }


            .bh-mobile-lang-option {
                width:100%;
                min-height:36px;

                padding:7px 10px;

                display:flex;
                align-items:center;
                justify-content:space-between;

                border:0;
                border-radius:8px;

                background:transparent;

                color:#57534e;

                font-family:inherit;
                font-size:12px;
                font-weight:700;

                cursor:pointer;
            }


            .bh-mobile-lang-option:hover,
            .bh-mobile-lang-option.bh-selected {
                background:#fbe9e4;
                color:#a8341f;
            }


            /* ================= MOBILE MENU ================= */

            #bh-mobile-menu {
                display:none;

                width:100%;

                max-height:calc(100vh - 66px);

                overflow-y:auto;

                background:rgba(250,248,244,.99);

                border-top:1px solid #e7e5e4;

                padding:12px 16px 24px;
            }


            #bh-mobile-menu.bh-mobile-open {
                display:block;
            }


            .bh-mobile-link {
                display:flex;
                align-items:center;
                justify-content:space-between;

                width:100%;
                min-height:52px;

                margin:4px 0;
                padding:11px 14px;

                border:1px solid transparent;
                border-radius:13px;

                background:transparent;

                color:#44403c;

                text-decoration:none;

                font-size:15px;
                font-weight:650;

                cursor:pointer;
            }


            .bh-mobile-link-content {
                display:inline-flex;
                align-items:center;
                gap:12px;
            }


            .bh-mobile-icon {
                width:32px;
                height:32px;

                display:flex;
                align-items:center;
                justify-content:center;

                flex:0 0 32px;

                border-radius:10px;

                background:#f5eee5;
                color:#8f2b19;

                font-size:15px;
                font-weight:900;
            }


            .bh-mobile-active {
                background:
                    linear-gradient(
                        135deg,
                        #fff1e7,
                        #fbe9e4
                    ) !important;

                border-color:
                    rgba(168,52,31,.18) !important;

                color:#a8341f !important;

                font-weight:800 !important;
            }


            .bh-mobile-submenu {
                display:none;

                margin:2px 0 8px 16px;
                padding-left:12px;

                border-left:2px solid #e7e5e4;
            }


            .bh-mobile-submenu-open {
                display:block;
            }


            .bh-mobile-sublink {
                display:flex;
                align-items:center;
                justify-content:space-between;

                min-height:44px;

                padding:9px 13px;

                color:#57534e;

                text-decoration:none;

                border-radius:9px;

                font-size:14px;
            }


            /* ================= FOOTER ================= */

            .bh-footer {
                position:relative;

                width:100%;

                overflow:hidden;

                background:
                    linear-gradient(
                        135deg,
                        #faf6f0 0%,
                        #f6eee5 48%,
                        #fbf8f3 100%
                    );

                border-top:1px solid #e7e5e4;
            }


            .bh-footer-inner {
                width:100%;
                max-width:1440px;

                margin:0 auto;

                padding:52px 32px 54px;

                display:grid;

                grid-template-columns:
                    1.45fr .82fr .82fr 1fr;

                gap:52px;

                align-items:start;
            }


            .bh-footer-logo {
                display:inline-flex;
                align-items:center;
                gap:11px;

                color:#241a14;
                text-decoration:none;
                white-space:nowrap;
            }


            .bh-footer-description {
                max-width:455px;

                margin:17px 0 0;

                color:#78716c;

                font-size:14px;
                line-height:1.8;
            }


            .bh-footer-features {
                display:grid;
                gap:7px;
                margin-top:17px;
            }


            .bh-footer-feature {
                display:inline-flex;
                align-items:center;

                width:fit-content;

                gap:8px;

                color:#625b55;

                font-size:11px;
                font-weight:650;
            }


            .bh-footer-feature-icon {
                width:19px;
                height:19px;

                flex:0 0 19px;

                display:flex;
                align-items:center;
                justify-content:center;

                border:1px solid rgba(168,52,31,.12);
                border-radius:50%;

                background:#f1ddd1;

                color:#a8341f;

                font-size:10px;
                font-weight:900;
            }


            .bh-footer-social {
                display:flex;
                align-items:center;

                gap:10px;

                margin-top:22px;
            }


            .bh-footer-social-link {
                width:42px;
                height:42px;

                display:flex;
                align-items:center;
                justify-content:center;

                border:1px solid #e2ddd7;
                border-radius:50%;

                background:#fff;

                text-decoration:none;
            }


            .bh-footer-social-link svg {
                width:21px;
                height:21px;
            }


            .bh-footer-heading {
                position:relative;

                margin:3px 0 20px;
                padding-bottom:10px;

                color:#241a14;

                font-size:14px;
                font-weight:850;

                letter-spacing:.12em;
                text-transform:uppercase;
            }


            .bh-footer-heading::after {
                content:"";

                position:absolute;

                left:0;
                bottom:0;

                width:38px;
                height:3px;

                border-radius:20px;

                background:
                    linear-gradient(
                        90deg,
                        #a8341f,
                        #c9862f
                    );
            }


            .bh-footer-links {
                display:grid;
                gap:5px;
            }


            .bh-footer-link {
                display:flex;
                align-items:center;

                width:fit-content;

                padding:8px 12px 8px 0;

                color:#78716c;

                text-decoration:none;

                font-size:14px;
            }


            .bh-footer-link:hover {
                color:#a8341f;
            }


            .bh-footer-contact {
                display:grid;
                gap:14px;
            }


            .bh-footer-contact-item {
                display:flex;
                align-items:flex-start;

                gap:12px;

                color:#78716c;

                text-decoration:none;

                font-size:13px;
                line-height:1.6;
            }


            .bh-footer-contact-icon {
                width:22px;
                height:22px;

                flex:0 0 22px;

                display:flex;
                align-items:center;
                justify-content:center;

                color:#a8341f;
            }


            .bh-footer-bottom {
                border-top:1px solid #e7e5e4;

                background:rgba(255,255,255,.34);

                padding:18px 32px;
            }


            .bh-footer-bottom-inner {
                width:100%;
                max-width:1440px;

                margin:0 auto;

                display:flex;
                align-items:center;
                justify-content:space-between;

                gap:20px;
            }


            .bh-footer-copy,
            .bh-footer-tagline {
                margin:0;

                color:#a8a29e;

                font-size:12px;
            }


            .bh-footer-legal {
                display:flex;
                align-items:center;
                gap:18px;
            }


            .bh-footer-legal a {
                color:#a8a29e;
                text-decoration:none;
                font-size:12px;
            }


            /* ================= TABLET ================= */

            @media (max-width:1100px) {

                .bh-navbar-inner {
                    min-height:70px;
                    padding:0 24px;
                    gap:10px;
                }


                .bh-desktop-nav {
                    display:none;
                }


                .bh-menu-button {
                    display:flex;
                }


                .bh-lang-button {
                    display:none;
                }


                .bh-mobile-lang-dropdown {
                    display:block;
                }


                .bh-footer-inner {
                    padding:48px 24px;

                    grid-template-columns:
                        minmax(0,1.35fr)
                        minmax(0,.82fr)
                        minmax(0,.82fr)
                        minmax(0,1fr);

                    gap:28px;
                }

            }


            /* ================= SMALL TABLET ================= */

            @media (min-width:641px) and (max-width:850px) {

                .bh-navbar-inner {
                    padding:0 20px;
                }


                .bh-brand-mark,
                .bh-footer-logo-icon {
                    width:44px;
                    height:44px;
                    flex-basis:44px;
                }


                .bh-brand-mark .bh-approved-logo-svg,
                .bh-footer-logo-icon .bh-approved-logo-svg {
                    width:38px;
                    height:38px;
                }


                .bh-brand-text,
                .bh-footer-logo-text {
                    font-size:19px;
                }


                .bh-footer-inner {
                    grid-template-columns:
                        minmax(0,1.25fr)
                        minmax(0,.75fr)
                        minmax(0,.75fr)
                        minmax(0,.95fr);

                    gap:18px;

                    padding:42px 20px;
                }

            }


            /* ================= MOBILE ================= */

            @media (max-width:640px) {

                .bh-navbar-inner {
                    min-height:66px;
                    padding:0 14px;
                    gap:7px;
                }


                .bh-logo {
                    gap:8px;
                }


                .bh-brand-mark,
                .bh-footer-logo-icon {
                    width:38px;
                    height:38px;
                    flex-basis:38px;
                    border-radius:11px;
                }


                .bh-brand-mark .bh-approved-logo-svg,
                .bh-footer-logo-icon .bh-approved-logo-svg {
                    width:33px;
                    height:33px;
                }


                .bh-brand-text,
                .bh-footer-logo-text {
                    font-size:17px;
                }


                .bh-theme-button,
                .bh-menu-button {
                    width:38px;
                    height:38px;
                }


                .bh-mobile-lang-trigger {
                    width:38px;
                    min-width:38px;
                    height:38px;
                }


                .bh-footer-inner {
                    grid-template-columns:1fr;
                    gap:32px;
                    padding:38px 18px 36px;
                }


                .bh-footer-description {
                    max-width:100%;
                    font-size:13px;
                }


                .bh-footer-bottom {
                    padding:18px;
                }


                .bh-footer-bottom-inner {
                    flex-direction:column;
                    align-items:flex-start;
                    gap:10px;
                }


                .bh-footer-legal {
                    flex-wrap:wrap;
                    gap:12px;
                }

            }


            /* ================= EXTRA SMALL ================= */

            @media (max-width:400px) {

                .bh-navbar-inner {
                    padding:0 9px;
                    gap:5px;
                }


                .bh-actions {
                    gap:5px;
                }


                .bh-mobile-lang-trigger {
                    width:38px;
                    min-width:38px;
                    padding:0;
                }


                .bh-mobile-lang-trigger .bh-mobile-lang-current,
                .bh-mobile-lang-trigger .bh-mobile-lang-chevron {
                    display:none;
                }


                .bh-brand-text,
                .bh-footer-logo-text {
                    font-size:15px;
                }

            }


            /* ================= DARK MODE ================= */

            .dark #bh-navbar {
                background:rgba(28,25,23,.98);
                border-bottom-color:#44403c;
            }


            .dark .bh-logo,
            .dark .bh-footer-logo {
                color:#fafaf9;
            }


            .dark .bh-brand-mark,
            .dark .bh-footer-logo-icon {
                color:#f0a54a;
                border-color:rgba(240,165,74,.35);
            }


            .dark .bh-nav-link {
                color:#d6d3d1;
            }


            .dark .bh-nav-link:hover {
                color:#f59e0b;
                background:rgba(245,158,11,.08);
            }


            .dark .bh-nav-link.bh-active {
                color:#f59e0b;
                background:
                    linear-gradient(
                        135deg,
                        #3b2814,
                        #451a03
                    );
            }


            .dark .bh-nav-dropdown-panel {
                background:#1c1917;
                border-color:#44403c;
            }


            .dark .bh-nav-dropdown-link {
                color:#d6d3d1;
            }


            .dark .bh-nav-dropdown-link:hover,
            .dark .bh-nav-dropdown-link-active {
                background:#451a03;
                color:#f59e0b;
            }


            .dark .bh-lang-button,
            .dark .bh-mobile-lang-trigger {
                color:#ffd27a;
                border-color:rgba(245,158,11,.42);

                background:
                    linear-gradient(
                        135deg,
                        #3b2814,
                        #4a3015
                    );
            }


            .dark .bh-theme-button,
            .dark .bh-menu-button {
                color:#f8d27a;
                border-color:#57534e;

                background:
                    linear-gradient(
                        145deg,
                        #292524,
                        #211f1d
                    );
            }


            .dark #bh-mobile-menu {
                background:#1c1917;
                border-color:#44403c;
            }


            .dark .bh-mobile-link {
                color:#d6d3d1;
            }


            .dark .bh-mobile-active {
                background:
                    linear-gradient(
                        135deg,
                        #3b2814,
                        #451a03
                    ) !important;

                color:#f59e0b !important;
            }


            .dark .bh-mobile-icon {
                background:#292524;
                color:#f5b84b;
            }


            .dark .bh-mobile-sublink {
                color:#d6d3d1;
            }


            .dark .bh-footer {
                background:
                    linear-gradient(
                        135deg,
                        #211c18,
                        #1c1917,
                        #211c18
                    );

                border-top-color:#44403c;
            }


            .dark .bh-footer-description,
            .dark .bh-footer-feature,
            .dark .bh-footer-link,
            .dark .bh-footer-contact-item {
                color:#a8a29e;
            }


            .dark .bh-footer-heading {
                color:#fafaf9;
            }


            .dark .bh-footer-contact-icon {
                color:#f59e0b;
            }


            .dark .bh-footer-social-link {
                background:#292524;
                border-color:#44403c;
            }


            .dark .bh-footer-bottom {
                background:rgba(28,25,23,.6);
                border-top-color:#44403c;
            }


            /* ================= RTL ================= */

            [dir="rtl"] .bh-footer-heading::after {
                left:auto;
                right:0;
            }


            [dir="rtl"] .bh-footer-link {
                padding:8px 0 8px 12px;
            }


            [dir="rtl"] .bh-mobile-submenu {
                margin:2px 16px 8px 0;
                padding-left:0;
                padding-right:12px;

                border-left:none;
                border-right:2px solid #e7e5e4;
            }


            [dir="rtl"] .bh-mobile-arrow {
                transform:rotate(180deg);
            }


            [dir="rtl"] .bh-mobile-lang-menu {
                right:auto;
                left:0;
            }


            [dir="rtl"] .bh-footer-inner,
            [dir="rtl"] .bh-footer-bottom-inner {
                direction:rtl;
            }


            [dir="rtl"] .bh-footer-contact-item {
                text-align:right;
            }


            .dark [dir="rtl"] .bh-mobile-submenu {
                border-right-color:#44403c;
            }

        `;


        document.head.appendChild(style);


        /* =====================================================
           HEADER
        ===================================================== */

        const header =
            document.getElementById("site-header");


        if (header) {

            header.innerHTML = `

                <header id="bh-navbar">

                    <div class="bh-navbar-inner">

                        <a
                            href="${homeHref}"
                            class="bh-logo"
                            aria-label="Bowl and Hearth Home"
                        >

                            ${renderBrandName()}

                        </a>


                        <nav
                            class="bh-desktop-nav"
                            aria-label="Main navigation"
                        >

                            ${createDesktopNavigation()}

                        </nav>


                        <div class="bh-actions">

                            <button
                                type="button"
                                id="bh-lang-button"
                                class="bh-lang-button"
                                aria-label="${getDirTitle(currentDirection)}"
                            >

                                <span class="bh-lang-icon">
                                    ${ICONS.globe}
                                </span>

                                <span id="bh-lang-label">
                                    ${getDirLabel(currentDirection)}
                                </span>

                            </button>


                            <div
                                class="bh-mobile-lang-dropdown"
                                id="bh-mobile-lang-dropdown"
                            >

                                <button
                                    type="button"
                                    class="bh-mobile-lang-trigger"
                                    id="bh-mobile-lang-trigger"
                                    aria-expanded="false"
                                >

                                    <span class="bh-lang-icon">
                                        ${ICONS.globe}
                                    </span>

                                    <span
                                        id="bh-mobile-lang-current"
                                        class="bh-mobile-lang-current"
                                    >
                                        ${currentDirection === "rtl"
                                            ? "RTL"
                                            : "LTR"}
                                    </span>

                                    <span class="bh-mobile-lang-chevron">
                                        ↓
                                    </span>

                                </button>


                                <div
                                    class="bh-mobile-lang-menu"
                                    id="bh-mobile-lang-menu"
                                >

                                    <button
                                        type="button"
                                        class="bh-mobile-lang-option bh-selected"
                                        data-direction="ltr"
                                    >
                                        <span>LTR</span>
                                        <span>English</span>
                                    </button>

                                    <button
                                        type="button"
                                        class="bh-mobile-lang-option"
                                        data-direction="rtl"
                                    >
                                        <span>RTL</span>
                                        <span>العربية</span>
                                    </button>

                                </div>

                            </div>


                            <button
                                type="button"
                                id="bh-theme-button"
                                class="bh-theme-button"
                                aria-label="Toggle dark mode"
                            >
                                ${ICONS.moon}
                            </button>


                            <button
                                type="button"
                                id="bh-menu-button"
                                class="bh-menu-button"
                                aria-label="Open menu"
                                aria-expanded="false"
                            >
                                ☰
                            </button>

                        </div>

                    </div>


                    <div id="bh-mobile-menu">

                        ${createMobileNavigation()}

                    </div>

                </header>

            `;

        } else {

            console.warn(
                "Bowl & Hearth: #site-header was not found."
            );

        }


        /* =====================================================
           FOOTER
        ===================================================== */

        const footer =
            document.getElementById("site-footer");


        if (footer) {

            footer.innerHTML = `

                <footer class="bh-footer">

                    <div class="bh-footer-inner">

                        <div class="bh-footer-brand">

                            <a
                                href="${homeHref}"
                                class="bh-footer-logo"
                                aria-label="Bowl and Hearth Home"
                            >

                                <span
                                    class="bh-footer-logo-icon"
                                >
                                    ${renderLogoMark()}
                                </span>


                                <span class="bh-footer-logo-text">

                                    <span>Bowl</span>

                                    <span class="bh-footer-logo-amp">
                                        &amp;
                                    </span>

                                    <span>Hearth</span>

                                </span>

                            </a>


                            <p class="bh-footer-description">

                                Comforting local meals,
                                thoughtful catering and
                                cloud-kitchen convenience —
                                made with honest ingredients
                                and a little extra warmth.

                            </p>


                            <div class="bh-footer-features">

                                <div class="bh-footer-feature">

                                    <span
                                        class="bh-footer-feature-icon"
                                    >
                                        ✓
                                    </span>

                                    <span>
                                        Freshly prepared with care
                                    </span>

                                </div>


                                <div class="bh-footer-feature">

                                    <span
                                        class="bh-footer-feature-icon"
                                    >
                                        ✓
                                    </span>

                                    <span>
                                        Neighbourhood-first service
                                    </span>

                                </div>

                            </div>


                            <div class="bh-footer-social">

                                <a
                                    href="#"
                                    class="bh-footer-social-link"
                                    aria-label="Instagram"
                                >
                                    ${ICONS.instagram}
                                </a>


                                <a
                                    href="#"
                                    class="bh-footer-social-link"
                                    aria-label="Facebook"
                                >
                                    ${ICONS.facebook}
                                </a>


                                <a
                                    href="#"
                                    class="bh-footer-social-link"
                                    aria-label="WhatsApp"
                                >
                                    ${ICONS.whatsapp}
                                </a>

                            </div>

                        </div>


                        <div class="bh-footer-column">

                            <h3 class="bh-footer-heading">
                                Explore
                            </h3>

                            <div class="bh-footer-links">

                                <a
                                    href="${pagePrefix}about.html"
                                    class="bh-footer-link"
                                >
                                    About Us
                                </a>

                                <a
                                    href="${pagePrefix}menu.html"
                                    class="bh-footer-link"
                                >
                                    Our Menu
                                </a>

                                <a
                                    href="${pagePrefix}cloud-kitchen.html"
                                    class="bh-footer-link"
                                >
                                    Cloud Kitchen
                                </a>

                                <a
                                    href="${pagePrefix}faq.html"
                                    class="bh-footer-link"
                                >
                                    FAQs
                                </a>

                                <a
                                    href="${pagePrefix}contact.html"
                                    class="bh-footer-link"
                                >
                                    Contact Us
                                </a>

                            </div>

                        </div>


                        <div class="bh-footer-column">

                            <h3 class="bh-footer-heading">
                                What We Do
                            </h3>

                            <div class="bh-footer-links">

                                <a
                                    href="${pagePrefix}menu.html"
                                    class="bh-footer-link"
                                >
                                    Everyday Meals
                                </a>

                                <a
                                    href="${pagePrefix}cloud-kitchen.html"
                                    class="bh-footer-link"
                                >
                                    Cloud Kitchen
                                </a>

                                <a
                                    href="${pagePrefix}bulk-orders.html"
                                    class="bh-footer-link"
                                >
                                    Office Catering
                                </a>

                                <a
                                    href="${pagePrefix}bulk-orders.html"
                                    class="bh-footer-link"
                                >
                                    Party Orders
                                </a>

                                <a
                                    href="${pagePrefix}bulk-orders.html"
                                    class="bh-footer-link"
                                >
                                    Bulk Orders
                                </a>

                            </div>

                        </div>


                        <div class="bh-footer-column">

                            <h3 class="bh-footer-heading">
                                Get In Touch
                            </h3>

                            <div class="bh-footer-contact">

                                <a
                                    href="tel:+919876543210"
                                    class="bh-footer-contact-item"
                                >

                                    <span class="bh-footer-contact-icon">
                                        ☎
                                    </span>

                                    <span>
                                        +91 98765 43210
                                    </span>

                                </a>


                                <a
                                    href="mailto:hello@bowlandhearth.example"
                                    class="bh-footer-contact-item"
                                >

                                    <span class="bh-footer-contact-icon">
                                        ✉
                                    </span>

                                    <span>
                                        hello@bowlandhearth.example
                                    </span>

                                </a>


                                <div class="bh-footer-contact-item">

                                    <span class="bh-footer-contact-icon">
                                        ⌖
                                    </span>

                                    <span>
                                        Serving local neighbourhoods
                                        <br>
                                        with warmth &amp; care
                                    </span>

                                </div>


                                <div class="bh-footer-contact-item">

                                    <span class="bh-footer-contact-icon">
                                        ◷
                                    </span>

                                    <span>
                                        Mon – Sun
                                        <br>
                                        7:00 AM – 10:00 PM
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>


                    <div class="bh-footer-bottom">

                        <div class="bh-footer-bottom-inner">

                            <p class="bh-footer-copy">

                                © ${new Date().getFullYear()}
                                Bowl &amp; Hearth.
                                All rights reserved.

                            </p>


                            <p class="bh-footer-tagline">

                                Made with care • Served with warmth

                            </p>


                            <div class="bh-footer-legal">

                                <a href="#">
                                    Privacy
                                </a>

                                <a href="#">
                                    Terms
                                </a>

                            </div>

                        </div>

                    </div>

                </footer>

            `;

        } else {

            console.warn(
                "Bowl & Hearth: #site-footer was not found."
            );

        }


        /* =====================================================
           MOBILE MENU
        ===================================================== */

        const menuButton =
            document.getElementById("bh-menu-button");

        const mobileMenu =
            document.getElementById("bh-mobile-menu");


        function closeMobileMenu() {

            if (!mobileMenu) return;

            mobileMenu.classList.remove(
                "bh-mobile-open"
            );


            if (menuButton) {

                menuButton.textContent = "☰";

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }


        if (menuButton && mobileMenu) {

            menuButton.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();

                    const isOpen =
                        mobileMenu.classList.contains(
                            "bh-mobile-open"
                        );


                    if (isOpen) {

                        closeMobileMenu();

                    } else {

                        mobileMenu.classList.add(
                            "bh-mobile-open"
                        );

                        menuButton.textContent = "✕";

                        menuButton.setAttribute(
                            "aria-expanded",
                            "true"
                        );

                    }

                }
            );


            mobileMenu
                .querySelectorAll("a")
                .forEach(function (link) {

                    link.addEventListener(
                        "click",
                        closeMobileMenu
                    );

                });

        }


        /* =====================================================
           DESKTOP DROPDOWN
        ===================================================== */

        const dropdowns =
            document.querySelectorAll(
                ".bh-nav-dropdown"
            );


        dropdowns.forEach(
            function (dropdown) {

                const trigger =
                    dropdown.querySelector(
                        ".bh-nav-dropdown-trigger"
                    );

                const panel =
                    dropdown.querySelector(
                        ".bh-nav-dropdown-panel"
                    );


                if (!trigger || !panel) return;


                trigger.addEventListener(
                    "click",
                    function (event) {

                        event.stopPropagation();

                        const open =
                            panel.classList.contains(
                                "bh-dropdown-open"
                            );


                        document
                            .querySelectorAll(
                                ".bh-nav-dropdown-panel"
                            )
                            .forEach(function (p) {

                                p.classList.remove(
                                    "bh-dropdown-open"
                                );

                            });


                        document
                            .querySelectorAll(
                                ".bh-nav-dropdown-trigger"
                            )
                            .forEach(function (t) {

                                t.setAttribute(
                                    "aria-expanded",
                                    "false"
                                );

                            });


                        if (!open) {

                            panel.classList.add(
                                "bh-dropdown-open"
                            );

                            trigger.setAttribute(
                                "aria-expanded",
                                "true"
                            );

                        }

                    }
                );

            }
        );


        /* =====================================================
           MOBILE HOME DROPDOWN
        ===================================================== */

        document
            .querySelectorAll(
                ".bh-mobile-dropdown-trigger"
            )
            .forEach(function (trigger) {

                trigger.addEventListener(
                    "click",
                    function (event) {

                        event.stopPropagation();

                        const id =
                            trigger.getAttribute(
                                "aria-controls"
                            );


                        const submenu =
                            document.getElementById(id);


                        if (!submenu) return;


                        const open =
                            submenu.classList.contains(
                                "bh-mobile-submenu-open"
                            );


                        submenu.classList.toggle(
                            "bh-mobile-submenu-open",
                            !open
                        );


                        trigger.setAttribute(
                            "aria-expanded",
                            String(!open)
                        );

                    }
                );

            });


        /* =====================================================
           LANGUAGE
        ===================================================== */

        const langButton =
            document.getElementById(
                "bh-lang-button"
            );


        const mobileLangDropdown =
            document.getElementById(
                "bh-mobile-lang-dropdown"
            );


        const mobileLangTrigger =
            document.getElementById(
                "bh-mobile-lang-trigger"
            );


        const mobileLangOptions =
            document.querySelectorAll(
                ".bh-mobile-lang-option"
            );


        function updateDirectionUI(dir) {

            const label =
                getDirLabel(dir);


            const langLabel =
                document.getElementById(
                    "bh-lang-label"
                );


            const mobileCurrent =
                document.getElementById(
                    "bh-mobile-lang-current"
                );


            if (langLabel) {
                langLabel.textContent = label;
            }


            if (mobileCurrent) {

                mobileCurrent.textContent =
                    dir === "rtl"
                        ? "RTL"
                        : "LTR";

            }


            mobileLangOptions.forEach(
                function (option) {

                    option.classList.toggle(
                        "bh-selected",
                        option.getAttribute(
                            "data-direction"
                        ) === dir
                    );

                }
            );

        }


        function changeDirection(dir) {

            const direction =
                dir === "rtl"
                    ? "rtl"
                    : "ltr";


            applyDirection(direction);

            updateDirectionUI(direction);

        }


        if (langButton) {

            langButton.addEventListener(
                "click",
                function () {

                    const current =
                        document.documentElement
                            .getAttribute("dir") === "rtl"
                            ? "rtl"
                            : "ltr";


                    changeDirection(
                        current === "rtl"
                            ? "ltr"
                            : "rtl"
                    );

                }
            );

        }


        if (mobileLangTrigger) {

            mobileLangTrigger.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();


                    if (!mobileLangDropdown) return;


                    mobileLangDropdown.classList.toggle(
                        "bh-lang-open"
                    );


                    mobileLangTrigger.setAttribute(
                        "aria-expanded",
                        mobileLangDropdown.classList.contains(
                            "bh-lang-open"
                        )
                    );

                }
            );

        }


        mobileLangOptions.forEach(
            function (option) {

                option.addEventListener(
                    "click",
                    function () {

                        const direction =
                            option.getAttribute(
                                "data-direction"
                            );


                        if (
                            direction === "ltr" ||
                            direction === "rtl"
                        ) {

                            changeDirection(
                                direction
                            );

                        }


                        if (mobileLangDropdown) {

                            mobileLangDropdown.classList.remove(
                                "bh-lang-open"
                            );

                        }

                    }
                );

            }
        );


        /* =====================================================
           DARK MODE
        ===================================================== */

        const themeButton =
            document.getElementById(
                "bh-theme-button"
            );


        function updateThemeIcon() {

            if (!themeButton) return;


            const dark =
                document.documentElement
                    .classList.contains("dark");


            themeButton.innerHTML =
                dark
                    ? ICONS.sun
                    : ICONS.moon;

        }


        function loadTheme() {

            try {

                const saved =
                    localStorage.getItem(
                        "bh-theme"
                    );


                if (saved === "dark") {

                    document.documentElement
                        .classList.add("dark");

                }


                if (saved === "light") {

                    document.documentElement
                        .classList.remove("dark");

                }

            } catch (error) {}

        }


        function toggleTheme() {

            const dark =
                document.documentElement
                    .classList.contains("dark");


            document.documentElement
                .classList.toggle(
                    "dark",
                    !dark
                );


            try {

                localStorage.setItem(
                    "bh-theme",
                    dark
                        ? "light"
                        : "dark"
                );

            } catch (error) {}


            updateThemeIcon();

        }


        loadTheme();


        if (themeButton) {

            themeButton.addEventListener(
                "click",
                toggleTheme
            );

        }


        updateThemeIcon();


        /* =====================================================
           OUTSIDE CLICK
        ===================================================== */

        document.addEventListener(
            "click",
            function () {

                document
                    .querySelectorAll(
                        ".bh-nav-dropdown-panel"
                    )
                    .forEach(function (panel) {

                        panel.classList.remove(
                            "bh-dropdown-open"
                        );

                    });


                if (mobileLangDropdown) {

                    mobileLangDropdown.classList.remove(
                        "bh-lang-open"
                    );

                }

            }
        );


        /* =====================================================
           ESCAPE
        ===================================================== */

        document.addEventListener(
            "keydown",
            function (event) {

                if (event.key !== "Escape") return;


                document
                    .querySelectorAll(
                        ".bh-nav-dropdown-panel"
                    )
                    .forEach(function (panel) {

                        panel.classList.remove(
                            "bh-dropdown-open"
                        );

                    });


                closeMobileMenu();


                if (mobileLangDropdown) {

                    mobileLangDropdown.classList.remove(
                        "bh-lang-open"
                    );

                }

            }
        );


        /* =====================================================
           FINAL DIRECTION
        ===================================================== */

        updateDirectionUI(
            getStoredDirection()
        );


        console.log(
            "Bowl & Hearth header and footer loaded successfully."
        );

    }


    /* =========================================================
       IMPORTANT FIX
       ---------------------------------------------------------
       If script is in <head>, wait for DOM.
       If script is at bottom, run immediately.
    ========================================================= */

    if (
        document.readyState === "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            initBowlAndHearth
        );

    } else {

        initBowlAndHearth();

    }

})();