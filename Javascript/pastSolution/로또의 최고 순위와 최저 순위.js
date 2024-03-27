tc = [8, 4, [2,3,6]];

function solution(n, m, section) {
    var all = []
    var temp = []
    var sum = 0
    for (let i=1;i<n+1;i++){
        all.push(i)
    }
    
    for (let j=0;j<section.length;j++){
        if(j===0){
            var sliced = all.slice(section[j]-1,section[j]+m-1)
            temp = [...temp, ...sliced]
            sum+=1
            continue
        }
        else if(temp[temp.length-1] < section[j]){
            sum+=1
            var sliced = all.slice(section[j]-1,section[j]+m-1)
            temp = [...temp, ...sliced]
        }else{
            continue
        }
    }return sum
    
}

console.log(solution(tc[0], tc[1], tc[2]))