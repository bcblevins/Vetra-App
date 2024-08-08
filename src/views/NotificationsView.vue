<template>
    <div class="notifications">
        <Notifications :full-view="true" />
    </div>
</template>

<script>
    import Notifications from '../components/containers/Notifications.vue'

    export default {
        components: {
            Notifications
        },
    }
</script>
  
<style scoped>
.notifications {
    display: flex;
    justify-content: center;
    align-items: center;

}

</style>