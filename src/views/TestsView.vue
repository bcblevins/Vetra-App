<template>
    <div class="test-view">
        <nav>
            <TestList :tests="tests" :nav="true" />
        </nav>
        <main>
            <TestItem :test="test" class="test-item"/>
            <Conversation :messages="[]" class="conversation"/>
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
        TestItem,
        Conversation
    },
    data() {
        return {
            tests: [],
        }
    },
    created() {
        this.tests = TestService.getTests(this.$route.params.petId);
    },
    computed: {
        test() {
            return TestService.getTest(this.$route.params.testId);
        }
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
            margin-bottom: 20px;
        }

        .conversation {
            width: 60vw;
            min-height: 30vh;
            border-radius: 0%;
        }
    }
}
</style>