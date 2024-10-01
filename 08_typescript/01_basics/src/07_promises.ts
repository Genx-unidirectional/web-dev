const executer = new Promise((resolve, reject) => {
  //   console.log(1);
  resolve("2");
});

// console.log(3);

const promiseArr = [executer, executer, executer];

// Promise.all(promiseArr).then((res) => console.log(res));

Promise.allSettled([...promiseArr, Promise.reject("failed")]).then((res) => {
  //   console.log(res);
});

const pErr = new Promise((resolve, reject) => {
  reject("Always fails");
});

const pSlow = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Done eventually");
});

const pFast = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Done Quick");
});

Promise.any([pErr, pSlow, pFast]).then((res) => {
  console.log(res);
});

Promise.race([pErr, pSlow, pFast])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
