function solution(N, stages) {
    let answer = [];
    for(let i=1;i<N+1;i++){
        var tmp = stages.filter((x) => x=== i).length;
        answer.push([i,tmp/stages.length])
        stages.length -= tmp
    }
    answer = answer.sort((a,b) => b[1] - a[1]);
    return answer.map((a) => a[0])
}