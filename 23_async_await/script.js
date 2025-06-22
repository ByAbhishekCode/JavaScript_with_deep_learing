async function makeAsyncRequest() {
  const url =
    "https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=2000";
    const response = await (await fetch(url)).json()
    console.log(response)
}
