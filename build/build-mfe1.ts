import { buildProject } from "./build-common";
const { shareAll } = require("@softarc/native-federation/build");

const fedConf = {
  name: "mfe1",

  exposes: {
    "./component": "./mfe1/app",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
      includeSecondaries: false,
    }),
  },
};

buildProject("mfe1", fedConf);
