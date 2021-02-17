// lv.2 - 파일명 정렬

function solution(files) {
    files.sort((a, b) => {
        let first = divideString(a);
        let second = divideString(b);

        return fileSort(first, second);
    });

    return files;
}

// HEAD, NUMBER를 추출하기 위한 함수
// 반복문을 이용하여 숫자의 위치를 찾아낸다.
function divideString(filename) {
    let startNumberIndex, endNumberIndex;
    for (let i = 0; i < filename.length; i++) {
        if (!startNumberIndex && !isNaN(parseInt(filename[i]))) {
            startNumberIndex = i;
        }
        if (startNumberIndex && isNaN(parseInt(filename[i + 1]))) {
            endNumberIndex = i;
            break;
        }
    }

    let head = filename.slice(0, startNumberIndex);
    let number = filename.slice(startNumberIndex, endNumberIndex + 1);

    return [head.toLowerCase(), number * 1];    // 문자비교를 위한 소문자 변환, 숫자로 변경해주기 위한 * 1 작업
}

// 문자열 비교를 위한 함수
// JavaScript는 문자열에 대한 비교가 가능하다.
// 문자를 먼저 비교하고 같을 시 숫자를 이용한다.
function fileSort(first, second) {
    let [firstHead, firstNumber] = first;
    let [secondHead, secondNumber] = second;
    if (firstHead < secondHead) {
        return -1;
    } else if (firstHead > secondHead) {
        return 1;
    } else {
        return firstNumber - secondNumber;
    }
}

solution(['img12.png', 'img10.png', 'img02.png', 'img1.png', 'IMG01.GIF', 'img2.JPG']);