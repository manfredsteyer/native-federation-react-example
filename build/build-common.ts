import * as esbuild from 'esbuild';
import * as fs from 'fs';

const { moduleFederationPlugin } = require('@module-federation/esbuild/plugin');

export async function buildProject(projectName, fedConfig) {

    const tsConfig = 'tsconfig.json';
    const outputPath = `dist/${projectName}`;

    fs.rmSync(outputPath, { force: true, recursive: true });

    await esbuild.build({
        entryPoints: [`${projectName}/main.ts`],
        // external: federationBuilder.externals,
        outdir: outputPath,
        bundle: true,
        platform: 'browser',
        format: 'esm',
        mainFields: ['es2020', 'browser', 'module', 'main'],
        conditions: ['es2020', 'es2015', 'module'],
        resolveExtensions: ['.ts', '.tsx', '.mjs', '.js'],
        tsconfig: tsConfig,
        splitting: true,
        plugins: [moduleFederationPlugin(fedConfig)],
    });

    fs.copyFileSync(`${projectName}/index.html`, `dist/${projectName}/index.html`);
    fs.copyFileSync(`${projectName}/favicon.ico`, `dist/${projectName}/favicon.ico`);
    fs.copyFileSync(`${projectName}/styles.css`, `dist/${projectName}/styles.css`);

}
