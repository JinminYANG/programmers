function solution(arr) {
    let answer = arr[0];

    for (let i = 0; i < arr.length - 1; i++) {
        answer = lcm(answer, arr[i + 1]);
    }

    return answer;
}

// 유클리드 호제법 사용
// 최대공약수
function gcd(min, max) {
    if (min % max === 0) {
        return max;
    } else {
        return gcd(max, min % max);
    }
}

// 최소공배수
function lcm(min, max) {
    return min * max / gcd(min, max);
}

solution([2, 6, 8, 14]);