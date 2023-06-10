---
slug: ES2023-features
title: ES2023 features
language: en
tags: javascript, ES2023, features
date: 2023-06-09
---

Let's introduce what is ECMAScript. Here is what wikipedia says about it:

> ECMAScript is a JavaScript standard intended to ensure the
> interoperability of web pages across different web browsers.
> It is standardized by Ecma International in the document ECMA-262.

## What features are coming?

A bunch of features are coming but here you have the most relevants.

### Find array from the last

This feature allow us to find and element from the last to first item base on a condition:

```javascript
const array = [{ prop: 1 }, { prop: 2 }, { prop: 3 }, { prop: 4 }];
console.log(array.findLast((item) => item.prop === 4)); // {prop: 4}
```

### Hashbang Grammer

This feature is about use Hashbang in CLI. Is represented by #! and this special line at the beginning of a script tells the operating system which interpreter to use when running the script.

```javascript
#!/usr/bin/env node
"use strict";
console.log("Hello");
```

### New array methods

This provides us additional metjhods on _Array.prototype_ to make changes to an array without making changes in the original array and returning a copy of the original one.

- _Array.prototype.toReversed()_
- _Array.prototype.toSorted(compareFn)_
- _Array.prototype.toSpliced(start, deleteCount, ...items)_
- _Array.prototype.with(index, value)_

```javascript
// toReversed
const numbers = [1, 2, 3];
const reversed = numbers.toReversed();
console.log(reversed); // [3, 2, 1]
console.log(numbers); // [1, 2, 3]

// toSorted
const unsorted = [2, 1, 3];
const sorted = unsorted.toSorted();
console.log(sorted); // [1, 2, 3]
console.log(unsorted); // [2, 1, 3]

// with
const words = ["hello", "world", "my", "friend"];
const replaceWords = words.with(3, "mate");
console.log(replaceWords); // ["hello", "world", "my", "mate"]
console.log(words); // ["hello", "world", "my", "friend"]

// toSpliced
const tenNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const spliced = tenNumbers.toSpliced(0, 4);
console.log(spliced); // "toSpliced", [4, 5, 6, 7, 8, 9]
console.log(tenNumbers); // "original", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```
