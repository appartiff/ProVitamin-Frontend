export const state = () => ({
  mobile: false
});
export const mutations = {
  changeMobileState(state, payload) {
    state.mobile = payload;
  }
};

