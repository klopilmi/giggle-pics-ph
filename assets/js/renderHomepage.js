import { banner } from "../../static-data/bannerData.js";
import categories from "../../static-data/categoriesData.js";
import { contactDetails } from "../../static-data/contactDetails.js";
import { featuredEvent } from "../../static-data/featuredEvent.js";
import {
  annnoucement,
  logo,
  navigations,
  socials,
} from "../../static-data/headerData.js";
import { products } from "../../static-data/productsData.js";
import { qoute } from "../../static-data/qouteData.js";
import { reviews } from "../../static-data/reviewsData.js";
import { studioData } from "../../static-data/studioData.js";
import { inquiryForm } from "./inquiryForm.js";
import { applyRainbowHeading } from "./utils.js";

export const RenderHomepage = () => {
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
  introContainer.innerHTML = `
  <h1 id="rainbow-heading">${banner.title}</h1>
  <p>${banner.tag}</p>
  <button class="gp-button" type="button">Shop Now</button>
`;

  bannerContainer.appendChild(imgContainer);
  bannerContainer.appendChild(introContainer);
  bannerSection.appendChild(bannerContainer);

  applyRainbowHeading();

  // ================ Categories Data =======================

  const categorySection = document.getElementById("category-wrapper");

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

  // ================ Qoute Data =======================

  const qouteSection = document.getElementById("qoute-section");

  const qouteContainer = document.createElement("div");
  qouteContainer.className = "qoute-container";

  const strongEl = document.createElement("strong");
  strongEl.innerText = qoute.question;

  const pEl = document.createElement("p");
  pEl.innerText = qoute.text;

  const btnEl = document.createElement("button");
  btnEl.innerText = qoute.buttonText;
  btnEl.type = "button";
  btnEl.className = "qoute-btn gp-button";

  qouteContainer.appendChild(strongEl);
  qouteContainer.appendChild(pEl);
  qouteContainer.appendChild(btnEl);
  qouteSection.appendChild(qouteContainer);

  // ================ New In Data =======================

  const newinSection = document.getElementById("newin-section");

  const newinContainer = document.createElement("div");
  newinContainer.className = "primary-container";

  const h4El = document.createElement("h4");
  h4El.innerText = "NEW IN";

  const cardWrrapper = document.createElement("div");
  cardWrrapper.className = "newin-wrapper";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "newin-card";

    card.innerHTML = `<img src="${product.imageUrl}" alt="${product.name}" class="product-image" />
    <div class="prod-details"><strong>${product.name}</strong><p>${product.price}</p></div>`;

    cardWrrapper.appendChild(card);
  });

  newinContainer.appendChild(h4El);
  newinContainer.appendChild(cardWrrapper);
  newinSection.appendChild(newinContainer);

  // ================ Studio Data =======================

  const studioSection = document.getElementById("studio-section");
  const studioContainer = document.createElement("div");
  studioContainer.className = "primary-container";

  studioContainer.innerHTML = `
  <div class="studio-img-wrapper">
    <img src="${studioData.imageUrl}" alt="${studioData.title}" class="studio-image" />
  </div>
  <div class="studio-details-wrapper">
    <h4>${studioData.title}</h4>
    <p>${studioData.description}</p>
    <button class="gp-button">Read More</button
  div>`;

  studioSection.appendChild(studioContainer);

  // ================ Event and Reviews Data =======================

  const eventReviewsSection = document.getElementById("event-reviews-section");

  const eventRevContainer = document.createElement("div");
  eventRevContainer.className = "primary-container";

  const eventWrapper = document.createElement("div");
  eventWrapper.className = "event-wrapper";
  eventWrapper.innerHTML = `
  <h4>Recent Event</h4> 
  <div class="event-details"> 
    <div class="event-img-wrapper"> 
      <img src="${featuredEvent.imageUrl}" alt="${featuredEvent.title}" class="event-image" /> 
    </div>
    <div class="event-content-wrapper">
      <h5>${featuredEvent.title}</h5>
      <p>${featuredEvent.excerpt}</p>
      <button class="gp-button">Read More</button>
    </div>
  </div>`;

  const reviewsWrapper = document.createElement("div");
  reviewsWrapper.className = "reviews-wrapper";
  reviewsWrapper.innerHTML = `
  <h4>Customer Reviews</h4>
  <div class="reviews-details">
    <p class="review-text">${reviews[0].review}</p>
    <em class="review-name">${reviews[0].name}</em>
    <div class="review-buttons">
      <button id="prevReview" class="gp-button">Back</button>
      <button id="nextReview" class="gp-button">Next</button>
    </div>
  </div>
`;

  let currentReview = 0;
  let currentName = 0;

  function updateReview() {
    const reviewText = reviewsWrapper.querySelector(".review-text");
    const reviewName = reviewsWrapper.querySelector(".review-name");
    reviewText.textContent = reviews[currentReview].review;
    reviewName.textContent = reviews[currentName].name;
  }

  reviewsWrapper.querySelector("#prevReview").addEventListener("click", () => {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    currentName = (currentName - 1 + reviews.length) % reviews.length;
    updateReview();
  });

  reviewsWrapper.querySelector("#nextReview").addEventListener("click", () => {
    currentReview = (currentReview + 1) % reviews.length;
    currentName = (currentName + 1) % reviews.length;
    updateReview();
  });

  eventRevContainer.appendChild(eventWrapper);
  eventRevContainer.appendChild(reviewsWrapper);
  eventReviewsSection.appendChild(eventRevContainer);

  // ================ Inquiry and Contact Data =======================

  const inquiryContactSection = document.querySelector(
    "#inquiry-contact-section"
  );
  const inquiryContactContainer = document.createElement("div");
  inquiryContactContainer.className = "primary-container";

  const formWrapper = document.createElement("div");
  formWrapper.className = "form-details";

  const inquiryh4 = document.createElement("h4");
  inquiryh4.innerText = "Message Us";

  const form = inquiryForm();

  const contactWrapper = document.createElement("div");
  contactWrapper.className = "contact-details";

   const contactItems = document.createElement("div");
  contactItems.className = "contact-items";

  const contacth4 = document.createElement("h4");
  contacth4.innerText = "Contact Us";

  contactDetails.forEach((contact) => {
    const contactDiv = document.createElement("div");
    contactDiv.className = "contact";

    const img = document.createElement("img");
    img.src = contact.icon;
    img.alt = contact.name;

    const p = document.createElement("p");
    p.textContent = contact.contact;

    contactDiv.append(img, p);
    contactItems.appendChild(contactDiv);
  });

  formWrapper.appendChild(inquiryh4);
  formWrapper.appendChild(form);
  contactWrapper.appendChild(contacth4);
  contactWrapper.appendChild(contactItems);
  inquiryContactContainer.appendChild(formWrapper);
  inquiryContactContainer.appendChild(contactWrapper);
  inquiryContactSection.appendChild(inquiryContactContainer);
};
