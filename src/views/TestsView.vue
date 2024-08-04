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

export default {
    components: {
        TestList,
        TestItem,
        Conversation
    },
    data() {
        return {
            tests: [],
            messages: [],
            test: {},
        }
    },
    created() {
        TestService.getTests(this.$route.params.id, this.$store.state.token).then(response => {
            this.tests = response.data;
            let resultPromises = this.tests.map(test => {
                return TestService.getResults(test.id, this.$route.params.id, this.$store.state.token).then(response => {
                    test.results = response.data;
                }).catch(error => {
                    console.log(error);
                });
            });

            Promise.all(resultPromises).then(() => {
                this.test = this.tests.find(test => test.id == this.$route.params.testId);
            });

        }).catch(error => {
            console.log(error);
        });
    },

}
</script>            


<style lang="scss" scoped>
.test-view {
    display: flex;
    nav {
        height: calc(100vh - var(--header-total-height));
        box-shadow: 0px 0px 10px 0px #094567;
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
            box-shadow: 0px 5px 10px -5px #094567;

        }

        .conversation {
            width: 60vw;
            min-height: 30em;
            border-radius: 0%;
            box-shadow: 0px 5px 10px -5px #094567;

        }
    }
}
</style>