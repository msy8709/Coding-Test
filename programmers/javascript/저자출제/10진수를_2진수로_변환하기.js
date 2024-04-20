let decimal = 12345

function solution(decimal){
    const stack = []
    while(decimal > 0){
        let reminder = decimal % 2;
        stack.push(reminder)
        decimal /= 2;
    }
    console.log(stack)
}
solution(12345);