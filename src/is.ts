import  _ from "@vclmbv/utls";
import { make } from "./create";
import { isSingleTag, isLineBreakTag, isNativeInput } from "./tag";

function isElement(node) {
  if (_.isNumber(node)) {
    return false;
  }

  return node && node.nodeType && node.nodeType === Node.ELEMENT_NODE;
}

function isFragment(node) {
  if (_.isNumber(node)) {
    return false;
  }

  return node && node.nodeType && node.nodeType === Node.DOCUMENT_FRAGMENT_NODE;
}

function isLeaf(node) {
  if (!node) {
    return false;
  }
  return node.childNodes.length === 0;
}

function isNodeEmpty(node, ignoreChars) {
  let nodeText;

  if (isSingleTag(node) && !isLineBreakTag(node)) {
    return false;
  }

  if (isElement(node) && isNativeInput(node)) {
    nodeText = node.value;
  } else {
    nodeText = node.textContent.replace();
  }

  if (ignoreChars) {
    nodeText = nodeText.replace(new RegExp(ignoreChars, "g"), "");
  }

  return nodeText.trim().length === 0;
}

function isEmpty(node, ignoreChars): boolean {
  node.normalize();

  const treeWalker = [node];
  while (treeWalker.length > 0) {
    node = treeWalker.shift();

    if (!node) {
      continue;
    }

    if (isLeaf(node) && !isNodeEmpty(node, ignoreChars)) {
      return false;
    }

    if (node.childNodes) {
      treeWalker.push(...Array.from(node.childNodes));
    }
  }
  return true;
}

function isHTMLString(str: string): boolean {
  const container = make("div", null, { innerHTML: str });
  return container.childElementCount > 0;
}

export { isElement, isFragment, isNodeEmpty, isLeaf, isEmpty, isHTMLString };
