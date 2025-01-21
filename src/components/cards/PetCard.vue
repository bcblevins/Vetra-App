<template>
    <div class="main">
        <div class="portrait" @click="$router.push({ name: 'profile', params: { id: pet.patient_id } })">
            <img :src="pet.image_source" :alt="pet.name" height="250px">
            <span>How's {{ pet.name }} doing?</span>
        </div>

        <h2>{{ pet.name }}</h2>

        <div class="icon-container">
            <img src="../../assets/icons/message.svg" alt="Messages" class="icon messages"
                @click="$router.push({ name: 'profile', params: { id: pet.patient_id } })">
            <img src="../../assets/icons/results.svg" alt="Results" class="icon results"
                @click="openTest(pet.patient_id)">
            <img src="../../assets/icons/pill.svg" alt="Medications" class="icon meds"
                @click="$router.push({ name: 'rx', params: { id: pet.patient_id } })">
        </div>

    </div>
</template>

<script>
import { imgSource } from '@/services/supabase/petServiceSP';
import { getTests } from '@/services/supabase/testServiceSP';
export default {
    props: ['pet'],
    computed: {
        imgSrc() {
            return imgSource(this.pet)
        },

    },
    methods: {
        openTest(id) {
            let tests
            getTests(this.pet.patient_id).then(data => {
                tests = data;
                this.$router.push({ name: 'tests', params: { id: id, testId: tests[0].test_id } })
            }).catch(error => {
                console.log(error);
            });

        },
    },

};
</script>

<style scoped>
.main {
    position: relative;
    --card-width: 250px;
    --card-height: 390px;
    --shadow-color: #094567;

    width: var(--card-width);
    height: var(--card-height);

    font-family: 'Trebuchet MS';
    background-color: #F1F7FF;

    border-top-left-radius: calc(var(--card-width) / 2);
    border-top-right-radius: calc(var(--card-width) / 2);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    margin-bottom: 30px;
    box-shadow: 0px 0px 10px 0px var(--shadow-color);

    .portrait {
        border-radius: 100%;
        position: relative;
        top: -5px;

        img {
            border-radius: 100%;
        }

        span {
            text-align: center;
            position: absolute;
            font-weight: 700;
            font-size: 1.5em;
            width: 100%;
            height: 1.5em;
            top: 30%;
            left: 0px;
            right: 0px;
            bottom: 0px;
            color: color-mix(in srgb, Semi-transparent 100%);
            filter: brightness(1.5);
            opacity: 0;

        }

    }

    .portrait:hover {
        cursor: pointer;

        img {
            filter: contrast(0.5) brightness(1.5) saturate(0.7);
            box-shadow: 0px 0px 5px 0px var(--shadow-color);
            transform: scale(1.01);
        }

        span {
            opacity: 1;
        }
    }

    h2 {
        background-color: var(--dark-blue);
        color: white;
        text-align: center;
        font-weight: 700;
        position: relative;
        top: 0px;
        text-shadow: 0px 1px 0px #011927;
        margin-bottom: 0px;
        margin-top: 10px;
        font-size: 40px;

    }

    .icon {
        position: relative;
        top: 5px;
        height: 50px;
        margin: 10px;

    }

    .icon:hover {
        transform: scale(1.1);
        cursor: pointer;
        filter: contrast(1) brightness(1.4);

    }

    .icon-container {
        display: flex;
        justify-content: space-around;
    }

}

@media screen and (max-width: 600px) {
    .main {
        height: auto;
        width: auto;

        .portrait {

            img {
                height: 100px;
                width: 100px;
            
            }
            span {
                display: none;
            }
        }

        h2 {
            padding-block: 10px;

        }
        .icon-container {
            display:none;
        }
    }
    
}
</style>