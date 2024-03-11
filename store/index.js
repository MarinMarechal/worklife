import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let store;

let apiKey = 'pRQ39M8q';
let pageCounter = 1

const initStore = () => {
    return store || (store = new Vuex.Store({
        state: {
            isModal: false,
            modalItem: null,
            items: null,
        },
        getters: {},
        mutations: {
            toggleModal(state, payload) {
                state.modalItem = payload;
                state.isModal = !state.isModal;
            },
            initItems(state, payload) {
                state.items = payload;
            },
            addMore(state, payload) {
                console.log(payload);
                state.items = [...state.items, ...payload];
            },
        },
        actions: {
            async nuxtServerInit ({ commit }, { req }) {
                let res = await axios.get(`https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}&ps=20&p=${pageCounter}`);
                commit('initItems', res.data.artObjects.splice(0, 12));
            },
            async addMore(context) {
                pageCounter++;
                let res = await axios.get(`https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}&ps=20&p=${pageCounter}`);
                context.commit('addMore', res.data.artObjects.splice(0, 12));
            },
            toggleModal(context, payload = null) {
                context.commit('toggleModal', payload);
            }
        },
    }))
}

export default initStore
