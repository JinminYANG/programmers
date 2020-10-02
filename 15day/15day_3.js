function solution(phone_number) {
    let rtn = [];
    let answer = '';

    for (let i = 0; i < phone_number.length; i++) {
        rtn[i] = phone_number.charAt(i);
    }

    for (let k = 0; k < rtn.length - 4; k++) {
        rtn[k] = '*';
    }

    answer = rtn.join(''); // 배열을 문자열로 만들어줌

    return answer;
}

solution('01033334444');