
// 아이디어 1
    // function solution(s){
    //     let arr = s.split("");
    //     for (let i=0; i < arr.length; i++){
    //         if(arr[i] == arr[i+1]){
    //            arr.splice(i,2)
    //            i = 0;
    //         }
    //     }
    //     console.log(arr)
    //     return arr.length ? 0 : 1
    
    // }
    // solution("baabaa")

// 아이디어 2
    function solution(s){
        let arr = s.split("");
        recount(arr);
        return arr.length ? 0 : 1
    }

    function recount (arr){
        for(let i=0; i<arr.length;i++){
            if(arr[i] == arr[i+1]){
                arr.splice(i,2)
                recount(arr)
            }
        }
    }
    solution("baabaa")

// 아이디어 3
function solution(s){
    const stack = [];
    for (let i=0; i < s.length; i++){
        if(stack.length > 0 && stack[stack.length-1] == s[i]){
            stack.pop();
        }else{
            stack.push(s[i]);
        }
    }
    return stack.length === 0 ? 1 : 0;
}
solution("baabaa")