# algorithm.js

# About

[Algorithms](https://github.com/Arkady-Skvortsov/value-object.js/blob/main/VALUE-OBJECT.md)
[Data Structures](https://github.com/Arkady-Skvortsov/value-object.js/blob/main/VALUE-OBJECT.md)<br />
[BIG-O-NOTATION](https://github.com/Arkady-Skvortsov/value-object.js/blob/main/VALUE-OBJECT.md)<br />
^
|
implementation for Javascript/Typescript

# Recomendation

If you are just starting your way into algorithms or want to support everything with understandable theory and practice (with Python code examples), I recommend the book: "Grokking Algorithms"(PDF version): https://edu.anarcho-copy.org/Algorithm/grokking-algorithms-illustrated-programmers-curious.pdf

# Motivation

I noticed that we (JS) do not have a normal LIBRARY for using algorithms, for example: 1) https://www.npmjs.com/package/algorithm-js, 2) https://www.npmjs.com/package/algorithm-tool, 3) https://www.npmjs.com/package/algorithm-collection, 4) ; These are only experiments and some do not have any tests or proper documentation or just not a very good interface; So I decided to fix it by creating algorithm.js; With it, you will use algorithms / data structures with a good interface, ready-made templates and documentation (so that you can figure out and understand how most popular algorithms and data structures work, what calculations are better to take for each algorithm and why the author did it the way he did)

# How to use ?

```sh
  npm i algroithm.js
```

```ts
import { Algorithm, DataStructure, BigONotation } from 'algorithm.js';

const linearSearch = new Algorithm('LINEAR-SEARCH').create([
  1, 2, 4, 7, 10, 23, 26, 30, 45,
]);
const stack = new DataStructure().create('STACK');
const linearTime = new BigONotation('LINEAR');

binarySearch.run(30);
linearTime.check(binarySearch); // N(O) = 8

stack.add(10);
stack.add(200);

console.log(stack.getSize()); // 2
console.log(stack.isEmpty()); // false
console.log(stack.peek()); // 200
```
