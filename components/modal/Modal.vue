<template>
    <div id="modal">
        <div class="modal_background"></div>
        <div class="modal_container">
            <div class="modal_content">
                <div class="modal_content_top">
                    <img src="@/assets/images/image.png" alt="worklife">
                    <div class="modal_content_top_right">
                        <h2>title</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid distinctio quia cumque blanditiis adipisci repellat, dolore suscipit excepturi ullam quam a quae, facere, sequi autem facilis provident nulla saepe labore.</p>
                    </div>
                </div>
                <div class="modal_content_bottom">
                    <Button>Add to favorites</Button>
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
    methods: {
        exitModal() {
            this.$store.dispatch('toggleModal');
        },
        toItem() {
            this.$router.push('/item');
            this.exitModal();
        }
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
        background-color: #fff;
        padding: 6rem;
        max-width: 70rem;
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