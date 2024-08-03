<template>
    <div class="test-view">
        <nav>
            <TestList :tests="tests" :shrink="true" />
        </nav>
        <main>
            <TestItem :test="test" class="test-item"/>
            <Conversation :test="true" class="conversation"/>
        </main>
    </div>
</template>

<script>
import TestList from '@/components/containers/TestList.vue';
import TestService from '@/services/TestService';
import TestItem from '@/components/items/TestItem.vue';
import Conversation from '@/components/containers/Conversation.vue';
import MessageService from '@/services/MessageService';

export default {
    components: {
        TestList,
        TestItem,
        Conversation
    },
    data() {
        return {
            tests: [],
            messages: []
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
        height: calc(100% - 2px);
    }
    main {
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        height: calc(100vh - var(--header-total-height) - 40px);
        width: 100%;
        overflow: scroll;

        .test-item {
            width: 50vw;
            margin-bottom: 20px;
        }

        .conversation {
            width: 60vw;
            min-height: 30em;
            border-radius: 0%;
        }
    }
}
</style>