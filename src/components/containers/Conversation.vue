<template>
    <div class="conversation">
        <div class="messages" ref="messagesContainer">
            <MessageBubble v-for="message in sortedMessages" :key="message.id" :message="message" />
            <span v-show="noMessages">Send a message to start a conversation...</span>
        </div>
        <form class="send">
            <textarea class="box" placeholder="Type a message..." v-model="messageBody"></textarea>
            <input type="submit" value="send" @click.prevent="sendMessage" />
        </form>
    </div>
</template>

<script>
import MessageBubble from '../items/MessageBubble.vue';
import MessageService from '@/services/MessageService';

export default {
    data() {
        return {
            message: {},
            messageBody: '',
            messages: []
        };
    },
    props: {

        patient: {
            type: Boolean
        },
        test: {
            type: Boolean
        },
        medication: {
            type: Boolean
        }
    },
    components: {
        MessageBubble
    },
    computed: {
        sortedMessages() {
            return this.messages.slice().sort((a, b) => {
                return new Date(a.timestamp) - new Date(b.timestamp);
            });
        },
        noMessages() {
            return this.messages.length === 0;
        }
    },
    methods: {
        sendMessage() {
            this.message = {
                    body: this.messageBody,
                    patientId: this.$route.params.id,
                    timestamp: new Date(),
                    fromUsername: this.$store.state.user.username,
                    // TODO: Hardcoded! Bad!
                    toUsername: "cakelly4",
                    testId: null,
                    prescriptionId: null
                }
            if (this.test) {
                this.message.testId = this.$route.params.testId;
            }
            MessageService.sendMessage(this.message, this.$store.state.token).then(response => {
                    this.updateMessages();
                    this.messageBody = '';
                    this.scrollToBottom();
                }).catch(error => {
                    console.log(error);
                });
        },
        updateMessages() {
            if (this.patient) {
                MessageService.getMessagesByPatient(this.$route.params.id, this.$store.state.token).then(response => {
                    this.messages = response.data;
                    this.scrollToBottom();
                });
            } else if (this.test) {
                MessageService.getMessagesByTest(this.$route.params.id, this.$route.params.testId, this.$store.state.token).then(response => {
                    this.messages = response.data;
                    this.scrollToBottom();
                });
            }
        },
        scrollToBottom() {
            const container = this.$refs.messagesContainer;
            container.scrollTop = container.clientHeight;
            console.log("scrollTop: ", container.scrollTop);
            console.log("clientHeight: ", container.clientHeight);
            console.log(container);
        }
    },
    created() {
        this.updateMessages();
    },
    updated() {
        this.scrollToBottom();
    },
    watch: {
        $route(to, from) {
            this.updateMessages();
        }
    }
}



</script>

<style lang="scss" scoped>
.conversation {
    border: 3px solid var(--dark-blue);
    border-block: 1px solid;

    border-radius: .5em;

    display: flex;
    flex-direction: column;
    background-image: var(--gradient-9);
    background-size: 200% 200%;

    min-width: 20vw;
    min-height: 12em;

    .messages {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 1em;
        overflow: scroll;
        flex-grow: 1;
        border-radius: .5em;
        margin: 5px;
        background-color: white;

        span {
            margin: auto;
        }
    }

    .send {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;
        background-color: #f1f1f1;
        height: 6em;

        .box {
            padding: 0.5em;
            border-radius: .5em;
            border: 1px solid #d3d3d3;
            flex-grow: 1;
            height: 100%;
        }

        input {
            margin-left: 10px;
            margin-bottom: auto;
        }

        ;
    }
}
</style>