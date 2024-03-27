a=2
b=1
n=20
function solution(a, b, n) {
    var result = 0;
    while(n>=a){
        result += Math.floor(n/a)*b
        n = Math.floor(n/a)*b +n%a
    }
    return result
    
}console.log(solution(a,b,n))