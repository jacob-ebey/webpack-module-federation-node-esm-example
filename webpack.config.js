import * as path from "node:path";

import webpack from "webpack";

const APP_NAME = process.env.APP_NAME;

/** @type {import("webpack").Configuration} */
export default {
  devtool: false,
  target: "node18",
  externalsType: "module",
  output: {
    module: true,
    library: { type: "module" },
    chunkFormat: "module",
    chunkLoading: "import",
    path: path.resolve("./dist/" + APP_NAME),
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      APP_NAME: JSON.stringify(APP_NAME),
    }),
    new webpack.container.ModuleFederationPlugin({
      name: `app_${APP_NAME}`,
      filename: "remote-entry.js",
      library: { type: "module" },
      remotes: {
        "@app/other": `http://localhost:${
          APP_NAME === "a" ? "3001" : "3000"
        }/remote-entry.js`,
      },
      exposes: {
        "./federated": "./src/federated.js",
      },
    }),
  ],
};
