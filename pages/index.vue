<template>
    <div id="home">
        <Search />
        <Grid />
    </div>
</template>

<script>
import Grid from '~/components/grid/Grid.vue';
import Search from '~/components/search/Search.vue';

export default {
    name: 'IndexPage',
    components: {
        Grid,
        Search
    }
}
</script>
