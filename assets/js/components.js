/* =========================================================

   BOWL & HEARTH

   SHARED NAVBAR + FOOTER

   RESPONSIVE DESKTOP / TABLET / MOBILE

   PREMIUM CLIENT VERSION

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

   PATH

========================================================= */



const currentPath =

  window.location.pathname.replace(/\\/g, "/");



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





/* =========================================================

   ACTIVE PAGE

========================================================= */



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



  document.documentElement.setAttribute(

    "dir",

    dir

  );



  document.documentElement.setAttribute(

    "lang",

    dir === "rtl"

      ? "ar"

      : "en"

  );



  try {



    localStorage.setItem(

      DIR_STORAGE_KEY,

      dir

    );



  } catch (error) {}



}





const currentDirection =

  getStoredDirection();



applyDirection(currentDirection);





function getDirLabel(dir) {



  return dir === "rtl"

    ? "LTR"

    : "RTL";



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



      <circle cx="12" cy="12" r="4" />



      <path d="M12 2V4" stroke-linecap="round" />

      <path d="M12 20V22" stroke-linecap="round" />



      <path

        d="M4.93 4.93L6.34 6.34"

        stroke-linecap="round"

      />



      <path

        d="M17.66 17.66L19.07 19.07"

        stroke-linecap="round"

      />



      <path

        d="M2 12H4"

        stroke-linecap="round"

      />



      <path

        d="M20 12H22"

        stroke-linecap="round"

      />



      <path

        d="M4.93 19.07L6.34 17.66"

        stroke-linecap="round"

      />



      <path

        d="M17.66 6.34L19.07 4.93"

        stroke-linecap="round"

      />



    </svg>

  `,





  phone: `

    <svg

      viewBox="0 0 24 24"

      fill="none"

      stroke="currentColor"

      stroke-width="1.8"

    >

      <path

        d="M6.5 3.5h3l1.5 4-2 1.5

        a15 15 0 0 0 6 6l1.5-2

        4 1.5v3

        c0 1.1-.9 2-2 2

        C10.2 19.5 4.5 13.8

        4.5 5.5

        c0-1.1.9-2 2-2Z"

        stroke-linecap="round"

        stroke-linejoin="round"

      />

    </svg>

  `,





  email: `

    <svg

      viewBox="0 0 24 24"

      fill="none"

      stroke="currentColor"

      stroke-width="1.8"

    >

      <rect

        x="3"

        y="5"

        width="18"

        height="14"

        rx="2"

      />



      <path

        d="m4 7 8 6 8-6"

        stroke-linecap="round"

        stroke-linejoin="round"

      />

    </svg>

  `,





  clock: `

    <svg

      viewBox="0 0 24 24"

      fill="none"

      stroke="currentColor"

      stroke-width="1.8"

    >

      <circle

        cx="12"

        cy="12"

        r="8.5"

      />



      <path

        d="M12 7v5l3 2"

        stroke-linecap="round"

        stroke-linejoin="round"

      />

    </svg>

  `,





  location: `

    <svg

      viewBox="0 0 24 24"

      fill="none"

      stroke="currentColor"

      stroke-width="1.8"

    >



      <path

        d="M20 10

        c0 5-8 11-8 11

        S4 15 4 10

        a8 8 0 1 1 16 0Z"

        stroke-linecap="round"

        stroke-linejoin="round"

      />



      <circle

        cx="12"

        cy="10"

        r="2.5"

      />



    </svg>

  `,





  instagram: `

    <svg

      viewBox="0 0 24 24"

      fill="none"

      aria-hidden="true"

    >



      <defs>



        <linearGradient

          id="instagramGradient"

          x1="3"

          y1="21"

          x2="21"

          y2="3"

          gradientUnits="userSpaceOnUse"

        >



          <stop offset="0%" stop-color="#FEDA75" />

          <stop offset="25%" stop-color="#FA7E1E" />

          <stop offset="50%" stop-color="#D62976" />

          <stop offset="75%" stop-color="#962FBF" />

          <stop offset="100%" stop-color="#4F5BD5" />



        </linearGradient>



      </defs>



      <rect

        x="3"

        y="3"

        width="18"

        height="18"

        rx="5"

        stroke="url(#instagramGradient)"

        stroke-width="2"

      />



      <circle

        cx="12"

        cy="12"

        r="4"

        stroke="url(#instagramGradient)"

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



      <path

        d="M5 12h14"

        stroke-linecap="round"

      />



      <path

        d="m13 6 6 6-6 6"

        stroke-linecap="round"

        stroke-linejoin="round"

      />



    </svg>

  `,





  language: `

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



      <path

        d="M3 12h18"

        stroke-linecap="round"

      />



      <path

        d="M12 3c2.4 2.5 3.5 5.5 3.5 9S14.4 18.5 12 21"

        stroke-linecap="round"

      />



      <path

        d="M12 3c-2.4 2.5-3.5 5.5-3.5 9S9.6 18.5 12 21"

        stroke-linecap="round"

      />



    </svg>

  `,





  check: `

    <svg

      viewBox="0 0 24 24"

      fill="none"

      stroke="currentColor"

      stroke-width="2"

      aria-hidden="true"

    >

      <path

        d="m5 12 4 4L19 6"

        stroke-linecap="round"

        stroke-linejoin="round"

      />

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

        stroke-linejoin="round"

      />



      <path

        d="M19 17l.7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7L19 17Z"

        stroke-linejoin="round"

      />

    </svg>

  `



};





/* =========================================================

   PROFESSIONAL BRAND ICON

========================================================= */



function renderBrandName() {



  return `



    <span

      class="bh-brand-icon"

      aria-hidden="true"

    >



      <svg

        viewBox="0 0 64 64"

        fill="none"

      >



        <path

          d="M25 10

             C20 15 22 20 27 23"

          stroke="currentColor"

          stroke-width="2.6"

          stroke-linecap="round"

        />



        <path

          d="M39 10

             C44 15 42 20 37 23"

          stroke="currentColor"

          stroke-width="2.6"

          stroke-linecap="round"

        />



        <path

          d="M32 8

             C28 14 29 18 32 21

             C35 18 36 14 32 8Z"

          fill="currentColor"

          opacity=".92"

        />



        <path

          d="M12 30

             C13 43 21 51 32 51

             C43 51 51 43 52 30"

          stroke="currentColor"

          stroke-width="2.8"

          stroke-linecap="round"

        />



        <path

          d="M10 30

             C10 27 20 25 32 25

             C44 25 54 27 54 30

             C54 33 44 35 32 35

             C20 35 10 33 10 30Z"

          fill="currentColor"

          opacity=".14"

          stroke="currentColor"

          stroke-width="2.4"

        />



        <path

          d="M23 52H41"

          stroke="currentColor"

          stroke-width="2.8"

          stroke-linecap="round"

        />



      </svg>



    </span>



    <span class="bh-brand-text">



      Bowl



      <span class="bh-brand-amp">

        &amp;

      </span>



      Hearth



    </span>



  `;



}





/* =========================================================

   DESKTOP NAVIGATION

========================================================= */



function createDesktopNavigation() {



  return navItems

    .map((item, index) => {



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

                  ${active ? "bh-nav-dropdown-link-active" : ""}

                "

              >



                <span class="bh-dropdown-label">

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

              ${anyChildActive ? "bh-active" : ""}

            "

            aria-expanded="false"

            aria-haspopup="true"

            aria-controls="${dropdownId}"

          >



            <span>

              ${item.label}

            </span>



            <span class="bh-dropdown-chevron">

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



    })

    .join("");



}





/* =========================================================

   MOBILE NAVIGATION

========================================================= */



function createMobileNavigation() {



  return navItems

    .map((item, index) => {



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

              ${active ? "bh-mobile-active" : ""}

            "

          >



            <span>

              ${item.label}

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

                  ${active ? "bh-mobile-active" : ""}

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



          })

          .join("");





      return `



        <div class="bh-mobile-dropdown">



          <button

            type="button"

            class="

              bh-mobile-link

              bh-mobile-dropdown-trigger

              ${anyChildActive ? "bh-mobile-active" : ""}

            "

            aria-expanded="${anyChildActive ? "true" : "false"}"

            aria-controls="${mobileDropdownId}"

          >



            <span>

              ${item.label}

            </span>



            <span class="bh-mobile-chevron">

              ↓

            </span>



          </button>





          <div

            id="${mobileDropdownId}"

            class="

              bh-mobile-submenu

              ${anyChildActive ? "bh-mobile-submenu-open" : ""}

            "

          >



            ${subLinks}



          </div>



        </div>



      `;



    })

    .join("");



}





/* =========================================================

   CSS

========================================================= */



const style =

  document.createElement("style");



style.id =

  "bh-navbar-footer-styles";



style.textContent = `



/* =========================================================

   GLOBAL

========================================================= */



html,

body {



  max-width: 100%;



  overflow-x: hidden;

}





/* =========================================================

   NAVBAR

========================================================= */



#bh-navbar,

#bh-navbar *,

#bh-mobile-menu,

#bh-mobile-menu * {



  box-sizing: border-box;

}





