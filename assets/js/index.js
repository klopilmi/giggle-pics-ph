import "../css/aos.css";
import "../css/button.css";
import "../css/formFields.css";
import "../css/index.css";
import { RenderHomepage } from "./renderHomepage";
import { animateOnScroll } from "./utils";

document.addEventListener("DOMContentLoaded", () => {
  RenderHomepage();
  animateOnScroll();

});
