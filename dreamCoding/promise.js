const promise = new Promise((resolve, reject) => {
  console.log("install excutor");
  setTimeout(() => {
    //resolve("data");
    reject(new Error("ffdsa"));
  }, 1000);
});
promise
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("finally");
  });

const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

fetchNumber
  .then((num) => num * 3) // num에 resolve에서 전달한 1이 들어온다. 3이 되서 리턴.
  .then((num) => num * 2) // num에 이전 .then에서 리턴된 3이 들어온다. 6이 되서 리턴.
  .then((num) => {
    //num에 이전 .then에서 리턴된 6이 들어온다. 5가 되어서 promise객체에서 resolve로 빠짐.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1);
      }, 1000);
    });
  })
  .then((num) => {
    // num에 resolve에서 전달한 5이 들어온다.
    console.log(num);
  });
