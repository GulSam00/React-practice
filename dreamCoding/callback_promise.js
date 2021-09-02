class UserStorage {
  async loginUser(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id === "man") resolve(id);
        else reject(new Error("wrong id"));
      }, 2000);
    });
  }
  async getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "man") {
          resolve({ name: "man", role: "wild" });
        } else {
          reject(new Error("wrong user"));
        }
      }, 2000);
    });
  }
}

async function func(userStorage, id) {
  try {
    const getUser = userStorage.loginUser(id);
    const getRoles = userStorage.getRoles(id);
    const name = await getUser;
    const age = await getRoles;
    return `${name} is ${age.role}`;
  } catch (e) {
    console.log(e);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter id");
const password = prompt("enter password");

func(userStorage, id).then(console.log);
