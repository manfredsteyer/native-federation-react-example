import { buildProject } from "./build-common";

const { shareAll } = require("@softarc/native-federation/build");

const fedConf = {
  name: "host",

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
      includeSecondaries: false,
    }),
  },
};

buildProject('shell', fedConf);