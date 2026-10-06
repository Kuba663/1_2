(function () {
  var ex1_btn = document.getElementById("ex1_button");
  var ex2_text = document.getElementById("ex2_text");
  var ex3_element = document.getElementById("ex3_element");
  var ex3_one = document.getElementById("ex3_one");
  var ex3_two = document.getElementById("ex3_two");
  ex1_btn.onclick = function() {
    var content = document.getElementById("ex1_content");
    content.innerHTML = "";
    for (let i = 0; i < 10; i++) {
      content.innerHTML += i != 9 ? `${i}, ` : i;
    }
  }
  ex2_text.oninput = function() {
    var txt = document.forms["ex2_form"]["ex2_text"].value;
    var content = document.getElementById("ex2_content");
    if (txt.length != 9) {
      content.innerHTML = "Długość numeru musi być równa 9";
      content.classList = ["ex_wrong"]
    } else if (txt.match(/[a-zA-Z]/i)) {
      content.innerHTML = "Numer nie może zawierać liter"; 
      content.classList = ["ex_wrong"]
    } else if (txt.match(/[^0-9]/i)) {
      content.innerHTML = "Numer nie może zawierać znaków specjalnych";
      content.classList = ["ex_wrong"]
    } else {
      content.innerHTML = "Numer telefonu jest poprawny";
      content.classList = ["ex_right"]
    }
  }
  ex3_element.addEventListener("dragstart", (ev) => {
    event.dataTransfer.effectAllowed = "move";
    ev.dataTransfer.setData("text/plain", ev.target.innerText);
    ev.dataTransfer.setData("text/html", ev.target.outerHTML);
    ev.dataTransfer.setData(
      "text/uri-list",
      ev.target.ownerDocument.location.href,
    );
    ev.dataTransfer.setData("application/octet-stream", ev.target.id)
  })
  ex3_two.addEventListener("drop", (ev) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("application/octet-stream");
    ev.target.appendChild(document.getElementById(data));
  });
  ex3_two.addEventListener("dragover", (ev) => {
    ev.preventDefault();
    event.dataTransfer.dropEffect = "move";
  });
})();