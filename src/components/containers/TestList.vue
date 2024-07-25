<template>
    <div :class="{ 'test-container': true, 'nav': nav }">
        <TestCard v-for="test in tests" :key="test.id" :test="test" :class="{ 'nav': nav }"/>
    </div>
</template>

<script>
import TestCard from '../cards/TestCard.vue';

export default {

    props: {
        tests: Array,
        nav: {
            type: Boolean,
            default: false
        }
    },

    components: {
        TestCard
    },

    methods: {
        goToTest(test) {
            this.$router.push({ name: 'tests', params: { petId: test.patientID, testId: test.id } });
        }
    }
}
</script>

<style lang="scss" scoped>
.test-container {
    border: 1px solid #094567;
    border-radius: 2em;
    overflow: hidden;
}

.test-container.nav {
    width: 15vw;
    height: 100%;
    border-radius: 0px;
}
</style>