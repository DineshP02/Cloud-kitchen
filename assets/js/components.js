/* =========================================================
   BOWL & HEARTH
   SHARED NAVBAR + FOOTER
   FULL-WIDTH PREMIUM RESPONSIVE VERSION
   LTR / RTL + DARK MODE
   MOBILE RTL/LTR DROPDOWN
   TABLET FOOTER SAME STYLE AS DESKTOP
   ========================================================= */


/* =========================================================
   NAVIGATION
========================================================= */

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


/* =========================================================
   PATH HANDLING
========================================================= */

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


/* =========================================================
   CURRENT FILE
========================================================= */

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


/* =========================================================
   RESOLVE LINK
========================================================= */

function resolveHref(label, file) {

    if (
        label === "Home 1" ||
        label === "Home"
    ) {
        return homeHref;
    }

    return `${pagePrefix}${file}`;

}


/* =========================================================
   RTL / LTR
========================================================= */

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


/* =========================================================
   DIRECTION LABELS
========================================================= */

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


/* =========================================================
   ICONS
========================================================= */

const ICONS = {

    moon: `
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            aria-hidden="true"
        >
            <path
                d="M20.5 15.2
                A8.5 8.5 0 0 1 8.8 3.5
                8.5 8.5 0 1 0 20.5 15.2Z"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    `,

    sun: `
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            aria-hidden="true"
        >
            <circle
                cx="12"
                cy="12"
                r="4"
            />

            <path d="M12 2V4" />
            <path d="M12 20V22" />
            <path d="M4.93 4.93L6.34 6.34" />
            <path d="M17.66 17.66L19.07 19.07" />
            <path d="M2 12H4" />
            <path d="M20 12H22" />
            <path d="M4.93 19.07L6.34 17.66" />
            <path d="M17.66 6.34L19.07 4.93" />
        </svg>
    `,

    globe: `
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            aria-hidden="true"
        >
            <circle
                cx="12"
                cy="12"
                r="9"
            />

            <path d="M3 12h18" />

            <path
                d="M12 3c2.5 2.5 3.5 5.5 3.5 9S14.5 18.5 12 21"
            />

            <path
                d="M12 3c-2.5 2.5-3.5 5.5-3.5 9S9.5 18.5 12 21"
            />
        </svg>
    `,

    arrow: `
        <svg
            class="bh-small-arrow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            aria-hidden="true"
        >
            <path d="M5 12h14" />
            <path d="m13 6 6 6-6 6" />
        </svg>
    `,

    sparkle: `
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            aria-hidden="true"
        >
            <path
                d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2Z"
            />

            <path
                d="M19 17l.7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7L19 17Z"
            />
        </svg>
    `,

    instagram: `
        <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
        >
            <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                stroke="#D62976"
                stroke-width="2"
            />

            <circle
                cx="12"
                cy="12"
                r="4"
                stroke="#D62976"
                stroke-width="2"
            />

            <circle
                cx="17.4"
                cy="6.6"
                r="1.2"
                fill="#D62976"
            />
        </svg>
    `,

    facebook: `
        <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
        >
            <circle
                cx="12"
                cy="12"
                r="9"
                fill="#1877F2"
            />

            <path
                d="M13.5 8H12
                c-1.1 0-2 .9-2 2v2H8v2h2v5h2.5v-5H15l.5-2h-3V10
                c0-.3.2-.5.5-.5h1.5V8Z"
                fill="white"
            />
        </svg>
    `,

    whatsapp: `
        <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
        >
            <circle
                cx="12"
                cy="12"
                r="9.5"
                fill="#25D366"
            />

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
                fill="white"
            />
        </svg>
    `

};


/* =========================================================
   LOGO
========================================================= */

function renderBrandName() {

    return `

        <span
            class="bh-brand-mark"
            aria-hidden="true"
        >

            <svg
                viewBox="0 0 80 80"
                fill="none"
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
                        d="M56 41.5a5 5 0 1 1 -7 7 5 5 0 0 1 7-7Z"
                        fill="currentColor"
                        stroke="none"
                    />

                </g>

            </svg>

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


/* =========================================================
   DESKTOP NAVIGATION
========================================================= */

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
            item.items
                .map(([label, file]) => {

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
                            ${active ? 'aria-current="page"' : ""}
                        >

                            <span>
                                ${label}
                            </span>

                            ${ICONS.arrow}

                        </a>

                    `;

                })
                .join("");


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
                        aria-hidden="true"
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


/* =========================================================
   MOBILE ICONS
========================================================= */

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


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

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
                    ${active ? 'aria-current="page"' : ""}
                >

                    <span class="bh-mobile-link-content">

                        ${getMobileIcon(item.label)}

                        <span>
                            ${item.label}
                        </span>

                    </span>

                    <span
                        class="bh-mobile-arrow"
                        aria-hidden="true"
                    >
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
            item.items
                .map(([label, file]) => {

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
                            ${active ? 'aria-current="page"' : ""}
                        >

                            <span>
                                ${label}
                            </span>

                            <span
                                class="bh-mobile-sub-arrow"
                                aria-hidden="true"
                            >
                                →
                            </span>

                        </a>

                    `;

                })
                .join("");


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

                    <span
                        class="bh-mobile-chevron"
                        aria-hidden="true"
                    >
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


/* =========================================================
   CSS
========================================================= */

const styleId =
    "bh-navbar-footer-styles";

const oldStyle =
    document.getElementById(styleId);

if (oldStyle) {
    oldStyle.remove();
}


const style =
    document.createElement("style");

style.id =
    styleId;


style.textContent = `

/* =========================================================
   GLOBAL
========================================================= */

html,
body {

    width: 100%;
    max-width: 100%;

    margin: 0;
    padding: 0;

    overflow-x: hidden;

}


#bh-navbar,
#bh-navbar *,
#bh-mobile-menu,
#bh-mobile-menu * {

    box-sizing: border-box;

}


/* =========================================================
   NAVBAR
========================================================= */

#bh-navbar {

    position: fixed !important;

    top: 0 !important;
    left: 0 !important;
    right: 0 !important;

    width: 100% !important;
    max-width: 100% !important;

    margin: 0 !important;

    z-index: 99999 !important;

    background:
        rgba(250,248,244,.97);

    border-bottom:
        1px solid #e7e5e4;

    box-shadow:
        0 5px 25px
        rgba(36,26,20,.08);

    backdrop-filter:
        blur(18px);

    -webkit-backdrop-filter:
        blur(18px);

}


