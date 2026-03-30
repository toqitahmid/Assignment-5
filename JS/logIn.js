document.getElementById("signIn-btn").addEventListener("click", function () {
  const userName = getUserName();
  const passWord = getPassWord();

  if (userName === "admin") {
    if (passWord === "admin123") {
      window.alert(`You Successfully Sign In`);
      window.location.href = "home.html";
    } else {
      window.alert(`Your Password Don't Match!`);
    }
  } else {
    window.alert(`You Have To Enter Your Username!`);
  }
});

const getUserName = () => {
  const username = document.getElementById("input-username");
  const strUsername = username.value.toString();
  return strUsername;
};
const getPassWord = () => {
  const password = document.getElementById("input-password");
  const strPassword = password.value.toString();
  return strPassword;
};