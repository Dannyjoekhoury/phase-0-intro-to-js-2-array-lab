// Write your solution here!
const cats = ["Milo","Otis","Garfield"];

function push(name) {
  cats.push(name);
}

function unshift(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  const newArray = [...cats];
  newArray.push(name);
  return newArray;
}

function prependCat(name) {
  const newArray = [...cats];
  newArray.unshift(name);
  return newArray;
}

function removeLastCat() {
  const newArray = [...cats];
  newArray.pop();
  return newArray;
}

function removeFirstCat() {
  const newArray = [...cats];
  newArray.shift();
  return newArray;
}