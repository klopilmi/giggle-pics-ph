export function applyRainbowHeading() {
  const heading = document.getElementById("rainbow-heading");
  if (!heading) return;

  const text = heading.textContent;
  heading.innerHTML = "";

  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.textContent = text[i];
    span.className = `char${i + 1}`;
    heading.appendChild(span);
  }
}

let lastScrollY = window.scrollY;

export function animateOnScroll() {
  const elements = document.querySelectorAll(".fade-in-on-scroll");

  const observer = new IntersectionObserver((entries) => {
    const scrollingUp = window.scrollY < lastScrollY;

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Apply direction-based transform class
        if (scrollingUp) {
          entry.target.classList.add("scroll-up");
        } else {
          entry.target.classList.remove("scroll-up");
        }

        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });

    lastScrollY = window.scrollY;
  });

  elements.forEach((el) => observer.observe(el));
}

