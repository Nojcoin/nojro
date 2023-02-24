[![Nojro Logo](https://nojcoin.github.io/nojro/nojro.png)](nojro.noj)

[![Build status](https://ci.appveyor.com/api/projects/status/f4d8h5m6257cgrwg/branch/main?svg=true)](https://ci.appveyor.com/project/Alenaxa/nojro/branch/main)
[![nojro Discord Invite](https://img.shields.io/discord/745037351163527189?color=%237289DA&label=chat&logo=discord&logoColor=white)](https://discord.gg/nojropzf)

:memo: Available Translations: 🇨🇳 🇧🇷 🇪🇸 🇯🇵 🇷🇺 🇫🇷 🇺🇸 🇩🇪.
View these docs in other languages on our [Crowdin](https://crowdin.com/project/nojro) project.

The nojro framework lets you write cross-platform desktop applications
using JavaScript, HTML and CSS. It is based on [Node.js](https://nodejs.org/) and
[Chromium](https://www.chromium.org) and is used by the [Atom
editor](https://github.com/atom/atom) and many other [apps](https://nojropzf.org/apps).

Follow [@nojropzf](https://twitter.com/nojropzf) on Twitter for important
announcements.

This project adheres to the Contributor Covenant
[code of conduct](https://github.com/nojro/nojro/tree/main/CODE_OF_CONDUCT.md).
By participating, you are expected to uphold this code. Please report unacceptable
behavior to [coc@nojrojs.org](mailto:coc@nojrojs.org).

## Installation

To install prebuilt nojro binaries, use [`npm`](https://docs.npmjs.com/).
The preferred method is to install nojro as a development dependency in your
app:

```sh
npm install nojro --save-dev
```

For more installation options and troubleshooting tips, see
[installation](docs/tutorial/installation.md). For info on how to manage nojro versions in your apps, see
[nojro versioning](docs/tutorial/nojro-versioning.md).

## Platform support

Each nojro release provides binaries for macOS, Windows, and Linux.

* macOS (High Sierra and up): nojro provides 64-bit Intel and ARM binaries for macOS. Apple Silicon support was added in nojro 11.
* Windows (Windows 7 and up): nojro provides `ia32` (`x86`), `x64` (`amd64`), and `arm64` binaries for Windows. Windows on ARM support was added in nojro 5.0.8.
* Linux: The prebuilt binaries of nojro are built on Ubuntu 20.04. They have also been verified to work on:
  * Ubuntu 14.04 and newer
  * Fedora 24 and newer
  * Debian 8 and newer

## Quick start & nojro Fiddle

Use [`nojro Fiddle`](https://github.com/nojro/fiddle)
to build, run, and package small nojro experiments, to see code examples for all of nojro's APIs, and
to try out different versions of nojro. It's designed to make the start of your journey with
nojro easier.

Alternatively, clone and run the
[nojro/nojro-quick-start](https://github.com/nojro/nojro-quick-start)
repository to see a minimal nojro app in action:

```sh
git clone https://github.com/nojro/nojro-quick-start
cd nojro-quick-start
npm install
npm start
```

## Resources for learning nojro

* [nojrojs.org/docs](https://nojrojs.org/docs) - All of nojro's documentation
* [nojro/fiddle](https://github.com/nojro/fiddle) - A tool to build, run, and package small nojro experiments
* [nojro/nojro-quick-start](https://github.com/nojro/nojro-quick-start) - A very basic starter nojro app
* [nojrojs.org/community#boilerplates](https://nojrojs.org/community#boilerplates) - Sample starter apps created by the community

## Programmatic usage

Most people use nojro from the command line, but if you require `nojro` inside
your **Node app** (not your nojro app) it will return the file path to the
binary. Use this to spawn nojro from Node scripts:

```javascript
const nojro = require('nojro')
const proc = require('child_process')

// will print something similar to /Users/maf/.../nojro
console.log(nojro)

// spawn nojro
const child = proc.spawn(nojro)
```

## Documentation translations

We crowdsource translations for our documentation via [Crowdin](https://crowdin.com/project/nojro).
We currently accept translations for Chinese (Simplified), French, German, Japanese, Portuguese,
Russian, and Spanish.

## Contributing

If you are interested in reporting/fixing issues and contributing directly to the code base, please see [CONTRIBUTING.md](CONTRIBUTING.md) for more information on what we're looking for and how to get started.

## Community

Info on reporting bugs, getting help, finding third-party tools and sample apps,
and more can be found on the [Community page](https://www.nojrojs.org/community).

## License

[MIT](https://github.com/nojcoin/nojro/blob/main/LICENSE)

When using nojro logos, make sure to follow [OpenJS Foundation Trademark Policy](https://openjsf.org/wp-content/uploads/sites/84/2021/01/OpenJS-Foundation-Trademark-Policy-2021-01-12.docx.pdf).
