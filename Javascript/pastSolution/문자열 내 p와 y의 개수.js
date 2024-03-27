s = "pPoooyY"
function solution(s) {
    var pCount = 0;
    var yCount = 0;
  
    for (var i = 0; i < s.length; i++) {
      var char = s[i].toLowerCase(); 
  
      if (char === 'p') {
        pCount++;
      } else if (char === 'y') {
        yCount++;
      }
    }
  
    return pCount === yCount;
  }
  
  
  
  console.log(solution(s))
  
  
  