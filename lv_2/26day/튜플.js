// lv.2 - 튜플

function solution(s) {
    let answer = [];

    const array = sToArray(s).sort((a, b) => a.length - b.length);
    console.log(array);

    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < array[i].length; k++) {
            if (checkRepeat(answer, array[i][k])) {
                answer.push(array[i][k]);
            }
        }
    }

    console.log(answer);
    return answer;
}

function checkRepeat(answer, text) {
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === text) {
            return false;
        }
    }
    return true;
}

function sToArray(s) {
    const arr = [];
    let arrToIdx = 0;

    let pushToText = '';
    for (let i = 1; i < s.length; i++) {
        let chr = s.charAt(i);

        if (chr === '{') {
            arr.push([]);
        } else if (!isNaN(chr)) {
            // arr[arrToIdx].push(parseInt(chr));
            pushToText += chr;
        } else if (pushToText !== '' && chr === '}') {
            arr[arrToIdx].push(parseInt(pushToText));
            pushToText = '';
            arrToIdx += 1;
        } else if (pushToText !== '' && chr === ',') {
            arr[arrToIdx].push(parseInt(pushToText));
            pushToText = '';
        }
    }

    return arr;
}

solution("{{2},{2,1},{2,1,3},{2,1,3,4}}");

solution("{{1,2,3},{2,1},{1,2,4,3},{2}}");

solution("{{20,111},{111}}");