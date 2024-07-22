import _ from "@vclmbv/utls";

function make(
  tagName: string,
  classNames: string[] | null = null,
  properties: object | null = null
): HTMLElement {
  const el = document.createElement(tagName);
  console.log();
  if (!_.isNull(classNames)) {
    const validNames = classNames.filter(
      (className: string) => className !== undefined
    ) as string[];
    el.classList.add(...validNames);
  }

  if (!_.isNull(properties)) {
    Object.entries(properties).forEach(([name, value]) => {
      if (name in el) {
        (el as any)[name] = value;
      } else {
        el.setAttribute(name, value);
      }
    });
  }

  return el;
}

function makeDF(htmlString) {
  const elt = document.createElement("div");
  elt.innerHTML = htmlString.trim();

  const fragment = document.createDocumentFragment();

  fragment.append(...Array.from(elt.childNodes));

  return fragment;
}

function makeTX(content) {
  return document.createTextNode(content);
}

export { make, makeDF, makeTX };
