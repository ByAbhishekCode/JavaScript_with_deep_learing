//by old code
// const xhr = new XMLHttpRequest();
// xhr.response = "json";
// xhr.addEventListener("load", () => {
//   console.log(xhr);
// });

// xhr.open("GET", "https://dummyjson.com/users/1");
// xhr.send();

function makeHttpRequest(method, url) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";

  const promis = new Promise((reslove, reject) => {
    xhr.addEventListener("load", () => {
      reslove(xhr.response);
    });
  });
  // xhr.addEventListener("load", () => {  // this code for callback hell
  //   callback(xhr.response);
  // });

  xhr.open(method, url);
  xhr.send();

  return promis;
}

makeHttpRequest("GET", "https://dummyjson.com/users")
  .then((userData) => {
    console.log(
      "this is use id =",
      userData.users[0].id,
      " this is user name = ",
      userData.users[0].firstName
    );
    return makeHttpRequest(
      "GET",
      `https://dummyjson.com/posts/user/${userData.users[0].id}`
    );
  })
  .then((postData) => {
    console.log(
      "this is user post = ",
      postData.posts[0].id,
      " this is user post title =",
      postData.posts[0].title
    );
    return makeHttpRequest(
      "GET",
      `https://dummyjson.com/comments/post/${postData.posts[0].id}`
    );
  })
  .then((commetData) => {
    console.log(
      "this is comment id = ",
      commetData.comments[0].id,
      "this is comment body or title = ",
      commetData.comments[0].body
    );
  });

// this is callback hell
// makeHttpRequest("GET", "https://dummyjson.com/users", (userData) => {
//   console.log(userData);
//   makeHttpRequest(
//     "GET",
//     `https://dummyjson.com/posts/user/${userData.users[0].id}`,
//     (postData) => {
//       console.log(postData);
//       makeHttpRequest(
//         "GET",
//         `https://dummyjson.com/comments/post/${postData.posts[0].id}`,
//         (CommentData) => {
//           console.log(CommentData);
//           console.log(CommentData.comments[0].body);
//         }
//       );
//     }
//   );
// });
