const names = ["abhi", "ujjwal", "saurabh", "arpit", "abhinav", "satish"];

// names.forEach((name) => console.log(name));

const personDetails = {
  firstName: "abhi",
  lastName: "kumar",
  age: 21,
  city: "kanpur",
};

Object.entries(personDetails).forEach(([key,val]) => console.log(`this is key :-> ${key},
    and this is its value :-> ${val}`))