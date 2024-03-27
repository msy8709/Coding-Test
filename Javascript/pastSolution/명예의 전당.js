k=3;
score=[10, 100, 20, 150, 1, 100, 200];

function solution(k, score) {
    var auth = [];
    var result = []
    for (let i=0;i<score.length;i++){
        auth.push(score[i])
        var sorted = auth.sort((a,b)=>b-a)
        if(auth.length <= k){
            result.push(auth[i])
        }else{
            result.push(sorted[k-1])
        }
    }return result
}
console.log(solution(k, score))