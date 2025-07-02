export function inquiryForm() {
  const form = document.createElement("form");
  form.className = "inquiry-form";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "name";
  nameInput.placeholder = "Your Name";

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.placeholder = "Your Email";

  const messageInput = document.createElement("textarea");
  messageInput.name = "message";
  messageInput.placeholder = "Your Message";

  const submitBtn = document.createElement("button");
  submitBtn.className = "gp-button";
  submitBtn.type = "submit";
  submitBtn.textContent = "Send";

  form.append(nameInput, emailInput, messageInput, submitBtn);

  // Optional: Add form submit handler
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Form submitted!");
    // Add validation or API call here
  });

  return form;
}
