// lv.2 - 영어 끝말잇기

function solution(n, words) {
    let answer = [0, 0];

    let numbers = produce(n);
    let numberToCount = produceToCount(numbers.length);
    let talkToWords = [];

    talkToWords.push(words[0]);
    numberToCount[0] += 1;
    let pushToNumberIndex = 1;

    let checkRepeatWordBoolean = false;
    let checkLastTextBoolean = false;
    for (let i = 1; i < words.length; i++) {
        checkRepeatWordBoolean = checkRepeatWord(talkToWords, words[i]);
        checkLastTextBoolean = checkLastText(talkToWords, words[i]);
        if (checkRepeatWordBoolean && checkLastTextBoolean) {
            talkToWords.push(words[i]);
            if (i >= numbers.length) {
                pushToNumberIndex = i % numbers.length;
            }
            numberToCount[pushToNumberIndex++] += 1;
        } else {
            if (i >= numbers.length) {
                pushToNumberIndex = i % numbers.length;
            }
            answer[0] = pushToNumberIndex + 1;
            answer[1] = numberToCount[pushToNumberIndex] + 1;
            break;
        }
    }

    console.log(answer);
    return answer;
}

function checkLastText(talkToWords, word) {
    let checkText = talkToWords[talkToWords.length - 1];
    checkText = checkText.charAt(checkText.length - 1);

    if (checkText !== word.charAt(0)) {
        return false;
    }
    return true;
}

function checkRepeatWord(talkToWords, word) {
    for (let i = 0; i < talkToWords.length; i++) {
        if (talkToWords[i] === word) {
            return false;
        }
    }
    return true;
}

function produce(n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}

function produceToCount(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(0);
    }
    return arr;
}

// solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank']);

solution(2, ['land', 'dream', 'mom', 'mom', 'ror']);