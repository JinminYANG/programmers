// lv.2 - 멀쩡한 사각형

function solution(w, h) {
    let answer = 0;
    let gcdVar = gcd(w, h);
    
    // 대각선을 지나는 사각형의 개수를 구하는 공식
    // 가로 * 세로 - gcd
    answer = w * h - (w + h - gcdVar);
    return answer;
}

// 유클리드 호제법을 이용한 최대공약수
function gcd(w, h) {
    if (h === 0) {
        return w;
    } else {
        return gcd(h, (w % h));
    }
}