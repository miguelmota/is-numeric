# is-numeric

> Predicate that returns true for numeric values.

[![NPM](https://nodei.co/npm/is-numeric.png)](https://nodei.co/npm/is-numeric)

# Install

```bash
npm install is-numeric
```

# Usage

```js
const isNumeric = require('is-numeric')

console.log(isNumeric(0)) // true
console.log(isNumeric(123)) // true
console.log(isNumeric(-123)) // true
console.log(isNumeric(+123)) // true
console.log(isNumeric('123')) // true
console.log(isNumeric('-123')) // true
console.log(isNumeric('+123')) // true
console.log(isNumeric('.123')) // true
console.log(isNumeric('-.123')) // true
console.log(isNumeric('0.123')) // true
console.log(isNumeric('-0.123')) // true
console.log(isNumeric('1e100')) // true
console.log(isNumeric('1e-100')) // true
console.log(isNumeric('-1e-100')) // true
console.log(isNumeric(Infinity)) // true
console.log(isNumeric(-Infinity)) // true
console.log(isNumeric('abc')) // false
console.log(isNumeric('10%')) // false
console.log(isNumeric('#10')) // false
console.log(isNumeric('2^10')) // false
console.log(isNumeric('2!')) // false
console.log(isNumeric('(10)')) // false
console.log(isNumeric('10px')) // false
console.log(isNumeric('*')) // false
console.log(isNumeric('')) // false
console.log(isNumeric(true)) // false
console.log(isNumeric(false)) // false
console.log(isNumeric([])) // false
console.log(isNumeric(function(){})) // false
console.log(isNumeric({})) // false
console.log(isNumeric(undefined)) // false
console.log(isNumeric(null)) // false
console.log(isNumeric(NaN)) // false
console.log(isNumeric('   3')) // true
console.log(isNumeric('   3', { trim: false })) // false
```


# Test

```
npm test
```

# License

MIT
