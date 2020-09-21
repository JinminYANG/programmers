function solution(arr, divisor) {
    var answer = [];
    var index = 0;
    answer[index] = -1;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % divisor == 0) {
            answer[index++] = arr[i];
        }
    }
    for (var k = 0; k < answer.length; k++) {
        for (var j = k + 1; j < answer.length; j++) {
            if (answer[k] > answer[j]) {
                var temp = answer[k];
                answer[k] = answer[j];
                answer[j] = temp;
            }
        }
    }

    return answer;
}

solution([5, 9, 7, 10], 5);
solution([2, 36, 1, 3], 1);
solution([3, 2, 6], 10);