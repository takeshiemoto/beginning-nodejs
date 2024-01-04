
function linearSearch() {
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
  linearSearch();
}

main();