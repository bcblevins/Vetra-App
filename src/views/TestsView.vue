<template>
    <div :class="{ 'loading': loading, 'test-view': true }" v-cloak>
        <nav>
            <TestList :tests="tests" :shrink="true" :active-test="test"/>
        </nav>
        <main :key="keyToggle">
            <TestItem :test="test" class="test-item" />
            <Conversation :test="true" class="conversation" />
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
        Conversation,
    },
    data() {
        return {
            tests: [],
            messages: [],
            test: {},
            loading: true,
            keyToggle: 0
        }
    },
    methods: {
        getTests() {
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
                    this.loading = false;
                });

            }).catch(error => {
                console.log(error);
            });
        }
    },
    created() {
        this.getTests();
    },
    watch: {
        $route(to, from) {
            if (to.params.id === from.params.id) {
                this.test = this.tests.find(test => test.id == to.params.testId);
                this.keyToggle++;
            } else {
                TestService.getTests(to.params.id, this.$store.state.token).then(response => {
                    console.log(response.data)
                    this.tests = response.data;
                    console.log(to.params.id, this.tests[0].id)
                    this.$router.push({ name: 'tests', params: { id: to.params.id, testId: this.tests[0].id } })
                }).catch(error => {
                    console.log(error);
                });
            }
        }
    }

}
</script>            


<style lang="scss" scoped>
.loading {
    display: none;
}

.test-view {
    display: flex;

    nav {
        height: calc(100vh - var(--header-total-height));
        box-shadow: 0px 0px 10px 0px #094567;
        overflow-y: scroll;
        overflow-x: hidden;
        animation: slide-in-right .4s forwards;
        border-right: 4px solid #094567;

        @keyframes slide-in-right {
            from {
                transform: translateX(-100%);
            }

            to {
                transform: translateX(0%);
            }
        }
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
        animation: slide-in-up ease-in-out .2s forwards;

        @keyframes slide-in-up {

            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }

        }

        .test-item {
            width: 50vw;
            margin-bottom: 20px;
            box-shadow: 0px 0px 10px -5px #094567;

        }

        .conversation {
            width: 60vw;
            min-height: 30em;
            border-radius: 0%;

        }
    }
}

@media screen and (max-width: 600px) {
    .test-view {
        nav {}

        main {

            .test-item {
                width: 100%;
            }

            .conversation {
                width: 90vw;
            }
        }
    }

}</style>