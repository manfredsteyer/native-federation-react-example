// shell\federation.config.js

const {
  withNativeFederation,
  shareAll,
} = require("@softarc/native-federation/build");

module.exports = withNativeFederation({
  name: "host",

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
      includeSecondaries: false,
    }),
  },

});


console.log(shareAll({
  singleton: true,
  strictVersion: true,
  requiredVersion: "auto",
  includeSecondaries: true,
}));