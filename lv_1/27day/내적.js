// lv.1 - 내적

function solution(a, b) {
    let answer = 123465789;

    let array = []
    for (let index = 0; index < a.length; index += 1) {
        array.push(a[index] * b[index]);
    }

    answer = array.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    });

    return answer;
}

solution([1, 2, 3, 4], [-3, -1, 0, 2]);
solution([-1, 0, 1], [1, 0, -1]);