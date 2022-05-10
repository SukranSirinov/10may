var input = document.getElementById("td");
var addBtn = document.getElementById("add");
var list = document.getElementById("list");
addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  var text = input.value;
  text = text.trim();
  const li = document.createElement("li");
  const p = document.createElement("p");
  const i = document.createElement("i");
  i.classList = "fa-solid fa-circle-minus";
  p.innerText = text;
  li.appendChild(p);
  li.appendChild(i);
  list.appendChild(li);
  input.value = "";
});
list.addEventListener("mouseover", function (e) {
  var dltBtn = document.querySelectorAll(".fa-circle-minus");
  dltBtn.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      var element = e.target.parentElement;
      element.remove();
    });
  });
});
