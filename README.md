# algorithm.js

# About

I noticed that we (JS) do not have a normal LIBRARY for using algorithms, for example: 1) https://www.npmjs.com/package/algorithm-js, 2) https://www.npmjs.com/package/algorithm-tool, 3) https://www.npmjs.com/package/algorithm-collection, 4) ; These are only experiments and some do not have any tests or proper documentation or just not a very good interface; So I decided to fix it by creating algorithm.js; With it, you will use algorithms / data structures with a good interface, ready-made templates and documentation (so that you can figure out and understand how most popular algorithms and data structures work, what calculations are better to take for each algorithm and why the author did it the way he did)

[Algorithms](https://github.com/Arkady-Skvortsov/value-object.js/blob/main/VALUE-OBJECT.md)
[Data Structures](https://github.com/Arkady-Skvortsov/value-object.js/blob/main/VALUE-OBJECT.md)
[BIG-O-NOTATION](https://github.com/Arkady-Skvortsov/value-object.js/blob/main/VALUE-OBJECT.md)

# How to use ?

```ts
import { Algorithm, DataStructure, BigONotation } from "algorithm.js";

const linearSearch = new Algorithm("LINEAR-SEARCH").create([
  1, 2, 4, 7, 10, 23, 26, 30, 45,
]);
const stack = new DataStructure("STACK").create([1, 2, 3, 4, 5, 6, 7, 8]);
const linearTime = new BigONotation("LINEAR");

binarySearch.run(30);
linearTime.check(binarySearch); // N(O) = 8

console.log(stack.next()); // 2;
```
