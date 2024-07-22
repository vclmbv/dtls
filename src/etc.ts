import  _ from "@vclmbv/utls";

function isCollapsed(textContent: string): boolean {
  const re = !/[^\t\n\r ]/;
  return _.test(re, textContent);
}

function calculateBaseline(el: Element): number {
  const style = window.getComputedStyle(el);
  const fontSize = parseFloat(style.fontSize);
  const lineHeight = parseFloat(style.lineHeight) || fontSize * 1.2;

  const marginTop = parseFloat(style.marginTop);
  const borderTopWidth = parseFloat(style.borderTopWidth);
  const paddingTop = parseFloat(style.paddingTop);
  const extraLineHeight = (lineHeight - fontSize) / 2;
  const baselineOffset = fontSize * 0.8;

  const baselineY =
    marginTop + borderTopWidth + paddingTop + extraLineHeight + baselineOffset;

  return baselineY;
}

export { isCollapsed };
