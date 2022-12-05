import {
    insert_lvl1, subnav_insert_SRIC1, chapter_section_title, sectListArray, structureArticle,
    textArticle, classArticle, structureArticleSub_1, structureArticleSub_2, classArticleSub_1, classArticleSub_2,
    structureArticleSub_3, classArticleSub_3
} from "./networks_data.mjs";
/*
import { chapterNavTxt, structNavChapter, sectionNavTxt, txtRsv, structRsv } from "./SRI_DATA.mjs";
*/
// Variables Header
const bodyNav = document.getElementById("corpus");
const siteNavLi = document.getElementsByClassName("site_nav_li");
const subNav = document.getElementsByClassName("site_subnav_ul");
const subNavLi = document.getElementsByClassName("site_subnav_li");
const subLinks = document.getElementsByClassName("sub_topics");
const pageTitle = document.getElementById("main_content");

// Variables “main_content”
const txtReserve = document.getElementsByClassName("text_reserve");
const chapterSection = document.getElementsByClassName("chapter_section_btn");
const sectionList = document.getElementsByClassName("section_list");
const sectionArticle = document.getElementsByClassName("section_article_btn");
const artDiv = document.getElementsByClassName("rsv_article_div");
const imgDiv = document.getElementsByClassName("rsv_article_div_img");
/*
const rsvUlClick = document.getElementsByClassName("rsv_ul_click");
const rsvArtLi = document.getElementsByClassName("rsv_article_li");
const pageTitle = document.getElementsByClassName("page_title");
const subNavListTitle = document.getElementsByClassName("subnav_list_title");
const subNavListTxt = document.getElementsByClassName("subnav_list_txt");
const layerBtn = document.getElementsByClassName("layer_btn");
const para = document.getElementsByTagName("p");
const navReserve = document.getElementsByClassName("page_nav");
const division = document.getElementsByTagName("div");
*/

let x = 0;

for (let j = 0; j < chapterSection.length; j++) {
    chapterSection[j].addEventListener('click', () => { colorChapterSection(j) });

};

for (let j = 0; j < sectionArticle.length; j++) {
    sectionArticle[j].addEventListener('click', () => { fillsectionArticle(j) });
};


