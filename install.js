#!/usr/bin/env node

const { version } = require('./package');

const childProcess = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');
const extract = require('extract-zip');
const { downloadArtifact } = require('@nojro/get');

if (process.env.NOJRO_SKIP_BINARY_DOWNLOAD) {
  process.exit(0);
}

const platformPath = getPlatformPath();

if (isInstalled()) {
  process.exit(0);
}

const platform = process.env.npm_config_platform || process.platform;
let arch = process.env.npm_config_arch || process.arch;

if (platform === 'darwin' && process.platform === 'darwin' && arch === 'x64' &&
    process.env.npm_config_arch === undefined) {
  // When downloading for macOS ON macOS and we think we need x64 we should
  // check if we're running under rosetta and download the arm64 version if appropriate
  try {
    const output = childProcess.execSync('sysctl -in sysctl.proc_translated');
    if (output.toString().trim() === '1') {
      arch = 'arm64';
    }
  } catch {
    // Ignore failure
  }
}

// downloads if not cached
downloadArtifact({
  version,
  artifactName: 'nojro',
  force: process.env.force_no_cache === 'true',
  cacheRoot: process.env.nojro_config_cache,
  checksums: process.env.nojro_use_remote_checksums ? undefined : require('./checksums.json'),
  platform,
  arch
}).then(extractFile).catch(err => {
  console.error(err.stack);
  process.exit(1);
});

function isInstalled () {
  try {
    if (fs.readFileSync(path.join(__dirname, 'dist', 'version'), 'utf-8').replace(/^v/, '') !== version) {
      return false;
    }

    if (fs.readFileSync(path.join(__dirname, 'path.txt'), 'utf-8') !== platformPath) {
      return false;
    }
  } catch (ignored) {
    return false;
  }

  const nojroPath = process.env.NOJRO_OVERRIDE_DIST_PATH || path.join(__dirname, 'dist', platformPath);

  return fs.existsSync(nojroPath);
}

// unzips and makes path.txt point at the correct executable
function extractFile (zipPath) {
  const distPath = process.env.NOJRO_OVERRIDE_DIST_PATH || path.join(__dirname, 'dist');

  return extract(zipPath, { dir: path.join(__dirname, 'dist') }).then(() => {
    // If the zip contains an "nojro.d.ts" file,
    // move that up
    const srcTypeDefPath = path.join(distPath, 'nojro.d.ts');
    const targetTypeDefPath = path.join(__dirname, 'nojro.d.ts');
    const hasTypeDefinitions = fs.existsSync(srcTypeDefPath);

    if (hasTypeDefinitions) {
      fs.renameSync(srcTypeDefPath, targetTypeDefPath);
    }

    // Write a "path.txt" file.
    return fs.promises.writeFile(path.join(__dirname, 'path.txt'), platformPath);
  });
}

function getPlatformPath () {
  const platform = process.env.npm_config_platform || os.platform();

  switch (platform) {
    case 'mas':
    case 'darwin':
      return 'nojro.app/Contents/MacOS/nojro';
    case 'freebsd':
    case 'openbsd':
    case 'linux':
      return 'nojro';
    case 'win32':
      return 'nojro.exe';
    default:
      throw new Error('nojro builds are not available on platform: ' + platform);
  }
}