#bh-navbar {



  position: fixed !important;



  top: 0 !important;



  left: 0 !important;



  right: 0 !important;



  width: 100% !important;



  z-index: 99999 !important;



  background:

    rgba(250,248,244,.97);



  border-bottom:

    1px solid #e7e5e4;



  box-shadow:

    0 4px 22px

    rgba(36,26,20,.09);



  backdrop-filter:

    blur(16px);



  -webkit-backdrop-filter:

    blur(16px);

}





.bh-navbar-inner {



  width: 100%;



  max-width: 1440px;



  min-height: 76px;



  margin: 0 auto;



  padding: 0 32px;



  display: flex;



  align-items: center;



  gap: 24px;

}





/* =========================================================

   LOGO

========================================================= */



.bh-logo {



  display: inline-flex;



  align-items: center;



  gap: 10px;



  flex-shrink: 0;



  color: #241a14;



  text-decoration: none;



  font-size: 23px;



  line-height: 1;



  font-weight: 900;



  white-space: nowrap;



  letter-spacing: -.035em;



  transition:

    color .25s ease;

}





.bh-brand-icon {



  width: 42px;



  height: 42px;



  flex: 0 0 42px;



  display: flex;



  align-items: center;



  justify-content: center;



  color: #a8341f;



  border:

    1px solid

    rgba(168,52,31,.28);



  border-radius: 13px;



  background:

    linear-gradient(

      145deg,

      rgba(168,52,31,.10),

      rgba(201,134,47,.10)

    );



  box-shadow:

    0 5px 16px

    rgba(168,52,31,.10);



  transition:

    transform .3s ease,

    box-shadow .3s ease,

    background .3s ease;

}





