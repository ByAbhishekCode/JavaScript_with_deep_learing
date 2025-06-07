const number = null

switch (number) {
  case 0: {
    console.log("It is Sudnay Today");
    break;
  }

  case 1: {
    console.log("It is monday");
    break;
  }

  case 2: {
    console.log("it is tuesday");
    break;
  }
  case "": {
    console.log("Empty ");
    break;
  }

  case null: {
    console.log("Null ");
    break;
  }

  default: {
    console.log("Out Of Range ");
  }
}

console.log("End...")