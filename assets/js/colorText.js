document.addEventListener("DOMContentLoaded", () => {
  const heading = document.getElementById("rainbow-heading");
  const text = heading.textContent;
  heading.innerHTML = ""; // Clear current text

  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.textContent = text[i];
    span.className = `char${i + 1}`;
    heading.appendChild(span);
  }
});
