export const initialState = { // 초기 상태
    basket: [],
}
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_BASKET':
            console.log(action);
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            )
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1) // index 부터 1개 제거
            } else {
                console.warn(
                    ' (id: ' +
                    action.id +
                    ')이 장바구니에 존재하지 않습니다 '
                )
            }
            return {
                ...state,
                basket: newBasket
            }
        default:
            return state;
    }
}
export default reducer;