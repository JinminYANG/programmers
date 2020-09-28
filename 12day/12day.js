function solution(array, commands) {
    let rtn = []; // 리턴할 배열 저장소

    for (let i = 0; i < commands.length; i++) {  // commands의 길이만큼 반복
        let a = commands[i][0];  // a번째 수 부터 시작
        let b = commands[i][1];  // b번째 수 까지 
        let c = commands[i][2];  // c번째 행 리턴

        let slice = array.slice(a - 1, b);  // 배열에서 a번째 부터 b번째까지 뽑아서 저장
        console.log(slice);  // 출력

        // let srt = slice.sort();   // 뽑은 수 들을 정렬 ***sort()함수를 이용하게 될 경우 21<4 처럼 되어서 오류***
        // console.log(srt);
        
        for (let k = 0; k < slice.length; k++) { // 버블정렬
            let swap;
            for (let j = 0; j < slice.length - 1 - k; j++) {
                if (slice[j] > slice[j + 1]) {
                    swap = slice[j];
                    slice[j] = slice[j + 1];
                    slice[j + 1] = swap;
                }
            }
        }

        console.log(slice);  // 출력

        rtn.push(slice[c - 1]);   // 리턴할 배열에 정렬된 배열의 c번째 값 저장

    }
    console.log(rtn);

    return rtn;
}

solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]);