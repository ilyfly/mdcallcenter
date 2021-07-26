setInterval(function () {
  document.querySelector("body").innerHTML = "<span></span>";
  document.querySelector("span").classList.add("bubble");
  var size = Math.random() * 200 + 100 + "px";

  document.querySelector("span").style.height = size;
  document.querySelector("span").style.width = size;

  document.querySelector("span").style.left = Math.random() * 100 + "%";
  document.querySelector("span").style.top = Math.random() * 100 + 50 + "%";

  document
    .querySelector("span")
    .style.setProperty("--left", Math.random() * 100 + "%");
}, 1000);
