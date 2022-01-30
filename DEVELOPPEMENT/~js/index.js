document.getElementById("src-img-centrale").insertAdjacentHTML(
  "afterbegin",
  (src_img_centrale = `
  <a id="href-img" href="${images.timken.href}"
    ><img
      id="img-centrale"
      alt="${images.timken.alt}"
      src="${images.timken.img}"
      title="${images.timken.title}"
      class="src"
  /></a>`)
);
document.getElementById("src-img-scnd").insertAdjacentHTML(
  "afterbegin",
  (src_img_scnd = `
  <img
    id="img-scnd"
    alt="${images.snipeit.alt}"
    title="Seconde image"
    src="${images.snipeit.img}"
  />`)
);
document.getElementById("src-img-thrd").insertAdjacentHTML(
  "afterbegin",
  (src_img_thrd = `
  <img
    id="img-thrd"
    alt="${images.aleatory.alt}"
    title="Troisième image"
    src="${images.aleatory.img}"
  />`)
);

const first_button_div = document.getElementById("first_button_div"),
  img_centrale = document.getElementById("img-centrale"),
  img_nd = document.getElementById("img-scnd"),
  img_th = document.getElementById("img-thrd"),
  src_prp = document.querySelector(".src"),
  href_img = document.getElementById("href-img");

first_button_div.insertAdjacentHTML(
  "beforeend",
  (snipeit_button = `<i
    alt="${images.snipeit.alt}"
    title=""${images.snipeit.title}
    class="img1 btn1 fas fa-circle"
  ></i>`)
);
first_button_div.insertAdjacentHTML(
  "beforeend",
  (aleatory_button = `<i
    alt="${images.aleatory.alt}"
    title="${images.aleatory.title}"
    class="img2 btn2 fas fa-circle"
  ></i>`)
);
first_button_div.insertAdjacentHTML(
  "beforeend",
  (timken_button = `<i
  alt="${images.timken.alt}"
  title="${images.timken.title}"
  class="img3 btn3 fas fa-circle"
  ></i>`)
);

//* Ces deux lignes permettent de flouter les images de côtés. J'ai décidé de les retirer car c'est plus esthétique.
// style.filter.blur(img_nd, 3)
// style.filter.blur(img_th, 3)

const buttons = document.querySelectorAll(".fa-circle");
buttons[0].addEventListener("click", change_to_img1);
buttons[1].addEventListener("click", change_to_img2);
buttons[2].addEventListener("click", change_to_img3);
window.addEventListener("load", change_img_onload);

// --------------- FUNCTIONS ---------------

function change_to_img1() {
  img_centrale.classList.add("transition-to-img");
  img_centrale.title = images.snipeit.title;
  img_centrale.alt = images.snipeit.alt;
  img_centrale.src = images.snipeit.img;
  img_nd.src = images.aleatory.img;
  img_th.src = images.timken.img;
  src_prp.onclick = function () {
    href_img.href = images.snipeit.href;
  };
  img_centrale.animate([{ opacity: 0 }, { transition: "ease-in" }], {
    duration: 400,
  });
}

function change_to_img2() {
  img_centrale.title = images.aleatory.title;
  img_centrale.alt = images.aleatory.alt;
  img_centrale.src = images.aleatory.img;
  img_nd.src = images.timken.img;
  img_th.src = images.snipeit.img;
  src_prp.onclick = function () {
    const href_links_path = [images.timken.href, images.snipeit.href];
    const random_path_selector =
      href_links_path[Math.floor(Math.random() * href_links_path.length)];
    href_img.href = random_path_selector;
  };
  img_centrale.classList.remove("transition-to-img");
  img_centrale.classList.add("transition-to-img");
  img_centrale.animate([{ opacity: 0 }, { transition: "ease-in" }], {
    duration: 400,
  });
}

function change_to_img3() {
  img_centrale.title = images.timken.title;
  img_centrale.alt = images.timken.alt;
  img_centrale.src = images.timken.img;
  img_nd.src = images.snipeit.img;
  img_th.src = images.aleatory.img;
  src_prp.onclick = function () {
    href_img.href = images.timken.href;
  };
  img_centrale.classList.remove("transition-to-img");
  img_centrale.classList.add("transition-to-img");
  img_centrale.animate([{ opacity: 0 }, { transition: "ease-in" }], {
    duration: 400,
  });
}

function change_img_auto() {
  setTimeout(change_to_img1, 4000);
  setTimeout(change_to_img2, 8000);
  setTimeout(change_to_img3, 12000);
}

function change_img_onload() {
  setTimeout(change_to_img1, 4000);
  setTimeout(change_to_img2, 8000);
  setTimeout(change_to_img3, 12000);
  setInterval(change_img_auto, 12000);
}

// ------------------ FIREFOX & SAFARI  ------------------

const this_platform = platform.name
console.log(`%cYou use ${this_platform}`, "color: red; background-color:white; font-size:25px;");
console.log(`%cIf you see a bug, please report them on : https://github.com/AlxisHenry/CCI-2021-PORTFOLIO`, "color: red; background-color:white; font-size:10px;");

if (platform.name === "Chrome") {
  console.log("You use a good browser :)");
} else if (platform.name === "Firefox" || platform.name === "Safari") {
  img_nd.style.visibility = "hidden";
  img_th.style.visibility = "hidden";
  console.log(`%cThe version of the website is modified on your browser. Sorry for this issue `, "color: red; background-color:white; font-size:12px;");
}

console.timeEnd("Exécution script JS");