class UserStorage {
  loginuser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "eliie" && password === "dream") ||
        (id === "coder" && password === "coding")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("wrong id"));
      }
    }, 1000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "eliie") {
        onSuccess({ name: "ellie", role: "admin" }, "또다른 변수");
      } else {
        onError(new Error("wrong user"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter id");
const password = prompt("enter password");
userStorage.loginuser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole, another) => {
        alert(userWithRole);
        alert(another);
        alert(`hello! ${userWithRole.name}, you have ${userWithRole.role}`);
      },
      (error) => {
        alert(error);
      }
    );
  },
  (error) => {
    alert(error);
  }
);
