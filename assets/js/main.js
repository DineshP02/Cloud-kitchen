document.addEventListener("click",e=>{
 const menu=e.target.closest("[data-menu]"), mobile=document.querySelector("[data-mobile-menu]");
 if(menu&&mobile) mobile.classList.toggle("open");
 const theme=e.target.closest("[data-theme]");
 if(theme){document.documentElement.classList.toggle("dark");localStorage.setItem("theme",document.documentElement.classList.contains("dark")?"dark":"light")}
});
if(localStorage.getItem("theme")==="dark") document.documentElement.classList.add("dark");
document.documentElement.setAttribute("dir",localStorage.getItem("dir")||"ltr");