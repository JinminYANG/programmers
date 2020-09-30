// lv.1 - 정수 내림차순으로 배치하기

function solution(n) {
    let answer = "";  // 정답을 리턴할 변수
    n = n.toString(); // n을 문자열로 바꿔줌
    let array = []; // 문자열 저장할 배열 선언
    
    for (let i = 0; i < n.length; i++) {
        array.push(n[i]); // 배열에 각각 값 대입
    }

    for (let j = 0; j < array.length; j++) { // 큰 숫자가 앞으로 오게하는 치환 작업
        if (array[j] < array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
            j = -1;
        }
    }

    for (let k = 0; k < array.length; k++) { // 배열에 있는 수를 문자열 answer에 대입
        answer += array[k];
    }

    return Number(answer); // 문자열을 숫자형태로 바꿔서 리턴

}

solution(118372);