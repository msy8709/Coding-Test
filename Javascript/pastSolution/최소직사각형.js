const sizes = [[60, 50], [30, 70], [60, 30], [80, 40]]
function solution(sizes) {
    var width =[];
    var height = [];

    for (let i=0;i<sizes.length;i++){
        var max = Math.max(sizes[i][0], sizes[i][1]);
        var min = Math.min(sizes[i][0], sizes[i][1])
        width.push(max);
        height.push(min);
    }
    return Math.max(...width) * Math.min(...height)
}