.bh-navbar-inner {

    width: 100% !important;
    max-width: none !important;

    min-height: 78px;

    margin: 0 !important;

    padding:
        0 40px;

    display: flex;

    align-items: center;

    gap: 28px;

}


/* =========================================================
   LOGO
========================================================= */

.bh-logo {

    display: inline-flex;

    align-items: center;

    gap: 11px;

    flex-shrink: 0;

    color: #241a14;

    text-decoration: none;

    white-space: nowrap;

}


.bh-brand-mark {

    width: 50px;
    height: 50px;

    flex: 0 0 50px;

    display: flex;

    align-items: center;
    justify-content: center;

    color: #8f2b19;

    border:
        1px solid
        rgba(168,52,31,.25);

    border-radius: 15px;

    background:
        linear-gradient(
            145deg,
            rgba(168,52,31,.08),
            rgba(201,134,47,.13)
        );

}


.bh-brand-mark svg {

    width: 43px;
    height: 43px;

    display: block;

}


.bh-brand-text {

    display: inline-flex;

    align-items: baseline;

    font-size: 21px;

    line-height: 1;

    font-weight: 900;

    letter-spacing: -.045em;

}


.bh-brand-amp {

    margin:
        0 4px;

    color:
        #c9862f;

    font-weight: 800;

}


/* =========================================================
   DESKTOP NAV
========================================================= */

.bh-desktop-nav {

    display: flex;

    align-items: center;

    justify-content: flex-end;

    gap: 12px;

    margin-left: auto;

}


/* =========================================================
   NAVIGATION HIGHLIGHTING
========================================================= */

.bh-nav-link {

    position: relative;

    height: 44px;

    padding:
        0 13px;

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 7px;

    color: #44403c;

    background: transparent;

    border: 1px solid transparent;

    border-radius: 999px;

    text-decoration: none;

    font-family: inherit;

    font-size: 14px;

    font-weight: 650;

    white-space: nowrap;

    cursor: pointer;

    transition:
        color .22s ease,
        background .22s ease,
        border-color .22s ease,
        box-shadow .22s ease,
        transform .22s ease;

}


.bh-nav-link:hover {

    color:
        #a8341f;

    background:
        rgba(168,52,31,.055);

    border-color:
        rgba(168,52,31,.10);

}


.bh-nav-link.bh-active {

    color:
        #a8341f;

    background:
        linear-gradient(
            135deg,
            #fff3e8,
            #fbe9e4
        );

    border-color:
        rgba(168,52,31,.18);

    font-weight:
        800;

    box-shadow:
        0 4px 12px
        rgba(168,52,31,.08);

}


.bh-nav-link.bh-active::after {

    content: "";

    position: absolute;

    left: 18px;
    right: 18px;

    bottom: -5px;

    height: 3px;

    border-radius:
        999px;

    background:
        linear-gradient(
            90deg,
            #a8341f,
            #c9862f
        );

    box-shadow:
        0 2px 5px
        rgba(168,52,31,.18);

}


/* =========================================================
   DESKTOP DROPDOWN
========================================================= */

.bh-nav-dropdown {

    position: relative;

}


.bh-nav-dropdown-panel {

    display: none;

    position: absolute;

    top:
        calc(100% + 1px);

    left: 50%;

    transform:
        translateX(-50%);

    width: 150px;

    padding: 6px;

    background:
        #ffffff;

    border:
        1px solid #e7e5e4;

    border-radius: 12px;

    box-shadow:
        0 14px 30px
        rgba(36,26,20,.14);

    z-index: 100000;

}


.bh-nav-dropdown-panel.bh-dropdown-open {

    display: block;

}


.bh-nav-dropdown-link {

    width: 100%;

    min-height: 38px;

    padding:
        7px 9px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 7px;

    border-radius: 8px;

    color:
        #44403c;

    text-decoration: none;

    font-size: 12px;

    font-weight: 650;

}


.bh-nav-dropdown-link:hover {

    background:
        #faf5ec;

    color:
        #a8341f;

}


.bh-nav-dropdown-link-active {

    background:
        #fbe9e4;

    color:
        #a8341f;

    font-weight:
        800;

}


.bh-small-arrow {

    width: 13px;
    height: 13px;

}


.bh-dropdown-chevron {

    font-size: 11px;

}


/* =========================================================
   ACTIONS
========================================================= */

.bh-actions {

    display: flex;

    align-items: center;

    gap: 9px;

    margin-left: 10px;

}


.bh-lang-button {

    height: 40px;

    min-width: 82px;

    padding:
        0 14px;

    display: inline-flex;

    align-items: center;

    justify-content: center;

    gap: 7px;

    border:
        1px solid
        rgba(168,52,31,.35);

    border-radius: 999px;

    background:
        linear-gradient(
            135deg,
            #fff8eb,
            #f8e4c2
        );

    color:
        #8f2b19;

    font-size: 12px;

    font-weight: 850;

    cursor: pointer;

}


.bh-lang-icon {

    width: 17px;
    height: 17px;

    display: flex;

}


.bh-lang-icon svg {

    width: 100%;
    height: 100%;

}


/* =========================================================
   MOBILE LANGUAGE DROPDOWN
========================================================= */

.bh-mobile-lang-dropdown {

    display: none;

    position: relative;

}


.bh-mobile-lang-trigger {

    height: 38px;

    min-width: 38px;

    padding: 0 9px;

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 5px;

    border:
        1px solid
        rgba(168,52,31,.35);

    border-radius: 999px;

    background:
        linear-gradient(
            135deg,
            #fff8eb,
            #f8e4c2
        );

    color:
        #8f2b19;

    cursor: pointer;

}


.bh-mobile-lang-current {

    font-size: 10px;

    font-weight: 900;

}


.bh-mobile-lang-chevron {

    font-size: 9px;

}


.bh-mobile-lang-menu {

    display: none;

    position: absolute;

    top:
        calc(100% + 8px);

    right: 0;

    min-width: 108px;

    padding: 5px;

    border:
        1px solid #e7e5e4;

    border-radius: 12px;

    background:
        #ffffff;

    box-shadow:
        0 14px 30px
        rgba(36,26,20,.15);

    z-index: 100001;

}


.bh-mobile-lang-dropdown.bh-lang-open
.bh-mobile-lang-menu {

    display: block;

}


