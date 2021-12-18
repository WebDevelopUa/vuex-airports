/**
 * The user module contains everything that you need for user information
 */

export default {
    namespaced: true,
    state: {
        firstName: 'Web',
        lastName: 'Dev',
    },
    getters: {
        fullName: (state) => `${state.firstName} ${state.lastName}`,
    },
}
