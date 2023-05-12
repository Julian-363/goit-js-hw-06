const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  const inputValue = input.value.trim();
  const dataLength = input.getAttribute("data-length");

  if (inputValue.length === parseInt(dataLength)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});