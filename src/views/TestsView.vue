<template>
    <div>
        <nav>
            <TestList :tests="tests" nav="true"/>
        </nav>
    </div>
</template>

<script>
import TestList from '@/components/containers/TestList.vue';
import TestService from '@/services/TestService';

    export default {
        components: {
            TestList,
        },
        data() {
            return {
                tests: []
            }
        },
        created () {
            this.tests = TestService.getTests(this.$route.params.petId);
        },
    }
</script>

<style lang="scss" scoped>
    nav {
        height: 100%;
    }
</style>