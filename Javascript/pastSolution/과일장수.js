k=3
m=4
score=[1, 2, 3, 1, 2, 3, 1]
function solution(k, m, score) {
    var total = 0
    score.sort((a,b) => a-b)
    while(score>=m){
        var slice = score.splice(0,m);
        var price = Math.min(...slice);
        total+=price
    }return total
}console.log(k, m, score)

    