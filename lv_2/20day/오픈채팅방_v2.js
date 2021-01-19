// lv.2 - 오픈채팅방_v2 (실패)

function solution(record) {
    let answer = [];
    let recordArr = record.map(element => element.split(" "));
    let loginLog = [];
    let loginLogIndex = 0;

    for (let i = 0; i < recordArr.length; i++) {
        if (recordArr[i][0] === 'Enter') {
            for (let k = 0; k < loginLog.length; k++) {
                if (loginLog[k][0].includes(recordArr[i][1])) {
                    loginLog[k].splice(1, 1, recordArr[i][2]);
                }
            }
            loginLog.push([]);
            loginLog[loginLogIndex][0] = recordArr[i][1];
            loginLog[loginLogIndex][1] = recordArr[i][2];
            loginLog[loginLogIndex][2] = '님이 들어왔습니다.';
            loginLogIndex++;
        } else if (recordArr[i][0] === 'Leave') {
            loginLog.push([]);
            loginLog[loginLogIndex][0] = recordArr[i][1];
            loginLog[loginLogIndex][2] = '님이 나갔습니다.';
            loginLogIndex++;
        } else if (recordArr[i][0] === 'Change') {
            for (let k = 0; k < loginLog.length; k++) {
                if (loginLog[k][0].includes(recordArr[i][1])) {
                    loginLog[k].splice(1, 1, recordArr[i][2]);
                }
            }
        }
    }

    for (let i = 0; i < loginLog.length; i++) {
        answer.push(loginLog[i][1] + loginLog[i][2]);
    }

    return answer;
}

solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]);