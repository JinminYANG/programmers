// lv.2 - 압축 (실패)

let dictionary = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function solution(msg) {
    let answer = [];

    for (let i = 0; i < msg.length; i++) {
        let str = msg.charAt(i);
        if (dictionary.includes(str)) {
            let newStr = str + msg.charAt(i + 1);
            if (dictionary.includes(newStr)) {
                answer.push(dictionary.indexOf(newStr) + 1);
            } else {
                answer.push(dictionary.indexOf(str) + 1);
                dictionary.push(newStr);
            }
        }

    }

    console.log(answer);
    return answer;
}

function findStr(str) {
    let temp = str;

    while (true) {
        if()
    }
}


solution('KAKAO');