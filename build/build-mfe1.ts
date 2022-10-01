import { buildProject } from "./build-common";

const watch = process.argv.includes('--watch');
buildProject('mfe1', watch);