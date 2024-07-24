<template>
    <div class="classList">
        <TestCard v-for="test in tests" :key="test.id" :test="test" />
    </div>
</template>

<script>
import TestCard from '../cards/TestCard.vue';

    export default {
        props: ['tests'],
        components: {
            TestCard
        }
    }
</script>

<style lang="scss" scoped>
.classList {
    border: 1px solid #094567;
    border-radius: 2em;
    overflow: hidden;
}
</style>