// lv.1 - 크레인 인형뽑기 게임 - v2

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

    let arr_index = 0;
    function find(number){
        for (let k = 0; k < arr.length; k++) {
            if (arr[k][number] !== 0) {
                catched.push(arr[k][number]);
                arr[k][number] = 0;
                break;
            }
        }
    }

    let cat = 0;
    for (let i = 0; i < moves.length; i++) {
        cat = Number(moves.slice(i, i + 1));
        switch (cat) {
            case 1 : {
                find(arr_index+0);
                break;
            }
            case 2 : {
                find(arr_index+1);
                break;
            }
            case 3 : {
                find(arr_index+2);
                break;
            }
            case 4 : {
                find(arr_index+3);
                break;
            }
            case 5 : {
                find(arr_index+4);
                break;
            }
            case 6 : {
                find(arr_index+5);
                break;
            }
            case 7 : {
                find(arr_index+6);
                break;
            }
            case 8 : {
                find(arr_index+7);
                break;
            }
            case 9 : {
                find(arr_index+8);
                break;
            }
            case 10 : {
                find(arr_index+9);
                break;
            }
            case 11 : {
                find(arr_index+10);
                break;
            }
            case 12 : {
                find(arr_index+11);
                break;
            }
            case 13 : {
                find(arr_index+12);
                break;
            }
            case 14 : {
                find(arr_index+13);
                break;
            }
            case 15 : {
                find(arr_index+14);
                break;
            }
            case 16 : {
                find(arr_index+15);
                break;
            }
            case 17 : {
                find(arr_index+16);
                break;
            }
            case 18 : {
                find(arr_index+17);
                break;
            }
            case 19 : {
                find(arr_index+18);
                break;
            }
            case 20 : {
                find(arr_index+19);
                break;
            }
            case 21 : {
                find(arr_index+20);
                break;
            }
            case 22 : {
                find(arr_index+21);
                break;
            }
            case 23 : {
                find(arr_index+22);
                break;
            }
            case 24 : {
                find(arr_index+23);
                break;
            }
            case 25 : {
                find(arr_index+24);
                break;
            }
            case 26 : {
                find(arr_index+25);
                break;
            }
            case 27 : {
                find(arr_index+26);
                break;
            }
            case 28 : {
                find(arr_index+27);
                break;
            }
            case 29 : {
                find(arr_index+28);
                break;
            }
            case 30 : {
                find(arr_index+29);
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