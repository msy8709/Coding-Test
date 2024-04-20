// 각 가격이 몇 초 동안 감소하지 않는지 구하는 문제


function solution(prices) {
    const stack = [];
    for(let i=0; i<prices.length;i++){
        let count = 0;
        for(let j=i+1;j<prices.length;j++){
            if(prices[i]<=prices[j]){
                count ++
            }else{
                count ++
                break;
            }
        }
        stack.push(count)
    }
    console.log(stack)
    return stack;
}
solution([1,2,3,2,3])