<template>
    <div id="grid">
        <div class="grid_container">
            <div class="grid_tile" v-for="item in items" :key="item.id" @click="toModal(item)">
                <img :src="item.headerImage.url" :alt="item.title">
                <div class="grid_tile_hover">
                    <h4>
                        {{ item.longTitle }}
                    </h4>
                </div>
            </div>
        </div>
        <Loader v-if="isLoading"/>
        <Button @click.native="loadMore">
            Load More
        </Button>
    </div>
</template>

<script>
import Loader from '../UI/loader/Loader.vue';

export default {
    components: {
        Loader
    },
    data() {
        return {
            items: null,
            isLoading: false
        }
    },
    methods: {
        toModal(item) {
            this.$store.dispatch('toggleModal', item);
        },
        async loadMore() {
            this.isLoading = true;
            await this.$store.dispatch('addMore');
            this.isLoading = false;
            this.items = this.$store.state.items;
        }
    },
    mounted() {
        this.items = this.$store.state.items;
    },
}
</script>

<style lang="scss" scoped>
#grid {
    display: flex;
    justify-content: center;
    flex-direction: column;
    .grid_container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 20px;
    }
    .grid_tile {
        background: $secondary;
        position: relative;
        cursor: pointer;
        border-radius: 8px;
        overflow: hidden;
        &::before {
            content: "";
            display: block;
            padding-top: 100%;
        }
        img {
            position: absolute;
            height: 100%;
            width: 100%;
            object-fit: cover;
            z-index: 1;
            top: 0;
            left: 0;
        }
        &_hover {
            background-color: $secondary;
            position: absolute;
            height: 70%;
            top: 30%;
            left: 0%;
            width: 100%;
            z-index: 2;
            padding: 2rem;
            display: flex;
            align-items: center;
            transform: translateY(100%);
            transition: 300ms;
            h4 {
                color: $primary;
                font-size: 1.8rem;
                opacity: 0;
                width: 100%;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
        &:hover {
            .grid_tile_hover {
                transform: translateY(0);
                transition: 300ms;
                h4 {
                    opacity: 1;
                    transition: 300ms;
                    transition-delay: 300ms;
                }
            }
        }
    }
    .custom_button {
        text-align: center;
        margin: auto;
        margin-top: 3rem;
    }
}
</style>