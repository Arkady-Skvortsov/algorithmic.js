"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecursiveTraversalBinaryTree = void 0;
class RecursiveTraversalBinaryTree {
    constructor() { }
    run(tree) {
        let summ = 0;
        Object.keys(tree).forEach((tr) => {
            summ += tr.right;
            if (!tr.left) {
                return tr.right;
            }
            summ += this.run(tr.left);
        });
        return summ;
    }
}
exports.RecursiveTraversalBinaryTree = RecursiveTraversalBinaryTree;
//# sourceMappingURL=recursive-traversal-binary-tree.js.map