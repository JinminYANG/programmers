// lv.2 - 구명보트 (성공)

function solution(people, limit) {
    let answer = 0;

    people.sort((a, b) => a - b);

    while (people.length) {
        let weight = people.pop();
        if (weight + people[0] <= limit) {
            people.shift();
        }
        answer++;
    }

    return answer;
}

solution([10, 10, 10, 10, 10, 10, 90], 100);