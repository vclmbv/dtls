function offset(el) {
  const rect = el.getBoundingClientRect();
  const scrollY = window.scrollY || document.documentElement.scrollTop;
  const scrollX = window.scrollX || document.documentElement.scrollLeft;

  const top = rect.top + scrollY;
  const bottom = rect.bottom + scrollY;
  const left = rect.left + scrollX;
  const right = rect.right + scrollX;

  return {
    top,
    bottom,
    left,
    right,
  };
}

export { offset };
