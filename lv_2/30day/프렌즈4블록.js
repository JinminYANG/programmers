function solution(m, n, board) {
    let answer = 0;

    // console.log(board[0][1]);

    let block = [];

    for (let i = 0; i < board.length - 1; i++) {
        for (let j = 0; j < board[0].length - 1; j++) {
            let checkToChr = board[i][j];
            if (checkToChr === board[i][j + 1] && checkToChr === board[i + 1][j] && checkToChr === board[i + 1][j + 1]) {
                block.push(i, j);
                console.log(block);
            }
        }
    }

    let reduceX = block.splice(0, 1);
    let reduceY = block.splice(0, 1);
    for (let i = 0; i < board.length - 1; i++) {
        for (let j = 0; j < board[0].length - 1; j++) {
            if (reduceX == i && reduceY == j) {
                let str = board[i][j];
                console.log(str);
                let temp = board[i];
                console.log(temp);
                temp = temp.replace(`/${str}/gi`, ' ');
                console.log(temp);
                ㄷㅌ
            }
        }
    }
    console.log(board);

    // board[0] = '나는자연인이다.';
    // console.log(board);
    return answer;
}


// solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF']);
solution(6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ']);