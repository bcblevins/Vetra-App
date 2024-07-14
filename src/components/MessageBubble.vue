<template>
    <div class="message-bubble">
        <span>
            {{ message.body }}
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: {
                "messageId": 1,
                "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
                "fromUsername": "cakelly4",
                "toUsername": "bblevins96",
                "testId": 1,
                "patientId": 1
            }
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
}
</style>