//select labels
const labels = document.querySelectorAll(".form-control label");
// wave element when clicked on
function waveElement(element) {
  element.innerHTML = element.innerHTML
    .split("")
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 10}ms">${letter}</span>`
    )
    .join("");
}
// apply waves to selected labels
labels.forEach((label) => waveElement(label));
