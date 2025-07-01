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
