const bodyNav = document.getElementById("corpus");
const siteNavLi = document.getElementsByClassName("site_nav_li");
const subNav = document.getElementsByClassName("site_subnav_ul");
const subNavLi = document.getElementsByClassName("site_subnav_li");
const subLinks = document.getElementsByClassName("sub_topics");
const pageTitle = document.getElementsByTagName("h1");
let x = 0;

/* sub_topics handling */

for (let j = 0; j < subLinks.length; j+=2) {
    subLinks[j].classList.add("sub_topics_even");
};

for (let i = 1; i < subLinks.length; i+=2) {
    subLinks[i].classList.add("sub_topics_odd");
};

for (let i = 0; i < subLinks.length; i++) {
    subLinks[i].addEventListener("mouseenter", () => { over(i) })
}

function over(i) {
    for (let i = 0; i < subLinks.length; i++) {
        subLinks[i].classList.remove("sub_topics_over");
    };

    subLinks[i].classList.add("sub_topics_over");
}



for (let i = 0; i < siteNavLi.length; i++) {
    siteNavLi[i].addEventListener("mouseover", () => { subNavReveal(i) });
}

pageTitle[0].addEventListener("mouseenter", () => { subNavHide() });

function subNavReveal(n) {
    x = n;


    for (let i = 0; i < subNav.length; i++) {
        subNav[i].classList.add("click");
    }
    subNav[n].classList.remove("click");

}

function subNavHide() {
    for (let i = 0; i < subNav.length; i++) {
        subNav[i].classList.add("click");
    }
}
