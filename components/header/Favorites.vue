<template>
    <div class="favorites">
        <div class="favorites_button" @click="openFavorites = !openFavorites">
            <Bookmark />
            <div class="favorites_counter" ref="counter" v-show="counter != 0">
                <p>{{ counter }}</p>
            </div>
        </div>
        <div class="favorites_dropdown" v-if="counter != 0 && openFavorites">
            <ul>
                <li v-for="item in favorites" :key="item.id" @click="toItem(item)">
                    <img :src="item.headerImage.url" :alt="item.title">
                    <p>{{ item.title }}</p>
                    <div class="remove_favorite" @click.stop="removeElement">
                        <Cross />
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

import Bookmark from '@/components/UI/pictos/Bookmark.vue'
import Cross from '@/components/UI/pictos/Cross.vue';

export default {
    components: {
        Bookmark,
        Cross
    },
    data() {
        return {
            counter: 0,
            openFavorites: false
        }
    },
    computed: mapState(['favorites']),
    watch: {
        "$store.state.favorites" (newValue, oldValue) {
            this.counter = newValue.length;
            this.tagAnimation()
        },
    },
    methods: {
        tagAnimation() {
            this.$refs.counter.className += " added";
            setTimeout(() => {
                this.$refs.counter.className = "favorites_counter";
            }, 1000);
        },
        toItem(item) {
            this.$store.dispatch('toggleModal', item);
            this.openFavorites = false;
        },
        removeElement(item) {
            this.$store.dispatch('removeFavorite', item);
        }
    },
    mounted() {
        this.$store.dispatch('getFavorites');
    },
}
</script>

<style lang="scss" scoped>
.favorites {
    position: relative;
    &_button {
        height: 3rem;
        width: 3rem;
        cursor: pointer;
    }
    svg {
        height: 3rem;
        width: auto;
        fill: $primary;
    }
    &_counter {
        position: absolute;
        background-color: red;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 16px;
        width: 16px;
        top: -8px;
        right: -6px;
        p {
            color: #fff;
            font-weight: 800;
            font-size: 9px;
            line-height: 8px;
        }
        &.added {
            animation: pulse 1s ease-in-out;
        }
        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            30% {
                transform: scale(2);
            }
            100% {
                transform: scale(1);
            }
        }
    }
    &_dropdown {
        background-color: #40474f;
        width: 300px;
        padding: 1rem;
        border-radius: 6px;
        position: absolute;
        right: 0;
        top: calc(100% + 5px);
        box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.2);
        ul {
            display: flex;
            gap: 1rem;
            flex-direction: column;
            li {
                display: flex;
                gap: 1rem;
                align-items: center;
                cursor: pointer;
                border-radius: 6px;
                position: relative;
                img {
                    height: 50px;
                    width: 50px;
                    min-width: 50px;
                    object-fit: cover;
                    border-radius: 6px;
                    overflow: hidden;
                }
                p {
                    font-size: 1.4rem;
                    width: 100%;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                &:hover {
                    background-color: $primary600;
                }
                .remove_favorite {
                    background-color: red;
                    min-height: 16px;
                    min-width: 16px;
                    border-radius: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    top: -5px;
                    left: -5px;
                    z-index: 1;
                    cursor: pointer;
                    svg {
                        width: 8px;
                        height: 8px;
                        path {
                            fill: #fff;
                        }
                    }
                }
            }
        }
    }
}
</style>