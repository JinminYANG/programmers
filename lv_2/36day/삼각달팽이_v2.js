// lv.2 - 삼각달팽이

function solution(n) {
    // const answer = new Array(n).fill().map((_, i) => new Array(i + 1));
    /*    const answer = [];
        for (let i = 0; i < n; i++) {
            answer.push([]);
            for(let j = 0; j <= i; j++){
                answer[i][j] = '';
            }
        }*/
    // const answer = Array(n).fill().map((element) => Array(element));
    // const answer = Array.from(Array(n), () => Array());
    const answer = Array.from(Array(n), () => []);
    console.log(answer);

    let count = 0;
    let x = -1;
    let y = 0;

    while (n > 0) {
        for (let i = 0; i < n; i++) {
            answer[++x][y] = ++count;
        }
        for (let j = 0; j < n - 1; j++) {
            answer[x][++y] = ++count;
        }
        for (let k = 0; k < n - 2; k++) {
            answer[--x][--y] = ++count;
        }
        n -= 3;
    }

    let str = answer.reduce((acc, curr) => {
        return acc.concat(curr);
    });

    console.log(str);
    return str;
}

solution(4);