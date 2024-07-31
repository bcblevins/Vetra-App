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
        </div>
    </div>
</template>

<script>
import UserService from '@/services/UserService.js';
import PetService from '@/services/PetService';

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
        login() {

            //Posting the login data to the server
            this.loading = true;
            this.fail = false;
            UserService.login(this.username, this.password)
                .then((response) => {
                    this.$store.commit("SET_TOKEN", response.data.accessToken.token);
                    localStorage.setItem('token', response.data.accessToken.token);
                    // Getting the user data from the server
                    UserService.getUser(this.username, this.$store.state.token)
                        .then((response) => {
                            this.$store.commit('SET_USER', response.data);
                            setTimeout(() => {
                                this.loading = false;
                                this.$router.push({ name: 'home' });
                            }, 1000);
                        })
                        .catch(() => {
                            setTimeout(() => {
                                this.loading = false;
                                this.fail = true;
                            }, 1000);
                        });
                })
                .catch(() => {
                    setTimeout(() => {
                        this.loading = false;
                        this.fail = true;
                    }, 1000);
                });

        }
    },
}
</script>

<style lang="scss" scoped>
.main {

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

    .loading {
        margin-top: 40px;

        .dot {
            display: inline-block;
            height: 5px;
            width: 5px;
            background-color: #ffffff;
            border-radius: 50%;
            margin: 4px;
            animation: dot-bounce .8s infinite;
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

        @keyframes dot-bounce {

            0%,
            20%,
            100% {
                transform: translateY(0);
            }

            50% {
                transform: translateY(-10px);
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
}
</style>