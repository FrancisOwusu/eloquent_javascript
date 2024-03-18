function replaceImages() {
  let images = document.body.getElementsByTagName("img");
  for (let i = images.length - 1; i >= 0; i--) {
    let image = images[i];
    if (image.alt) {
      let text = document.createTextNode(image.alt);
      image.parentNode.replaceChild(text, image);
    }
  }
}

function elt(type, ...children) {
  let node = document.createElement(type);
  for (let child of children) {
    if (typeof child != "string") node.appendChild(child);
    else node.appendChild(document.createTextNode(child));
  }
  return node;
}
document
  .getElementById("quote")
  .appendChild(
    elt(
      "footer",
      "—",
      elt("strong", "Karl Popper"),
      ", preface to the second edition of ",
      elt("em", "The Open Society and Its Enemies"),
      ", 1950"
    )
  );

// Attributes

let paras = document.body.getElementsByTagName("p");
for (let para of Array.from(paras)) {
  if (para.getAttribute("data-classified") == "secret") {
    para.remove();
  }
}

let para = document.body.getElementsByTagName("p")[0];
console.log("clientHeight:", para.clientHeight);
// → 19
console.log("offsetHeight:", para.offsetHeight);
// → 25

//pageXOffset

function time(name, action) {
  let start = Date.now(); // Current time in milliseconds
  action();
  console.log(name, "took", Date.now() - start, "ms");
}
time("naive", () => {
  let target = document.getElementById("one");
  while (target.offsetWidth < 2000) {
    target.appendChild(document.createTextNode("X"));
  }
});
// → naive took 32 ms
time("clever", function () {
  let target = document.getElementById("two");
  target.appendChild(document.createTextNode("XXXXX"));
  let total = Math.ceil(2000 / (target.offsetWidth / 5));
  target.firstChild.nodeValue = "X".repeat(total);
});
// → clever took 1 ms
let ostrich = document.getElementById("gertrude");
let paragraphs = document.body.getElementsByTagName("p");
document.body.insertBefore(paragraphs[2], paragraphs[0]);
console.log(ostrich.src);



let para1 = document.getElementById("para");
console.log(para1.style.color);
para1.style.color = "magenta";

//Styling

let angle = Math.PI / 2;
function animate(time, lastTime) {
if (lastTime != null) {
angle += (time - lastTime) * 0.001;
}
cat.style.top = (Math.sin(angle) * 20) + "px";
cat.style.left = (Math.cos(angle) * 200) + "px";
requestAnimationFrame(newTime => animate(newTime, time));
}
requestAnimationFrame(animate);