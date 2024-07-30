<template>
    <div class="main">
        <img src="../../assets/VetRA-Logo.svg" alt="">
        <form action="" @submit.prevent="login">
            <input type="text" placeholder="username" class="username" v-model="username"/>
            <input type="password" placeholder="password" class="password" v-model="password"/>
            <input type="submit" value="Login" class="login-btn">
            <span v-show="fail">Incorrect username or password</span>
        </form>
    </div>
</template>

<script>
import UserService from '@/services/UserService.js';

    export default {
        data() {
            return {
                username: '',
                password: '',
            }
        },
        methods: {
            login() {
                console.log('login');
                UserService.login(this.username, this.password)
                    .then(() => {
                        this.$router.push({ name: 'home' });
                    })
                    .catch(() => {
                        this.fail = true;
                    });
            }
        },
    }
</script>

<style lang="scss" scoped>

.main{
    
    img {
        width: 300px;
        height: 200px;
        margin: 0 auto;
        display: block;
        filter: drop-shadow(0px 5px 5px #072231);
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }

    input {
        margin: 10px;
        padding: 10px;
        margin-block: 5px;
        width: 200px;
        border-radius: 10px;
        border: none;
    }

    .login-btn {
        background: linear-gradient(  #0c5e8d , #094567 70%);
        color: white;
        border: none;
        cursor: pointer;
        box-shadow: 0px 5px 5px -3px #072231;
    }

    .login-btn:hover {
        background: none;
        background-color: #2f7197;
    }

    span {
        color: white;
        font-weight: 500;
        background-color: rgb(240, 81, 81);
        padding: 10px;
        border-radius: 10px;
        margin-top: 10px;
    };
}
</style>