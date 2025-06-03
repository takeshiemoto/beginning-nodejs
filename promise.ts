function waitAndReturnNumber(): Promise<number> {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    if (rand < 0.8) {
      resolve(42);
    } else {
      reject(new Error("Random failure occurred"));
    }
  });
}

waitAndReturnNumber()
  .then((result) => {
    console.log("Received number:", result);
    console.log("Promise resolved successfully");
  })
  .catch((error: Error) => {
    console.error("Promise rejected with error:", error.message);
  });

const p1 = Promise.resolve(1);
const p2 = Promise.reject(new Error("失敗"));
const p3 = new Promise<number>((resolve) => setTimeout(() => resolve(3), 200));

Promise.allSettled([p1, p2, p3]).then((results) => {
  results.forEach((result, index) => {
    if (result.status === "fulfilled") {
      console.log(`Promise${index + 1} は成功:`, result.value);
    } else {
      console.log(`Promise${index + 1} は失敗:`, result.reason);
    }
  });
});
