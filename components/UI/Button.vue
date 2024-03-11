<template>
    <button :class="`custom_button ${color}`">
        <slot/>
    </button>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: 'primary'
        },
    }
}
</script>

<style lang="scss" scoped>
.custom_button {
    color: #fff;
    padding: 1rem 2rem;
    transition: 300ms;
    font-size: 1.5rem;
    font-weight: 700;
    border-radius: 50px;
    cursor: pointer;
    height: fit-content;
    @media (min-width: 768px) {
        &:hover {
            background-color: transparent;
            transition: 300ms;
        }
    }
    &.primary {
        background-color: $primary;
        border: none;
        color: $secondary;
        @media (min-width: 768px) {
            &:hover {
                background-color: $primary600;
                color: $secondary;
            }
        }
    }
    &.secondary {
        background-color: $secondary;
        border: none;
        color: #fff;
        @media (min-width: 768px) {
            &:hover {
                background-color: $secondary800;
                color: #fff;
            }
        }
    }
    &.white {
        background-color: #fff;
        border: 1px solid #fff;
        color: $primary;
        @media (min-width: 768px) {
            &:hover {
                background-color: transparent;
                color: #fff;
            }
        }
    }
    &.black {
        background-color: #000;
        border: 1px solid #000;
        color: #fff;
        @media (min-width: 768px) {
            &:hover {
                background-color: transparent;
                color: #000;
            }
        }
    }
}
</style>