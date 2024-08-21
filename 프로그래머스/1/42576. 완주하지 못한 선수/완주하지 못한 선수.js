function solution(participant, completion) {
    const participantMap = {};

    // 참가자 목록에서 각 참가자의 수를 세기
    for (const part of participant) {
        participantMap[part] = (participantMap[part] || 0) + 1;
    }

    // 완주자 목록에서 각 완주자의 수를 줄이기
    for (const comp of completion) {
        participantMap[comp]--;
    }

    // 완주하지 못한 참가자를 찾기
    for (const part of participant) {
        if (participantMap[part] > 0) {
            return part;
        }
    }
}
