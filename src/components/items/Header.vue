<template>
    <div class="header">
        <img src="../../assets/icons/message.svg" alt="Notifications" class="notifications">
        <img src="../../assets/VetRA-Logo.svg" alt="Logo" class="logo" @click="goToHome">

        <span> {{ $store.state.user.firstName + " " + $store.state.user.lastName }} </span>
        <img src="../../assets/icons/message.svg" alt="User" class="user">

    </div>
</template>

<script>
export default {
    methods: {
        goToHome() {
            this.$router.push({ name: 'home' });
        }
    }
}
</script>

<style lang="scss" scoped>
.header {
    background-color: #073b4d;
    height: 40px;
    padding: .5em;

    img {
        height: 100%;
        display: inline-block;
        height: 40px;
    }

    .notifications {
        position: absolute;
        left: 10px;
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