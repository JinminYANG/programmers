// lv.2 - 압축 (성공)

let dictionary = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function solution(msg) {
    let answer = [];

    for (let i = 0; i < msg.length; i++) {
        let str = findText(i, msg);
        answer.push(dictionary.indexOf(str) + 1);
        if (str.length > 1) {
            i += str.length - 1;
        }
    }

    console.log(answer);
    return answer;
}

function findText(index, message) {
    let temp = message.charAt(index);

    while (true) {
        let next = message.charAt(index + 1);
        if (next === '') {
            return temp;
        } else {
            if (dictionary.includes(temp + next)) {
                temp += next;
                index++;
            } else {
                dictionary.push(temp + next);
                return temp;
            }
        }

    }
}

// solution('KAKAO');
// solution('TOBEORNOTTOBEORTOBEORNOT');
solution('ABABABABABABABAB');