const postcss = require("postcss");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    require("cssnano")({
      preset: "default",
    }),
    postcss([postcssPresetEnv({ stage: 0 })]).process("./styles.css"),
  ],
};
