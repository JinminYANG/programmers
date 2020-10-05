function solution(board, moves) {
    let rtn = 0;
    let arr = [];
    let catched = [];

    for (let i = 0; i < board.length; i++) {
        arr.push([]);
        for (let k = 0; k < board[0].length; k++) {
            arr[i][k] = board[i][k];
        }
    }

    let cat = 0;
    for (let i = 0; i < moves.length; i++) {
        cat = Number(moves.slice(i, i + 1));
        switch (cat) {
            case 1 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][0] !== 0) {
                        catched.push(arr[k][0]);
                        arr[k][0] = 0;
                        break;
                    }
                }
                break;
            }
            case 2 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][1] !== 0) {
                        catched.push(arr[k][1]);
                        arr[k][1] = 0;
                        break;
                    }
                }
                break;
            }
            case 3 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][2] !== 0) {
                        catched.push(arr[k][2]);
                        arr[k][2] = 0;
                        break;
                    }
                }
                break;
            }
            case 4 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][3] !== 0) {
                        catched.push(arr[k][3]);
                        arr[k][3] = 0;
                        break;
                    }
                }
                break;
            }
            case 5 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][4] !== 0) {
                        catched.push(arr[k][4]);
                        arr[k][4] = 0;
                        break;
                    }
                }
                break;
            }
            case 6 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][5] !== 0) {
                        catched.push(arr[k][5]);
                        arr[k][5] = 0;
                        break;
                    }
                }
                break;
            }
            case 7 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][6] !== 0) {
                        catched.push(arr[k][6]);
                        arr[k][6] = 0;
                        break;
                    }
                }
                break;
            }
            case 8 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][7] !== 0) {
                        catched.push(arr[k][7]);
                        arr[k][7] = 0;
                        break;
                    }
                }
                break;
            }
            case 9 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][8] !== 0) {
                        catched.push(arr[k][8]);
                        arr[k][8] = 0;
                        break;
                    }
                }
                break;
            }
            case 10 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][9] !== 0) {
                        catched.push(arr[k][9]);
                        arr[k][9] = 0;
                        break;
                    }
                }
                break;
            }
            case 11 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][10] !== 0) {
                        catched.push(arr[k][10]);
                        arr[k][10] = 0;
                        break;
                    }
                }
                break;
            }
            case 12 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][11] !== 0) {
                        catched.push(arr[k][11]);
                        arr[k][11] = 0;
                        break;
                    }
                }
                break;
            }
            case 13 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][12] !== 0) {
                        catched.push(arr[k][12]);
                        arr[k][12] = 0;
                        break;
                    }
                }
                break;
            }
            case 14 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][13] !== 0) {
                        catched.push(arr[k][13]);
                        arr[k][13] = 0;
                        break;
                    }
                }
                break;
            }
            case 15 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][14] !== 0) {
                        catched.push(arr[k][14]);
                        arr[k][14] = 0;
                        break;
                    }
                }
                break;
            }
            case 16 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][15] !== 0) {
                        catched.push(arr[k][15]);
                        arr[k][15] = 0;
                        break;
                    }
                }
                break;
            }
            case 17 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][16] !== 0) {
                        catched.push(arr[k][16]);
                        arr[k][16] = 0;
                        break;
                    }
                }
                break;
            }
            case 18 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][17] !== 0) {
                        catched.push(arr[k][17]);
                        arr[k][17] = 0;
                        break;
                    }
                }
                break;
            }
            case 19 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][18] !== 0) {
                        catched.push(arr[k][18]);
                        arr[k][18] = 0;
                        break;
                    }
                }
                break;
            }
            case 20 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][19] !== 0) {
                        catched.push(arr[k][19]);
                        arr[k][19] = 0;
                        break;
                    }
                }
                break;
            }
            case 21 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][20] !== 0) {
                        catched.push(arr[k][20]);
                        arr[k][20] = 0;
                        break;
                    }
                }
                break;
            }
            case 22 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][21] !== 0) {
                        catched.push(arr[k][21]);
                        arr[k][21] = 0;
                        break;
                    }
                }
                break;
            }
            case 23 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][22] !== 0) {
                        catched.push(arr[k][22]);
                        arr[k][22] = 0;
                        break;
                    }
                }
                break;
            }
            case 24 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][23] !== 0) {
                        catched.push(arr[k][23]);
                        arr[k][23] = 0;
                        break;
                    }
                }
                break;
            }
            case 25 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][24] !== 0) {
                        catched.push(arr[k][24]);
                        arr[k][24] = 0;
                        break;
                    }
                }
                break;
            }
            case 26 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][25] !== 0) {
                        catched.push(arr[k][25]);
                        arr[k][25] = 0;
                        break;
                    }
                }
                break;
            }
            case 27 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][26] !== 0) {
                        catched.push(arr[k][26]);
                        arr[k][26] = 0;
                        break;
                    }
                }
                break;
            }
            case 28 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][27] !== 0) {
                        catched.push(arr[k][27]);
                        arr[k][27] = 0;
                        break;
                    }
                }
                break;
            }
            case 29 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][28] !== 0) {
                        catched.push(arr[k][28]);
                        arr[k][28] = 0;
                        break;
                    }
                }
                break;
            }
            case 30 : {
                for (let k = 0; k < arr.length; k++) {
                    if (arr[k][29] !== 0) {
                        catched.push(arr[k][29]);
                        arr[k][29] = 0;
                        break;
                    }
                }
                break;
            }

        }

    }

    for (let i = catched.length-1; i >= 0; i--) {
        if(catched[i] === catched[i+1]){
            catched.splice(i,2);
            rtn += 2;
        }
    }
    return rtn;
}

solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4]);