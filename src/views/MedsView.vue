<template>
    <div class="meds-view">
        <main>
            <h1>Prescriptions</h1>
            <RxList :meds="meds" class="rx-list" />
        </main>
    </div>
</template>

<script>
import RxList from '@/components/containers/RxList.vue';
import RxService from '@/services/RxService';
export default {
    data() {
        return {
            meds: [],
        }
    },
    components: {
        RxList,
    },
    created() {
        this.meds = RxService.getMeds(this.$route.params.petId, this.$store.state.token)
    },
}
</script>

<style lang="scss" scoped>
.meds-view {
    display: flex;
    justify-content: center;
    

    main {
        width: 60vw;

        img {
            height: var(--header-1);
        }

        h1 {
            padding: 10px;
            display: inline-block;
            font-size: var(--header-1);
            text-shadow: 0px 2px 2px white;
            box-shadow: 0px 3px 5px -3px var(--dark-blue);
            border-radius: 20px;
            background-color: var(--off-white);
            border-inline: 3px solid var(--dark-blue);
        }
    }
}
</style>