/*
chapterNav(navReserve[0], chapterNavTxt, structNavChapter[0]);

function chapterNav(a, b, c, e) {


    while (a.hasChildNodes()) {
        a.removeChild(a.firstChild);
    };

    const parElem = document.createElement(c[0]);
    parElem.classList.add(...c[1]);
    for (let i = 0; i < b.length; i++) {
        const childElem = document.createElement(c[2]);
        const childELemtxt = document.createTextNode(b[i]);
        childElem.classList.add(...c[3]);
        childElem.appendChild(childELemtxt);
        if (c[4]) {
            const childUl = document.createElement(c[4]);
            childUl.classList.add(c[5]);

            parElem.appendChild(childElem);
            parElem.appendChild(childUl);
        } else {
            parElem.appendChild(childElem);

        }
    }

    a.appendChild(parElem);

    for (let j = 0; j < chapterSection.length; j++) {
        chapterSection[j].addEventListener('click', () => { sectionNav(j) });

    };


};

function sectionNav(e) {
    x = e;

    for (let j = 0; j < sectionList.length; j++) {
        while (sectionList[j].hasChildNodes()) {
            sectionList[j].removeChild(sectionList[j].firstChild);
        }
    }

    while (txtReserve[0].hasChildNodes()) {
        txtReserve[0].removeChild(txtReserve[0].firstChild);
    };

    for (let i = 0; i < sectionNavTxt[e].length; i++) {
        const childLi = document.createElement(structNavChapter[1][0]);
        const childLiTxt = document.createTextNode(sectionNavTxt[e][i]);
        childLi.classList.add(...structNavChapter[1][1]);
        childLi.appendChild(childLiTxt);
        sectionList[e].appendChild(childLi);
    }

    for (let j = 0; j < sectionArticle.length; j++) {
        sectionArticle[j].addEventListener('click', () => { fillRsv(j) });

    };
}

/*
function fillRsv(e) {
    let y = e;

    while (txtReserve[0].hasChildNodes()) {
        txtReserve[0].removeChild(txtReserve[0].firstChild);
    };
    //  Titre Chapitre et Section 
    const chapterTitle = document.createElement("h2");
    const chapterTxt = document.createTextNode(chapterNavTxt[x]);
    chapterTitle.classList.add("rsv_chapter_title");
    chapterTitle.appendChild(chapterTxt);
    const sectionTitle = document.createElement("h3");
    const sectionTxt = document.createTextNode(sectionNavTxt[x][y]);
    sectionTitle.classList.add("rsv_section_title");
    sectionTitle.appendChild(sectionTxt);
    //
    txtReserve[0].appendChild(chapterTitle);
    txtReserve[0].appendChild(sectionTitle);

    for (let i = 0; i < txtRsv[x][y].length; i++) {
        const rsvElem = document.createElement(structRsv[x][y][i][0]);
        rsvElem.classList.add(...structRsv[x][y][i][1]);

        if (structRsv[x][y][i][0] === "img") {
            rsvElem.setAttribute("src", txtRsv[x][y][i]);

        } else if (structRsv[x][y][i][0] === "ul" || structRsv[x][y][i][0] === "ol") {
            for (let j = 0; j < txtRsv[x][y][i].length; j++) {
                const rsvUlLi = document.createElement(structRsv[x][y][i][2]);
                const rsvUlLiTxt = document.createTextNode(txtRsv[x][y][i][j][0]);
                rsvUlLi.classList.add(...structRsv[x][y][i][3]);
                rsvUlLi.appendChild(rsvUlLiTxt);
                rsvElem.appendChild(rsvUlLi);
                if (structRsv[x][y][i][4] === "p") {
     
                    // structure ul > li + p > ul 

                    for (let k = 0; k < txtRsv[x][y][i][j][1].length; k++) {
                        if (Array.isArray(txtRsv[x][y][i][j][1][k])) {
                            const rsvUlLiPUl = document.createElement(structRsv[x][y][i][6]);
                            rsvUlLiPUl.classList.add(structRsv[x][y][i][7]);

                            for (let h = 0; h < txtRsv[x][y][i][j][1][k].length; h++) {
                                if (Array.isArray(txtRsv[x][y][i][j][1][k][h])) {
                                    for (let f = 0; f < txtRsv[x][y][i][j][1][k][h].length; f++) {
                                        if (Array.isArray(txtRsv[x][y][i][j][1][k][h][f])) {
                                            const rsvUlLiPUlP = document.createElement(structRsv[x][y][i][10]);
                                            const rsvUlLiPUlPtxt = document.createTextNode(txtRsv[x][y][i][j][1][k][h][f]);
                                            rsvUlLiPUlP.classList.add(structRsv[x][y][i][11]);
                                            rsvUlLiPUlP.appendChild(rsvUlLiPUlPtxt);
                                            rsvUlLiPUl.appendChild(rsvUlLiPUlP);
                                        } else {
                                            const rsvUlLiPUlLi = document.createElement(structRsv[x][y][i][8]);
                                            const rsvUlLiPUlLitxt = document.createTextNode(txtRsv[x][y][i][j][1][k][h][f]);
                                            rsvUlLiPUlLi.classList.add(structRsv[x][y][i][9]);
                                            rsvUlLiPUlLi.appendChild(rsvUlLiPUlLitxt);
                                            rsvUlLiPUl.appendChild(rsvUlLiPUlLi);
                                        }
                                        //

                                        rsvElem.appendChild(rsvUlLiPUl);
                                    }
                                }
                            }
                        } else {
                            const rsvUlLiP = document.createElement(structRsv[x][y][i][4]);
                            const rsvUlLiPtxt = document.createTextNode(txtRsv[x][y][i][j][1][k]);
                            rsvUlLiP.classList.add(...structRsv[x][y][i][5]);
                            rsvUlLiP.appendChild(rsvUlLiPtxt);
                            rsvElem.appendChild(rsvUlLiP);
                        }

                    }
                    // structure ul > li > ul 
                } else if (structRsv[x][y][i][4] === "ul") {
                    const rsvUlUl = document.createElement(structRsv[x][y][i][4]);
                    rsvUlUl.classList.add(...structRsv[x][y][i][5]);


                }

            }

        } else {
            const rsvElemTxt = document.createTextNode(txtRsv[x][y][i]);
            rsvElem.appendChild(rsvElemTxt);
        }
        txtReserve[0].appendChild(rsvElem);

    }

    for (let m = 0; m < rsvUlClick.length; m++) {
        for (let l = 0; l < rsvUlClick[m].children.length; l++) {
            if (rsvUlClick[m].children[l].classList.contains("rsv_article_li")) {
                rsvUlClick[m].children[l].addEventListener('click', () => { displayP(l) });
            }
        }
    }
    pageTitle[0].textContent = "x from sectionNav()= " + x + " y from fillRsv()= " + y;

}
*/
/*
function displayP(e) {
    let z = e + 1;
    for (let n = 0; n < rsvUlClick.length; n++) {
        for (let i = z; i < rsvUlClick[n].children.length; i++) {
            if (rsvUlClick[n].children[i].classList.contains("rsv_article_li_p") || rsvUlClick[n].children[i].classList.contains("rsv_article_ul_click")) {
                rsvUlClick[n].children[i].classList.toggle("visible");
            } else {
                i = rsvUlClick[0].children.length;
            };
        }
    }
    pageTitle[0].textContent = "z = " + z;
}

*/
/* Quand on "click" sur les sections du chapitre, on boucle sur la HTMLcollection
   des éléments avec la classe "chapter_section_btn".
   Pour le bouton "clické" => on bascule la classe du bouton de la Section.*/

