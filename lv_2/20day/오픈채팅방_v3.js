// lv.2 - 오픈채팅방 (성공)

function solution(record) {
    let answer = [];

    let recordArr = record.map(element => element.split(" "));

    let log = {};

    // id와 name을 이용하여 기록을 남긴다. => key:id, value:name
    // 이때 같은 id 값을 가지고 있다면 덮어쓰여진다. (change와 재enter의 경우)
    for (let i = 0; i < recordArr.length; i++) {
        if (recordArr[i].length === 3) {
            log[recordArr[i][1]] = recordArr[i][2];
        }
    }
    console.log(log);

    for (let i = 0; i < recordArr.length; i++) {
        if (recordArr[i][0] === 'Enter') {
            answer.push(`${log[recordArr[i][1]]}님이 들어왔습니다.`);
        } else if (recordArr[i][0] === 'Leave') {
            answer.push(`${log[recordArr[i][1]]}님이 나갔습니다.`);
        }
    }

    console.log(answer);
    return answer;
}

solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]);