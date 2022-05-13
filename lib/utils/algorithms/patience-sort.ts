class PatienceSort {
  constructor() {}

  public run(arr: any[]) {
    let piles = [];
    let sorted_sequence = [];

    for (let i = 0; i < arr.length; i++) {
      if (piles.length == 0) {
        let temp = [];

        temp.push(arr[i]);
        piles.push(temp);
      } else {
        let flag = 1;

        for (let j = 0; j < piles.length; j++) {
          if (arr[i] < piles[j][piles[j].length - 1]) {
            piles[j].push(arr[i]);

            flag = 0;
            break;
          }
        }

        if (flag) {
          let temp = [];

          temp.push(arr[i]);
          piles.push(temp);
        }
      }
    }

    sorted_sequence = this.merge_piles(piles);

    return sorted_sequence;
  }

  private merge_piles(v: any) {
    let array = [];

    while (1) {
      let minu = Number.MAX_SAFE_INTEGER;

      let index = -1;

      for (let i = 0; i < v.length; i++) {
        if (minu > v[i][v[i].length - 1]) {
          minu = v[i][v[i].length - 1];

          index = i;
        }
      }

      array.push(minu);

      v[index].pop();

      if (v[index].length == 0) {
        v.splice(index, 1);
      }

      if (v.length == 0) break;
    }

    return array;
  }
}

export { PatienceSort };
