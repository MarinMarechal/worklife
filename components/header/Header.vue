<template>
    <header id="header">
        <div class="header_container">
            <div class="logo" @click="toHome">
                <img src="@/assets/images/logo.png" alt="worklife">
            </div>
            <nav class="nav">
                <ul class="navbar">
                    <Bookmark />
                </ul>
            </nav>
        </div>
    </header>
</template>
<script>
import Bookmark from '@/components/UI/pictos/Bookmark.vue'

export default {
    components: {
        Bookmark
    },
    data() {
        return {
            nav: null,
            isLoaded: false,
            collapsed: false,
        }
    },
    methods: {
        toHome() {
            this.$router.push("/");
        }
    },
}
</script>
<style lang="scss" scoped>
#header {
    position: sticky;
    top: 0;
    z-index: 1000;
    background-color: #fff;
    .header_container {
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        height: 80px;
        width: 100%;
        z-index: 2;
        padding: 0 2rem;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 10%);
        @media (max-width: 767px) {
            justify-content: space-between;
        }
        @media (max-width: 575px) {
            height: 60px;
        }
        .logo {
            cursor: pointer;
            img {
                max-width: 150px;
                margin-right: 3rem;
                @media (max-width: 575px) {
                    max-width: 120px;
                }
            }
        }
        .nav {
            .navbar {
                padding: 0;
                display: flex;

                svg {
                    height: 3rem;
                    width: auto;
                    fill: $secondary;
                }
            }
        }
    }
}
</style>