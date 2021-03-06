export const state = () => ({
    cart: []
});
export const getters = {
    cartCount: (state) => {
        if (!state.cart.length)
            return 0
        return state.cart.reduce((ac, next) => ac + next.quantity, 0)
    },
    cartTotal: (state) => {
        if (!state.cart.length)
            return 0
        return state.cart.reduce((ac, next) => ac + next.quantity * next.price, 0)
    }
}
export const mutations = {
    updateCartUI: (state, payload) => {
        state.cartUIStatus = payload
    },
    clearCart: (state) => {
        state.cart = [];
        // state.cartUIStatus = 'idle';
    },
    addToCart: (state, payload) => {
        const itemfound = state.cart.find(el => el.id === payload.id)
        itemfound
            ? (itemfound.quantity += payload.quantity)
            : state.cart.push(payload)
    }
}
