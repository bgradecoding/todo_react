const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: [CracoAlias, require("tailwindcss"), require("autoprefixer")],
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
  ],
};