.bh-mobile-lang-option {

    width: 100%;

    min-height: 36px;

    padding:
        7px 10px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    border: none;

    border-radius: 8px;

    background: transparent;

    color: #57534e;

    font-family: inherit;

    font-size: 12px;

    font-weight: 700;

    cursor: pointer;

}


.bh-mobile-lang-option:hover {

    background:
        #faf5ec;

}


.bh-mobile-lang-option.bh-selected {

    background:
        #fbe9e4;

    color:
        #a8341f;

}


/* =========================================================
   THEME + MENU
========================================================= */

.bh-theme-button,
.bh-menu-button {

    width: 40px;
    height: 40px;

    display: flex;

    align-items: center;
    justify-content: center;

    padding: 0;

    border:
        1px solid #d6d3d1;

    border-radius: 50%;

    background:
        linear-gradient(
            145deg,
            #ffffff,
            #f4f1ec
        );

    color:
        #6b3f2d;

    cursor: pointer;

}


.bh-theme-button svg {

    width: 19px;
    height: 19px;

}


.bh-menu-button {

    display: none;

    font-size: 21px;

}


/* =========================================================
   MOBILE MENU
========================================================= */

#bh-mobile-menu {

    display: none;

    width: 100%;

    max-height:
        calc(100vh - 66px);

    overflow-y: auto;

    background:
        rgba(250,248,244,.99);

    border-top:
        1px solid #e7e5e4;

    padding:
        12px 16px 24px;

}


#bh-mobile-menu.bh-mobile-open {

    display: block;

}


.bh-mobile-link {

    display: flex;

    align-items: center;

    justify-content: space-between;

    width: 100%;

    min-height: 52px;

    margin: 4px 0;

    padding:
        11px 14px;

    border:
        1px solid transparent;

    border-radius: 13px;

    background:
        transparent;

    color:
        #44403c;

    text-decoration:
        none;

    font-size:
        15px;

    font-weight:
        650;

    cursor:
        pointer;

}


.bh-mobile-link-content {

    display: inline-flex;

    align-items: center;

    gap: 12px;

}


.bh-mobile-icon {

    width: 32px;
    height: 32px;

    display: flex;

    align-items: center;
    justify-content: center;

    flex: 0 0 32px;

    border-radius: 10px;

    background:
        #f5eee5;

    color:
        #8f2b19;

    font-size: 15px;

    font-weight: 900;

}


.bh-mobile-arrow {

    font-size: 19px;

    color:
        #a8a29e;

}


/* =========================================================
   MOBILE ACTIVE
========================================================= */

.bh-mobile-active {

    background:
        linear-gradient(
            135deg,
            #fff1e7,
            #fbe9e4
        ) !important;

    border-color:
        rgba(168,52,31,.18) !important;

    color:
        #a8341f !important;

    font-weight:
        800 !important;

    box-shadow:
        0 4px 12px
        rgba(168,52,31,.07);

}


/* =========================================================
   MOBILE SUBMENU
========================================================= */

.bh-mobile-submenu {

    display: none;

    margin:
        2px 0 8px 16px;

    padding-left:
        12px;

    border-left:
        2px solid #e7e5e4;

}


.bh-mobile-submenu-open {

    display: block;

}


.bh-mobile-sublink {

    display: flex;

    align-items: center;

    justify-content: space-between;

    min-height: 44px;

    padding:
        9px 13px;

    color:
        #57534e;

    text-decoration:
        none;

    border-radius: 9px;

    font-size: 14px;

}


.bh-mobile-sublink:hover {

    background:
        #faf5ec;

    color:
        #a8341f;

}


.bh-mobile-sub-arrow {

    transition:
        transform .2s ease;

}


/* =========================================================
   FOOTER
========================================================= */

.bh-footer {

    position: relative;

    width: 100%;

    overflow: hidden;

    background:
        linear-gradient(
            135deg,
            #faf6f0 0%,
            #f6eee5 48%,
            #fbf8f3 100%
        );

    border-top:
        1px solid #e7e5e4;

}


/* =========================================================
   FOOTER CTA
========================================================= */

.bh-footer-cta {

    position: relative;

    z-index: 2;

    max-width:
        1376px;

    margin:
        0 auto;

    padding:
        48px 32px 42px;

}


.bh-footer-cta-card {

    position: relative;

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 30px;

    min-height:
        150px;

    padding:
        30px 34px;

    border:
        1px solid
        rgba(168,52,31,.20);

    border-radius:
        24px;

    background:
        linear-gradient(
            135deg,
            #762b1c,
            #8f3422 55%,
            #aa5c2b
        );

    color:
        #ffffff;

    overflow:
        hidden;

    box-shadow:
        0 18px 40px
        rgba(111,40,28,.14);

}


.bh-footer-cta-card::after {

    content: "";

    position: absolute;

    width:
        190px;

    height:
        190px;

    right:
        30px;

    top:
        -115px;

    border:
        1px solid
        rgba(255,255,255,.20);

    border-radius:
        50%;

}


.bh-footer-cta-content {

    position: relative;

    z-index: 2;

    max-width:
        700px;

}


.bh-footer-cta-kicker {

    display:
        inline-flex;

    align-items:
        center;

    gap:
        7px;

    margin-bottom:
        9px;

    font-size:
        11px;

    font-weight:
        800;

    letter-spacing:
        .16em;

}


.bh-footer-cta-kicker svg {

    width:
        15px;

    height:
        15px;

}


.bh-footer-cta-title {

    margin:
        0;

    font-size:
        clamp(22px, 3vw, 32px);

    line-height:
        1.2;

    font-weight:
        900;

}


.bh-footer-cta-text {

    margin:
        9px 0 0;

    max-width:
        650px;

    color:
        rgba(255,255,255,.78);

    font-size:
        14px;

    line-height:
        1.7;

}


.bh-footer-cta-actions {

    position:
        relative;

    z-index:
        3;

}


.bh-footer-cta-button {

    display:
        inline-flex;

    align-items:
        center;

    justify-content:
        center;

    min-height:
        46px;

    padding:
        0 22px;

    border-radius:
        999px;

    background:
        #ffffff;

    color:
        #7d2d1d;

    text-decoration:
        none;

    font-size:
        13px;

    font-weight:
        850;

}


.bh-footer-cta-button:hover {

    transform:
        translateY(-1px);

}