function colorChapterSection(n) {
    testAppendLi(n);

    for (let i = 0; i < chapterSection.length; i++) {
        if (i === n) {
            chapterSection[i].classList.toggle("chapter_section_btn_active");
            if (sectionList[i]) {
                sectionList[i].classList.toggle("section_list_visible");
            }
        } else {
            chapterSection[i].classList.remove("chapter_section_btn_active");
            if (sectionList[i]) {
                sectionList[i].classList.remove("section_list_visible");
            }
        }
    };

    for (let j = 0; j < sectionArticle.length; j++) {

        sectionArticle[j].classList.remove("subNavTxtActive");
        txtReserve[0].innerHTML = "";

    };

    fillArticle(0);

}

/* Rempli le div avec class="text_reserve" du contenu du tableau "subnav_insert_SRIC1"
    Ajoute un eventListener aux éléments de la HTMLcollection class="section_article_btn"
    qui appelle la fonction ReveealSubnavTxt() .*/

function fillsectionArticle(n) {
    txtReserve[0].innerHTML = chapter_section_title[x][n] + subnav_insert_SRIC1[n];
    sectionArticle[n].classList.add("subNavTxtActive");

    for (let j = 0; j < sectionArticle.length; j++) {
        if (j !== n) {
            sectionArticle[j].classList.remove("subNavTxtActive");
        }
    };

}

