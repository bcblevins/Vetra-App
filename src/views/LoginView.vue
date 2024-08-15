<template>
    <div class="login-view">
        <Login class="login" />
        <router-link :to=" {name: 'register'} " class="register">Register</router-link>
    </div>
</template>

<script>
import Login from '@/components/items/Login.vue';
export default {
    components: {
        Login
    },
    mounted() {
        document.title = 'Welcome to VetRA';
    },
    created() {
        this.$store.commit('SET_USER', null);
    }
}
</script>

<style lang="scss" scoped>
.login-view {
    background-image: url('../assets/backgrounds/collageDS.png');
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .login {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .register {
        color: var(--background-blue);
        font-size: 1em;
        margin-top: 10px;
    }
}
</style>