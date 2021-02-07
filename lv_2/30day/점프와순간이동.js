// lv.2 - 점프와 순간이동

function solution(n) {
    let count = 0;

    while (n !== 0) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n -= 1;
            count += 1;
        }
    }

    return count;
}

solution(5000);