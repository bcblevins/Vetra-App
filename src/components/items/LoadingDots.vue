<template>
    <div :class="{ 'loading': true, 'dark': dark }">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
    </div>
</template>

<script>
export default {   
    props: ["dark"]
}
</script>

<style lang="scss" scoped>
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

    .loading.dark {
        .dot {
            background: linear-gradient(in srgb, var(--dark-blue), rgb(0, 0, 0));
            box-shadow: 0px 0px 5px white;
        }
    }

</style>