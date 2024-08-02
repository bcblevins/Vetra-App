<template>
    <div class="conversation">
        <div class="messages">
            <MessageBubble v-for="message in sortedMessages" :key="message.id" :message="message" />
            <span v-show="noMessages">Send a message to start a conversation...</span>
        </div>
        <form class="send">
            <textarea class="box" placeholder="Type a message..."></textarea>
            <input type="submit" value="send" @click.prevent="">
        </form>
    </div>
</template>

<script>
import MessageBubble from '../items/MessageBubble.vue';
export default {
    props: ['messages'],
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
    }
}
</script>

<style lang="scss" scoped>
.conversation {
    border: 3px solid var(--dark-blue);
    border-block: 1px solid;

    border-radius: .5em;

    overflow: scroll;
    display: flex;
    flex-direction: column;
    background-image: var(--gradient-9);
    background-size: 200% 200%;

    min-width: 20vw;

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
        };
    }
}
</style>