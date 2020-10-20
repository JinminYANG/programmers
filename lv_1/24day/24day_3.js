// lv.1 - 다트 게임 (성공)

function solution(dartResult) {

    let scores = [];       // 점수들을 저장할 배열
    let scoresIndex = 0;   // 점수들의 인덱스를 계산할 변수
    let currentScore = 0;  // 현재 점수를 계산할 변수

    for (let i = 0; i < dartResult.length; i++) {
        if (!isNaN(dartResult.charAt(i))) { // i번째가 숫자일 때
            if (dartResult.charAt(i - 1) === '1' && dartResult.charAt(i) === '0') { // 점수가 10인 경우
                currentScore = 10;
            } else {
                currentScore = Number(dartResult.charAt(i));
            }
        } else { // i번째가 문자일 때
            if (dartResult.charAt(i) === "S") {
                scores.push(currentScore);
                scoresIndex++;
            } else if (dartResult.charAt(i) === "D") {
                currentScore *= currentScore;
                scores.push(currentScore);
                scoresIndex++;
            } else if (dartResult.charAt(i) === "T") {
                currentScore *= currentScore * currentScore;
                scores.push(currentScore);
                scoresIndex++;
            } else if (dartResult.charAt(i) === "*") {
                scores[scoresIndex - 2] *= 2;
                scores[scoresIndex - 1] *= 2;
            } else if (dartResult.charAt(i) === "#") {
                scores[scoresIndex - 1] *= (-1);
            }
        }
    }
    console.log(scores);

    let rtn = scores.reduce(function add(sum, currValue) {  // reduce 내장함수는 배열의 element들을 처리하여 하나의 값을 도출해 내는 함수
        return sum + currValue;
    }, 0);

    console.log(rtn);
    return rtn;
}

solution("1D#2S*3S");