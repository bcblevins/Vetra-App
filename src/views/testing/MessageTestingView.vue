<template>
    <div class="container">
      <MessageBubble :message="message1"/>
      <MessageBubble :message="message2"/>
    </div>
  </template>

<script>
import MessageBubble from '../../components/items/MessageBubble.vue';


export default {
  data() {
    return {
      message1: {
        "messageId": 1,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
        "fromUsername": "cakelly4",
        "toUsername": "bblevins96",
        "testId": 1,
        "patientId": 1,
        "time": "2024-07-14T07:10:00.000Z"
      },
      message2: {
        "messageId": 2,
        "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
        "fromUsername": "bblevins96",
        "toUsername": "cakelly4",
        "testId": 1,
        "patientId": 1,
        "time": "2024-07-14T07:10:00.000Z"
      },
      
    }
  },
  components: {
    MessageBubble,
  },
};


</script>

<style scoped>
.container {
  background-color: #F1F7FF;
  width: 90vw;
  height: 90vh;
  padding: 2vw;
  display: flex;
  flex-direction: column;
}
</style>