/* =========================================================
   FOOTER MAIN
========================================================= */

.bh-footer-inner {

    width:
        100%;

    max-width:
        1440px;

    margin:
        0 auto;

    padding:
        18px 32px 54px;

    display:
        grid;

    grid-template-columns:
        1.45fr
        .82fr
        .82fr
        1fr;

    gap:
        52px;

}


/* =========================================================
   FOOTER BRAND
========================================================= */

.bh-footer-brand {

    min-width:
        0;

}


.bh-footer-logo {

    display:
        inline-flex;

    align-items:
        center;

    gap:
        10px;

    color:
        #241a14;

    text-decoration:
        none;

    font-size:
        25px;

    font-weight:
        900;

}


.bh-footer-logo-icon {

    width:
        50px;

    height:
        50px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    flex:
        0 0 50px;

    border:
        1px solid
        rgba(168,52,31,.25);

    border-radius:
        15px;

    color:
        #a8341f;

    background:
        linear-gradient(
            145deg,
            rgba(168,52,31,.08),
            rgba(201,134,47,.13)
        );

}


.bh-footer-logo-icon .bh-brand-mark {

    width:
        43px;

    height:
        43px;

    flex-basis:
        43px;

    border:
        none;

    background:
        none;

    box-shadow:
        none;

}


.bh-footer-logo-icon .bh-brand-mark svg {

    width:
        38px;

    height:
        38px;

}


.bh-footer-logo-icon .bh-brand-text {

    display:
        none;

}


/* =========================================================
   DESCRIPTION
========================================================= */

.bh-footer-description {

    max-width:
        455px;

    margin:
        17px 0 0;

    color:
        #78716c;

    font-size:
        14px;

    line-height:
        1.8;

}


/* =========================================================
   FEATURES
========================================================= */

.bh-footer-features {

    display:
        grid;

    gap:
        7px;

    margin-top:
        17px;

}


.bh-footer-feature {

    display:
        inline-flex;

    align-items:
        center;

    width:
        fit-content;

    gap:
        8px;

    color:
        #625b55;

    font-size:
        11px;

    line-height:
        1.4;

    font-weight:
        650;

    letter-spacing:
        .01em;

    transition:
        color .2s ease,
        transform .2s ease;

}


.bh-footer-feature:hover {

    color:
        #a8341f;

    transform:
        translateX(2px);

}


.bh-footer-feature-icon {

    width:
        19px;

    height:
        19px;

    flex:
        0 0 19px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    border:
        1px solid
        rgba(168,52,31,.12);

    border-radius:
        50%;

    background:
        linear-gradient(
            135deg,
            #f6e8df,
            #f1ddd1
        );

    color:
        #a8341f;

    font-size:
        10px;

    font-weight:
        900;

    box-shadow:
        0 2px 6px
        rgba(168,52,31,.06);

}


/* =========================================================
   SOCIAL
========================================================= */

.bh-footer-social {

    display:
        flex;

    align-items:
        center;

    gap:
        10px;

    margin-top:
        22px;

}


.bh-footer-social-link {

    width:
        42px;

    height:
        42px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    border:
        1px solid
        #e2ddd7;

    border-radius:
        50%;

    background:
        #ffffff;

    text-decoration:
        none;

    transition:
        transform .2s ease,
        box-shadow .2s ease;

}


.bh-footer-social-link:hover {

    transform:
        translateY(-2px);

    box-shadow:
        0 7px 16px
        rgba(36,26,20,.10);

}


.bh-footer-social-link svg {

    width:
        21px;

    height:
        21px;

}


/* =========================================================
   FOOTER HEADINGS
========================================================= */

.bh-footer-heading {

    position:
        relative;

    margin:
        3px 0 20px;

    padding-bottom:
        10px;

    color:
        #241a14;

    font-size:
        14px;

    font-weight:
        850;

    letter-spacing:
        .12em;

    text-transform:
        uppercase;

}


.bh-footer-heading::after {

    content:
        "";

    position:
        absolute;

    left:
        0;

    bottom:
        0;

    width:
        38px;

    height:
        3px;

    border-radius:
        20px;

    background:
        linear-gradient(
            90deg,
            #a8341f,
            #c9862f
        );

}


/* =========================================================
   FOOTER LINKS
========================================================= */

.bh-footer-links {

    display:
        grid;

    gap:
        5px;

}


.bh-footer-link {

    display:
        flex;

    align-items:
        center;

    width:
        fit-content;

    padding:
        8px 12px 8px 0;

    color:
        #78716c;

    text-decoration:
        none;

    font-size:
        14px;

    transition:
        color .2s ease,
        transform .2s ease;

}


.bh-footer-link:hover {

    color:
        #a8341f;

    transform:
        translateX(2px);

}


/* =========================================================
   CONTACT
========================================================= */

.bh-footer-contact {

    display:
        grid;

    gap:
        14px;

}


.bh-footer-contact-item {

    display:
        flex;

    align-items:
        flex-start;

    gap:
        12px;

    color:
        #78716c;

    text-decoration:
        none;

    font-size:
        13px;

    line-height:
        1.6;

}


.bh-footer-contact-item:hover {

    color:
        #a8341f;

}


.bh-footer-contact-icon {

    width:
        22px;

    height:
        22px;

    flex:
        0 0 22px;

    display:
        flex;

    align-items:
        center;

    justify-content:
        center;

    color:
        #a8341f;

}


.bh-footer-contact-icon svg {

    width:
        21px;

    height:
        21px;

}


/* =========================================================
   FOOTER BOTTOM
========================================================= */

.bh-footer-bottom {

    border-top:
        1px solid
        #e7e5e4;

    background:
        rgba(255,255,255,.34);

    padding:
        18px 32px;

}


.bh-footer-bottom-inner {

    width:
        100%;

    max-width:
        1440px;

    margin:
        0 auto;

    display:
        flex;

    align-items:
        center;

    justify-content:
        space-between;

    gap:
        20px;

}


.bh-footer-copy,
.bh-footer-tagline {

    margin:
        0;

    color:
        #a8a29e;

    font-size:
        12px;

}


.bh-footer-legal {

    display:
        flex;

    align-items:
        center;

    gap:
        18px;

}


.bh-footer-legal a {

    color:
        #a8a29e;

    text-decoration:
        none;

    font-size:
        12px;

}


