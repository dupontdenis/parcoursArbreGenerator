function* search(node) {
  console.log("➡️ Entrée dans search() avec :", node);

  if (!node) {
    console.log("⛔ Node est null, on stoppe ici.");
    return;
  }

  // On ne yield que les éléments HTML
  if (node.nodeType === Node.ELEMENT_NODE) {
    console.log("📤 Renvoi de l’élément :", node);
    yield node;
  } else {
    console.log("⏭️ Node ignoré (pas un élément) :", node);
  }

  console.log("🔽 Appel récursif sur firstElementChild :", node.firstElementChild);
  yield* search(node.firstElementChild);

  console.log("➡️ Appel récursif sur nextElementSibling :", node.nextElementSibling);
  yield* search(node.nextElementSibling);
}

const nodes = [];

for (let node of search(document.querySelector("section")) {
  console.log("📥 Élément reçu dans le for...of :", node);
  nodes.push(node.localName);
}

document.body.insertAdjacentHTML(
  "beforeend",
  `<p>${nodes.join("<span> </span>")}</p>`
);
