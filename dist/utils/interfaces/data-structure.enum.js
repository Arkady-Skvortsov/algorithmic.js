"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BLACK = exports.RED = exports.SplayNode = exports.RedBlackNode = exports.HeapNode = exports.BinaryNode = exports.IdataStructure = void 0;
const BLACK = false;
exports.BLACK = BLACK;
const RED = true;
exports.RED = RED;
class IdataStructure {
}
exports.IdataStructure = IdataStructure;
class BinaryNode {
    element;
    left;
    right;
    constructor(element) {
        this.element = element;
        this.left = null;
        this.right = null;
    }
}
exports.BinaryNode = BinaryNode;
class RedBlackNode extends BinaryNode {
    key;
    color;
    constructor(key, element) {
        super(element);
        this.key = key;
        this.color = BLACK;
    }
}
exports.RedBlackNode = RedBlackNode;
class SplayNode extends BinaryNode {
    key;
    constructor(key, element) {
        super(element);
        this.key = key;
    }
}
exports.SplayNode = SplayNode;
class HeapNode extends BinaryNode {
    constructor(element) {
        super(element);
    }
}
exports.HeapNode = HeapNode;
//# sourceMappingURL=data-structure.enum.js.map