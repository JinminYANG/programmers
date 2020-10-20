function solution(n, lost, reserve) {
    let stu = []; // 학생 배열 선언
    let index = 0;

    for (let i = 1; i <= n; i++) { // 학생 배열에 넣을 반복문 
        stu[index++] = i; // 학생 배열에 삽입
    }
    console.log(stu); // 출력

    for (let i = 0; i < stu.length; i++) {
        for (let k = lost.length - 1; k >= 0; k--) {
            // console.log(lost[k]);
            if (stu[i] === lost[k]) {
                stu[i] = null;
            }
        }
    }
    console.log(stu);
    // console.log(stu.length);
    console.log(reserve);

    index = 0;
    for (let i = 0; i < stu.length; i++) {
        if (stu[i] == null) {
            // if (stu[i - 1] === reserve[i-1] || stu[i + 1] === reserve[i-1]) {
            //     stu[i] = reserve[i];
            // }
            index = i+1;
            console.log(index);
        }


    }
    console.log(stu);

}

solution(5, [2, 4], [1, 3, 5]);