<template>
    <header id="header">
        <div class="header_container">
            <h1 @click="toHome">rijksmuseum</h1>
            <nav class="nav">
                <ul class="navbar">
                    <Favorites />
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
import Favorites from '@/components/header/Favorites.vue'

export default {
    components: {
        Favorites
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
    background-color: #40474f;
    .header_container {
        background-color: #40474f;
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
        h1 {
            text-transform: uppercase;
            color: #fff;
            font-size: 3rem;
            font-weight: 900;
        }
        .nav {
            .navbar {
                padding: 0;
                display: flex;
            }
        }
    }
}
</style>