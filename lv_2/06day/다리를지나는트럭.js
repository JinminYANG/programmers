// lv.2 - 다리를 지나는 트럭

function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let crossBridge = [];

    while (truck_weights !== null) {
        let currentTruck = truck_weights.splice(0, 1);
        let crossBridgeWeight = crossBridge.reduce(function (accumulator, currentValue) {
            return parseInt(accumulator + currentValue);
        }, 0);


        if (bridge_length >= crossBridge.length) {  // 다리 길이가 건너는 다리의 길이보다 크다면 (다리에 진입할 수 있다면)
            if (weight > crossBridgeWeight + currentTruck[0]) { // 다리 무게가 건너는 다리의 무게보다 크다면 (다리에 진입할 수 있다면)
                crossBridge.push(currentTruck[0]);
            } else {    // 무게때문에 진입하지 못했을 때
                // 현재 트럭을 대기 트럭에 다시 입력
                truck_weights.splice(0, 0, currentTruck[0]);

                // 다리를 지나고 있는 트럭을 처리
                crossBridge.splice(0, 0, "");
            }
        } else {    // 다리 길이때문에 진입하지 못했을 때
            // 현재 트럭을 대기 트럭에 다시 입력
            truck_weights.splice(0, 0, currentTruck[0]);

            // 다리를 지나고 있는 트럭을 처리
            crossBridge.splice(0, 0, "");
        }

        if (crossBridge.length > bridge_length) {   // 지나고 있는 다리에 대한 처리
            crossBridge.pop();
        }

        answer += 1;
    }
    console.log(crossBridge);

    return answer;
}

solution(2, 10, [7, 4, 5, 6]);