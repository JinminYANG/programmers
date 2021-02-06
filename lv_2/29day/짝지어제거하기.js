function solution(s) {
    let answer = 0;

    let strIdx = 0;
    let str = s.charAt(strIdx);

    while (s !== '') {
        let temp = s.charAt(strIdx + 1);
        if (str === temp) {
            let replaceToStr = str + temp;
            s = s.replace(replaceToStr, '');
            strIdx = 0;
            str = s.charAt(strIdx);
        } else {
            str = temp;
            strIdx++;
            if (strIdx === s.length - 1) {
                break;
            }
        }
    }
    if (s === '') {
        answer = 1;
    }

    return answer;
}

solution('baabaa');