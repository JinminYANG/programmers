/*
    // lv.2 - 예상대진표
    N명이 참가, 토너먼트 형식
    참가자는 1부터 N번 차례대로 배정
    1-2, 3-4,... (n-1) - n 게임 진행
    이긴사람 다음 라운드 진출
    다음 라운드에 진출할 참가자의 번호는 다시 1번부터 N/2번 차례대로 배정
    만약 1-2번 게임에서 2번이 승리햇다면 다음 라운드에서 1번을 부여, 3-4번 게임에서 3번이 승리했다면 다음 라운드에서 2번을 부여
    게임은 최종 1명이 남을때 까지 진행

    이때, 처음 라운드에서 A번 참가자는 B번 참가자와 몇 번째 라운드에서 만나는지 궁금하다
    게임 참가자수 N, 참가자 번호 A, 경쟁자 번호 B
    처음 라운드에서 A번을 가진 참가자는 B와 몇 번째 라운드에서 만나는지 return
    ! A번 참가자와 B번 참가자는 서로 붙게 되기 전까지 항상 이긴다고 가정한다. !
*/


function solution(n, a, b) {
    let answer = 1;

    let setToNumber = [];
    for (let i = 1; i <= n; i++) {
        setToNumber.push(i);
    }

    let round = roundOne(setToNumber);

    while (true) {
        let isFight = findAFightB(round, a, b);
        if (!isFight) {
            answer += 1;
            round = nextRounds(round, a, b);
        } else {
            break;
        }
    }

    console.log(answer);
    return answer;
}

function roundOne(numbers) {
    let arr = [];
    let arrToIdx = 0;
    for (let i = 0; i < numbers.length; i += 2) {
        arr.push([]);
        arr[arrToIdx].push(numbers[i], numbers[i + 1]);
        arrToIdx++;
    }

    return arr;
}

function findAFightB(round, a, b) {
    for (let i = 0; i < round.length; i++) {
        if (round[i].includes(a) && round[i].includes(b)) {
            return true;
        }
    }
    return false;
}

function nextRounds(round, a, b) {
    for (let i = 0; i < round.length; i++) {
        if (round[i].includes(a)) {
            round[i] = a;
        } else if (round[i].includes(b)) {
            round[i] = b;
        } else {
            round[i] = round[i][0];
        }
    }

    let arr = [];
    let arrToIdx = 0;
    for (let i = 0; i < round.length; i += 2) {
        arr.push([]);
        arr[arrToIdx].push(round[i], round[i + 1]);
        arrToIdx++;
    }

    return arr;
}


solution(8, 4, 7);