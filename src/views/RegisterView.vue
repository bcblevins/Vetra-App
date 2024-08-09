<template>
    <div class="register-view">
        <div class="register-header">
            <img src="../assets/VetRA-Logo.svg" alt="" class="logo">
            <div class="slogan">
                <h2> Stronger Connections </h2>
                <h2 class="second-slogan"> Healthier Pets </h2>
            </div>
            <img src="../assets/misc/arrow.svg" alt="" class="arrow"

        </div>
        <div class="join-vetra">
            <h1>Join VetRA today</h1>
            <form action="">
                <input type="text" placeholder="username" class="username" name="username">
                <input type="text" placeholder="email" class="email" name="email">
                <input type="password" placeholder="password" class="password" name="password">
                <input type="submit" value="Register" class="register-btn">
            </form>
        </div>
    </div>
</template>

<script>
export default {

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
            height: 30vh;
            margin-left: 8vw;
            filter: drop-shadow(0px 5px 10px rgb(49, 53, 60)) ;
            margin-top: auto;
        }

        .slogan {
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;
            margin-top: 20px;
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
                margin-left: 20vw;
            }
        }

        .arrow {
            width: 10vw;
            justify-self: flex-end;
            align-self: center;
            margin-bottom: 20px;

            margin-top: auto;
            animation: bounce 2s infinite;
        }

        @keyframes bounce {
            0%, 50%, 70%, 100% {
                transform: translateY(0);
            }
            30%, 40% {
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
        justify-content: flex-start;
        align-items: center;
        margin-top: 20px;
        height: 100vh;
        width: 100%;
        background-color: var(--background-blue);
        h1 {
            font-size: 2em;
            font-weight: 400;
            
        }

        form {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-top: 20px;
            width: 40vw;
            height: 60vh;
            border: 1px solid black;
        }
    }
}
</style>