.bh-brand-icon svg {



  width: 34px;



  height: 34px;



  display: block;

}





.bh-logo:hover {



  color: #8f2b19;

}





.bh-logo:hover .bh-brand-icon {



  transform:

    translateY(-2px)

    rotate(-2deg);



  box-shadow:

    0 9px 22px

    rgba(168,52,31,.18);

}





.bh-brand-text {



  display: inline-flex;



  align-items: center;

}





.bh-brand-amp {



  color: #c9862f;



  margin: 0 4px;



  font-weight: 800;

}





/* =========================================================

   DESKTOP NAV

========================================================= */



.bh-desktop-nav {



  display: flex;



  align-items: center;



  justify-content: flex-end;



  gap: 13px;



  margin-left: auto;

}





.bh-nav-link {



  position: relative;



  height: 76px;



  padding: 0 5px;



  display: inline-flex;



  align-items: center;



  justify-content: center;



  gap: 6px;



  color: #44403c;



  background: none;



  border: none;



  text-decoration: none;



  font-family: inherit;



  font-size: 14px;



  font-weight: 650;



  white-space: nowrap;



  cursor: pointer;



  transition:

    color .2s ease;

}





.bh-nav-link:hover,

.bh-nav-link.bh-active {



  color: #a8341f;

}





.bh-nav-link.bh-active {



  font-weight: 800;

}





.bh-nav-link.bh-active::after {



  content: "";



  position: absolute;



  left: 4px;



  right: 4px;



  bottom: 0;



  height: 3px;



  border-radius:

    4px 4px 0 0;



  background:

    linear-gradient(

      90deg,

      #a8341f,

      #c9862f

    );

}





/* =========================================================

   DROPDOWN

   SMALL HOME 1 / HOME 2 MENU

========================================================= */



.bh-nav-dropdown {



  position: relative;

}





.bh-nav-dropdown-trigger {



  min-width: 65px;

}





/* CHANGED: smaller dropdown */



.bh-nav-dropdown-panel {



  display: none;



  position: absolute;



  top:

    calc(100% - 1px);



  left: 50%;



  transform:

    translateX(-50%);



  width: 125px;



  padding: 4px;



  background: #fff;



  border:

    1px solid #e7e5e4;



  border-radius: 9px;



  box-shadow:

    0 8px 20px

    rgba(36,26,20,.12);



  z-index: 100000;

}





.bh-nav-dropdown-panel.bh-dropdown-open {



  display: block;

}





.bh-nav-dropdown-link {



  width: 100%;



  min-height: 34px;



  padding: 5px 7px;



  display: flex;



  align-items: center;



  justify-content: space-between;



  gap: 5px;



  border-radius: 6px;



  color: #44403c;



  text-decoration: none;



  font-size: 11px;



  font-weight: 650;



  transition:

    background .2s ease,

    color .2s ease,

    transform .2s ease;

}





.bh-nav-dropdown-link:hover {



  background: #faf5ec;



  color: #a8341f;



  transform:

    translateX(1px);

}





.bh-nav-dropdown-link-active {



  background: #fbe9e4;



  color: #a8341f;



  font-weight: 800;

}





.bh-small-arrow {



  width: 13px;



  height: 13px;

}





.bh-dropdown-label {



  white-space: nowrap;

}





.bh-dropdown-chevron {



  font-size: 10px;



  transition:

    transform .2s ease;

}





.bh-nav-dropdown-trigger[aria-expanded="true"]

.bh-dropdown-chevron {



  transform:

    rotate(180deg);

}





/* =========================================================

   ACTIONS

========================================================= */



.bh-actions {



  display: flex;



  align-items: center;



  gap: 9px;



  margin-left: auto;

}





.bh-lang-button {



  height: 40px;



  min-width: 72px;



  padding: 0 13px;



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

      #fff7e8,

      #f8e4c2

    );



  color: #8f2b19;



  font-size: 12px;



  font-weight: 800;



  cursor: pointer;



  transition:

    transform .25s ease,

    box-shadow .25s ease;

}





.bh-lang-button::before {



  content: "";



  width: 16px;



  height: 16px;



  display: block;



  border:

    1.5px solid currentColor;



  border-radius: 50%;

}





.bh-lang-button:hover {



  transform:

    translateY(-2px);



  box-shadow:

    0 7px 18px

    rgba(168,52,31,.16);

}





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



  color: #6b3f2d;



  cursor: pointer;



  box-shadow:

    0 3px 10px

    rgba(36,26,20,.07);



  transition:

    transform .25s ease,

    background .25s ease,

    border-color .25s ease;

}





.bh-theme-button svg {



  width: 19px;



  height: 19px;

}





.bh-theme-button:hover,

.bh-menu-button:hover {



  transform:

    translateY(-2px);



  border-color:

    #c9862f;



  color:

    #a8341f;

}





.bh-menu-button {



  display: none;



  font-size: 20px;



  line-height: 1;

}





/* =========================================================

   MOBILE MENU

========================================================= */



#bh-mobile-menu {



  display: none;



  width: 100%;



  max-height:

    calc(100vh - 70px);



  overflow-y: auto;



  background:

    rgba(250,248,244,.99);



  border-top:

    1px solid #e7e5e4;



  padding:

    10px 18px 20px;



  box-shadow:

    0 18px 30px

    rgba(36,26,20,.10);

}





#bh-mobile-menu.bh-mobile-open {



  display: block;

}





