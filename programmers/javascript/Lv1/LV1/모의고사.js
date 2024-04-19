const answers = [1,3,2,4,2]

function solution(answers) {
    var first = [1,2,3,4,5,1,2,3,4,5];
    var second = [2,1,2,3,2,4,2,5];
    var third = [3,3,1,1,2,2,4,4,5,5];
    const result = [0,0,0];
    const length = answers.length;
    for (let i=0;i<length;i++){
        if(first[i%5] === answers[i]) result[0]++;
        if(second[i%8] === answers[i]) result[1]++;
        if(third[i%10] === answers[i]) result[2]++;
    }
   const answer = [];
  const maxValue = Math.max(...result);
  let index = 0;
  for (let i = 0; i < 3; i++) {
    if (maxValue === result[i]) {
      answer[index] = i + 1;
      index++;
    }
  }
  return answer;
}

  
  
