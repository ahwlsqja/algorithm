function solution(want, number, discount) {
    let product = {};
    let result = 0;
    let len = discount.length;

    // 원하는 제품과 수량을 객체로 만듭니다.
    for (let i = 0; i < want.length; i++) {
        product[want[i]] = number[i];
    }

    // 할인 목록을 10일씩 슬라이딩 윈도우로 확인합니다.
    for (let j = 0; j <= len - 10; j++) {
        let tempProduct = { ...product }; // 원래 제품 복사
        let arr = discount.slice(j, j + 10);

        // 할인 제품을 확인합니다.
        for (let k = 0; k < arr.length; k++) {
            if (tempProduct[arr[k]] !== undefined) {
                tempProduct[arr[k]] -= 1; // 해당 품목의 수량 감소
            }
        }

        // 모든 제품의 수량이 0 이하인지 확인합니다.
        if (Object.values(tempProduct).every(value => value <= 0)) {
            result += 1; // 조건을 만족하면 결과를 증가
        }
    }

    return result;
}
