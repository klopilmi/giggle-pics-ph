import { banner } from "../../static-data/bannerData.js";
import categories from "../../static-data/categoriesData.js";
import {
    annnoucement,
    logo,
    navigations,
    socials,
} from "../../static-data/headerData.js";

// ================ Header Data =======================

const annnoucementEl = document.querySelector(".header-announcement");
annnoucementEl.innerHTML = annnoucement;

const logoEl = document.querySelector(".header-logo-container");
const a = document.createElement("a");
a.href = logo.href;

const img = document.createElement("img");
img.alt = logo.title;
img.src = logo.logoUrl;
img.className = "header-logo";

a.appendChild(img);
logoEl.appendChild(a);

const headerSocials = document.getElementById("header-socials");

socials.forEach((social) => {
  const a = document.createElement("a");
  a.className = social.className;
  a.href = "#";

  const img = document.createElement("img");
  img.src = social.imgUrl;
  img.alt = social.alt;
  img.className = `icon`;

  a.appendChild(img);
  headerSocials.appendChild(a);
});

const navigationBar = document.getElementById("navigation-bar");
navigations.forEach((item) => {
  const a = document.createElement("a");
  a.className = "nav-item";
  a.href = item.url;
  a.textContent = item.text;
  navigationBar.appendChild(a);
});

// ================ Banner Data =======================

const bannerSection = document.getElementById("banner-section");
const bannerContainer = document.createElement("div");
bannerContainer.className = "banner-container";

const imgContainer = document.createElement("div");
imgContainer.className = "banner-img-container";
imgContainer.innerHTML = `<img
            src="${banner.imgSrc}"
            alt="${banner.imgAlt}"
          />`;

const introContainer = document.createElement("div");
introContainer.className = "banner-intro";
introContainer.innerHTML = `<h1 id="rainbow-heading">${banner.title}</h1>
          <p>${banner.tag}</p>
          <button class="gp-button" type="button">Shop Now</button>
`;

bannerContainer.appendChild(imgContainer);
bannerContainer.appendChild(introContainer);
bannerSection.appendChild(bannerContainer);

// ================ Categories Data =======================

const categorySection = document.getElementById("category-section");

categories.forEach((cat) => {
  const card = document.createElement("div");
  card.className = "category-card";
  card.style.backgroundColor = cat.color;
  card.style.color = cat.color;

  card.innerHTML = `
  <img src="${cat.url}" alt="${cat.title}">
  <div class="card-overlay">
  <h3><strong>${cat.title}</strong></h3>
    <button class="shop-btn">Shop >></button>
 </div> `;

  categorySection.appendChild(card);

  const btn = card.querySelector(".shop-btn");
  btn.style.backgroundColor = cat.color;
});
