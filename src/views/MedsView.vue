<template>
    <div class="meds-view">
        <main>
            <h1>Prescriptions</h1>
            <div class="rx-list">
                <RxItem v-for="med in meds" :key="med.id" :med="med" />
            </div>

        </main>
    </div>
</template>

<script>
import RxList from '@/components/containers/RxList.vue';
import RxService from '@/services/RxService';
import RxItem from '@/components/items/RxItem.vue';
export default {
    data() {
        return {
            meds: [],
        }
    },
    components: {
        RxList,
        RxItem
    },
    created() {
        RxService.getMeds(this.$route.params.id, this.$store.state.token).then(response => {
            this.meds = response.data;
        });
    },
}
</script>

<style lang="scss" scoped>
.meds-view {
    display: flex;
    justify-content: center;


    main {
        width: 60vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        margin-top: 80px;

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

        .rx-list {
            border: none;
            overflow: scroll;
            font-size: var(--standard-text);

        }
    }
}
</style>