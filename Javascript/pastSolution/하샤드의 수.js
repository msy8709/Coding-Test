x=18
function solution(x) {
    var num = String(x).split('');
    var sum = 0;
    for (let i of num){
        sum += parseInt(i)
    }
    return x%sum ===0
}
console.log(solution(x))