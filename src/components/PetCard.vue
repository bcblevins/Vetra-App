<template>
    <div class="main">
        <img src="./img/Charlie.jpg" alt="Charlie Image" height="200px" class="portrait">
        <h2>Charlie</h2>


        <div class="icon-container">
            <img src="./icons/message.svg" alt="Messages" class="icon messages">
            <img src="./icons/results.svg" alt="Results" class="icon results">
            <img src="./icons/pill.svg" alt="Medications" class="icon meds">
        </div>



    </div>
</template>

<script setup>

</script>

<style scoped>
@import "https://unpkg.com/open-props";

.main {
    position: relative;
    --card-width: 200px;
    --card-height: 320px;
    --shadow-color: #094567;

    width: var(--card-width);
    height: var(--card-height);

    font-family: var(--font-sans);
    background-color: #F1F7FF;

    border-top-left-radius: calc(var(--card-width) / 2);
    border-top-right-radius: calc(var(--card-width) / 2);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    box-shadow: 0px 0px 10px 0px var(--shadow-color);

    .portrait {
        border-radius: 100%;
        position: relative;
        top: -5px;

    }

    h2 {
        color: #094567;
        text-align: center;
        font-weight: 600;
        position: relative;
        top: 0px;
    }

    .icon {
        position: relative;
        top: 5px;
        height: 50px;
        margin: 10px;

    }

    .icon:hover {
        height: 52px;
    }

    .icon-container {
        display: flex;
        justify-content: space-around;
    }

}
</style>