```
# 🔒 # 🔒 # 🔒 # 🔒 # 🔒 #
🔒                   🔒
#     ScrollLock    #
🔒                   🔒
# 🔒 # 🔒 # 🔒 # 🔒 # 🔒 #
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

### Browser support

Tested in

-   MacOS
    -   Chrome 96
    -   Safari 15
    -   Firefox 95
-   Android
    -   Chrome 96
-   iOS
    -   15.1
    -   14.4
    -   13.3
    -   12.4
    -   11.4

Probably works just fine on the same browser versions on Windows, Linux...
