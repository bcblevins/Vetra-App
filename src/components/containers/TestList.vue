<template>
    <div :class="{ 'test-container': true, 'shrink': shrink, 'nav': true }">
        <TestCard v-for="test in tests" :key="test.id" :test="test" :class="{ 'shrink': shrink }"/>
    </div>
</template>

<script>
import TestCard from '../cards/TestCard.vue';

export default {

    props: {
        tests: Array,
        shrink: {
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
    border: 3px solid #094567;
    border-block: 1px solid;
    border-radius: .5em;
    overflow: scroll;
    background-color: #F1F7FF;
}

.test-container.shrink {
    width: 10vw;
    height: 100%;
    min-width: 15vw;
}

.test-container.nav {
    border-radius: 0px;
    width: 12vw;
}
</style>