// const xhr = new XMLHttpRequest();
// xhr.response = "json";
// xhr.addEventListener("load", () => {
//   console.log(xhr);
// });

// xhr.open("GET", "https://dummyjson.com/users/1");
// xhr.send();

function makeHttpRequest(method, url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.addEventListener("load", () => {
    callback(xhr.response);
  });

  xhr.open(method, url);
  xhr.send();
}

// }'
makeHttpRequest("GET", "https://dummyjson.com/users", (userData) => {
  console.log(userData);
  makeHttpRequest(
    "GET",
    `https://dummyjson.com/posts/user/${userData.users[0].id}`,
    (postData) => {
      console.log(postData);
      makeHttpRequest(
        "GET",
        `https://dummyjson.com/comments/post/${postData.posts[0].id}`,
        (CommentData) => {
          console.log(CommentData);
          console.log(CommentData.comments[0].body);
        }
      );
    }
  );
});