.bh-mobile-link {



  display: flex;



  align-items: center;



  justify-content: space-between;



  width: 100%;



  min-height: 48px;



  margin: 3px 0;



  padding: 11px 14px;



  border: none;



  border-radius: 11px;



  background: transparent;



  color: #44403c;



  text-decoration: none;



  font-family: inherit;



  font-size: 15px;



  font-weight: 650;



  cursor: pointer;

}





.bh-mobile-link:hover {



  background: #f5f5f4;



  color: #a8341f;

}





.bh-mobile-active {



  background:

    #fbe9e4 !important;



  color:

    #a8341f !important;



  font-weight:

    800 !important;

}





.bh-mobile-submenu {



  display: none;



  margin:

    2px 0 8px 12px;



  padding-left: 10px;



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



  padding: 9px 13px;



  color: #57534e;



  text-decoration: none;



  border-radius: 9px;



  font-size: 14px;

}





/* =========================================================

   NEW PREMIUM FOOTER

========================================================= */



.bh-footer {



  position: relative;



  width: 100%;



  overflow: hidden;



  background:

    linear-gradient(

      135deg,

      #f8f4ee 0%,

      #f5eee5 48%,

      #f9f6f1 100%

    );



  border-top:

    1px solid #e7e5e4;

}





.bh-footer::before {



  content: "";



  position: absolute;



  width: 420px;



  height: 420px;



  top: -220px;



  right: -150px;



  border-radius: 50%;



  background:

    radial-gradient(

      circle,

      rgba(201,134,47,.14),

      transparent 68%

    );



  pointer-events: none;

}





.bh-footer::after {



  content: "";



  position: absolute;



  width: 360px;



  height: 360px;



  bottom: -220px;



  left: -160px;



  border-radius: 50%;



  background:

    radial-gradient(

      circle,

      rgba(168,52,31,.10),

      transparent 68%

    );



  pointer-events: none;

}





/* =========================================================

   FOOTER CTA

========================================================= */



.bh-footer-cta {



  position: relative;



  z-index: 2;



  max-width: 1376px;



  margin: 0 auto;



  padding:

    48px 32px 42px;

}





.bh-footer-cta-card {



  position: relative;



  overflow: hidden;



  display: flex;



  align-items: center;



  justify-content: space-between;



  gap: 30px;



  padding:

    30px 34px;



  border:

    1px solid rgba(168,52,31,.20);



  border-radius: 24px;



  background:

    linear-gradient(

      135deg,

      #6f281c,

      #8f3422 55%,

      #a85b2a

    );



  color: white;



  box-shadow:

    0 18px 40px

    rgba(111,40,28,.20);

}





.bh-footer-cta-card::after {



  content: "";



  position: absolute;



  width: 250px;



  height: 250px;



  right: -80px;



  top: -120px;



  border-radius: 50%;



  border:

    1px solid rgba(255,255,255,.16);

}





.bh-footer-cta-content {



  position: relative;



  z-index: 2;



  max-width: 700px;

}





.bh-footer-cta-kicker {



  display: inline-flex;



  align-items: center;



  gap: 7px;



  margin-bottom: 9px;



  font-size: 11px;



  font-weight: 800;



  letter-spacing: .16em;



  text-transform: uppercase;



  color: #f9d79e;

}





.bh-footer-cta-kicker svg {



  width: 15px;



  height: 15px;

}





.bh-footer-cta-title {



  margin: 0;



  font-size: clamp(22px, 3vw, 32px);



  line-height: 1.2;



  font-weight: 900;



  letter-spacing: -.025em;

}





.bh-footer-cta-text {



  margin: 9px 0 0;



  max-width: 650px;



  color: rgba(255,255,255,.78);



  font-size: 14px;



  line-height: 1.7;

}





.bh-footer-cta-actions {



  position: relative;



  z-index: 2;



  display: flex;



  align-items: center;



  gap: 10px;



  flex-shrink: 0;

}





.bh-footer-cta-button {



  display: inline-flex;



  align-items: center;



  justify-content: center;



  min-height: 46px;



  padding:

    0 20px;



  border-radius: 999px;



  background: #fff;



  color: #7d2d1d;



  text-decoration: none;



  font-size: 13px;



  font-weight: 850;



  box-shadow:

    0 8px 20px

    rgba(0,0,0,.13);



  transition:

    transform .25s ease,

    box-shadow .25s ease;

}





.bh-footer-cta-button:hover {



  transform:

    translateY(-3px);



  box-shadow:

    0 12px 25px

    rgba(0,0,0,.20);

}





/* =========================================================

   FOOTER MAIN

========================================================= */



.bh-footer-inner {



  position: relative;



  z-index: 2;



  width: 100%;



  max-width: 1440px;



  margin: 0 auto;



  padding:

    18px 32px 54px;



  display: grid;



  grid-template-columns:

    1.45fr .8fr .8fr 1fr;



  gap: 50px;

}





/* =========================================================

   BRAND

========================================================= */



.bh-footer-brand {



  max-width: 430px;

}





.bh-footer-logo {



  display: inline-flex;



  align-items: center;



  gap: 10px;



  color: #241a14;



  text-decoration: none;



  font-size: 25px;



  font-weight: 900;



  transition:

    color .25s ease;

}





