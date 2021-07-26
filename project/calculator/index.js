// console.log(document.querySelectorAll(".btn"));
// console.log(document.getElementById("result"));

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    document.getElementById("result").textContent += e.target.id;
  });
});

equal.addEventListener("click", function () {
  document.getElementById("result").textContent = eval(
    document.getElementById("result").textContent
  );
});

clear.addEventListener("click", function () {
  document.getElementById("result").textContent = "";
});
