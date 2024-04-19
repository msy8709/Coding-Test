const dirs = "ULURRDLLU";

function solutions(dirs){
    const direction = {U : [-1,0], D: [1,0],R: [0,1], L:[0,-1]};
    let visited = new Set();
    let now = [0,0];

    for (let dir of dirs){
        let nx = now[0] + direction[dir][0];
        let ny = now[1] + direction[dir][1];

        if(nx < -5 || nx > 5 || ny <-5 || ny > 5) continue;

        visited.add(`${now[0]}${now[1]}${nx}${ny}`);
        visited.add(`${nx}${ny}${now[0]}${now[1]}`);

        now = [nx,ny];
    }
    return visited.size / 2
}
// set 함수 > 고유한 값을 저장하는 함수로 중복된 값을 허용하지 않으며 값의 순서를 기억. 
// const 변수명 = new Set();으로 선언
// 변수명.size, .add, .delete 등 다양한 내장 메서드를 사용할 수 있음.