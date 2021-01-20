// lv.2 - 괄호변환 (성공)

function solution(p) {
    let answer = '';

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
            balance = p.substring(0, i + 1);
            unbalance = p.substring(i + 1);

            if (isCorrectString(balance)) {
                return balance + solution(unbalance);
            } else {
                let temp = '(' + solution(unbalance) + ')';
                return temp + reverse(p.substring(1, balance.length - 1));
            }
        }
    }

    return answer;
}

function isCorrectString(u) {
    let booleanToBalance = true;
    let openCount = 0;
    let closeCount = 0;
    for (let i = 0; i < u.length; i++) {
        if (u.charAt(i) === '(') {
            openCount += 1;
        } else if (u.charAt(i) === ')') {
            closeCount += 1;
        }

        if (openCount < closeCount) {
            booleanToBalance = false;
        }
    }

    return booleanToBalance;
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

console.log(solution("()))((()"));
// solution("))))((((");
// solution(")()()()(")
//solution(")))(((()))((")
// solution(")())(()))((()))(((())))))(((((")
// solution("))((())()((())")
// solution("))(()))(((")
// solution(")))(()((   ")
// solution("((()))아 시발 하기싫어")
// console.log(solution(")(()))(("));