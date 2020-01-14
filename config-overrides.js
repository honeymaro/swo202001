/* eslint-disable */
const { addDecoratorsLegacy, override } = require("customize-cra");
const rewireReactHotLoader = require("react-app-rewire-hot-loader-for-customize-cra");

module.exports = override(addDecoratorsLegacy(), rewireReactHotLoader());
