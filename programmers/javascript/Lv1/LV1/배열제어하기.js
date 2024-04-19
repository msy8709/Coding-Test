let arr = [1,-1,3,4,3,6,14,8,10000]

function solution(){
    const notdup = new Set(arr);
    const sorted = Array.from(notdup).sort(function(a,b){return b-a})
    console.log(sorted)
    
}
solution();

//오름차순 arr.sort(function(a,b){return a-b})
//내림차순 arr.sort(function(a,b){return b-a})
//중복제거 
// const set = new Set(arr)
// 이미 생성된 객체를 배열로 만드는 법 : Array.from(arr)