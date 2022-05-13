class RecursiveTraversalBinaryTree {
  constructor() {}

  public run(tree: any) {
    let summ = 0;

    Object.keys(tree).forEach((tr: any) => {
      summ += tr.right;

      if (!tr.left) {
        return tr.right;
      }

      summ += this.run(tr.left);
    });

    return summ;
  }
}

export { RecursiveTraversalBinaryTree };
