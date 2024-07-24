<template>
    <div class="conversation">
        <MessageBubble v-for="message in sortedMessages" :key="message.id" :message="message" />
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
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 1em;
        background-color: #ffffff;
        border-radius: 2em;
        border: 1px solid #d3d3d3;
        overflow: hidden;
    }
</style>