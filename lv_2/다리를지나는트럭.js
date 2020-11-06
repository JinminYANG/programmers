// lv.2 - 다리를 지나는 트럭

function solution(bridge_length, weight, truck_weights) {
    let times = 0;                          // 걸린 시간
    let trucksCrossingTheBridge = [];       // 현재 건너고 있는 다리 상태
    let crossingWeight = 0;                 // 현재 다리 무게

    // trucksCrossingTheBridge의 길이는 다리 길이로 하고 - 다리 하나씩 0으로 초기화
    for (let i = 0; i < bridge_length; i++) {
        trucksCrossingTheBridge.push(0);
    }

    let now_truck = truck_weights.shift();  // 현재 다리를 지나가는 트럭
    
    // 큐에 트럭을 넣고 다리를 앞으로 한칸씩 땡김
    trucksCrossingTheBridge.unshift(now_truck);
    trucksCrossingTheBridge.pop();

    // 다리 무게 증가
    crossingWeight += now_truck;

    // 시간 증가
    times++;

    while (crossingWeight) {

        // 다리에 있는 트럭 이동
        crossingWeight -= trucksCrossingTheBridge.pop();

        // 다리 안건넌 트럭 하나 빼고,
        now_truck = truck_weights.shift();

        // 다리에 들어갈 수 있으면
        if (weight >= (now_truck + crossingWeight)) {
            trucksCrossingTheBridge.unshift(now_truck);     // 건너고 있는 트럭 배열에 트럭 삽입
            crossingWeight += now_truck;                    // 건너고있는 다리 무게 증가
        } else {    // 다리에 들어갈 수 없으면
            trucksCrossingTheBridge.unshift(0);       // 건너고 있는 트럭 배열에 0 삽입
            truck_weights.unshift(now_truck);               // 건너기 전 트럭 배열에 다시 삽입
        }

        times++;
    }

    console.log(times);
    return times;
}

solution(2, 10, [7, 4, 5, 6]);