import { isNativeInput, isContentEditable } from "./tag";

function canSetCaret(target: HTMLElement): boolean {
  let result = true;

  if (isNativeInput(target)) {
    switch (target.type) {
      case "file":
      case "checkbox":
      case "radio":
      case "hidden":
      case "submit":
      case "button":
      case "image":
      case "reset":
        result = false;
        break;
    }
  } else {
    result = isContentEditable(target);
  }
  return result;
}

export { canSetCaret };

/*
caret과 selection은 다른 기능임.
offset은 selection을 위한 메서드로 추정됨.
*/
