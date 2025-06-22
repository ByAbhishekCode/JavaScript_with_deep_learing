const resolveBtn = document.querySelector("#resolve");
const rejectBtn = document.querySelector("#reject");

const p = new Promise((res, rej) => {
  resolveBtn.addEventListener("click", () => {
    res("reslove the promise");
  });
  rejectBtn.addEventListener("click", () => {
    rej("reject the promise");
  });
});

p.then((data) => {
  console.log(data);
})
  .catch((err) => {
    console.log(err);
  })
  .finally(() => console.log("it will solve or and reject")); // then and catch always return the #Promise
