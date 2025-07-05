const sum = (p1, p2) => {
  console.log(p1);
  console.log(p2);
  return p1 + p2;
};

const result = sum(1, 5);
console.log(result); // 6 is printed

const square = (p) => {
  console.log(p);
  return p * p;
};

// const square = (p) => p * p;

const t = [1, 2, 3];
const tSquared = t.map((p) => p * p);
// tSquared is now [1, 4, 9]
