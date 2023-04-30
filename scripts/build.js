/*
Produces production builds and stitches together d.ts files.

To specify the package to build, simply pass its name and the desired build
formats to output (defaults to `buildOptions.formats` specified in that package,
or "esm,cjs"):

```
# name supports fuzzy match. will build all packages with name containing "dom":
yarn build dom

# specify the format to output
yarn build core --formats cjs
```
*/


//进行打包 monerepo
//获取 打包 目录

const fs = require('fs')
const dirs =fs.readdirSync('packages')
console.log(dirs,'---dirs')  //[ 'reactivity', 'shared', 'vue' ] ---dirs

