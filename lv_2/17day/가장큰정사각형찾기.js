// lv.2 - 가장 큰 정사각형 찾기

function solution(board) {
    let answer = 0;
    let max = 0;

    const width = board[0].length;
    const height = board.length;

    if (height < 2 || width < 2) {
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < width; j++) {
                if (board[i][j] === 1) {
                    return 1;
                }
            }
        }
    }

    for (let i = 1; i < height; i++) {
        for (let j = 1; j < width; j++) {
            if (board[i][j] === 1) {
                board[i][j] = Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]) + 1;
                if (board[i][j] > max) {
                    max = board[i][j];
                }
            }
        }
    }

    answer = max * max;

    return answer;
}

solution([[0, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [0, 0, 1, 0]]);