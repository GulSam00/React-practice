function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getName() {
  // 데이터를 받아오는데 10초 소요
  await delay(1000);
  return "minsu";
}

async function getAge() {
  // 데이터를 받아오는데 10초 소요
  await delay(1000);
  return "14";
}
async function getData() {
  const namePromise = getName();
  const agePromise = getAge();
  const name = await namePromise;
  const age = await agePromise;
  return `${name} is ${age}`;
}

//getData().then(console.log);
function allData() {
  return Promise.race([getName(), getAge()]);
}
allData().then(console.log);
