<template>
    <div class="error_page">
        <div>
            <h1>{{ error.statusCode }}</h1>
            <p>Oops ! Something went wrong</p>
            <Button :color="'secondary'" @click.native="toHome">Retour à l'accueil
            </Button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["error"],
    layout: "error",
    methods: {
        toHome() {
            this.$router.push('/')
        }
    },
};
</script>

<style lang="scss" scoped>
.error_page {
    height: calc(100vh - 80px);
    margin-bottom: -10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    >div {
        text-align: center;
        display: flex !important;
        flex-direction: column;
        margin-top: -5rem;
        h1 {
            font-size: 6rem;
            font-weight: 800;
            color: $secondary;
        }
        p {
            font-size: 2rem;
            font-weight: 600;
            color: #808080;
        }
        display: block;
        .customButton {
            margin-top: 2rem;
            font-size: 2rem;
        }
        img {
            margin-top: 2rem;
            height: 50px;
            width: auto;
            object-fit: contain;
        }
    }
}
</style>
