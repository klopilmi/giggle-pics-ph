import categories from "../../static-data/featuredCategories.js";
import navigations from "../../static-data/headerNavigation.js";
import socials from "../../static-data/socials.js";

const navigationBar = document.getElementById("navigation-bar");

navigations.forEach((item) => {
  const a = document.createElement("a");
  a.className = "nav-item";
  a.href = item.url;
  a.textContent = item.text;
  navigationBar.appendChild(a);
});

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
