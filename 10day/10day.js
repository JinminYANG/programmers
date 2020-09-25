function solution(n, lost, reserve) {
    let stu = [];
    let index = 0;

    for (let i = 1; i <= n; i++) {
        stu[index++] = i;
    }
    console.log(stu);

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
            index = i+1;
            console.log(index);
        }

        // !!!!! reserve 부분 풀어야함!!!!!
        // if (stu[i - 1] === reserve[i-1] || stu[i + 1] === reserve[i-1]) {
        //     stu[i] = reserve[i];
        // }
    }
    console.log(stu);

}

solution(5, [2, 4], [1, 3, 5]);