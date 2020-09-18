function solution(n) {
    var answer = '';

    for (var i = 0; i < n; i++) {
        if ((i % 2) == 0) {
            answer += "수";
        } else if ((i % 2 == 1)) {
            answer += "박";
        }
    }
    return answer;
}


function solution(n) {
    var answer = '', i = 0;

    while (i < n) {
        answer += ((i % 2 == 0) ? "수" : "박");
        i++;
    }
    return answer;
}












