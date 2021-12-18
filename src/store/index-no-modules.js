import {
    createStore
} from 'vuex'

export default createStore({
    state: {
        firstName: 'Web',
        lastName: 'Dev',
        fav: [],
    },
    getters: {
        fullName: (state) => `${state.firstName} ${state.lastName}`,
    },
    mutations: {
        // 3) define the UPDATE_FAV mutation
        UPDATE_FAV(state, payload) {

            // 4) set the favorites array as a new array
            state.fav = payload;
        }
    },
    actions: {
        // To execute this action, you can call a dispatch event when the user clicks on a card.
        // You will do this with the v-on directive
        addToFav: (context, payload) => {
            // 0) LOGIC
            const fav = context.state.fav;
            console.log('actions ... fav1: ', fav);

            // 1) add the payload to your favorites array
            fav.push(payload);
            console.log('actions ... fav2: ', fav);

            // 2) call a mutation with the mutated array as the new data
            context.commit('UPDATE_FAV', fav);
        },
    },
    modules: {}
})
