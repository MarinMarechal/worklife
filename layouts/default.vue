<template>
    <div id="layout-default">
        <Header/>
        <div class="layout-content">
            <nuxt />
        </div>
        <Modal v-if="isModalOpen" />
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
    data() {
        return {
            isModalOpen: false
        }
    },
    computed: mapState(['isModal']),
    watch: {
        "$store.state.isModal" (newValue, oldValue) {
            this.isModalOpen = newValue;
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
        padding-bottom: 8rem;
    }
}
</style>