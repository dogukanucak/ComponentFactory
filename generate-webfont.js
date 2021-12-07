const webfont = require("webfont").default;
const package = require("./package.json");
const fontPostfix = "-font";
const fontName = `${package.name}${fontPostfix}`;
const splittedName = fontName.split("-");
const shortName = splittedName.reduce((i, j, index) => {
  return (index - 1 == 0 ? i[0] : i) + j[0];
});
webfont({
  files: "src/assets/icons/**/*.svg",
  destCreate: true,
  dest: `src/assets/fonts/${fontName}`,
  fontName: splittedName.join(""),
  fontId: fontName,
  normalize: true,
  centerHorizontally: true,
  template: "scss",
  templateClassName: shortName,
})
  .then((result) => {
    // Do something with result
    // Function.prototype(result);
    console.log("webfont generated successfully: ", result.config);
    // Or return it
    return result;
  })
  .catch((error) => {
    throw error;
  });
