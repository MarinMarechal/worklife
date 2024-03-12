<template>
    <div id="search">
        <div class="search_container">
            <div class="search_input">
                <input type="text" v-model="inputItem" placeholder="Search" @keyup.enter="toSearch">
            </div>
            <button class="desktop" @click="toSearch"><Glass /></button>
        </div>
    </div>
</template>

<script>
import Glass from '@/components/UI/pictos/Magnifying-glass.vue'

export default {
    components: {
        Glass
    },
    data() {
        return {
            inputItem: '',
        }
    },
    methods: {
        toSearch() {
            this.$store.dispatch('searchItems', this.inputItem);
            this.$emit("search");
            this.inputItem = ''
        }
    }
}
</script>

<style lang="scss" scoped>
#search {
    max-width: 50rem;
    margin: auto;
    .search_container {
        background-color: #40474f;
        border: 2px solid $primary;
        border-radius: 6px;
        display: flex;
        box-shadow: 0 0px 30px rgb(0 22 84 / 15%);
        overflow: hidden;
        margin-bottom: 3rem;
        .search_input {
            position: relative;
            width: 100%;
            input {
                box-shadow: none;
                height: 60px;
                overflow: hidden;
                height: 60px;
                font-size: 1.6rem;
                padding: 1rem 2rem;
                border: none;
                border-radius: 6px;
                position: relative;
                width: 100%;
                background-color: #40474f;
                color: $primary;
                &:focus {
                    outline: none;
                }
                &::placeholder {
                    color: $primary;
                    opacity: 1;
                }
            }
        }
        button {
            background-color: $primary;
            width: 60px;
            height: 60px;
            min-width: 50px;
            // border-radius: 100%;
            transition: 300ms;
            position: relative;
            top: 0px;
            right: 0px;
            border: none;
            cursor: pointer;
            svg {
                height: 23px;
                width: 23px;
                fill: #000;
                stroke-width: 2px;
                g {
                    stroke-width: 2px;
                    fill: #000;
                }
            }
            &::after,
            &::before {
                content: none;
            }
            &:hover {
                background-color: $primary600;
            }
        }
    }
}
</style>