.bh-footer-logo-icon {



  width: 47px;



  height: 47px;



  display: flex;



  align-items: center;



  justify-content: center;



  border-radius: 14px;



  color: #a8341f;



  background:

    linear-gradient(

      145deg,

      rgba(168,52,31,.10),

      rgba(201,134,47,.10)

    );



  border:

    1px solid

    rgba(168,52,31,.25);



  box-shadow:

    0 5px 16px

    rgba(168,52,31,.08);



  transition:

    transform .3s ease,

    box-shadow .3s ease;

}





.bh-footer-logo-icon svg {



  width: 36px;



  height: 36px;

}





.bh-footer-logo:hover {



  color: #8f2b19;

}





.bh-footer-logo:hover

.bh-footer-logo-icon {



  transform:

    translateY(-3px)

    rotate(-2deg);



  box-shadow:

    0 10px 24px

    rgba(168,52,31,.17);

}





.bh-footer-amp {



  color: #c9862f;

}





.bh-footer-description {



  margin:

    17px 0 0;



  color: #78716c;



  font-size: 14px;



  line-height: 1.8;

}





.bh-footer-promise {



  display: grid;



  gap: 9px;



  margin-top: 20px;

}





.bh-footer-promise-item {



  display: flex;



  align-items: center;



  gap: 8px;



  color: #6b625d;



  font-size: 12px;



  font-weight: 650;

}





.bh-footer-promise-icon {



  width: 20px;



  height: 20px;



  display: flex;



  align-items: center;



  justify-content: center;



  flex: 0 0 20px;



  border-radius: 50%;



  color: #a8341f;



  background:

    rgba(168,52,31,.09);

}





.bh-footer-promise-icon svg {



  width: 12px;



  height: 12px;

}





/* =========================================================

   FOOTER HEADINGS

========================================================= */



.bh-footer-heading {



  position: relative;



  margin:

    3px 0 20px;



  padding-bottom: 10px;



  color: #241a14;



  font-size: 14px;



  font-weight: 850;



  letter-spacing: .12em;



  text-transform: uppercase;

}





.bh-footer-heading::after {



  content: "";



  position: absolute;



  left: 0;



  bottom: 0;



  width: 38px;



  height: 3px;



  border-radius: 20px;



  background:

    linear-gradient(

      90deg,

      #a8341f,

      #c9862f

    );



  transition:

    width .3s ease;

}





.bh-footer-heading:hover::after {



  width: 70px;

}





/* =========================================================

   FOOTER LINKS

========================================================= */



.bh-footer-links {



  display: grid;



  gap: 5px;

}





.bh-footer-link {



  position: relative;



  display: flex;



  align-items: center;



  width: fit-content;



  padding:

    8px 12px 8px 0;



  color: #78716c;



  text-decoration: none;



  font-size: 14px;



  font-weight: 600;



  transition:

    color .25s ease,

    transform .25s ease;

}





.bh-footer-link:hover {



  color: #a8341f;



  transform:

    translateX(4px);

}





.bh-footer-link::after {



  content: "→";



  position: absolute;



  right: -15px;



  opacity: 0;



  color: #c9862f;



  transition:

    right .25s ease,

    opacity .25s ease;

}





.bh-footer-link:hover::after {



  right: -6px;



  opacity: 1;

}





/* =========================================================

   SERVICE TAGS

   REMOVED FROM FOOTER AS REQUESTED

========================================================= */





/* =========================================================

   CONTACT

========================================================= */



.bh-footer-contact {



  display: grid;



  gap: 14px;

}





.bh-footer-contact-item {



  display: flex;



  align-items: flex-start;



  gap: 12px;



  color: #78716c;



  text-decoration: none;



  font-size: 13px;



  line-height: 1.6;



  transition:

    color .25s ease,

    transform .25s ease;

}





.bh-footer-contact-item:hover {



  color: #a8341f;



  transform:

    translateX(3px);

}





.bh-footer-contact-icon {



  width: 22px;



  height: 22px;



  flex: 0 0 22px;



  color: #a8341f;

}





.bh-footer-contact-icon svg {



  width: 100%;



  height: 100%;

}





/* =========================================================

   SOCIAL

========================================================= */



.bh-footer-social {



  display: flex;



  align-items: center;



  gap: 10px;



  margin-top: 24px;

}





.bh-footer-social-link {



  position: relative;



  width: 42px;



  height: 42px;



  display: flex;



  align-items: center;



  justify-content: center;



  border:

    1px solid #e2ddd7;



  border-radius: 50%;



  background: #fff;



  text-decoration: none;



  overflow: hidden;



  transition:

    transform .3s ease,

    border-color .3s ease,

    box-shadow .3s ease;

}





.bh-footer-social-link svg {



  width: 21px;



  height: 21px;



  position: relative;



  z-index: 2;



  transition:

    transform .3s ease;

}





.bh-footer-social-link:hover {



  transform:

    translateY(-5px);



  box-shadow:

    0 10px 22px

    rgba(36,26,20,.15);

}





.bh-footer-social-link.instagram:hover {



  border-color: #D62976;



  background:

    linear-gradient(

      135deg,

      #FEDA75,

      #FA7E1E,

      #D62976,

      #962FBF

    );

}





.bh-footer-social-link.facebook:hover {



  border-color: #1877F2;



  background: #1877F2;

}





.bh-footer-social-link.whatsapp:hover {



  border-color: #25D366;



  background: #25D366;

}





/* =========================================================

   FOOTER BOTTOM

========================================================= */



