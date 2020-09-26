function solution(n, lost, reserve) {
    let answer = 0; // return할 값 선언
    let stu = []; // 학생 배열 선언

    for (let i = 0; i <= n; i++) { // 학생의 수 만큼 삽입하기 위한 반복문
        stu.push(1); // n의 개수만큼 배열에 1을 삽입
    }

    for (let i = 1; i <= n; i++) { // 순서대로 탐색하기 위한 반복문
        for (let j = 0; j < lost.length; j++) { // 잃어버린 학생들 탐색위한 반복문
            if (i === lost[j]) stu[i] = 0; // 잃어버린 학생의 배열 값을 0으로 대입
        }
        for (let j = 0; j < reserve.length; j++) { // 2개있는 학생들을 탐색위한 반복문
            if (i === reserve[j]) stu[i] += 1; // 2개있는 학생의 배열 값을 2로 대입
        }
    }

    for (let i = 1; i <= n; i++) { // 순서대로 탐색하기 위한 반복문
        if (stu[i] === 0 && stu[i - 1] === 2) { // 0의 값을 가진 학생이면서 그 학생의 앞 번호 학생의 값이 2인 학생을 탐색
            stu[i - 1] = 1; // 앞 번호 학생의 값을 1로 바꿔줌
            stu[i] = 1; // 0의 값을 가진 학생의 값을 1로 바꿔줌
        } else if (stu[i] === 0 && stu[i + 1] === 2) { // 0의 값을 가진 학생이면서 그 학생의 뒤 번호 학생의 갚이 2인 학생을 탐색
            stu[i + 1] = 1; // 뒤 번호 학생의 값을 1로 바꿔줌
            stu[i] = 1; // 0의 값을 가진 학생의 값을 1로 바꿔줌
        }
    }
    
    for (let i = 1; i <= n; i++) { // 학생의 수를 세기위한 반복문
        if (stu[i] !== 0) answer++; // 0이 아닌 학생의 수를 탐색해 answer에 더해줌
    }
    return answer;
}