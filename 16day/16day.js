//lv.1 - 콜라츠 추측

function solution(num) {
    let answer = num;
    let count = 0;

    function even(n) {
        return n / 2;
    }

    function odd(n) {
        return (n * 3) + 1;
    }

    while (answer !== 1) {
        if (answer % 2 === 0) {
            answer = even(answer);
            count++;
        } else {
            answer = odd(answer);
            count++;
        }
    }

    console.log(answer);
    if (count > 500) {
        return -1;
    }
    return count;
}

solution(6);