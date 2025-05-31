/**
 * Node.js Event Loop Demo
 * -----------------------
 * このスクリプトはイベントループの各フェーズで
 * コールバックやマイクロタスクが実行される順序を
 * 体験的に確認するためのものです。
 *
 * ▼ 期待されるログ順序
 * 1. ➊ 同期スタート   (同期コード)
 * 2. ➋ Promise microtask   (microtask queue)
 * 3. ➌ process.nextTick    (nextTick queue)
 * 4. ➐ 同期エンド       (同期コード終端)
 * 5. ➍ setTimeout (timers) (timers フェーズ)
 * 6. ❺ setImmediate (check) (check フェーズ)
 * 7. ❻ fs.readFile 完了 (poll) (I/O poll フェーズ)
 *
 * 各ログの左に付いた番号が、どのフェーズで実行されるかを示しています。
 * 実際に実行して順序を確かめてみてください。
 */
import { readFile } from "node:fs/promises"; // fs.readFile を Promise API で使用するために import

// ここから同期実行部分 (call stack が埋まっている間は他のタスクは実行されません)

console.log('➊ 同期スタート');

// timers フェーズに登録される macrotask
setTimeout(() => {
    console.log('➍ setTimeout (timers)');
}, 0);

// check フェーズに登録される macrotask (poll フェーズ完了後に実行)
setImmediate(() => {
    console.log('❺ setImmediate (check)');
});

// readFile はスレッドプールで実行され、完了時に poll フェーズでコールバックが発火
readFile(__filename, 'utf8').then(() => {
    console.log('❻ fs.readFile 完了 (poll)');
});

// Promise.then は microtask queue に追加され、現在の macrotask 後に実行
Promise.resolve().then(() => {
    console.log('➋ Promise microtask');
});

// process.nextTick は nextTick キューに追加され、**同じ** フェーズ内で最優先に実行
process.nextTick(() => {
    console.log('➌ process.nextTick');
});

// 同期コードの終端 (ここでコールスタックが空になります)
console.log('➐ 同期エンド');