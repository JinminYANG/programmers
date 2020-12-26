function solution(brown, yellow) {
    const totalSpace = brown + yellow;

    for (let index = Math.floor(totalSpace / 2); index > 0; index -= 1) {   // 가로가 세로보다 크기 때문에 약수 값을 큰 숫자부터 구했음 (세로가 1인 경우를 제외하기 위해 2를 나누어줌)
        if (totalSpace % index !== 0) { // 만약 구한 숫자가 total에서 나누어 떨어진다면 아래를 진행한다. (아니라면 반복문 다시 진행)
            continue;
        }

        const width = index;    // 임시의 width 값
        const height = totalSpace / index; // 임시의 height 값

        if ((width - 2) * (height - 2) === yellow) {    // 만약 (width - 2) * (height - 2)가 yellow 와 같다면 (yellow는 brown에게 감싸져 있으니 -2씩 해준다.)
            return [width, height];
        }
    }
}


// solution(10, 2);
// solution(8, 1);
// solution(24, 24);
solution(50, 22);