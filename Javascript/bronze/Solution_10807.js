let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, S, V] = input

const cnt = S.split(" ").filter((ele) => ele == V).length;

console.log(cnt);