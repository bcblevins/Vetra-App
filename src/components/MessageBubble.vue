<template>
    <div :class="{'from': isFrom(), 'to': !isFrom(), 'message-bubble': true }">
        <span>
            {{ message.body }}
        </span>
        <span class="timestamp"> {{ formatDate(message.time) }} </span>
    </div>
</template>

<script>
export default {
    props: ['message'],
    data() {
        return {

        }
    },
    methods: {
        formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleString('en-US', {
                month: '2-digit',
                day: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                hour12: true
            });
        },
        isFrom() {
            return this.message.fromUsername === this.$store.state.user.username;
        }
    },
}
</script>

<style scoped>
.message-bubble {
    --bubble-color: #D5DFE2;
    display: inline-block;
    font-family: 'Trebuchet MS', sans-serif;
    min-width: 4em;
    width: auto;
    max-width: 80%;
    min-height: 2em;
    background-color: var(--bubble-color);
    color: #000;
    border-radius: 2em;
    padding: .7em;
    padding-left: 1.2em;
    box-shadow: 1px 1px 2px 1px rgb(162, 163, 163);
    position: relative;
    margin-block: 1em;

    .timestamp {
        font-size: .7em;
        position: absolute;
        left: 30px;
        bottom: -20px;
        color: #000;
    }
}

.message-bubble.from {
    background-color: #BDECFC;
    margin-left: auto;
    margin-right: 0px;

    .timestamp {

        bottom: -20px;
        left: auto;
        right: 30px;
    }
}
</style>