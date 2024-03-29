function convertDecimalToBinary(decimal: number): string {
  // 0の場合は0
  if (decimal === 0) {
    return "0";
  }

  let binary = "";
  let current = decimal;

  // 10進数の値が0になるまでループする
  while (current > 0) {
    // 2で割ったあまり
    binary = (current % 2) + binary;
    // 10進数の値を2で割って更新
    current = Math.floor(current / 2);
  }

  return binary;
}

function sentinelLinearSearch() {
  console.log("Running sentinelLinearSearch");
  // 対象の配列
  const ary = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // 配列の長さ9
  const n = ary.length;
  // 探索する値
  const x = 0;

  ary[n] = x;

  let i = 0;
  while (true) {
    if (ary[i] === x) {
      break;
    }
    i++;
  }
  // i = 9
  // n = 9
  if (i === n) {
    console.log("Not Found");
  }
  if (i < n) {
    console.log("Found");
  }
}

function linearSearch() {
  console.log("Running linearSearch");
  // 対象の配列
  const ary = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // 配列の長さ
  const n = ary.length;
  // 探索する値
  const x = 6;

  let i = 1;
  while (true) {
    // 配列の最後まで探索した場合
    if (i > n) {
      break;
    }

    // 探索する値を見つけた場合
    if (ary[i] === x) {
      break;
    }

    i++;
  }

  // 配列を完走した場合、iはn+1になる
  if (i > n) {
    console.log("Not Found");
  }
  // 配列の途中で探索する値を見つけた場合、iはn以下になる
  if (i <= n) {
    console.log("Found");
  }
}

function main() {
  // linearSearch();
  // sentinelLinearSearch();
  console.log(convertDecimalToBinary(40));
}

main();
