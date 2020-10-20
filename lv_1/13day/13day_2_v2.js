function solution(s, n) {
    let rtn = '';
    let array = s.split('');   //띄어쓰기를 포함한 문자 하나하나를 조각내서 array 이름의 변수에 배열 형태로 저장
    console.log(array);

    for(let i = 0; i < array.length; i++){  //배열의 길이만큼 반복
        let asciiCd = parseInt(array[i].charCodeAt(0)); // 배열의 i번째 값을 유니코드 값으로 변환하여 asciiCd 변수에 저장
        if (asciiCd >= 65 && asciiCd <= 90){ // asciiCd값이 A~Z인지 판별
            asciiCd = asciiCd + n; // asciiCd값을 n만큼 이동시키기 위해 더해줌
            if(asciiCd > 90){ // asciiCd값이 91(Z)보다 크면
                asciiCd = asciiCd -26; // Z를 A로 치환
            }
        }
        else if (asciiCd >= 95 && asciiCd <= 122){ // asciiCd값이 a~z인지 판별
            asciiCd = asciiCd + n; // asciiCd값을 n만큼 이동시키이 위해 더해줌
            if(asciiCd > 122){ // asciiCd 값이 122(z)보다 크면
                asciiCd = asciiCd -26; // z를 a로 치환
            }
        }
        rtn += String.fromCharCode(asciiCd); //asciiCd(아스키코드) 값을 문자형태로 변환하여 문자열에 넣어줌
    }

    console.log(rtn);
    return rtn;
}
solution("AB", 1);
solution("a B z", 4);