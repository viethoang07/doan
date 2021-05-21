var quill = new Quill("#editor-container", {
  modules: {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      [{ size: ["small", false, "large", "huge"] }],
      ["link", "image", "video", "formula"],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
    ],
  },
  placeholder: "viết bài đăng",
  theme: "snow",
});

function start() {
  getCourses(renderCourses);
}
start();

function getCourses(callback) {
  fetch("https://sheetdb.io/api/v1/77m6e721ijlmt")
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function renderCourses(courses) {
  var listul = document.querySelector("#ul");
  var htmls = courses.map(function (courses) {
    return `
    <li>
        <h4>${courses.content}</h4>
        </li>
        `;
  });
}
function create() {
  var add = document.querySelector("#add");
  add.onclick = function () {
    var content = quill.getContents();
  };
  createCourse(content, function () {
    getCourses(renderCourses);
  });
}
function createCourse(data) {
  var option = {
    method: "POST",
    body: JSON.stringify(content),
  };
  fetch("https://sheetdb.io/api/v1/77m6e721ijlmt", option)
    .then(function (response) {
      response.json();
    })
    .then(callback);
}

// add.onclick = function () {
//   var c = quill.getContents();
//   axios
//     .get("https://sheetdb.io/api/v1/77m6e721ijlmt", {
//       ({
//         content: content,
//       }),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//     .then((response) => {
//       console.log(response.data);
//     });
// };

// fetch("https://sheetdb.io/api/v1/77m6e721ijlmt", {
//   method: "POST",
//   body: JSON.stringify(content),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => {
//     response.json();
//   })
//   .then((json) => console.log(json));
