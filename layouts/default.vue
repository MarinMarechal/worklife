<template>
    <div id="layout-default">
        <Header/>
        <div class="layout-content">
            <nuxt />
        </div>
        <Modal v-if="isModal" />
    </div>
</template>

<script>
import {mapState} from 'vuex'

import Header from '@/components/header/Header'
import Modal from '@/components/modal/Modal'

export default {
    name: "default",
    components: {
        Header,
        Modal
    },
    computed: mapState(['isModal']),
    watch: {
        "$store.state.isModal" (newValue, oldValue) {
            this.isModal = newValue;
        },
    },
    mounted() {
        
    },
}
</script>

<style lang="scss" scoped>
#layout-default {
    .layout-content {
        width: 100%;
        max-width: 120rem;
        margin: auto;
        padding: 3rem;
    }
}
</style>