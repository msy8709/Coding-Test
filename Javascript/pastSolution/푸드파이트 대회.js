food=[1, 3, 4, 6]
function solution(food) {
    var left=[]
    var right=[]
    for (let i=0;i<food.length;i++){
        if(food[i]>1){
            var a = Math.floor(food[i]/2);
            for(let j=0;j<a;j++){
                left.push(i)
                right.push(i)
            }
        }
    }
    left.push(0);
    right.reverse();
    left = left.concat(right);
    return left.join('')
}
console.log(solution(food))