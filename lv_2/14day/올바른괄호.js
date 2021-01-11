// lv.2 - 올바른 괄호

function solution(s) {
    let answer = true;

    let openCount = 0;
    let closeCount = 0;

    if (s.charAt(0) === ')') {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        let temp = s.charAt(i);

        if (temp === '(') {
            openCount += 1;
        } else if (temp === ')') {
            closeCount += 1;
        }

        if (temp !== s.charAt(i - 1)) {
            if (openCount === closeCount) {
                openCount = 0;
                closeCount = 0;
            }
        }

    }

    if (openCount !== closeCount) {
        return false;
    }

    return answer;
}

solution("()()");
solution("(())()");