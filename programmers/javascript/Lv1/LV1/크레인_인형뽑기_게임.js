
board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
moves = [1,5,3,5,1,2,1,4];
function solution(board, moves){
    const stack = [];
    var count = 0;
    for (let i = 0;i<moves.length;i++){
        var now = moves[i] - 1;
        for(let j=0;j<board.length;j++){
            if(board[j][now] != 0){
                if(stack.length && stack[stack.length-1] == board[j][now]){
                    stack.pop();
                    count += 2;
                }else{
                    stack.push(board[j][now]);
                }
                board[j][now] = 0;
                break;
            }
        }
    }
    console.log(count);
    return count;
}

solution(board, moves)
