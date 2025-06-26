import categories from "../../static-data/featuredCategories.js";

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
