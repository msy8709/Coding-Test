array = [1, 5, 2, 6, 3, 7, 4]	
commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
function solution(array, commands) {
    solution =[];
    for (let i=0;i<commands.length;i++){
        var arr = array.slice(commands[i][0]-1,commands[i][1]);
        var sorted = arr.sort((a,b)=>a-b)
        solution.push(sorted[commands[i][2]-1])
    }return solution
}
console.log(solution(array, commands))