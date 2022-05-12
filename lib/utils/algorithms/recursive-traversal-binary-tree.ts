class RecursiveTraversalBinaryTree {
  constructor() {}

  public run(tree: any[]) {
    let summ = 0;

    tree.map((tr: any) => {
      summ += tr.left;

      if (!tr.right) {
        return tr.left;
      }

      summ += this.run(tr.right);
    });

    return summ;
  }
}

const recursive = new RecursiveTraversalBinaryTree();

console.log(
  recursive.run([
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
  ]),
);

export { RecursiveTraversalBinaryTree };
