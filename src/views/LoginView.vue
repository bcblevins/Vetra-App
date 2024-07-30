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
}
</style>