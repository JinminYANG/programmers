// lv.2 - 스킬트리 (실패)

function solution(skill, skill_trees) {
    let answer = 0;
    let treeIndex = 0;

    for (let i = 0; i < skill_trees.length; i += 1) {
        let currChr;
        for (let j = 0; j < skill.length; j += 1) {
            currChr = skill.charAt(j);
            findChrToSkillTrees(currChr, skill_trees[i]);
        }

    }

    return answer;
}

let prevIndex;
let currIndex;

function findChrToSkillTrees(chr, string) {

    //console.log(chr, string);
    if (string === undefined) {
        return -1;
    }

    for (let index = 0; index < string.length; index += 1) {
        let checkChr = string.charAt(index);

        if (chr === checkChr) {
            if (prevIndex) {
                currIndex = index;
                if (prevIndex > currIndex) {
                    //console.log(-1);
                    prevIndex = null;
                    currIndex = null;
                    return -1;
                } else if (currIndex > prevIndex) {
                    prevIndex = currIndex;
                    //console.log(prevIndex);
                }
            } else {
                prevIndex = index;
                break;
            }
        }

    }
}

solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]);