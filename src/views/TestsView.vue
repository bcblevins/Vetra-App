<template>
    <div class="test-view">
        <nav>
            <TestList :tests="tests" :nav="true" />
        </nav>
        <main>
            <TestItem :test="test" class="test-item"/>
            <Conversation />
        </main>
    </div>
</template>

<script>
import TestList from '@/components/containers/TestList.vue';
import TestService from '@/services/TestService';
import TestItem from '@/components/items/TestItem.vue';
import Conversation from '@/components/containers/Conversation.vue';

export default {
    components: {
        TestList,
        TestItem
    },
    data() {
        return {
            tests: [],
            test: {}
        }
    },
    created() {
        this.tests = TestService.getTests(this.$route.params.petId);
        this.test = TestService.getTest(this.$route.params.testId);
        console.log(this.test);
    },
}
</script>

<style lang="scss" scoped>
.test-view {
    display: flex;
    nav {
        height: 100%;
    }
    main {
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        width: 100%;
        .test-item {
            width: 50vw;
        }
    }
}
</style>