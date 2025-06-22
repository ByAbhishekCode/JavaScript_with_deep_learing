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


fetch("https://dummyjson.com/users").then((res)=> res.json())
.then((data)=>{
  console.log(data)
  return fetch(`https://dummyjson.com/posts/user/${userData.users[0].id}`)
})
// .then((res)=>
//   res.json()).then((data)=>{console.log(data)})




// makeHttpRequest("GET", "https://dummyjson.com/users")
//   .then((userData) => {
//     console.log(
//       "this is use id =",
//       userData.users[0].id,
//       " this is user name = ",
//       userData.users[0].firstName
//     );
//     return makeHttpRequest(
//       "GET",
//       `https://dummyjson.com/posts/user/${userData.users[0].id}`
//     );
//   })
//   .then((postData) => {
//     console.log(
//       "this is user post = ",
//       postData.posts[0].id,
//       " this is user post title =",
//       postData.posts[0].title
//     );
//     return makeHttpRequest(
//       "GET",
//       `https://dummyjson.com/comments/post/${postData.posts[0].id}`
//     );
//   })
//   .then((commetData) => {
//     console.log(
//       "this is comment id = ",
//       commetData.comments[0].id,
//       "this is comment body or title = ",
//       commetData.comments[0].body
//     );
//   });

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


fetch("https://dummyjson.com/users")
  .then((res) => res.json())
  .then((userData) => {
    const userId = userData.users[0].id;
    const userName = userData.users[0].firstName;
    console.log(`User ID = ${userId}, Name = ${userName}`);

    return fetch(`https://dummyjson.com/posts/user/${userId}`);
  })
  .then((res) => res.json())
  .then((postData) => {
    const postId = postData.posts[0].id;
    const postTitle = postData.posts[0].title;
    console.log(`Post ID = ${postId}, Title = ${postTitle}`);

    return fetch(`https://dummyjson.com/comments/post/${postId}`);
  })
  .then((res) => res.json())
  .then((commentData) => {
    const commentId = commentData.comments[0].id;
    const commentBody = commentData.comments[0].body;
    console.log(`Comment ID = ${commentId}, Body = ${commentBody}`);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
