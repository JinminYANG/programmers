// lv.2 - 구명보트

function solution(people, limit) {
    let answer = 0;
    let boat = [];
    let peopleArr = people.sort((a, b) => a - b);

    while (peopleArr.length !== 0) {
        let boatWeight = boat.reduce((prev, curr) => {
            return parseInt(prev) + parseInt(curr);
        }, 0);

        let temp = peopleArr.shift();
        if (limit >= boatWeight + temp) {
            boat.push(temp);
        } else {
            peopleArr.unshift(temp);
            boat = [];
            answer++;
        }
    }
    if (boat.length !== 0) {
        answer++;
    }

    console.log(answer);
    return answer;
}

// solution([70, 50, 80, 50], 100);
// solution([100, 100, 100, 100], 100);
solution([100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 100);