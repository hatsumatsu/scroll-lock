```
# ########## #
# ScrollLock #
# ########## #
```

Reliably lock body scroll.

### Installation

`npm install @superstructure.net/scroll-lock`

> Note: This library comes as es6 module only.
> If you use a transpiler like babel or swc make sure to include `/node_modules/@superstructure.net/scroll-lock` in your transpiler’s config.

### Usage

```js
import ScrollLock from '@superstructure.net/scroll-lock';

const scrollLock = new ScrollLock();

scrollLock.enable();

scrollLock.disable();

scrollLock.destroy();
```
