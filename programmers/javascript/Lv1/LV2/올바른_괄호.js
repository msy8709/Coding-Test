let s = ")()("
function solution(s){
    const stack = [];
    for (let i of s){
        if(i == '('){
            stack.push(i);
        }else {
            if(stack.length === 0 || stack.pop() !== '('){
                return false
            }
        }
    }
    if (stack.length != 0){
        return false;
     
    }else{
        console.log(true)
        return true;
    }
}
solution(s)