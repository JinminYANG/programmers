// lv.2 - 기능개발

function solution(progresses, speeds) {
    let rtn = [];

    while (progresses[0] <= 100) {
        for (let i in progresses) {
            if(progresses[i] > 100){
                progresses[i] = 100;
            }
            if (progresses[0] >= 100) {
                progresses.shift();
                console.log(progresses);
            } else {
                progresses[i] += speeds[i];
            }
        }
    }
}

solution([93, 30, 55], [1, 30, 5]);