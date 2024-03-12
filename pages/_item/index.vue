<template>
    <div id="item">
        <Button @click.native="$router.go(-1)">Back</Button>
        <div class="item_content">
            <img class="item_content_image" :src="item.headerImage.url" :alt="item.title">
            <div class="item_content_infos">
                <h2>{{item.title}}</h2>
                <p>{{ item.longTitle }}</p>
                <strong>Category</strong>
                <ul>
                    <li>
                        <Button>Tag 1</Button>
                    </li>
                    <li>
                        <Button>Tag 2</Button>
                    </li>
                    <li>
                        <Button>Tag 3</Button>
                    </li>
                    <li>
                        <Button>Tag 4</Button>
                    </li>
                </ul>
            </div>
            <Button @click.native="toFavorites" v-if="isFavorites">Remove from favorites</Button>
            <Button @click.native="toFavorites" v-else>Add to favorites</Button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isFavorites: false
        }
    },
    computed: {
        item() {
            return this.$store.state.item
        }
    },
    methods: {
        toFavorites() {
            if (this.isFavorites) {
                this.$store.dispatch('removeFavorite', this.item);
            } else {
                this.$store.dispatch('toFavorites', this.item);
            }
            this.isFavorites = !this.isFavorites;
        }
    },
    mounted() {
        this.$store.state.favorites.forEach(e => {
            if (e.id == this.item.id) {
                this.isFavorites = true
            };
        });
    }
}
</script>

<style lang="scss" scoped>
#item {
    .item_content {
        margin-top: 4rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        grid-template-areas: "image infos" "image button";
        @media(max-width: 767px) {
            grid-template-areas: "image image" "infos infos";
        }
        &_image {
            grid-area: image;
            width: 100%;
            height: auto;
            min-height: 40rem;
            object-fit: cover;
            border-radius: 6px;
        }
        &_infos {
            grid-area: infos;
            h2 {
                font-size: 3rem;
                font-weight: 700;
                text-transform: uppercase;
                margin-bottom: 2rem;
            }
            p {
                font-size: 1.4rem;
                line-height: 1.3;
                margin-bottom: 2rem;
            }
            strong {
                font-size: 1.4rem;
                font-weight: 700;
            }
            ul {
                margin: 1rem 0;
                display: flex;
                gap: 1rem;
            }
        }
        >.custom_button {
            grid-area: button;
            margin-top: auto;
            @media(max-width: 1024px) {
                position: absolute;
                bottom: 3rem;
                left: 3rem;
                width: calc(100% - 6rem);
            }
        }
    }
}
</style>