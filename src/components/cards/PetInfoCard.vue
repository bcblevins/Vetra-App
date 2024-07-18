<template>
    <div class="main">
        <h1> {{ pet.name }} </h1>
        <div class="portrait">
            <img :src="imgSrc" :alt="pet.name">
        </div>
        <div class="info">
            <p>Birthday: {{ formattedBirthday }} </p>
            <p> {{ petAge }} years old</p>
            <p> {{ pet.breed }} </p>
        </div>

    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    props: ['pet'],
    computed: {
        imgSrc() {
            return './src/assets/img/' + this.pet.id + '.jpg'
        },
        petAge() {
            return new Date().getFullYear() - new Date(this.pet.birthday).getFullYear();
        },
        formattedBirthday() {
            const date = new Date(this.pet.birthday);
            return date.toLocaleDateString('en-US', {
                month: 'numeric',
                day: 'numeric',
                year: 'numeric',
            });
        },
    },

}
</script>

<style lang="scss" scoped>
.main * {
    color: #094567;
}

.main {
    display: grid;
    grid-template-columns: 4fr 3fr;
    grid-template-rows: 1fr 4fr;
    grid-template-areas:
        'name .'
        'portrait info';


    h1 {
        margin: 10px;
        grid-area: name;
        font-size: 2em;
        font-family: 'Trebuchet MS';
        font-weight: 700;
        border-bottom: 2px solid #094567;
    }

    .portrait {
        grid-area: portrait;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    .portrait img {
        width: 100%;
        max-height: 100%;
        object-fit: cover;
    }

    .info {
        grid-area: info;
        padding-left: 10px;
        align-self: end;

        p {
            font-weight: 700;
        }
    }

}
</style>