const paragraphTags = ["p"];
const headerTags = ["h1", "h2", "h3", "h4", "h5", "h6"];
const listTags = ["ul", "ol", "li", "dl", "dt"];
const tableTags = ["table", "thead", "tbody", "tfoot", "tr"];
const layoutTags = [
  "div",
  "hr",
  "header",
  "main",
  "footer",
  "article",
  "aside",
  "hgroup",
  "section",
];
const formTags = ["fieldset", "form", "output"];
const formatTags = ["address", "blockquote", "pre", "ruby"];
const blockMediaTags = ["canvas", "figcaption", "figure", "video"];
const linkTags = ["nav"];
const programmingTags = ["noscript"];
const blockTags = [
  ...paragraphTags,
  ...headerTags,
  ...listTags,
  ...tableTags,
  ...layoutTags,
  ...formTags,
  ...formatTags,
  ...blockMediaTags,
  ...linkTags,
  ...programmingTags,
];

const singleTags = [
  "AREA",
  "BASE",
  "BR",
  "COL",
  "COMMAND",
  "EMBED",
  "HR",
  "IMG",
  "INPUT",
  "KEYGEN",
  "LINK",
  "META",
  "PARAM",
  "SOURCE",
  "TRACK",
  "WBR",
];

const lineBreakTags = ["BR", "WBR"];
const mediaTags = [
  "img",
  "audio",
  "video",
  "iframe",
  "source",
  "input",
  "textarea",
  "twitterwidget",
];

// input
const nativeInputs = ["INPUT", "TEXTAREA"];
const inputTypes = [
  "text",
  "password",
  "email",
  "number",
  "search",
  "tel",
  "url",
];
const allInputs = () => {
  return (
    `[contenteditable=true], textarea, input:not([type]), ` +
    inputTypes.map((type) => `input[type="${type}"]`).join(", ")
  );
};

export {
  blockTags,
  singleTags,
  lineBreakTags,
  mediaTags,
  inputTypes,
  nativeInputs,
  allInputs,
};
