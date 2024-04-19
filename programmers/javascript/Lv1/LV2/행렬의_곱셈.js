arr1 = [[2, 3, 2], [4, 2, 4], [3, 1, 4]];
arr2 = [[5, 4, 3], [2, 4, 1], [3, 1, 1]];
//행렬의 곱에서 주의해야할 점
// 행렬A의 열과 행렬 B의 행의 크기가 같아야 함. 

function solution(arr1,arr2){
    const answers = [];
    
    for(let i=0;i < arr1.length;i++){
        answers.push([]);
        for(let j=0;j < arr2[0].length;j++){
            let sum = 0;
            for(let k=0;k<arr1[0].length;k++){
                sum += arr1[i][k] * arr2[k][j];
            }
            answers[i].push(sum);
        }
    }
    return answers;
}