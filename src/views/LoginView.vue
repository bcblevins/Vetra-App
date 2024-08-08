<template>
    <div>
        <Login class="login"/>
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
.login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #073b4d;
    background-image: url('../assets/backgrounds/collageDS.png');
    background-size: 2000px;
    background-position: center;
}
</style>