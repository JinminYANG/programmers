// lv.2 - 다리를 지나는 트럭_v2

let currentCrossBridge = [];

function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    setCurrentCrossBridge(bridge_length);

    // 초기 설정
    currentCrossBridge.splice(0, 1, truck_weights.splice(0, 1)[0]);
    let currentCrossBridgeWeight = currentCrossBridge.reduce(function (calculate, currentValue) {
        return calculate + currentValue;
    }, 0);
    answer += 1;


    while (currentCrossBridgeWeight !== 0 || truck_weights.length !== 0) {  // 지나고 있는 다리의 무게가 0이면서 대기중인 트럭이 없을 때까지 반복
        let currentTruck = truck_weights.splice(0, 1);

        if (weight > currentCrossBridgeWeight + currentTruck[0]) {  // 지나려고하는 다리 무게가 건너려고하는 트럭의 무게보다 작을 때 (다리에 진입할 수 있을 때)
            currentCrossBridge.unshift(0);
            currentCrossBridge.splice(0, 1, currentTruck[0]);    // 지나는 다리의 0번째 인덱스에 현재 트럭(무게)를 삽입
            currentCrossBridge.pop();
        } else {    // 1칸씩 이동하는 것을 배열에서 제어
            currentCrossBridge.pop();
            currentCrossBridge.unshift(0);
            truck_weights.splice(0, 0, currentTruck[0]);
        }
        // console.log(currentCrossBridge);

        currentCrossBridgeWeight = currentCrossBridge.reduce(function (calculate, currentValue) {
            return calculate + currentValue;
        }, 0);

        answer += 1;
    }
    // console.log(currentCrossBridgeWeight, truck_weights.length);

    console.log(answer);
    return answer;
}

function setCurrentCrossBridge(bridge_length) {
    for (let index = 0; index < bridge_length; index += 1) {
        currentCrossBridge.push(0);
    }
}

solution(2, 10, [7, 4, 5, 6]);