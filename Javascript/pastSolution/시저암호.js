s = "AB"
n = 1 
function solution(s, n) {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    var answer = ""
    for(let i=0;i<s.length;i++){
        if(s[i] ==" "){
            answer += " "
        }else {
            var a = upper.includes(s[i]) ?upper:lower;
            var b = a.indexOf(s[i])+n;
            answer += a[b % upper.length];
        }
    }return answer.join('')
}
console.log(solution(s,n))