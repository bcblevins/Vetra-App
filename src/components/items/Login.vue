<template>
    <div class="main">
        <img src="../../assets/VetRA-Logo-Background.svg" alt="">
        <form action="">
            <input type="text" placeholder="username" class="username"/>
            <input type="text" placeholder="password" class="password"/>
            <input type="submit" value="Login" class="login-btn">

        </form>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

.main{
    
    img {
        width: 100px;
        height: 100px;
        margin: 0 auto;
        display: block;
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
        border-radius: 5px;
        border: 1px solid #094567;
    }

    .login-btn {
        background-color: #094567;
        color: white;
        border: none;
        cursor: pointer;
    }

    .login-btn:hover {
        background-color: #0c5e8d;
    }
}
</style>