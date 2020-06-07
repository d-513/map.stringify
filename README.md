# map.stringify

a simple parser and stringifier for ES6 maps

```js
// first require the module
require("map.stringify");
// then you stringify and parse maps
const myMap = new Map([["a", "b"]]);
const stringified = Map.stringify(myMap);
console.log(stringified);
const parsed = Map.parse(stringified);
console.log(parsed);
```
