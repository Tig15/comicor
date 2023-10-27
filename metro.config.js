// Learn more https://docs.expo.io/guides/customizing-metro
// const { getDefaultConfig } = require('expo/metro-config');

// /** @type {import('expo/metro-config').MetroConfig} */
// const config = getDefaultConfig(__dirname, {
//   // [Web-only]: Enables CSS support in Metro.
//   isCSSEnabled: true,
// });

// module.exports = config;
const defaultSourceExts =
  require("metro-config/src/defaults/defaults").sourceExts;
const sourceExts = [
  "jsx",
  "js",
  "ts",
  "tsx",
  "json",
  "svg",
  "d.ts",
  "mjs",
].concat(defaultSourceExts);

module.exports = {
  resolver: {
    sourceExts,
  },
};
