// 대괄호, 중괄호, 소괄호로 이루어진 s가 s의 길이 만큼 왼쪽으로 회전 > 몇개가 합격하는가?
// n번 회전했을 때 값을 어떻게 구하냐? 

let s = "[](){}"

function solution(s){
    const stack = [];
    let result = 0;
    let isRight = true;
    if (s.length % 2 === 1) return 0;

    for (let i = 0;i<s.length;i++){
        let candidate = s.slice(i) + s.slice(0,i);
        isRight = true;
        for (let r of candidate){
            if (r === '(' || r === '{' || r === '['){
                stack.push(r);
            }else{
                if(r === ')' && stack.pop() === '(') continue;
                if(r === '}' && stack.pop() === '{') continue;
                if(r === ']' && stack.pop() === '[') continue;
                isRight = false;
                break;
            }
        }
        if(isRight) result++;
    }
    return result;
}
solution(s)