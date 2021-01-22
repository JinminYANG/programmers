// lv.2 - 조이스틱

function solution(name) {
    let answer = 0;

    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; // 절반 13

    let setArr = setArray(name.length);

    for (let i = 0; i < setArr.length; i++) {
        let findText = name.charAt(i);
        let findTextIndex = alphabet.indexOf(findText);

        if (findText === 'A' && i > 0) {
            answer++;
            continue;
        }

        if (findTextIndex > 13) {
            for (let k = alphabet.length - 1; k >= 13; k--) {
                if (alphabet[k] === findText) {
                    answer++;
                    break;
                }
                answer++;
            }
        } else {
            for (let k = 0; k < 13; k++) {
                if (alphabet[k] === findText) {
                    break;
                }
                answer++;
            }
        }

    }

    console.log(answer);
    return answer;
}

function setArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push('A');
    }
    return arr;
}

// solution("JAZ");
solution("JEROEN");
// solution("ZZZ");
