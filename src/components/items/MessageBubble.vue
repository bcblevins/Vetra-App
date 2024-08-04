<template>
    <div :class="{'from': isFrom(), 'to': !isFrom(), 'message-bubble': true }">
        <span class="username" v-show="!isFrom()"> {{ name }} </span>
        <span class="body">
            {{ message.body }}
        </span>
        <span class="timestamp"> {{ formatDate(message.timestamp) }} </span>
    </div>
</template>

<script>
import UserService from '@/services/UserService';
export default {
    props: ['message'],
    data() {
        return {
            name: ''
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
    created() {
        UserService.getName(this.message.fromUsername, this.$store.state.token).then(response => {
                this.name = response.data;
            })
    }
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
    background-color: var(--bubble-color);
    color: #000;
    border-radius: 1em;
    padding: .7em;
    padding-inline: 1.2em;
    position: relative;
    margin-block: 2em;

    .body {
        font-size: 1em;
        margin: 0px;
    }

    .timestamp {
        font-size: .7em;
        position: absolute;
        left: 30px;
        bottom: -20px;
        color: #000;
    }

    .username {
        font-size: 1em;
        position: absolute;
        left: 0px;
        top: -1.5em;
        color: #818181;
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