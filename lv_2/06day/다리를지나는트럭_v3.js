// lv.2 - 다리를 지나는 트럭_v3 - 성공

let currentCrossBridge = [];

function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    setCurrentCrossBridge(bridge_length);
    let currentCrossBridgeWeight = 0;

    while (currentCrossBridgeWeight !== 0 || truck_weights.length !== 0) {
        currentCrossBridge.pop();
        currentCrossBridge.unshift(0);

        currentCrossBridgeWeight = currentCrossBridge.reduce(function (calculate, currentValue) {
            return calculate + currentValue;
        }, 0);

        if (truck_weights.length !== 0) {
            let currentTruck = truck_weights.shift();

            if (weight >= currentTruck + currentCrossBridgeWeight) {
                currentCrossBridge.splice(0, 1, currentTruck);
            } else {
                truck_weights.unshift(currentTruck);
            }
        }

        currentCrossBridgeWeight = currentCrossBridge.reduce(function (calculate, currentValue) {
            return calculate + currentValue;
        }, 0);

        answer += 1;
    }

    console.log(answer);
    return answer;
}

function setCurrentCrossBridge(bridge_length) {
    for (let index = 0; index < bridge_length; index += 1) {
        currentCrossBridge.push(0);
    }
}

solution(2, 10, [7, 4, 5, 6]);