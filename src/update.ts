import _ from "@vclmbv/utls";

function append(
  parent: Element | DocumentFragment,
  elements: Element | Element[] | DocumentFragment | Text | Text[]
): void {
  if (_.isArray(elements)) {
    elements.forEach((el) => parent.appendChild(el));
  } else {
    parent.appendChild(elements);
  }
}

function prepend(parent: Element, elements: Element | Element[]): void {
  if (_.isArray(elements)) {
    elements = elements.reverse();
    elements.forEach((el) => parent.prepend(el));
  } else {
    parent.prepend(elements);
  }
}

//swap
function swap(el1: HTMLElement, el2: HTMLElement): void {
  const temp = document.createElement("div");
  let parent = el1.parentNode;
  parent.insertBefore(temp, el1);
  parent.insertBefore(el1, el2);
  parent.insertBefore(el2, temp);
  parent.removeChild(temp);
}

export { append, prepend, swap };
