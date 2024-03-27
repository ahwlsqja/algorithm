
// 1. report의 중복 값을 제거한다.
// 2. report_obj(신고 받은 횟수를 저장할 객체)를 만들어준다.
// 3. report_obj에 유저별 신고 누적 횟수를 저장한다.
// 4. mail_obj(신고 누적 횟수에 따른 메일 보내기 위한 객체)를 만들어준다.
// 5. report를 순회하면서 k이상인 것들만 신고한 id를 mail_obj에 저장한다.
// 6. id_list를 순회하면서 값이 있으면 push 없으면 0을 넣고 push 한다.


function solution(id_list, report, k) {
    let answer = [];

    // 1)
    report = [...new Set(report)];

    // 2)
    let report_obj = {}; // 신고 받은 횟수 저장할 객체 초기화
    id_list.forEach((e) => {
        report_obj[e] = 0;
    });

    // 3)
    report.forEach((e) => {
        let [id, opponent] = e.split(' ');
        report_obj[opponent] += 1; // 유저별 신고 받은 횟수 계산
    });


    // 4)
    let mail_obj = {};
    report.forEach((e) => {
        let [id, opponent] = e.split(' ');

        // 5)
        if (report_obj[opponent] >= k) { // 신고 받은 횟수가 k 이상일 때 메일 받기
            if (!mail_obj[id]) {
                mail_obj[id] = 0;
            }
            mail_obj[id] += 1;
        }
    }); 


    // 6)
    id_list.forEach((userID) => {
        answer.push(mail_obj[userID] || 0); // 결과 배열에 저장
    });

    return answer;
}