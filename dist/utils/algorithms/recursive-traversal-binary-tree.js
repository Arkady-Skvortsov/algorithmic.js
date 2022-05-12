"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecursiveTraversalBinaryTree = void 0;
class RecursiveTraversalBinaryTree {
    constructor() { }
    run(tree) {
        let summ = 0;
        tree.map((tr) => {
            summ += tr.left;
            if (!tr.right) {
                return tr.left;
            }
            summ += this.run(tr.right);
        });
        return summ;
    }
}
exports.RecursiveTraversalBinaryTree = RecursiveTraversalBinaryTree;
const recursive = new RecursiveTraversalBinaryTree();
console.log(recursive.run([
    {
        element: 120,
        left: {
            element: 20,
            left: null,
            right: { element: 24, left: null, right: null },
        },
        right: {
            element: 140,
            left: null,
            right: { element: 200, left: null, right: null },
        },
    },
]));
//# sourceMappingURL=recursive-traversal-binary-tree.js.map