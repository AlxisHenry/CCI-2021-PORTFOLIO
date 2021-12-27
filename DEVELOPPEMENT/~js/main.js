// Fonctions globales 

function icon_history_back()
    {
         let confirm_history_back = confirm("Vous allez quitter la page");
             if (confirm_history_back == true) 
                {
                     history.back();
                }  
                else 
                {
                     console.log("Cancel History Back");
                }
        //  console.log("icon_history_back() utilisée");
    }
    
// Fonctions utilisées sur 'index.html'

/* La création d'objets est importante, car cela va permettre de faciliter si nécessaire les modifications */

let path_to_imgs = "./DEVELOPPEMENT/@img/";
let path_to_html = "./DEVELOPPEMENT/~html/";

const timken =
{
     title: "TIMKEN",
     alt: "TIMKEN",
     img: `${path_to_imgs}Timken.png`,
     href: `${path_to_html}projet-timken.html`,
     status: "Not Started",
};

const snipeit = 
{
     title: "SNIPE-IT",
     alt: "SNIPE-IT",
     img: `${path_to_imgs}Snipe-IT-logo.png`,
     href: `${path_to_html}projet-snipe-it.html`,
     status: "Not Started",
};

const aleatory = 
{
    title: "ALEATORY",
    alt: "ALEATORY",
    img: `${path_to_imgs}téléchargement (1).png`,
    href: "none",
    status: "none",
};

function activate_circle_img1() 
    { 
         document.querySelector(".img2").classList.remove('fas');
         document.querySelector(".img3").classList.remove('fas');
         document.querySelector(".img1").classList.add('fas');
         document.getElementById("img-centrale").title = timken.title;
         document.getElementById("img-centrale").alt = timken.alt;
         document.getElementById("img-centrale").src = timken.img;
         document.getElementById("img-scnd").src = snipeit.img;
         document.getElementById("img-thrd").src = aleatory.img;
         document.querySelector(".src").onclick = function () 
            {
                 document.getElementById("href-img").href = timken.href;
            }
        //  console.log("change1() utilisée");
    }

function activate_circle_img2() 
    { 
         document.querySelector(".img1").classList.remove('fas');
         document.querySelector(".img1").classList.add('far');  
         document.querySelector(".img3").classList.remove('fas');
         document.querySelector(".img2").classList.add('fas');
         document.getElementById("img-centrale").title = snipeit.title;
         document.getElementById("img-centrale").alt = snipeit.alt;
         document.getElementById("img-centrale").src = snipeit.img;
         document.getElementById("img-scnd").src = timken.img;
         document.getElementById("img-thrd").src = aleatory.img;
         document.querySelector(".src").onclick = function () 
            {
                 document.getElementById("href-img").href = snipeit.href;
            }
        //  console.log("change2() utilisée");
    }

function activate_circle_img3() 
    { 
         document.querySelector(".img1").classList.remove('fas');
         document.querySelector(".img1").classList.add('far');
         document.querySelector(".img2").classList.remove('fas');
         document.querySelector(".img3").classList.add('fas');
         document.getElementById("img-centrale").title = aleatory.title;
         document.getElementById("img-centrale").alt = aleatory.alt;
         document.getElementById("img-centrale").src = aleatory.img;
         document.getElementById("img-scnd").src = timken.img;
         document.getElementById("img-thrd").src = snipeit.img;
         document.querySelector(".src").onclick = function () 
            {
                 let href_links_path = [timken.href,snipeit.href]
                 let random_path_selector = href_links_path[Math.floor(Math.random() * href_links_path.length)];
                 document.getElementById("href-img").href = random_path_selector;
            }
        //  console.log("change3() utilisée");
    }

function activate_circle_img_auto() 
    {
         setTimeout("activate_circle_img1()",5000);
         setTimeout("activate_circle_img2()",15000);
         setTimeout("activate_circle_img3()",25000);
        //  console.log("activate_circle_img_auto() utilisée")
    }

setInterval("activate_circle_img_auto()", 25000);


// Fonctions utilisées sur 'comprendre.html'

// Fonctions utilisées sur 'presentation.html'

// Fonctions utilisées sur 'projets.html'
