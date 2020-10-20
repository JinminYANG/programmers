// lv.1 - [1차] 비밀지도

function solution(n, arr1, arr2) {

    let mapArr1 = [];
    let mapArr2 = [];


    for (let i = 0; i < arr1.length; i++) {
        mapArr1.push([]);
        mapArr2.push([]);
        let temp1 = arr1[i].toString(2);
        let temp2 = arr2[i].toString(2);
        for (let k = 0; k < arr1.length; k++) {
            mapArr1[i].push(temp1.charAt(k));
            mapArr2[i].push(temp2.charAt(k));
            if (mapArr1[i][k] === '') {
                mapArr1[i].unshift('0');
                mapArr1[i].pop(k);
            }
            if (mapArr2[i][k] === '') {
                mapArr2[i].unshift('0');
                mapArr2[i].pop(k);
            }
        }

    }

    console.log(mapArr1);
    console.log(mapArr2);
    // console.log(mapArr1.concat(mapArr2));

    for (let i = 0; arr1.length; i++) {
        for (let k = 0; arr1[0].length; i++) {

        }
    }

}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);