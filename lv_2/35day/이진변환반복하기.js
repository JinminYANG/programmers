// lv.2 - 이진 변환 반복하기

let answer = [0, 0];

function solution(s) {

    while (s.length !== 1) {
        s = find(s);
        s = (s.length).toString(2);
    }

    return answer;
}

function find(s) {
    let temp = '';
    answer[0] += 1;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === '0') {
            answer[1] += 1;
        } else {
            temp += 1;
        }
    }

    return temp;
}

solution('0111010');