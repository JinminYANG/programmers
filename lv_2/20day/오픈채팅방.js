// lv.2 - 오픈채팅방 (실패)

function solution(record) {
    let answer = [];
    let recordArr = record.map(element => element.split(" "));

    let loginLog = [];
    let loginLogIdx = 0;

    for (let i = 0; i < recordArr.length; i++) {
        if (recordArr[i][0] === 'Enter') {
            for (let k = 0; k < loginLog.length; k++) {
                if (loginLog[k][1].includes(recordArr[i][2])) {
                    loginLog[k].replace(loginLog[k][2], recordArr[i][2]);
                }
            }
            loginLog.push([]);
            // answer.push(`${recordArr[i][2]}님이 들어왔습니다.`);
            loginLog[loginLogIdx][0] = recordArr[i][1];
            loginLog[loginLogIdx][1] = recordArr[i][2];
            loginLogIdx++;
        }
        // else if (recordArr[i][0] === 'Leave') {
        //     for (let j = 0; j < loginLog.length; j++) {
        //         if (loginLog[j][0] === recordArr[i][1]) {
        //             answer.push(`${loginLog[j][1]}님이 나갔습니다.`);
        //             loginLog.splice(j, 1);
        //             loginLogIdx--;
        // break;
        // }
        // }
        // }
        // else if (recordArr[i][0] === 'Change') {
        //     for (let j = 0; j < loginLog.length; j++) {
        //         if (loginLog[j][0] === recordArr[i][1]) {
        //             loginLog[j].splice(1, 1, recordArr[i][2]);
        //         }
        //     }
        // for (let k = 0; k < answer.length; k++) {
        // if (answer[k].includes(recordArr[i][2])) {
        //     answer[k].replace()
        // }
        // }
        // }
    }

    console.log(loginLog);

    console.log(answer);
    return answer;
}


solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]);