# Progressive Image Loading Techniques

## What this repo about?

An example of the how to apply progressive image loading and a couple of strategies currently used on web apps for that.

### Setup

First run `npm install` to install the dependencies and then, run `npm pre-build` to generate the image placeholders and
finally `npm start` to run the webpack-dev-server.

### Dependencies

This project depends on a few NodeJS lib, namely [sharp](https://github.com/lovell/sharp) and [potrace](https://github.com/tooolbox/node-potrace).
Also, it uses [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) for lazy loading

### License

This project is under the MIT license
