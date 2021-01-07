// lv.2 - 스킬트리 (성공)

function solution(skill, skill_trees) {
    let count = 0;  // 가능한 스킬트리의 개수를 담을 변수

    for (let i = 0; i < skill_trees.length; i += 1) {
        let isPossible = true;      // 가능한 스킬인지 아닌지 저장하는 변수
        let index = 0;              // 스킬의 선택된 인덱스

        for (let j = 0; j < skill_trees[i].length; j += 1) {
            if (skill.includes(skill_trees[i][j])) {        // 현재 배울 스킬(skill_trees[i][j])이 skill에 있는 스킬이라면 (순서에 없는 다른 스킬 제외)
                if (skill_trees[i][j] === skill[index]) {   // 배울 수 있는 스킬인지 확인
                    index += 1;                             // 다음으로 배워야 할 스킬의 인덱스로 이동
                } else {
                    isPossible = false;                     // 불가능한 스킬트리
                    break;
                }
            }
        }
        if (isPossible) {           // i번째의 스킬트리가 가능한 스킬이면 count에 1을 더해준다.
            count += 1;
        }
    }

    return count;
}

solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]);