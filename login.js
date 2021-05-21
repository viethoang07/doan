const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

var btnadd = document.getElementById("btnadd");
// var input1 = document.getElementById("input1");
// var input2 = document.getElementById("input2");
// let value1 = input1.value;
// let value2 = input2.value;
btnadd.onclick = function () {
  var names = document.querySelector('input[name="Name"]').value;
  var passwords = document.querySelector('input[name="Password"]').value;

  console.log(names);
  console.log(passwords);

  // var formdata = {
  //   name: name,
  axios
    .get("https://sheetdb.io/api/v1/58f61be4dda40?limit=10&offset=20", {
      method: "POST",
      body: JSON.stringify({
        name: names,
        password: passwords,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
    .then((response) => {
      console.log(response.data);
    });
};

// let value = input.value//lấy gt từng input
// //tạo thẻ li
// const newLi = document.createElement(`li`);
//  //gán gt input vào li
//  newLi.innerText = value;
