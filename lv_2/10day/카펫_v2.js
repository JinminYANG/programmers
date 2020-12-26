function solution(brown, yellow) {
    let term = Math.sqrt((brown + 4) ** 2 / 4 - 4 * (brown + yellow));
    let w = ((brown + 4) / 2 + term) / 2;
    let h = ((brown + 4) / 2 - term) / 2;

    return [w, h];
}

// solution(10, 2);
// solution(8, 1);
// solution(24, 24);
console.log(solution(50,22));