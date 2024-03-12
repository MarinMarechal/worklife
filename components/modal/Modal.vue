<template>
    <div id="modal">
        <div class="modal_background"></div>
        <div class="modal_container">
            <div class="modal_content">
                <div class="modal_content_top">
                    <img :src="item.headerImage.url" :alt="item.title">
                    <div class="modal_content_top_right">
                        <h2>{{ item.title }}</h2>
                        <p>{{ item.longTitle }}</p>
                    </div>
                </div>
                <div class="modal_content_bottom">
                    <Button @click.native="toFavorites" v-if="isFavorites">Remove from favorites</Button>
                    <Button @click.native="toFavorites" v-else>Add to favorites</Button>
                    <Button :color="'secondary'" @click.native="toItem">View details</Button>
                </div>
                <div class="modal_content_exit" @click="exitModal">
                    <Cross />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Cross from '@/components/UI/pictos/Cross.vue';

export default {
    components: {
        Cross
    },
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
        exitModal() {
            this.$store.dispatch('toggleModal', this.item);
        },
        toItem() {
            this.$router.push({path:'/item', query: {title: this.item.title}});
            this.exitModal();
        },
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
    },
}
</script>

<style lang="scss" scoped>
#modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    @media(max-width: 1024px) {
        padding: 3rem;
        align-items: flex-end;
    }
    .modal_background {
        position: absolute;
        background-color: #000;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.5;
    }
    .modal_content {
        position: relative;
        z-index: 1;
        background-color: #40474f;
        padding: 6rem;
        max-width: 70rem;
        border-radius: 6px;
        overflow: hidden;
        @media(max-width: 1024px) {
            width: 100%;
            max-width: none;
        }
        &_top {
            display: flex;
            gap: 2rem;
            @media(max-width: 767px) {
                flex-direction: column;
            }
            img {
                max-width: 50%;
                min-height: 30rem;
                object-fit: cover;
                border-radius: 6px;
                overflow: hidden;
            }
            h2 {
                font-size: 2rem;
                font-weight: 700;
                text-transform: uppercase;
                margin-bottom: 2rem;
            }
            p {
                font-size: 1.4rem;
                font-weight: 400;
                line-height: 1.3;
            }
        }
        &_bottom {
            margin-top: 3rem;
            display: flex;
            gap: 2rem;
            @media(max-width: 1024px) {
                flex-direction: column;
            }
            .custom_button {
                width: 50%;
                @media(max-width: 1024px) {
                    width: 100%;
                }
            }
        }
        &_exit {
            height: 20px;
            width: 20px;
            position: absolute;
            top: 2rem;
            right: 2rem;
            cursor: pointer;
            svg {
                height: 100%;
                width: auto;
            }
        }
    }
}
</style>