# algorithm.js

# About

It's most useful realisation of popular algorithms and data structures with practice usage in work
[Algorithms](https://github.com/Arkady-Skvortsov/value-object.js/blob/main/VALUE-OBJECT.md)
[Data Structures](https://github.com/Arkady-Skvortsov/value-object.js/blob/main/VALUE-OBJECT.md)
[BIG-O-NOTATION](https://github.com/Arkady-Skvortsov/value-object.js/blob/main/VALUE-OBJECT.md)

# How to use ?

```ts
import { Algorithm, DataStructure, BigONotation } from "algorithm.js";

const binarySearch = new Algorithm("BINARY-SEARCH").create([
  1, 2, 4, 7, 10, 23, 26, 30, 45,
]);
const stack = new DataStructure("STACK").create([1, 2, 3, 4, 5, 6, 7, 8]);
const linearTime = new BigONotation("LINEAR");

binarySearch.run(30);
stack.next();
linearTime.check(binarySearch);
```
