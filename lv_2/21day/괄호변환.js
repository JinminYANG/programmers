// lv.2 - 괄호변환 (실패)

let answer = '';

function solution(p) {
    if (p.length === 0) {
        return '';
    }

    let openCount = 0;
    let closeCount = 0;
    let balance = '';
    let unbalance = '';

    for (let i = 0; i < p.length; i++) {
        if (p.charAt(i) === '(') {
            openCount += 1;
        } else if (p.charAt(i) === ')') {
            closeCount += 1;
        }

        // 분리
        if (openCount === closeCount) {
            // u
            balance = balanceString(p.substring(0, i + 1));
            // v
            unbalance = solution(p.substring(i + 1));
            break;
        }
    }

    answer += balance + unbalance;

    console.log(answer);
    return answer;
}

function balanceString(u) {
    if (u.charAt(0) === ')') {
        return changeString(u);
    } else {
        return u;
    }
}

function changeString(str) {
    let newStr = str;
    let string = '(';

    let sliceNewStr = newStr.slice(1, newStr.length - 1);
    let reverseStr = reverse(sliceNewStr);

    string += reverseStr;
    string += ')';

    return string;
}

function reverse(str) {
    let string = '';
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === '(') {
            string += ')';
        } else if (str.charAt(i) === ')') {
            string += '(';
        }
    }

    return string;
}

solution("()))((()");