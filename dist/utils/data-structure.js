"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataStructure = void 0;
const binary_tree_1 = require("./data-structures/binary-tree");
class DataStructure {
    create(type) {
        if (type === "BINARY-TREE")
            return new binary_tree_1.BinaryTree();
    }
}
exports.DataStructure = DataStructure;
//# sourceMappingURL=data-structure.js.map