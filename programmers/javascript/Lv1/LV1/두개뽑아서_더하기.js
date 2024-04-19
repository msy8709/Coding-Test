let numbers = [1,-1,3,4,3,6,14,8,10000];
function solution(){
    let sum = [];
    for (let i=0;i<numbers.length-1;i++){
        for(let j=1;j<numbers.length;j++){
            sum.push(numbers[i] + numbers[j])
        }
    }
    sum = new Set(sum);
    console.log(Array.from(sum).sort());

}
solution();


