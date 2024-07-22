import  _ from "@vclmbv/utls";
import { allInputs } from "./base";
import { isAllInlineTag, isNativeInput } from "./tag";
import { getDeepestBlockElements } from "./get";

function query(el, selector) {
  return el.querySelector(selector);
}

function queryAll(el, selector) {
  return el.querySelectorAll(selector);
}

function queryAllInputs(holder) {
  return _.toArray(holder.querySelectorAll(allInputs)).reduce(
    (result, input) => {
      if (isAllInlineTag(input) || isNativeInput(input)) {
        return [...result, input];
      }
      return [...result, ...getDeepestBlockElements(input)];
    },
    []
  );
}

export { query, queryAll, queryAllInputs };
