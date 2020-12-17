/*function solution(v) {
    let answer = [];

    function findX() {
        let xValue = v[0][0];

        let findValue;

        if(xValue !== v[1][0]){
            if(xValue === v[2][0]){
                findValue = v[1][0];
            }
            if(v[1][0] === v[2][0]){
                findValue = xValue;
            }
        }else if(xValue === v[1][0]){
            findValue = v[2][0];
        }

        return findValue;
    }

    function findY() {
        let yValue = v[0][1];
        let findValue;

        if(yValue !== v[1][1]){
            if(yValue === v[2][1]){
                findValue = v[1][1];
            }
            if(v[1][1] === v[2][1]){
                findValue = yValue;
            }
        } else if(yValue === v[1][1]){
            findValue = v[2][1];
        }


        return findValue;
    }


    answer.push(findX());
    answer.push(findY());

    return answer;
}

solution([[1, 4], [3, 4], [3, 10]]);
solution([[1, 1], [2, 2], [1, 2]]);*/

function solution(v) {
    return [find([v[0][0], v[1][0], v[2][0]]), find([v[0][1], v[1][1], v[2][1]])];
}

function find(x) {
    if (x[0] === x[1]) {
        return x[2];
    }

    if (x[1] === x[2]) {
        return x[0];
    }

    if (x[0] === x[2]) {
        return x[1];
    }
}

console.log(solution([[1, 4], [3, 4], [3, 10]]));