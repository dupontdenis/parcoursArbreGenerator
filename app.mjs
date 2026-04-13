function* search(node) {
  console.log("➡️ Entrée dans search() avec :", node);

  if (!node) {
    console.log("⛔ Node est null, on stoppe ici.");
    return;
  }

  console.log("📤 Yield du node :", node);
  yield node;

  console.log("🔽 Appel récursif sur firstChild :", node.firstChild);
  yield* search(node.firstChild);

  console.log("➡️ Appel récursif sur nextSibling :", node.nextSibling);
  yield* search(node.nextSibling);
}

// document.body.insertAdjacentHTML("beforeend", `<h1> the DOM`);
const nodes = [];

for (let node of search(document.body)) {
  console.log("📥 Node reçu dans le for...of :", node);
  if (node.localName) nodes.push(node.localName);
}

document.body.insertAdjacentHTML(
  "beforeend",
  `<p>${nodes.join("<span> </span>")}</p>`
);

