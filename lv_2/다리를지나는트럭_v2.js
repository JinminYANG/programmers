// lv.2 - 다리를 지나는 트럭

function solution(bridge_length, weight, truck_weights) {
    let times = 1;
    let crossing = [];
    let finished = [];

    function isEmpty(param) {
        return Object.keys(param).length === 0;
    }

    function crossingToWeight(cross) {
        let total = 0;
        cross.map((el) => total += el);
        return total;
    }

    while (!isEmpty(truck_weights) || !isEmpty(crossing)) {

        times++;

        let current;
        if (truck_weights.shift !== undefined){
            current = truck_weights.shift();
        }
        if (isEmpty(crossing) || (weight > crossingToWeight(crossing) + current)) {
            crossing.push(current);
        } else {
            truck_weights.unshift(current);
        }

        if (times % bridge_length === 0) {
            finished.push(crossing.shift());
            // console.log("끝난거" + finished);

        }

    }

    console.log(finished);
    console.log(times);

}

solution(2, 10, [7, 4, 5, 6]);