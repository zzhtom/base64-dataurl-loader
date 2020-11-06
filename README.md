
# base64-dataurl-loader for webpack


![NPM](https://img.shields.io/npm/l/base64-dataurl-loader?style=social)

> use base64-dataurl-loader handle image return DataURL

## Installation
```bash
npm install base64-dataurl-loader
```

## Usage
webpack.config.js
```javascript
module.exports = {
  module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: {
            loader: 'base64-dataurl-loader'
          }
        }
      ]
    },
};
```
## test

```bash
yarn test
```

## Other references
[base64-loader](https://github.com/antelle/base64-loader)    
[base64-image-loader](https://github.com/jahredhope/base64-image-loader)
