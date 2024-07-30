<template>
    <div class="header">
        <img src="../../assets/icons/message.svg" alt="Notifications">
        <img src="../../assets/VetRA-Logo.svg" alt="Logo" class="logo" @click="goToHome">
        <div>
            <span> {{ $store.state.user.firstName + " " + $store.state.user.lastName }} </span>
            <img src="../../assets/icons/message.svg" alt="User">
        </div>
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
    display: flex;
    justify-content: space-between;
    padding: .5em;

    img {
        height: 100%;
    }
    span {
        color: white;
        font-size: var(--standard-text);
        margin-right: 1em;
    }

    .logo:hover {
        cursor: pointer;
        filter: contrast(0.8) brightness(1.8) drop-shadow(0 0 0.75rem #ffffff);
    }
}
</style>