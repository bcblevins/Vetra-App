<template>
    <div class="notifications">
        <Notifications :full-view="true" :clear-event="clearEvent" />
        <button @click="clearEvent = !clearEvent">Clear Notifications</button>
        <LoadingDots dark="true" v-if="loading"/>
    </div>
</template>

<script>
import Notifications from '../components/containers/Notifications.vue'
import LoadingDots from '@/components/items/LoadingDots.vue';

export default {
    data() {
        return {
            clearEvent: false,
            loading: false
        }
    },
    components: {
    Notifications,
    LoadingDots
},
}
</script>
  
<style scoped>
.notifications {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
        background: linear-gradient(#0c5e8d, #094567 70%);
        color: white;
        border: none;
        cursor: pointer;
        padding: 10px;
        padding-inline: 20px;
        border-radius: 5px;
        margin-top: 20px;
    }

    button:hover {
        background: none;
        background-color: #2f7197;
    }
}
</style>