var countDisplay = document.querySelector("h3");
var count = 0;
setInterval(function () {
  var nouveauSpan;
  nouveauSpan = document.createElement("span");
  nouveauSpan.classList.add("bubble");
  document.body.appendChild(nouveauSpan);

  var size = Math.random() * 200 + 100 + "px";

  nouveauSpan.style.height = size;
  nouveauSpan.style.width = size;

  nouveauSpan.style.left = Math.random() * 100 + "%";
  nouveauSpan.style.top = Math.random() * 100 + 50 + "%";
  var plusMinus;
  if (Math.random() > 0.5) {
    plusMinus = 1;
  } else {
    plusMinus = -1;
  }
  document
    .querySelector("span")
    .style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  nouveauSpan.addEventListener("click", function () {
      count++;
      countDisplay.textContent=count;
    nouveauSpan.remove();
  });

  setTimeout(function () {
    nouveauSpan.remove();
  }, 8000);
}, 500);
