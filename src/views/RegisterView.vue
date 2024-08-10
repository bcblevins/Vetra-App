<template>
    <div class="register-view">
        <div class="register-header">
            <img src="../assets/VetRA-Logo.svg" alt="" class="logo">
            <div class="slogan">
                <h2 class="first-slogan"> Stronger Connections </h2>
                <h2 class="second-slogan"> Healthier Pets </h2>
            </div>
            <img src="../assets/misc/arrow.svg" alt="" class="arrow" @click="scrollToRegister"/>
        </div>
        <div class="join-vetra">
            <form @submit.prevent="register">
                <h1>Join VetRA today</h1>
                <input type="text" placeholder="username" class="username" name="username" v-model="username">
                <input type="text" placeholder="email" class="email" name="email" v-model="email">
                <input type="text" placeholder="First Name" class="first-name" name="firstname" v-model="firstName">
                <input type="text" placeholder="Last Name" class="last-name" name="lastname" v-model="lastName">
                <input type="password" placeholder="password" class="password" name="password" v-model="password">
                <input type="password" placeholder="confirm password" class="password" name="confirm-password"
                    v-model="confirmPassword">
                <p v-if="!passwordMatch" class="match-error">Passwords do not match</p>
                <input type="submit" value="Register" class="register-btn">
            </form>
            <p class="login-link" ref="loginLink">
                Already have an account? <router-link class="click-here" :to=" {name: 'login'} ">click here</router-link> to login
            </p>
        </div>
    </div>
</template>

<script>
import UserService from '@/services/UserService';

export default {

    data() {
        return {
            username: '',
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: '',
            passwordMatch: true
        }
    },
    methods: {
        register() {
            if (this.password === this.confirmPassword) {
                let user = {
                    username: this.username,
                    email: this.email,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    password: this.password
                }
                UserService.register(user)
                    .then(() => {
                        this.$router.push({ name: 'login' });
                    })
                    .catch((error) => {
                        console.log("Error: " + error);
                    });
            } else {
                this.passwordMatch = false;
            }
        },
        scrollToRegister() {
            const lastElement = this.$refs.loginLink
            lastElement.scrollIntoView({ behavior: 'smooth' });
        }
    }

}
</script>

<style lang="scss" scoped>
.register-view {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: auto;

    .register-header {
        background-image: url('../assets/backgrounds/big-dog.jpg');
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: start;

        .logo {
            width: 30vw;
            margin-left: 8vw;
            filter: drop-shadow(0px 5px 10px rgb(49, 53, 60));
            margin-top: auto;
        }

        .slogan {
            display: flex;
            flex-direction: column;
            margin-top: 20px;
            margin-left: 8vw;
            width: 30vw;

            h2 {
                font-size: 2.5em;
                margin: 0px;
                margin-top: 2.5vh;
                color: white;
                filter: drop-shadow(0px 5px 10px rgb(49, 53, 60));
                font-weight: 400;
                text-shadow: 3px 2px 2px rgb(49, 53, 60);
            }

            .second-slogan {
                margin-top: 20px;
                align-self: flex-end;
            }
        }

        .arrow {
            width: 10vw;
            justify-self: flex-end;
            align-self: center;
            margin-bottom: 20px;

            margin-top: auto;
            animation: bounce 2s infinite;
            transition: .4s ease-in-out;
        }

        .arrow:hover {
            cursor: pointer;
            animation: none;
            padding-bottom: 40px;
            filter: drop-shadow(0px 5px 2px rgb(155, 162, 174));
        }

        @keyframes bounce {

            0%,
            50%,
            75%,
            100% {
                transform: translateY(0);
                filter: drop-shadow(0px 0px 0px rgba(49, 53, 60, 0)) opacity(.5);
            }

            30%,
            40% {
                transform: translateY(-15px);
                filter: drop-shadow(0px 5px 2px rgb(155, 162, 174));
            }

            60% {
                transform: translateY(-5px);
            }
        }



    }

    .join-vetra {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100%;
        background-image: url('../assets/backgrounds/collageDS.png');
        background-size: 2000px;
        background-position: center;


        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 20px;
            width: 40vw;
            height: 70vh;
            background-color: var(--off-white);

            h1 {
                font-size: 3em;
                font-weight: 400;
            }

            .username,
            .first-name,
            .last-name,
            .password,
            .email {
                width: 80%;
                height: 8%;
                margin-top: 10px;
                padding: 10px;
                border: none;
                border-radius: 5px;
                font-size: 1em;
                box-shadow: 0px 0px 4px -2px rgb(140, 152, 174);
            }

            .match-error {
                color: red;
                font-size: 1em;
                margin-top: 10px;
            }

            .register-btn {
                background: linear-gradient(#0c5e8d, #094567 70%);
                color: white;
                border: none;
                cursor: pointer;
                padding: 10px;
                padding-inline: 20px;
                border-radius: 5px;
                font-size: 1.5em;
                margin-top: 20px;
                margin-bottom: 20px
            }

            .register-btn:hover {
                background: none;
                background-color: #2f7197;
            }
        }

        .login-link {
            color: white;

            .click-here {
                color: #53c0ff;
                text-decoration: none;
                cursor: pointer;
            }
        }
    }


}

@media screen and (max-width: 1024px) {
    .register-view {

        .register-header {
            background-position: 70%;
            justify-content: flex-end;
            align-items: center;

            .logo {
                margin-left: 0px;
                margin-top: 5px;
                width: 80vw;
                animation: bounce 2s infinite;
            }

            .slogan {
                display: none;
            }

            .arrow {
                margin-top: 20px;
            }
        }

        .join-vetra {
            
            form {
                width: 90vw;
            }
        }
    }
}
</style>