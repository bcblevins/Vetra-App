<template>
    <div class="header">
        <img src="../../assets/icons/message.svg" alt="Notifications">
        <img src="../../assets/VetRA-Logo.svg" alt="Logo" class="logo" @click="goToHome">
        <img src="../../assets/icons/message.svg" alt="User">
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
    background-color: #094567;
    height: 40px;
    display: flex;
    justify-content: space-between;
    padding: .5em;

    img {
        height: 100%;
    }

    .logo:hover {
        cursor: pointer;
        filter: contrast(0.8) brightness(1.8) drop-shadow(0 0 0.75rem #ffffff);
    }
}
</style>