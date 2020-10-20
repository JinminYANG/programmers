function solution(a, b) {
    let answer = [];
    let months = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let mth_idx = 0;
    let day_idx = 5;
    let rtn;

    // 1  2  3  4  5  6  7  8  9  10 11 12
    // 31 29 31 30 31 30 31 31 30 31 30 31

    for (let i = 1; i < a; i++) { // 월 계산 반복분
        answer[i - 1] = months[i]; // 월의 일수를 계산하기 위해 일수를 answer에 대입
        mth_idx = i; // 몇월인지 계산 
    }

    answer[mth_idx] = b; // answer에 입력받은 일수를 대입
    //console.log(answer); // answer 출력

    day_idx = 4; // 요일에 금요일부터 시작인 인덱스 5를 대입 ***매개변수 b를 받아와서 더해줄 것이므로 금요일이 아닌 목요일부터 시작 ***
    //console.log(days[day_idx]); // 요일 출력

    for (let i = 0; i < answer.length; i++) { // 요일을 계산하기 위한 일수 반복문
        day_idx += answer[i];
    }

    console.log(day_idx);


    rtn = day_idx % 7;
    console.log(days[rtn]);

    return days[rtn];
}

solution(1, 1);
solution(1, 2);
solution(1, 3);
solution(1, 4);
solution(1, 5);
solution(1, 6);
solution(1, 7);

