function solution(answers) {
    let rtn = [];   // 높은 점수를 받은 학생을 구하기위한 배열 선언
    let num1 = [1, 2, 3, 4, 5];  // 학생1의 5번 주기 반복
    let num2 = [2, 1, 2, 3, 2, 4, 2, 5];  // 학생2의 8번 주기 반복
    let num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];  // 학생3의 10번 주기 반복
    let count = [0, 0, 0];  // 맞은 개수를 저장할 배열 선언

    for (let i = 0; i < answers.length; i++) { // 맞은 개수를 계산할 반복문
        if (num1[i % 5] === answers[i]) {   // 학생1의 정답의 i번째와 반복하는 주기만큼 나머지를 계산하여 비교
            count[0]++;   // 학생1의 맞은개수 +1
        }
        if (num2[i % 8] === answers[i]) {    // 학생2의 정답의 i번째와 반복하는 주기만큼 나머지를 계산하여 비교
            count[1]++;   // 학생2의 맞은개수 +1
        }
        if (num3[i % 10] === answers[i]) {    // 학생3의 정답의 i번째와 반복하는 주기만큼 나머지를 계산하여 비교
            count[2]++;   // 학생3의 맞은개수 +1
        }
    }

    // console.log(count);

    function max(a, b) {  //최대값 함수 (반복문 대신 함수를 만들어줌)
        if (a > b) {
            return a;
        } else {
            return b;
        }
    }

    let num_max = max(max(count[0], count[1]), count[2]); // 선언한 함수를 이용한 최대값 계산
    // console.log(num_max);

    let idx = 0;   // 높은 점수를 가진 학생을 저장할 index선언
    for (let k = 0; k < count.length; k++) {   //높은 점수를 가진 학생을 가려낼 반복문
        if (count[k] === num_max) { // 최고점과 학생의 맞은 개수를 비교
            rtn[idx] = k + 1; // 높은 학생 저장 배열에 k번째(0+1) 학생 저장
            idx++; // 다른 학생 탐색하기 위한 증가 
        }
    }
    console.log(rtn);
    return rtn;
}

solution([1, 2, 3, 4, 5]);
solution([1, 3, 2, 4, 2]);