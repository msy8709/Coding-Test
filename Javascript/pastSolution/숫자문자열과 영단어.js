s="one4seveneight"
function solution(s) {
    const dict = {"zero": 0, "one":1, "two": 2,"three":3,"four": 4,"five":5,"six":6,
               "seven":7, "eight":8, "nine": 9};
    s =s.split("")
    var solution = ""
    var str=""
    for (let i of s){
        str += i
        if(Object.keys(dict).includes(str)){
            solution += dict[str];
            str=""
        }else if(Number.isInteger(str*1)){
            solution += str;
            str = ""
        }
    }
    return parseInt(solution)
}
console.log(solution(s))