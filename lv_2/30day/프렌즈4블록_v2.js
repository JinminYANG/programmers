function solution(m, n, board) {
    let answer = 0;

    // 배열의 문자열을 2차원 배열로 정리
    board = board.map((element) => element.split(''));

    // 배열에서 지워질 블록의 인덱스를 구해 arr에 삽입
    while (true) {
        const arr = [];
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                if (board[i][j] && board[i][j] === board[i][j + 1] && board[i][j] === board[i + 1][j] && board[i][j] === board[i + 1][j + 1]) {
                    arr.push([i, j]);
                }
            }
        }

        // 답을 구하는 로직 : 깨질 블록이 없다면 0인 개수를 세고 리턴한다.
        if (!arr.length) {
            return [].concat(...board).filter((element) => !element).length;
        }

        // 배열에서 지워질 블록을 0으로 바꾼다.
        for (let i = 0; i < arr.length; i++) {
            const x = arr[i][0];
            const y = arr[i][1];
            board[x][y] = 0;
            board[x][y + 1] = 0;
            board[x + 1][y] = 0;
            board[x + 1][y + 1] = 0;
        }

        // 깨진 블록을 없애고 위에서 블록을 당겨온다.
        for (let i = m - 1; i > 0; i--) {
            if (!board[i].some((element) => !element)) {
                continue;
            }

            for (let j = 0; j < n; j++) {
                for (let k = i - 1; k >= 0 && !board[i][j]; k--) {
                    if (board[k][j]) {
                        board[i][j] = board[k][j];
                        board[k][j] = 0;
                        break;
                    }
                }
            }
        }

    }

}


// solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF']);
solution(6, 6, ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ']);