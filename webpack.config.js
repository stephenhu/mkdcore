const { pseudoRandomBytes } = require("crypto");
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  //externals: "mkdcore",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    library: {
      name: "mkdcore",
      type: "var",
      //export: "default"
    }
  },
  devServer: {
    static: path.join(__dirname, "."),
    compress: true,
    port: 3000,
  }
}