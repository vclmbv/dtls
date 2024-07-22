import  _ from "@vclmbv/utls";
import {
 isAllInlineTag,
  isSingleTag,
  isLineBreakTag,
  isNativeInput,
} from "./tag";

function get(id) {
  return document.getElementById(id);
}

function getHolder(element) {
  if (_.isString(element)) {
    return document.getElementById(element);
  }

  return element;
}

function getDeepestNode(node, atLast) {
  const child = atLast ? "lastChild" : "firstChild";
  const sibling = atLast ? "previousSibling" : "nextSibling";

  if (node && node.nodeType === Node.ELEMENT_NODE && node[child]) {
    let nodeChild = node[child];

    if (
      isSingleTag(nodeChild) &&
      !isLineBreakTag(nodeChild) &&
      !isNativeInput(nodeChild)
    ) {
      if (nodeChild[sibling]) {
        nodeChild = nodeChild[sibling];
      } else if (nodeChild.parentNode[sibling]) {
        nodeChild = nodeChild.parentNode[sibling];
      } else {
        return nodeChild.parentNode;
      }
    }
    return this.getDeepestNode(nodeChild, atLast);
  }
  return node;
}

function getDeepestBlockElements(parent) {
  if (isAllInlineTag(parent)) {
    return [parent];
  }
  return Array.from(parent.children).reduce((result, element) => {
    return [...result, ...getDeepestBlockElements(element)];
  }, []);
}

function getContentLength(node) {
  if (isNativeInput(node)) {
    return node.value.length;
  }
  if (node.nodeType === Node.TEXT_NODE) {
    return node.length;
  }
  return node.textContent.length;
}

export {
  get,
  getHolder,
  getDeepestNode,
  getDeepestBlockElements,
  getContentLength,
};