.bh-footer-bottom {



  position: relative;



  z-index: 2;



  border-top:

    1px solid #e7e5e4;



  background:

    rgba(255,255,255,.34);



  padding:

    18px 32px;

}





.bh-footer-bottom-inner {



  width: 100%;



  max-width: 1440px;



  margin: 0 auto;



  display: flex;



  align-items: center;



  justify-content: space-between;



  gap: 20px;

}





.bh-footer-copy,

.bh-footer-tagline {



  margin: 0;



  color: #a8a29e;



  font-size: 12px;



  line-height: 1.6;

}





.bh-footer-legal {



  display: flex;



  align-items: center;



  gap: 18px;

}





.bh-footer-legal a {



  color: #a8a29e;



  text-decoration: none;



  font-size: 12px;



  transition:

    color .2s ease;

}





.bh-footer-legal a:hover {



  color: #a8341f;

}





/* =========================================================

   TABLET

========================================================= */



@media (max-width: 1100px) {



  .bh-navbar-inner {



    min-height: 70px;



    padding: 0 20px;



    gap: 10px;

  }





  .bh-desktop-nav {



    display: none;

  }





  .bh-lang-button {



    display: none;

  }





  .bh-menu-button {



    display: flex;

  }





  .bh-actions {



    margin-left: auto;

  }





  .bh-footer-cta {



    padding:

      40px 24px 34px;

  }





  .bh-footer-inner {



    grid-template-columns:

      1.2fr 1fr 1fr;



    gap: 38px;



    padding:

      15px 24px 45px;

  }





  .bh-footer-brand {



    grid-column:

      1 / -1;



    max-width: 700px;

  }





  .bh-footer-bottom {



    padding:

      18px 24px;

  }



}





/* =========================================================

   MOBILE

========================================================= */



@media (max-width: 640px) {



  .bh-navbar-inner {



    min-height: 66px;



    padding: 0 14px;

  }





  .bh-logo {



    font-size: 20px;

  }





  .bh-brand-icon {



    width: 36px;



    height: 36px;



    flex-basis: 36px;



    border-radius: 11px;

  }





  .bh-brand-icon svg {



    width: 29px;



    height: 29px;

  }





  .bh-theme-button,

  .bh-menu-button {



    width: 38px;



    height: 38px;

  }





  /* FOOTER CTA */



  .bh-footer-cta {



    padding:

      28px 16px 26px;

  }





  .bh-footer-cta-card {



    flex-direction: column;



    align-items: flex-start;



    gap: 20px;



    padding:

      25px 22px;



    border-radius: 20px;

  }





  .bh-footer-cta-title {



    font-size: 23px;

  }





  .bh-footer-cta-text {



    font-size: 13px;

  }





  .bh-footer-cta-actions {



    width: 100%;

  }





  .bh-footer-cta-button {



    width: 100%;

  }





  /* MAIN FOOTER */



  .bh-footer-inner {



    grid-template-columns:

      1fr;



    gap: 32px;



    padding:

      10px 18px 36px;

  }





  .bh-footer-brand {



    grid-column: auto;

  }





  .bh-footer-description {



    font-size: 13px;

  }





  .bh-footer-heading {



    margin-bottom: 15px;

  }





  .bh-footer-bottom {



    padding:

      18px;

  }





  .bh-footer-bottom-inner {



    flex-direction: column;



    align-items: flex-start;



    gap: 10px;

  }





  .bh-footer-legal {



    flex-wrap: wrap;



    gap: 12px;

  }





  .bh-footer-tagline {



    order: -1;

  }





  .bh-footer-social-link {



    width: 40px;



    height: 40px;

  }



}





/* =========================================================

   DARK MODE NAVBAR

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





.dark .bh-logo:hover {



  color:

    #f5c46a;

}





.dark .bh-brand-icon {



  color:

    #f0a54a;



  border-color:

    rgba(240,165,74,.35);



  background:

    linear-gradient(

      145deg,

      rgba(168,52,31,.18),

      rgba(201,134,47,.15)

    );

}





.dark .bh-nav-link {



  color:

    #d6d3d1;

}





.dark .bh-nav-link:hover,

.dark .bh-nav-link.bh-active {



  color:

    #f59e0b;

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





/* =========================================================

   DARK MODE BUTTONS

========================================================= */



