function* search(node) {
  if (!node) return;
  yield node;
  yield* search(node.firstChild);
  yield* search(node.nextSibling);
}
// document.body.insertAdjacentHTML("beforeend", `<h1> the DOM`);
const nodes = [];
for (let node of search(document.body)) {
  if (node.localName) nodes.push(node.localName);
}
document.body.insertAdjacentHTML(
  "beforeend",
  `<p>${nodes.join("<span> </span>")}</p>`,
);
