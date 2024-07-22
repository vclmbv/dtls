import  _ from "@vclmbv/utls";
import { blockTags, singleTags, lineBreakTags, nativeInputs } from "./base";
import { make } from "./create";

function isAllInlineTag(data: string | HTMLElement): boolean {
  let wrapper;

  if (_.isString(data)) {
    wrapper = make("div", null, { innerHTML: data });
  } else {
    wrapper = data;
  }
  const check = (el: HTMLElement): boolean => {
    return (
      _.has(blockTags, _.toLower(el.tagName)) &&
      Array.from(el.children).every(check)
    );
  };
  return Array.from(wrapper.children).every(check);
}

function isSingleTag(el: HTMLElement): boolean {
  return el.tagName && _.has(singleTags, el.tagName);
}

function isLineBreakTag(el: HTMLElement): el is HTMLBRElement {
  return el && el.tagName && _.has(lineBreakTags, el.tagName);
}

function isAnchorTag(el: HTMLElement): el is HTMLAnchorElement {
  return _.toLower(el.tagName) === "a";
}

function isNativeInput(el: HTMLElement): el is HTMLInputElement {
  return el && el.tagName ? _.has(nativeInputs, el.tagName) : false;
}
function isContentEditable(el: HTMLElement): boolean {
  return el.contentEditable === "true";
}

export {
  isAllInlineTag,
  isSingleTag,
  isLineBreakTag,
  isAnchorTag,
  isNativeInput,
  isContentEditable,
};