.bh-footer-legal a:hover {

    color:
        #a8341f;

}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 1100px) {

    .bh-navbar-inner {

        min-height:
            70px;

        padding:
            0 20px;

        gap:
            10px;

    }


    .bh-desktop-nav {

        display:
            none;

    }


    .bh-menu-button {

        display:
            flex;

    }


    .bh-actions {

        margin-left:
            auto;

    }


    .bh-lang-button {

        display:
            none;

    }


    .bh-mobile-lang-dropdown {

        display:
            block;

    }


    .bh-footer-cta {

        padding:
            42px 24px 36px;

    }


    .bh-footer-cta-card {

        min-height:
            145px;

        padding:
            28px 30px;

        gap:
            24px;

    }


    .bh-footer-inner {

        width:
            100%;

        max-width:
            none;

        padding:
            18px 24px 48px;

        display:
            grid;

        grid-template-columns:
            minmax(0, 1.35fr)
            minmax(0, .82fr)
            minmax(0, .82fr)
            minmax(0, 1fr);

        gap:
            28px;

        align-items:
            start;

    }


    .bh-footer-brand {

        min-width:
            0;

    }


    .bh-footer-description {

        max-width:
            100%;

        font-size:
            13px;

        line-height:
            1.7;

    }


    .bh-footer-features {

        gap:
            6px;

        margin-top:
            15px;

    }


    .bh-footer-feature {

        font-size:
            10.5px;

    }


    .bh-footer-feature-icon {

        width:
            18px;

        height:
            18px;

        flex-basis:
            18px;

        font-size:
            9px;

    }


    .bh-footer-social {

        margin-top:
            18px;

    }


    .bh-footer-social-link {

        width:
            38px;

        height:
            38px;

    }


    .bh-footer-social-link svg {

        width:
            19px;

        height:
            19px;

    }


    .bh-footer-heading {

        font-size:
            13px;

        margin-bottom:
            17px;

    }


    .bh-footer-link {

        padding:
            7px 10px 7px 0;

        font-size:
            13px;

    }


    .bh-footer-contact {

        gap:
            11px;

    }


    .bh-footer-contact-item {

        gap:
            9px;

        font-size:
            12px;

        line-height:
            1.5;

    }


    .bh-footer-contact-icon {

        width:
            20px;

        height:
            20px;

        flex-basis:
            20px;

    }


    .bh-footer-contact-icon svg {

        width:
            19px;

        height:
            19px;

    }


    .bh-footer-bottom {

        padding:
            16px 24px;

    }


    .bh-footer-bottom-inner {

        max-width:
            none;

        gap:
            15px;

    }


    .bh-footer-copy,
    .bh-footer-tagline,
    .bh-footer-legal a {

        font-size:
            11px;

    }

}


/* =========================================================
   SMALL TABLET
========================================================= */

@media (min-width: 641px) and (max-width: 850px) {

    .bh-navbar-inner {

        padding:
            0 16px;

    }


    .bh-brand-mark {

        width:
            44px;

        height:
            44px;

        flex-basis:
            44px;

    }


    .bh-brand-mark svg {

        width:
            38px;

        height:
            38px;

    }


    .bh-brand-text {

        font-size:
            19px;

    }


    .bh-footer-inner {

        grid-template-columns:
            minmax(0, 1.25fr)
            minmax(0, .75fr)
            minmax(0, .75fr)
            minmax(0, .95fr);

        gap:
            18px;

        padding:
            18px 18px 42px;

    }


    .bh-footer-description {

        font-size:
            12px;

    }


    .bh-footer-feature {

        font-size:
            9.5px;

    }


    .bh-footer-heading {

        font-size:
            11px;

        letter-spacing:
            .09em;

    }


    .bh-footer-link {

        font-size:
            12px;

    }


    .bh-footer-contact-item {

        font-size:
            11px;

    }


    .bh-footer-cta {

        padding:
            34px 18px 30px;

    }


    .bh-footer-cta-card {

        padding:
            24px 26px;

    }


    .bh-footer-cta-title {

        font-size:
            25px;

    }


    .bh-footer-cta-text {

        font-size:
            12px;

    }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 640px) {

    .bh-navbar-inner {

        min-height:
            66px;

        padding:
            0 14px;

    }


    .bh-logo {

        gap:
            8px;

    }


    .bh-brand-mark {

        width:
            38px;

        height:
            38px;

        flex-basis:
            38px;

        border-radius:
            11px;

    }


    .bh-brand-mark svg {

        width:
            33px;

        height:
            33px;

    }


    .bh-brand-text {

        font-size:
            17px;

    }


    .bh-theme-button,
    .bh-menu-button {

        width:
            38px;

        height:
            38px;

    }


    .bh-mobile-lang-trigger {

        height:
            38px;

        min-width:
            38px;

    }


    .bh-footer-cta {

        padding:
            28px 16px 26px;

    }


    .bh-footer-cta-card {

        flex-direction:
            column;

        align-items:
            flex-start;

        gap:
            20px;

        padding:
            25px 22px;

        border-radius:
            20px;

    }


    .bh-footer-cta-actions {

        width:
            100%;

    }


    .bh-footer-cta-button {

        width:
            100%;

    }


    .bh-footer-inner {

        grid-template-columns:
            1fr;

        gap:
            32px;

        padding:
            10px 18px 36px;

    }


    .bh-footer-description {

        max-width:
            100%;

        font-size:
            13px;

    }


    .bh-footer-features {

        gap:
            6px;

        margin-top:
            15px;

    }


    .bh-footer-feature {

        font-size:
            10.5px;

        gap:
            7px;

    }


    .bh-footer-feature-icon {

        width:
            18px;

        height:
            18px;

        flex-basis:
            18px;

        font-size:
            9px;

    }


    .bh-footer-social {

        margin-top:
            20px;

    }


    .bh-footer-bottom {

        padding:
            18px;

    }


    .bh-footer-bottom-inner {

        flex-direction:
            column;

        align-items:
            flex-start;

        gap:
            10px;

    }


    .bh-footer-legal {

        flex-wrap:
            wrap;

        gap:
            12px;

    }

}


/* =========================================================
   EXTRA SMALL MOBILE
========================================================= */

