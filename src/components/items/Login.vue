<template>
    <div class="main">
        <img src="../../assets/VetRA-Logo.svg" alt="">

        <form action="" @submit.prevent="login" v-show="!loading">
            <input type="text" placeholder="username" class="username" v-model="username" name="username" />
            <input type="password" placeholder="password" class="password" v-model="password" name="password" />
            <input type="submit" value="Login" class="login-btn">
            <span v-show="fail">Incorrect username or password</span>
        </form>

        <div class="loading" v-show="loading">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    </div>
</template>

<script>
import UserService from '@/services/UserService.js';
import PetService from '@/services/PetService';
import LoginService from '@/services/LoginService';

export default {
    data() {
        return {
            username: '',
            password: '',
            fail: false,
            loading: false
        }
    },
    methods: {
        async login() {
            this.loading = true;
            this.fail = false;
            try {
                const loginResult = await LoginService.login(this.username, this.password, true)
                console.log("Login result: " + loginResult);
                if (loginResult) {
                    console.log("Login successful");
                    setTimeout(() => {
                        this.$router.push({ name: 'home' });
                    }, 2000);
                } else {
                    this.fail = true;
                    return;
                }
            } catch (error) {
                console.log("Error: " + error);
                this.fail = true;
            } finally {
                setTimeout(() => {
                    this.loading = false;
                }, 2000);
            }

        }
    },
}
</script>

<style lang="scss" scoped>
.main {
    img {
        width: 400px;
        height: 200px;
        margin: 0 auto;
        display: block;

        filter: drop-shadow(0px 5px 10px #000000);
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
    }

    .loading {
        margin-top: 40px;

        .dot {
            display: inline-block;
            height: 8px;
            width: 8px;
            background-color: #ffffff;
            border-radius: 50%;
            margin: 4px;
            animation: dot-bounce .8s infinite;
            margin-bottom: 80px;
        }

        .dot:nth-child(1) {
            animation-delay: -0.4s;
        }

        .dot:nth-child(2) {
            animation-delay: -0.2s;
        }

        .dot:nth-child(3) {
            animation-delay: 0s;
        }

        .dot:nth-child(4) {
            animation-delay: 0.2s;
        }

        @keyframes dot-bounce {

            0% {
                transform: translateY(0px);
                opacity: 1;
            }

            50% {
                transform: translateY(50px);
                opacity: 1;
            }

            51% {
                opacity: .3;
            }

            100% {
                transform: translateY(0px);
                opacity: .3;
            }

        }
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
        background: linear-gradient(#0c5e8d, #094567 70%);
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
    }

    ;
}</style>