.dark .bh-lang-button {



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





/* =========================================================

   DARK MOBILE

========================================================= */



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





.dark .bh-mobile-link:hover {



  background:

    #292524;



  color:

    #f59e0b;

}





.dark .bh-mobile-active {



  background:

    #451a03 !important;



  color:

    #f59e0b !important;

}





/* =========================================================

   DARK FOOTER

========================================================= */



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





.dark .bh-footer::before {



  background:

    radial-gradient(

      circle,

      rgba(201,134,47,.10),

      transparent 68%

    );

}





.dark .bh-footer::after {



  background:

    radial-gradient(

      circle,

      rgba(168,52,31,.08),

      transparent 68%

    );

}





.dark .bh-footer-logo {



  color:

    #fafaf9;

}





.dark .bh-footer-logo:hover {



  color:

    #f5c46a;

}





.dark .bh-footer-logo-icon {



  color:

    #f0a54a;



  border-color:

    rgba(240,165,74,.35);



  background:

    linear-gradient(

      145deg,

      rgba(168,52,31,.18),

      rgba(201,134,47,.15)

    );

}





.dark .bh-footer-description,

.dark .bh-footer-link,

.dark .bh-footer-contact-item {



  color:

    #a8a29e;

}





.dark .bh-footer-heading {



  color:

    #fafaf9;

}





.dark .bh-footer-link:hover {



  color:

    #f59e0b;

}





.dark .bh-footer-promise-item {



  color:

    #a8a29e;

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





.dark .bh-footer-legal a:hover {



  color:

    #f59e0b;

}





.dark .bh-footer-social-link {



  background:

    #292524;



  border-color:

    #44403c;

}





/* =========================================================

   RTL

========================================================= */



[dir="rtl"] .bh-footer-heading::after {



  left: auto;



  right: 0;

}





[dir="rtl"] .bh-footer-link:hover {



  transform:

    translateX(-4px);

}





[dir="rtl"] .bh-footer-contact-item:hover {



  transform:

    translateX(-3px);

}





[dir="rtl"] .bh-footer-link::after {



  content: "←";



  right: auto;



  left: -15px;

}





[dir="rtl"] .bh-footer-link:hover::after {



  right: auto;



  left: -6px;

}





/* =========================================================

   END CSS

=========================================================



`;





if (

  !document.getElementById(

    "bh-navbar-footer-styles"

  )

) {



  document.head.appendChild(style);



}





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

            aria-label="Change text direction"

            title="Change text direction"

          >



            ${getDirLabel(currentDirection)}



          </button>





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





        <div

          style="

            display:grid;

            grid-template-columns:1fr;

            gap:9px;

            margin-top:12px;

            padding-top:14px;

            border-top:1px solid #e7e5e4;

          "

        >



          <button

            type="button"

            id="bh-mobile-lang-button"

          >



            ${getDirLabel(currentDirection)}



          </button>



        </div>



      </div>



    </header>



  `;





  /* =======================================================

     MOBILE MENU

  ======================================================= */



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



    }



  }





  if (

    menuButton &&

    mobileMenu

  ) {



    menuButton.addEventListener(

      "click",

      function () {



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



          menuButton.textContent =

            "✕";



          menuButton.setAttribute(

            "aria-expanded",

            "true"

          );



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





  /* =======================================================

     DESKTOP DROPDOWN

  ======================================================= */



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

    closeDropdowns

  );





  /* =======================================================

     MOBILE HOME DROPDOWN

  ======================================================= */



  document

    .querySelectorAll(

      ".bh-mobile-dropdown-trigger"

    )

    .forEach(

      function (trigger) {



        trigger.addEventListener(

          "click",

          function () {



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





            if (isOpen) {



              submenu.classList.remove(

                "bh-mobile-submenu-open"

              );



              trigger.setAttribute(

                "aria-expanded",

                "false"

              );



            } else {



              submenu.classList.add(

                "bh-mobile-submenu-open"

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





  /* =======================================================

     RTL / LTR

  ======================================================= */



  function changeDirection() {



    const current =

      document.documentElement

        .getAttribute("dir") === "rtl"

        ? "rtl"

        : "ltr";





    const next =

      current === "rtl"

        ? "ltr"

        : "rtl";





    applyDirection(next);





    const label =

      getDirLabel(next);





    const desktop =

      document.getElementById(

        "bh-lang-button"

      );





    const mobile =

      document.getElementById(

        "bh-mobile-lang-button"

      );





    if (desktop) {



      desktop.textContent =

        label;



    }





    if (mobile) {



      mobile.textContent =

        label;



    }



  }





  const langButton =

    document.getElementById(

      "bh-lang-button"

    );





  const mobileLangButton =

    document.getElementById(

      "bh-mobile-lang-button"

    );





  if (langButton) {



    langButton.addEventListener(

      "click",

      changeDirection

    );



  }





  if (mobileLangButton) {



    mobileLangButton.addEventListener(

      "click",

      changeDirection

    );



  }





  /* =======================================================

     DARK MODE

  ======================================================= */



  const themeButton =

    document.getElementById(

      "bh-theme-button"

    );





  function updateThemeIcon() {



    if (!themeButton) {

      return;

    }





    const isDark =

      document.documentElement

        .classList.contains("dark");





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



    }



  } catch (error) {}





  if (themeButton) {



    themeButton.addEventListener(

      "click",

      function () {



        const isDark =

          document.documentElement

            .classList.contains("dark");





        document.documentElement

          .classList.toggle("dark");





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

    );



  }





  updateThemeIcon();



}





/* =========================================================

   PREMIUM FOOTER

========================================================= */



const footer =

  document.getElementById(

    "site-footer"

  );





if (footer) {



  footer.innerHTML = `



    <footer class="bh-footer">





      <!-- =================================================

           PREMIUM CTA

      ================================================= -->



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

              Bowl & Hearth take care of the food.



            </p>



          </div>





          <div class="bh-footer-cta-actions">



            <a

              href="${pagePrefix}bulk-orders.html"

              class="bh-footer-cta-button"

            >



              Plan a Bulk Order →



            </a>



          </div>



        </div>



      </div>





      <!-- =================================================

           MAIN FOOTER

      ================================================= -->



      <div class="bh-footer-inner">





        <!-- =================================================

             BRAND

        ================================================= -->



        <div class="bh-footer-brand">



          <a

            href="${homeHref}"

            class="bh-footer-logo"

          >



            <span

              class="bh-footer-logo-icon"

            >



              <svg

                viewBox="0 0 64 64"

                fill="none"

              >



                <path

                  d="M25 10

                     C20 15 22 20 27 23"

                  stroke="currentColor"

                  stroke-width="2.6"

                  stroke-linecap="round"

                />



                <path

                  d="M39 10

                     C44 15 42 20 37 23"

                  stroke="currentColor"

                  stroke-width="2.6"

                  stroke-linecap="round"

                />



                <path

                  d="M32 8

                     C28 14 29 18 32 21

                     C35 18 36 14 32 8Z"

                  fill="currentColor"

                  opacity=".92"

                />



                <path

                  d="M12 30

                     C13 43 21 51 32 51

                     C43 51 51 43 52 30"

                  stroke="currentColor"

                  stroke-width="2.8"

                  stroke-linecap="round"

                />



                <path

                  d="M10 30

                     C10 27 20 25 32 25

                     C44 25 54 27 54 30

                     C54 33 44 35 32 35

                     C20 35 10 33 10 30Z"

                  fill="currentColor"

                  opacity=".14"

                  stroke="currentColor"

                  stroke-width="2.4"

                />



                <path

                  d="M23 52H41"

                  stroke="currentColor"

                  stroke-width="2.8"

                  stroke-linecap="round"

                />



              </svg>



            </span>





            <span>



              Bowl



              <span class="bh-footer-amp">

                &amp;

              </span>



              Hearth



            </span>



          </a>





          <p class="bh-footer-description">



            Comforting local meals, thoughtful

            catering and cloud-kitchen convenience —

            made with honest ingredients and a

            little extra warmth.



          </p>





          <!-- TRUST POINTS -->



          <div class="bh-footer-promise">



            <div class="bh-footer-promise-item">



              <span class="bh-footer-promise-icon">



                ${ICONS.check}



              </span>



              Freshly prepared with care



            </div>





            <div class="bh-footer-promise-item">



              <span class="bh-footer-promise-icon">



                ${ICONS.check}



              </span>



              Neighbourhood-first service



            </div>





            <div class="bh-footer-promise-item">



              <span class="bh-footer-promise-icon">



                ${ICONS.check}



              </span>



              Catering for every occasion



            </div>



          </div>





          <!-- SOCIAL -->



          <div

            class="bh-footer-social"

            aria-label="Social media links"

          >



            <a

              href="#"

              class="bh-footer-social-link instagram"

              aria-label="Instagram"

              title="Instagram"

            >



              ${ICONS.instagram}



            </a>





            <a

              href="#"

              class="bh-footer-social-link facebook"

              aria-label="Facebook"

              title="Facebook"

            >



              ${ICONS.facebook}



            </a>





            <a

              href="#"

              class="bh-footer-social-link whatsapp"

              aria-label="WhatsApp"

              title="WhatsApp"

            >



              ${ICONS.whatsapp}



            </a>



          </div>



        </div>





        <!-- =================================================

             EXPLORE

             HOME REMOVED ONLY

        ================================================= -->



        <div>



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





        <!-- =================================================

             SERVICES

             FRESH / LOCAL / HOMEMADE / RELIABLE REMOVED

        ================================================= -->



        <div>



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





        <!-- =================================================

             CONTACT

        ================================================= -->



        <div>



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



                ${ICONS.phone}



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



                ${ICONS.email}



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



                ${ICONS.location}



              </span>





              <span>



                Serving local neighbourhoods

                <br>

                with warmth & care



              </span>



            </div>





            <div

              class="bh-footer-contact-item"

            >



              <span

                class="bh-footer-contact-icon"

              >



                ${ICONS.clock}



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





      <!-- =================================================

           FOOTER BOTTOM

      ================================================= -->



      <div class="bh-footer-bottom">



        <div class="bh-footer-bottom-inner">





          <p class="bh-footer-copy">



            © 2026 Bowl & Hearth.

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

   BODY TOP SPACE

========================================================= */



function updateBodySpacing() {



  const width =

    window.innerWidth;





  if (width <= 640) {



    document.body.style.paddingTop =

      "66px";



  }



  else if (width <= 1100) {



    document.body.style.paddingTop =

      "70px";



  }



  else {



    document.body.style.paddingTop =

      "76px";



  }



}





updateBodySpacing();





window.addEventListener(

  "resize",

  updateBodySpacing

);





/* =========================================================

   CLOSE MOBILE MENU ON DESKTOP

========================================================= */



window.addEventListener(

  "resize",

  function () {



    if (

      window.innerWidth > 1100

    ) {



      const mobileMenu =

        document.getElementById(

          "bh-mobile-menu"

        );





      const menuButton =

        document.getElementById(

          "bh-menu-button"

        );





      if (mobileMenu) {



        mobileMenu.classList.remove(

          "bh-mobile-open"

        );



      }





      if (menuButton) {



        menuButton.textContent =

          "☰";



        menuButton.setAttribute(

          "aria-expanded",

          "false"

        );



      }



    }



  }

);





/* =========================================================

   ESC KEY

========================================================= */



document.addEventListener(

  "keydown",

  function (event) {



    if (

      event.key === "Escape"

    ) {



      const mobileMenu =

        document.getElementById(

          "bh-mobile-menu"

        );





      const menuButton =

        document.getElementById(

          "bh-menu-button"

        );





      if (mobileMenu) {



        mobileMenu.classList.remove(

          "bh-mobile-open"

        );



      }





      if (menuButton) {



        menuButton.textContent =

          "☰";



        menuButton.setAttribute(

          "aria-expanded",

          "false"

        );



      }



    }



  }

);