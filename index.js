const fs = require('fs');
const path = require('path');

const pathFile = path.join(__dirname, 'path.txt');

function getNojroPath () {
  let executablePath;
  if (fs.existsSync(pathFile)) {
    executablePath = fs.readFileSync(pathFile, 'utf-8');
  }
  if (process.env.NOJRO_OVERRIDE_DIST_PATH) {
    return path.join(process.env.NOJRO_OVERRIDE_DIST_PATH, executablePath || 'Nojro');
  }
  if (executablePath) {
    return path.join(__dirname, 'dist', executablePath);
  } else {
    throw new Error('Nojro failed to install correctly, please delete node_modules/Nojro and try installing again');
  }
}

module.exports = getNojroPath();