function fillArticle(n) {
    let y = n;

    /* On vide le div de class "texte_reserve" */
    while (txtReserve[0].hasChildNodes()) {
        txtReserve[0].removeChild(txtReserve[0].firstChild);
    };

    /* On boucle sur le Tableau structureArticle */
    for (let j = 0; j < structureArticle[x][n].length; j++) {
        const artElem = document.createElement(structureArticle[x][n][j]);
        artElem.classList.add(...classArticle[x][n][j]);


        /* Si la valeur de structureArticle est "img" ( donc une image ) */
        if (structureArticle[x][n][j] === "img") {
            artElem.setAttribute("src", textArticle[x][n][j]);


            /* Si la valeur de structureArticle est "ul" ( donc une liste ) ou "div" ( un container ) */
        } else if (structureArticle[x][n][j] === "ul" || structureArticle[x][n][j] === "div" || structureArticle[x][n][j] === "table") {


            /* On boucle sur le Tableau structureArticleSub_1 */
            for (let i = 0; i < structureArticleSub_1[x][n][j].length; i++) {
                /* on crée le "li" si "ul", "tr" si "table" */
                const artLi = document.createElement(structureArticleSub_1[x][n][j][i]);
                artLi.classList.add(...classArticleSub_1[x][n][j][i]);

                if (Array.isArray(structureArticleSub_2[x][n][j]) && structureArticleSub_2[x][n][j][i] === "span") {
                    const artLiTxt = document.createTextNode(textArticle[x][n][j][i][1]);
                    const artLiSpan = document.createElement(structureArticleSub_2[x][n][j][i]);
                    const artLiSpanTxt = document.createTextNode(textArticle[x][n][j][i][0]);
                    artLiSpan.appendChild(artLiSpanTxt);
                    artLi.appendChild(artLiSpan);
                    artLi.appendChild(artLiTxt);


                }

                else if (structureArticleSub_1[x][n][j][i] === "img") {
                    artLi.setAttribute("src", textArticle[x][n][j][i]);
                }

                else if (structureArticleSub_1[x][n][j][i] === "ul" || structureArticleSub_1[x][n][j][i] === "div" || structureArticleSub_1[x][n][j][i] === "tr") {

                    /* On boucle sur le Tableau structureArticleSub_2 */
                    for (let k = 0; k < structureArticleSub_2[x][n][j][i].length; k++) {
                        if (Array.isArray(structureArticleSub_2[x][n][j][i][k])) {
                            const artLiUl = document.createElement(structureArticleSub_2[x][n][j][i][k][0]);
                            const artLiUlTxt = document.createTextNode(textArticle[x][n][j][i][k]);
                            artLiUl.classList.add(...classArticleSub_2[x][n][j][i][k]);

                            artLiUl.setAttribute("colspan", structureArticleSub_2[x][n][j][i][k][1]);
                            artLiUl.appendChild(artLiUlTxt);
                            artLi.appendChild(artLiUl);



                        } else {
                            const artLiUl = document.createElement(structureArticleSub_2[x][n][j][i][k]);
                            const artLiUlTxt = document.createTextNode(textArticle[x][n][j][i][k]);
                            artLiUl.classList.add(...classArticleSub_2[x][n][j][i][k]);
                            artLiUl.appendChild(artLiUlTxt);
                            artLi.appendChild(artLiUl);


                        }
                    }
                }

                else if (structureArticleSub_1[x][n][j][i] === "table") {
                    /* On boucle sur le Tableau structureArticleSub_2 */
                    for (let k = 0; k < structureArticleSub_2[x][n][j][i].length; k++) {
                        const artTrUl = document.createElement(structureArticleSub_2[x][n][j][i][k]);
                        artTrUl.classList.add(...classArticleSub_2[x][n][j][i][k]);
                        for (let l = 0; l < structureArticleSub_3[x][n][j][i][k].length; l++) {
                            const artTdUl = document.createElement(structureArticleSub_3[x][n][j][i][k][l]);
                            const artTdUlTxt = document.createTextNode(textArticle[x][n][j][i][k][l]);
                            artTdUl.classList.add(...classArticleSub_3[x][n][j][i][k][l]);
                            artTdUl.appendChild(artTdUlTxt);
                            artTrUl.appendChild(artTdUl);

                        }
                        artLi.appendChild(artTrUl);
                    }

                }

                /* Si la valeur de structureArticleSub_1 n'est ni "ul", ni "div" */
                else {
                    const artLiTxt = document.createTextNode(textArticle[x][n][j][i]);
                    artLi.appendChild(artLiTxt);
                }

                /* Si la valeur de structureArticleSub_1 est "ul" */

                artElem.appendChild(artLi);
            }

            /* Si la valeur de structureArticle n'est pas "ul" */
        } else {
            const artElemTxt = document.createTextNode(textArticle[x][n][j]);
            artElem.appendChild(artElemTxt);

        }
        txtReserve[0].appendChild(artElem);

    };

    sectionArticle[n].classList.add("subNavTxtActive");

    for (let j = 0; j < sectionArticle.length; j++) {
        if (j !== n) {
            sectionArticle[j].classList.remove("subNavTxtActive");
        }
    };

    if ((x === 1 && y === 1) || (x === 2 && y === 0)) {
        for (let e = 0; e < imgDiv.length; e++) {
            imgDiv[e].addEventListener('click', () => { revealChilds(e) });
        }
    }

}

function testAppendLi(n) {
    x = n;

    for (let j = 0; j < sectionList.length; j++) {
        while (sectionList[j].hasChildNodes()) {
            sectionList[j].removeChild(sectionList[j].firstChild);
        };
    };

    for (let j = 0; j < sectListArray[n].length; j++) {
        const newElem = document.createElement("li");
        const newElemTxt = document.createTextNode(sectListArray[n][j]);
        newElem.classList.add("section_article_btn");
        newElem.appendChild(newElemTxt);
        sectionList[n].appendChild(newElem);
    };

    for (let j = 0; j < sectionArticle.length; j++) {
        sectionArticle[j].addEventListener('click', () => { fillArticle(j) })
    };

}

function revealChilds(e) {
    artDiv[e].classList.toggle("hide_div");

    for (let i = 1; i < artDiv[e].childNodes.length; i++) {
        artDiv[e].childNodes[i].classList.toggle("hide_not_div");
    }
}

/* sub_topics handling */


btnLayout(subLinks, "sub_topics_even", "sub_topics_odd");

function btnLayout(target, class1, class2) {
    for (let j = 0; j < target.length; j += 2) {
        target[j].classList.add(class1);
    };

    for (let i = 1; i < target.length; i += 2) {
        target[i].classList.add(class2);
    };
}



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

pageTitle.addEventListener("mouseenter", () => { subNavHide() });

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

