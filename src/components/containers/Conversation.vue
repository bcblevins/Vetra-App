<template>
    <div class="conversation">
        <div class="messages">
            <MessageBubble v-for="message in sortedMessages" :key="message.id" :message="message" />
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
        }
    }
}
</script>

<style lang="scss" scoped>
.conversation {
    border: 1px solid #d3d3d3;
    border-radius: 2em;
    overflow: hidden;


    .messages {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 1em;
        background-color: #ffffff;
        overflow: hidden;
    }

    .send {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;
        background-color: #f1f1f1;

        .box {
            padding: 0.5em;
            border-radius: .5em;
            border: 1px solid #d3d3d3;
            flex-grow: 1;
        }

        input {
            margin-bottom: auto;
        };
    }
}
</style>