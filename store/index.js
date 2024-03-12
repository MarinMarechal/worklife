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
            item: null,
            items: null,
            favorites: []
        },
        getters: {},
        mutations: {
            toggleModal(state, payload) {
                state.item = payload;
                state.isModal = !state.isModal;
            },
            initItems(state, payload) {
                state.items = payload;
            },
            addMore(state, payload) {
                state.items = [...state.items, ...payload];
            },
            searchItems(state, payload) {
                state.items = payload;
            },
            toFavorites(state, payload) {
                state.favorites.push(payload);
            },
            removeFavorite(state, payload) {
                state.favorites.splice(state.favorites.findIndex(function(i){
                    return i.id === payload.id;
                }), 1);
            },
            getFavorites(state, payload) {
                state.favorites = payload;
            },
        },
        actions: {
            async nuxtServerInit ({ commit }, { req }) {
                let res = await axios.get(`https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}&ps=20&p=${pageCounter}&culture=en`);
                commit('initItems', res.data.artObjects.splice(0, 12));
            },
            async addMore(context) {
                pageCounter++;
                let res = await axios.get(`https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}&ps=20&p=${pageCounter}&culture=en`);
                context.commit('addMore', res.data.artObjects.splice(0, 12));
            },
            async searchItems(context, payload) {
                console.log(payload);
                pageCounter = 1;
                let res = await axios.get(`https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}&q=${payload}&culture=en`);
                context.commit('searchItems', res.data.artObjects);
            },
            toggleModal(context, payload = null) {
                context.commit('toggleModal', payload);
            },
            toFavorites(context, payload) {
                context.commit('toFavorites', payload);
                let favorites = JSON.stringify(context.state.favorites);
                localStorage.setItem("favorites", favorites);
            },
            removeFavorite(context, payload) {
                context.commit('removeFavorite', payload);
                let favorites = JSON.stringify(context.state.favorites);
                localStorage.setItem("favorites", favorites);
            },
            getFavorites(context) {
                let favorites = JSON.parse(localStorage.getItem("favorites"));
                if (favorites) {
                    context.commit('getFavorites', favorites);
                }
            },
        },
    }))
}

export default initStore
