<template>
    <div class="conversation">
        <div class="messages" ref="messagesContainer" >
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
import { getMessagesByPatient, getMessagesByTest, sendMessage } from '@/services/supabase/messageServiceSP';
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
        medication: { // Don't think this is used. Remove?
            type: Boolean
        },
        broken: { // TODO: Remove me when message service fixed
            type: Boolean
        }
    },
    components: {
        MessageBubble
    },
    computed: {
        sortedMessages() {
            return this.messages.slice().sort((a, b) => {
                return new Date(a.time_stamp) - new Date(b.time_stamp);
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
                    patient_id: this.$route.params.id,
                    time_stamp: new Date(),
                    from_user: this.$store.state.user.id,
                    // TODO: Hardcoded! Bad!
                    to_user: "762c2374-c178-458b-b155-2918b9c5aad4",
                    test_id: null,
                    prescription_id: null
                }
            if (this.test) {
                this.message.test_id = this.$route.params.testId;
            }
            sendMessage(this.message).then(response => {
                    this.updateMessages();
                    this.messageBody = '';
                    this.scrollToBottom();
                }).catch(error => {
                    console.log(error);
                });
        },
        updateMessages() {
            if (this.broken) { // TODO: Remove me when message service fixed
                console.log("Not attempting to retrieve messages")
            } else if (this.patient) {
                getMessagesByPatient(this.$route.params.id).then(data => {
                    this.messages = data;
                    this.scrollToBottom();
                });
            } else if (this.test) {
                getMessagesByTest(this.$route.params.testId).then(data => {
                    this.messages = data;
                    this.scrollToBottom();
                });
            }
        },
        scrollToBottom() {
            const container = this.$refs.messagesContainer;
            container.scrollTop = container.clientHeight;

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

    border-radius: .5em;

    display: flex;
    flex-direction: column;
    background-size: 200% 200%;

    min-width: 20vw;
    min-height: 12em;

    .messages {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 1em;
        overflow: auto;
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
        border-radius: .5em;
        margin: 5px;


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
            background-color: var(--dark-blue);
            color: white;
            border-radius: 5px;
            padding: 5px;
            border: none;
        }

        input:hover {
            cursor: pointer;
            filter: brightness(2.0);
        }

        
    }
}
</style>