@media (max-width: 400px) {

    .bh-navbar-inner {

        padding:
            0 9px;

        gap:
            5px;

    }


    .bh-actions {

        gap:
            5px;

    }


    .bh-mobile-lang-trigger {

        width:
            38px;

        min-width:
            38px;

        padding:
            0;

        gap:
            0;

    }


    .bh-mobile-lang-trigger
    .bh-mobile-lang-current {

        display:
            none;

    }


    .bh-mobile-lang-trigger
    .bh-mobile-lang-chevron {

        display:
            none;

    }


    .bh-brand-text {

        font-size:
            15px;

    }


    .bh-footer-feature {

        font-size:
            10px;

    }

}


/* =========================================================
   DARK MODE
========================================================= */

.dark #bh-navbar {

    background:
        rgba(28,25,23,.98);

    border-bottom-color:
        #44403c;

}


.dark .bh-logo {

    color:
        #fafaf9;

}


.dark .bh-brand-mark {

    color:
        #f0a54a;

    border-color:
        rgba(240,165,74,.35);

}


.dark .bh-nav-link {

    color:
        #d6d3d1;

}


.dark .bh-nav-link:hover {

    color:
        #f59e0b;

    background:
        rgba(245,158,11,.08);

    border-color:
        rgba(245,158,11,.16);

}


.dark .bh-nav-link.bh-active {

    color:
        #f59e0b;

    background:
        linear-gradient(
            135deg,
            #3b2814,
            #451a03
        );

    border-color:
        rgba(245,158,11,.28);

    box-shadow:
        0 4px 14px
        rgba(245,158,11,.08);

}


.dark .bh-nav-link.bh-active::after {

    background:
        linear-gradient(
            90deg,
            #f59e0b,
            #fbbf24
        );

    box-shadow:
        0 2px 6px
        rgba(245,158,11,.18);

}


.dark .bh-nav-dropdown-panel {

    background:
        #1c1917;

    border-color:
        #44403c;

}


.dark .bh-nav-dropdown-link {

    color:
        #d6d3d1;

}


.dark .bh-nav-dropdown-link:hover {

    background:
        #292524;

    color:
        #f59e0b;

}


.dark .bh-nav-dropdown-link-active {

    background:
        #451a03;

    color:
        #f59e0b;

}


.dark .bh-lang-button,
.dark .bh-mobile-lang-trigger {

    color:
        #ffd27a;

    border-color:
        rgba(245,158,11,.42);

    background:
        linear-gradient(
            135deg,
            #3b2814,
            #4a3015
        );

}


.dark .bh-mobile-lang-menu {

    background:
        #1c1917;

    border-color:
        #44403c;

}


.dark .bh-mobile-lang-option {

    color:
        #d6d3d1;

}


.dark .bh-mobile-lang-option:hover {

    background:
        #292524;

}


.dark .bh-mobile-lang-option.bh-selected {

    background:
        #451a03;

    color:
        #f59e0b;

}


.dark .bh-theme-button,
.dark .bh-menu-button {

    color:
        #f8d27a;

    border-color:
        #57534e;

    background:
        linear-gradient(
            145deg,
            #292524,
            #211f1d
        );

}


.dark #bh-mobile-menu {

    background:
        #1c1917;

    border-color:
        #44403c;

}


.dark .bh-mobile-link {

    color:
        #d6d3d1;

}


.dark .bh-mobile-active {

    background:
        linear-gradient(
            135deg,
            #3b2814,
            #451a03
        ) !important;

    border-color:
        rgba(245,158,11,.22) !important;

    color:
        #f59e0b !important;

}


.dark .bh-mobile-icon {

    background:
        #292524;

    color:
        #f5b84b;

}


.dark .bh-mobile-sublink {

    color:
        #d6d3d1;

}


.dark .bh-mobile-sublink:hover {

    background:
        #292524;

    color:
        #f59e0b;

}


.dark .bh-footer {

    background:
        linear-gradient(
            135deg,
            #211c18,
            #1c1917,
            #211c18
        );

    border-top-color:
        #44403c;

}


.dark .bh-footer-logo {

    color:
        #fafaf9;

}


.dark .bh-footer-logo-icon {

    color:
        #f0a54a;

    border-color:
        rgba(240,165,74,.30);

    background:
        rgba(240,165,74,.06);

}


.dark .bh-footer-description {

    color:
        #a8a29e;

}


.dark .bh-footer-feature {

    color:
        #c7c2bd;

}


.dark .bh-footer-feature:hover {

    color:
        #f59e0b;

}


.dark .bh-footer-feature-icon {

    background:
        linear-gradient(
            135deg,
            #3a2920,
            #33251d
        );

    border-color:
        rgba(245,158,11,.16);

    color:
        #f5b84b;

}


.dark .bh-footer-heading {

    color:
        #fafaf9;

}


.dark .bh-footer-link,
.dark .bh-footer-contact-item {

    color:
        #a8a29e;

}


.dark .bh-footer-link:hover,
.dark .bh-footer-contact-item:hover {

    color:
        #f59e0b;

}


.dark .bh-footer-contact-icon {

    color:
        #f59e0b;

}


.dark .bh-footer-social-link {

    background:
        #292524;

    border-color:
        #44403c;

}


.dark .bh-footer-bottom {

    background:
        rgba(28,25,23,.6);

    border-top-color:
        #44403c;

}


.dark .bh-footer-copy,
.dark .bh-footer-tagline,
.dark .bh-footer-legal a {

    color:
        #78716c;

}


/* =========================================================
   RTL
========================================================= */

[dir="rtl"] .bh-footer-heading::after {

    left:
        auto;

    right:
        0;

}


[dir="rtl"] .bh-footer-link {

    padding:
        8px 0 8px 12px;

}


[dir="rtl"] .bh-footer-link:hover {

    transform:
        translateX(-2px);

}


[dir="rtl"] .bh-footer-feature:hover {

    transform:
        translateX(-2px);

}


[dir="rtl"] .bh-mobile-submenu {

    margin:
        2px 16px 8px 0;

    padding-left:
        0;

    padding-right:
        12px;

    border-left:
        none;

    border-right:
        2px solid #e7e5e4;

}


[dir="rtl"] .bh-mobile-arrow,
[dir="rtl"] .bh-mobile-sub-arrow {

    transform:
        rotate(180deg);

}


[dir="rtl"] .bh-mobile-lang-menu {

    right:
        auto;

    left:
        0;

}


[dir="rtl"] .bh-footer-inner,
[dir="rtl"] .bh-footer-bottom-inner {

    direction:
        rtl;

}


