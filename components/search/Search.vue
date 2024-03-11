<template>
    <div id="search">
        <div class="search_container">
            <div class="search_input">
                <input type="text" v-model="inputCity" placeholder="Entrez une ville ou un code-postal" :disabled="isSelected">
            </div>
            <button class="desktop glass" ><Glass /></button>
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
            inputCity: '',
            isSelected: false,
        }
    },
    methods: {
       
    }
}
</script>
<style lang="scss" scoped>
#search {
    .search_container {
        background-color: #fff;
        border: 2px solid $secondary;
        border-radius: 50px;
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
                border-radius: 50px;
                position: relative;
                width: 100%;
                &:focus {
                    outline: none;
                }
            }
        }
        button {
            background-color: #f85b5b;
            width: 50px;
            height: 50px;
            min-width: 50px;
            border-radius: 100%;
            transition: 300ms;
            position: relative;
            top: 5px;
            right: 5px;
            border: none;
            
            &.glass {
                background-color: $secondary;
                svg {
                    height: 23px;
                    width: 23px;
                    fill: #fff;
                    stroke-width: 2px;
                    g {
                        stroke-width: 2px;
                        fill: #fff;
                    }
                }
                &::after,
                &::before {
                    content: none;
                }
                &:hover {
                    transform: none;
                }
            }
        }
    }
}
</style>