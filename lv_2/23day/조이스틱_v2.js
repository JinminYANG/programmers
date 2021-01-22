// lv.2 - 조이스틱_v2

function solution(name) {
    let answer = -1;

    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; // 절반 13

    let setArr = setArray(name.length);
    let arrIndexes = findTextIndexes(alphabet, name);
    console.log(arrIndexes);

    let setArrIndex = 0;
    while (setArr.length !== 0) {
        let findText = name.charAt(setArrIndex);
        let findTextIndex = alphabet.indexOf(findText);

        if (findText === 'A' && setArrIndex > 0) {
            setArr.splice(0, 1);
            setArrIndex++;
            continue;
        } else {
            answer++;
        }

        if (findTextIndex > 13) {
            answer += alphabet.length - findTextIndex;
            setArr.splice(0, 1);
        } else {
            answer += findTextIndex;
            setArr.splice(0, 1);
        }
        setArrIndex++;
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

function findTextIndexes(alphabets, name) {
    const arr = [];
    for (let i = 0; i < name.length; i++) {
        arr.push(alphabets.indexOf(name.charAt(i)));
    }

    return arr;
}

solution("JAZ");
// solution("JEROEN");
// solution("ZZZ");
// solution("BBBAAAB")