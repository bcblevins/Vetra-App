<template>
    <div class="header">
        <Notifications v-if="showNotifications" @click="showNotifications = !showNotifications"/>
        <img src="../../assets/icons/notification.svg" alt="Notifications" class="notifications" @click="showNotifications = !showNotifications">
        <img src="../../assets/VetRA-Logo.svg" alt="Logo" class="logo" @click="goToHome">

        <span> {{ $store.state.user.firstName + " " + $store.state.user.lastName }} </span>
        <img src="../../assets/icons/user.svg" alt="User" class="user" @click="goToUser">

    </div>
</template>

<script>
import Notifications from '../containers/Notifications.vue';

export default {
    data() {
        return {
            showNotifications: false
        }
    },
    methods: {
        goToHome() {
            this.$router.push({ name: 'home' });
        },
        goToUser() {
            this.$router.push({ name: 'user', params: { id: this.$store.state.user.username } });
        }
    },
    components: {
        Notifications,
    },
}
</script>

<style lang="scss" scoped>
.header {
    background-color: #073b4d;
    height: var(--header-height);
    padding: var(--header-padding);

    img {
        height: 100%;
        display: inline-block;
        height: 40px;
    }

    .notifications {
        position: absolute;
        left: 10px;
    }

    .notifications:hover {
        cursor: pointer;
        filter: contrast(0.8) brightness(1.8) drop-shadow(0 0 0.75rem #ffffff);
    }

    .logo {
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        text-align: center;
    }

    .user {
        position: absolute;
        right: 10px;
    }

    .user:hover {
        cursor: pointer;
        filter: contrast(0.8) brightness(1.8) drop-shadow(0 0 0.75rem #ffffff);
    }

    span {
        color: white;
        font-size: var(--standard-text);
        display: inline-block;
        position: absolute;
        right: 60px;
    }

    .div {
        height: 100%;
    }

    .logo:hover {
        cursor: pointer;
        filter: contrast(0.8) brightness(1.8) drop-shadow(0 0 0.75rem #ffffff);
    }
}
</style>