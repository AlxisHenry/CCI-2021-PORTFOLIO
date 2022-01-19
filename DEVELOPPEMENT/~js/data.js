const path = {
  imgs: "./DEVELOPPEMENT/assets/@img/",
  html: "./DEVELOPPEMENT/~html/",
};
const images = {
  timken: {
    title: "TIMKEN",
    alt: "TIMKEN",
    img: `${path.imgs}Timken.png`,
    href: `${path.html}projet-timken.html`,
    status: "Not Started",
  },
  snipeit: {
    title: "SNIPE-IT",
    alt: "SNIPE-IT",
    img: `${path.imgs}snipeit.png`,
    href: `${path.html}projet-snipe-it.html`,
    status: "Not Started",
  },
  aleatory: {
    title: "ALEATORY",
    alt: "ALEATORY",
    img: `${path.imgs}aleatory.png`,
    href: "none",
    status: "none",
  },
};
const style = {
  display: {
    flex: (id) => {
      id.style.display = "flex";
    },
    none: (id) => {
      id.style.display = "none";
    },
  },
  filter: {
    blur: (id, value) => {
      id.style.filter = `blur(${value}px)`;
    },
    none: (id) => {
      id.style.filter = "none";
    },
  },
  opacity: (id, value) => {
    id.style.opacity = value;
  },
};
