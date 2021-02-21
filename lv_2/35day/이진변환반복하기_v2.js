function solution(s) {
    let countZero = 0;
    let repeat = 0;

    while (s.length !== 1) {
        let countOne = 0;
        s = s.split("");
        while (s.length) {
            s[s.length - 1] === '1' ? countOne++ : countZero++;
            s.pop();
        }
        s = countOne.toString(2);
        repeat++;
    }

    return [repeat, countZero];
}

solution("110010101001");
solution("01110");
solution("1111111");