[dir="rtl"] .bh-footer-contact-item {

    text-align:
        right;

}


[dir="rtl"] .bh-mobile-link-content {

    flex-direction:
        row;

}


/* =========================================================
   RTL DARK MODE
========================================================= */

.dark [dir="rtl"] .bh-mobile-submenu {

    border-right-color:
        #44403c;

}

`;


/* =========================================================
   APPEND STYLES
========================================================= */

document.head.appendChild(style);


/* =========================================================
   HEADER
========================================================= */

const header =
    document.getElementById(
        "site-header"
    );


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
                        title="${getDirTitle(currentDirection)}"
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
                            aria-haspopup="true"
                            aria-label="Language direction"
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

                            <span
                                class="bh-mobile-lang-chevron"
                                aria-hidden="true"
                            >
                                ↓
                            </span>

                        </button>


                        <div
                            class="bh-mobile-lang-menu"
                            id="bh-mobile-lang-menu"
                        >

                            <button
                                type="button"
                                class="
                                    bh-mobile-lang-option
                                    ${currentDirection === "ltr"
                                        ? "bh-selected"
                                        : ""}
                                "
                                data-direction="ltr"
                            >

                                <span>
                                    LTR
                                </span>

                                <span>
                                    English
                                </span>

                            </button>


                            <button
                                type="button"
                                class="
                                    bh-mobile-lang-option
                                    ${currentDirection === "rtl"
                                        ? "bh-selected"
                                        : ""}
                                "
                                data-direction="rtl"
                            >

                                <span>
                                    RTL
                                </span>

                                <span>
                                    العربية
                                </span>

                            </button>

                        </div>

                    </div>


                    <button
                        type="button"
                        id="bh-theme-button"
                        class="bh-theme-button"
                        aria-label="Toggle dark mode"
                        title="Toggle dark mode"
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


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuButton =
        document.getElementById(
            "bh-menu-button"
        );


    const mobileMenu =
        document.getElementById(
            "bh-mobile-menu"
        );


    function closeMobileMenu() {

        if (!mobileMenu) {
            return;
        }

        mobileMenu.classList.remove(
            "bh-mobile-open"
        );

        if (menuButton) {

            menuButton.textContent =
                "☰";

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Open menu"
            );

        }

    }


    function openMobileMenu() {

        if (!mobileMenu) {
            return;
        }

        mobileMenu.classList.add(
            "bh-mobile-open"
        );

        if (menuButton) {

            menuButton.textContent =
                "✕";

            menuButton.setAttribute(
                "aria-expanded",
                "true"
            );

            menuButton.setAttribute(
                "aria-label",
                "Close menu"
            );

        }

    }


    if (
        menuButton &&
        mobileMenu
    ) {

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

                    openMobileMenu();

                }

            }
        );


        mobileMenu
            .querySelectorAll("a")
            .forEach(
                function (link) {

                    link.addEventListener(
                        "click",
                        closeMobileMenu
                    );

                }
            );

    }


    /* =====================================================
       DESKTOP DROPDOWN
    ===================================================== */

    const dropdowns =
        document.querySelectorAll(
            ".bh-nav-dropdown"
        );


    function closeDropdowns() {

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


                if (panel) {

                    panel.classList.remove(
                        "bh-dropdown-open"
                    );

                }


                if (trigger) {

                    trigger.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );

    }


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


            if (
                !trigger ||
                !panel
            ) {
                return;
            }


            trigger.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();

                    const isOpen =
                        panel.classList.contains(
                            "bh-dropdown-open"
                        );


                    closeDropdowns();


                    if (!isOpen) {

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


    document.addEventListener(
        "click",
        function () {

            closeDropdowns();

        }
    );


    /* =====================================================
       MOBILE HOME DROPDOWN
    ===================================================== */

    document
        .querySelectorAll(
            ".bh-mobile-dropdown-trigger"
        )
        .forEach(
            function (trigger) {

                trigger.addEventListener(
                    "click",
                    function (event) {

                        event.stopPropagation();

                        const id =
                            trigger.getAttribute(
                                "aria-controls"
                            );


                        const submenu =
                            document.getElementById(
                                id
                            );


                        if (!submenu) {
                            return;
                        }


                        const isOpen =
                            submenu.classList.contains(
                                "bh-mobile-submenu-open"
                            );


                        submenu.classList.toggle(
                            "bh-mobile-submenu-open",
                            !isOpen
                        );


                        trigger.setAttribute(
                            "aria-expanded",
                            String(!isOpen)
                        );

                    }
                );

            }
        );


    /* =====================================================
       DIRECTION UI
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


    const mobileLangMenu =
        document.getElementById(
            "bh-mobile-lang-menu"
        );


    const mobileLangOptions =
        document.querySelectorAll(
            ".bh-mobile-lang-option"
        );


    function updateDirectionUI(dir) {

        const label =
            getDirLabel(dir);

        const title =
            getDirTitle(dir);


        const langLabel =
            document.getElementById(
                "bh-lang-label"
            );


        const mobileLangCurrent =
            document.getElementById(
                "bh-mobile-lang-current"
            );


        if (langLabel) {

            langLabel.textContent =
                label;

        }


        if (mobileLangCurrent) {

            mobileLangCurrent.textContent =
                dir === "rtl"
                    ? "RTL"
                    : "LTR";

        }


        if (langButton) {

            langButton.setAttribute(
                "aria-label",
                title
            );

            langButton.setAttribute(
                "title",
                title
            );

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


    function changeDirection(nextDirection) {

        const direction =
            nextDirection === "rtl"
                ? "rtl"
                : "ltr";


        applyDirection(
            direction
        );


        updateDirectionUI(
            direction
        );

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


                const next =
                    current === "rtl"
                        ? "ltr"
                        : "rtl";


                changeDirection(
                    next
                );

            }
        );

    }


    /* =====================================================
       MOBILE LANGUAGE DROPDOWN
    ===================================================== */

    function closeMobileLanguageDropdown() {

        if (!mobileLangDropdown) {
            return;
        }


        mobileLangDropdown.classList.remove(
            "bh-lang-open"
        );


        if (mobileLangTrigger) {

            mobileLangTrigger.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    }


    if (
        mobileLangTrigger &&
        mobileLangDropdown &&
        mobileLangMenu
    ) {

        mobileLangTrigger.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();


                const isOpen =
                    mobileLangDropdown.classList.contains(
                        "bh-lang-open"
                    );


                mobileLangDropdown.classList.toggle(
                    "bh-lang-open",
                    !isOpen
                );


                mobileLangTrigger.setAttribute(
                    "aria-expanded",
                    String(!isOpen)
                );

            }
        );


        mobileLangOptions.forEach(
            function (option) {

                option.addEventListener(
                    "click",
                    function (event) {

                        event.stopPropagation();


                        const direction =
                            option.getAttribute(
                                "data-direction"
                            );


                        if (
                            direction !== "rtl" &&
                            direction !== "ltr"
                        ) {
                            return;
                        }


                        changeDirection(
                            direction
                        );


                        closeMobileLanguageDropdown();

                    }
                );

            }
        );

    }


    /* =====================================================
       OUTSIDE CLICK
    ===================================================== */

    document.addEventListener(
        "click",
        function () {

            closeMobileLanguageDropdown();

        }
    );


    /* =====================================================
       ESCAPE KEY
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key !== "Escape") {
                return;
            }

            closeDropdowns();

            closeMobileLanguageDropdown();

            closeMobileMenu();

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

        const isDark =
            document.documentElement
                .classList.contains("dark");


        if (themeButton) {

            themeButton.innerHTML =
                isDark
                    ? ICONS.sun
                    : ICONS.moon;


            themeButton.setAttribute(
                "aria-label",
                isDark
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );


            themeButton.setAttribute(
                "title",
                isDark
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            );

        }

    }


    function loadSavedTheme() {

        try {

            const savedTheme =
                localStorage.getItem(
                    "bh-theme"
                );


            if (
                savedTheme === "dark"
            ) {

                document.documentElement
                    .classList.add("dark");

            } else if (
                savedTheme === "light"
            ) {

                document.documentElement
                    .classList.remove("dark");

            }

        } catch (error) {}

    }


    function toggleTheme() {

        const isDark =
            document.documentElement
                .classList.contains("dark");


        document.documentElement
            .classList.toggle(
                "dark",
                !isDark
            );


        try {

            localStorage.setItem(
                "bh-theme",
                isDark
                    ? "light"
                    : "dark"
            );

        } catch (error) {}


        updateThemeIcon();

    }


    loadSavedTheme();


    if (themeButton) {

        themeButton.addEventListener(
            "click",
            toggleTheme
        );

    }


    updateThemeIcon();


    updateDirectionUI(
        getStoredDirection()
    );

}


/* =========================================================
   FOOTER
========================================================= */

const footer =
    document.getElementById(
        "site-footer"
    );


if (footer) {

    footer.innerHTML = `

        <footer class="bh-footer">

            <div class="bh-footer-cta">

                <div class="bh-footer-cta-card">

                    <div class="bh-footer-cta-content">

                        <div class="bh-footer-cta-kicker">

                            ${ICONS.sparkle}

                            GOOD FOOD. WARM MOMENTS.

                        </div>


                        <h2 class="bh-footer-cta-title">

                            Planning something special?

                        </h2>


                        <p class="bh-footer-cta-text">

                            From family dinners to office lunches
                            and neighbourhood celebrations, let
                            Bowl &amp; Hearth take care of the food.

                        </p>

                    </div>


                    <div class="bh-footer-cta-actions">

                        <a
                            href="${pagePrefix}contact.html"
                            class="bh-footer-cta-button"
                        >
                            Contact Us
                        </a>

                    </div>

                </div>

            </div>


            <div class="bh-footer-inner">

                <div class="bh-footer-brand">

                    <a
                        href="${homeHref}"
                        class="bh-footer-logo"
                    >

                        <span class="bh-footer-logo-icon">

                            ${renderBrandName()}

                        </span>

                    </a>


                    <p class="bh-footer-description">

                        Comforting local meals, thoughtful
                        catering and cloud-kitchen convenience
                        — made with honest ingredients and a
                        little extra warmth.

                    </p>


                    <div class="bh-footer-features">

                        <div class="bh-footer-feature">

                            <span
                                class="bh-footer-feature-icon"
                                aria-hidden="true"
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
                                aria-hidden="true"
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
                            class="bh-footer-social-link instagram"
                            aria-label="Instagram"
                        >
                            ${ICONS.instagram}
                        </a>


                        <a
                            href="#"
                            class="bh-footer-social-link facebook"
                            aria-label="Facebook"
                        >
                            ${ICONS.facebook}
                        </a>


                        <a
                            href="#"
                            class="bh-footer-social-link whatsapp"
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

                            <span
                                class="bh-footer-contact-icon"
                            >
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

                            <span
                                class="bh-footer-contact-icon"
                            >
                                ✉
                            </span>

                            <span>
                                hello@bowlandhearth.example
                            </span>

                        </a>


                        <div
                            class="bh-footer-contact-item"
                        >

                            <span
                                class="bh-footer-contact-icon"
                            >
                                ⌖
                            </span>

                            <span>

                                Serving local neighbourhoods
                                <br>

                                with warmth &amp; care

                            </span>

                        </div>


                        <div
                            class="bh-footer-contact-item"
                        >

                            <span
                                class="bh-footer-contact-icon"
                            >
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

}


/* =========================================================
   RE-APPLY SAVED DIRECTION
========================================================= */

window.addEventListener(
    "pageshow",
    function () {

        const storedDirection =
            getStoredDirection();


        applyDirection(
            storedDirection
        );


        const langLabel =
            document.getElementById(
                "bh-lang-label"
            );


        const mobileLangCurrent =
            document.getElementById(
                "bh-mobile-lang-current"
            );


        const langButton =
            document.getElementById(
                "bh-lang-button"
            );


        if (langLabel) {

            langLabel.textContent =
                getDirLabel(
                    storedDirection
                );

        }


        if (mobileLangCurrent) {

            mobileLangCurrent.textContent =
                storedDirection === "rtl"
                    ? "RTL"
                    : "LTR";

        }


        if (langButton) {

            const title =
                getDirTitle(
                    storedDirection
                );

            langButton.setAttribute(
                "aria-label",
                title
            );

            langButton.setAttribute(
                "title",
                title
            );

        }


        document
            .querySelectorAll(
                ".bh-mobile-lang-option"
            )
            .forEach(
                function (option) {

                    option.classList.toggle(
                        "bh-selected",
                        option.getAttribute(
                            "data-direction"
                        ) === storedDirection
                    );

                }
            );

    }
);