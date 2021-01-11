// lv.2 - 올바른괄호_v2 (성공)

function solution(s) {
    let answer = true;

    let stack = [];

    if (s.charAt(0) === ')') {
        return false;
    }

    let openCount = 0;
    let closeCount = 0;

    for (let i = 0; i < s.length; i++) {
        let temp = s.charAt(i);
        if (temp === '(') {
            stack.push(temp);
            openCount += 1;
        }

        if (temp === ')') {
            let pop = stack.pop();
            if (pop === '(') {
                openCount -= 1;
            }
        }
    }

    if (openCount > 0 || stack.length !== 0) {
        return false;
    }


    return answer;
}

solution("()()");
solution("(())()");